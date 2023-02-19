const User = require("../models/userModel");

const register = async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const contry = req.body.contry;
    const gender = req.body.gender;
    const check = req.body.check;

    const userData = {
        email:email,
        password:password,
        fname:fname,
        lname:lname,
        contry:contry,
        gender:gender,
        check:check
    }
    try{       
         //find the user from the database
         const user = await User.findOne({email});

         if(user){
            return res.status(200).json({
                reason:'User already registered',
                statuscode:200,
                status:'FAIL',
                dataObject:{
                    userdetails:user
                }
            })
         }else{
            const data = new User(userData);
            const saveData = data.save();
            return res.status(200).json({
                reason:'User Registration Successfully',
                statuscode:200,
                status:'SUCCESS',
                dataObject:{
                    userdetails:userData
                }
            });
         }
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}


const login = async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const userData = {
        email: email,
        password: password
    }

    try{
        const user = await User.findOne({ email ,password });
        
        if(!user){
            return res.status(200).json({
                reason:'User not found in database',
                statuscode:200,
                status:'FAIL',
                dataObject:{
                    userdetails:userData
                }
            })
        }else{
            return res.status(200).json({
                reason:'Successfully login!!',
                statuscode:200,
                status:'SUCCESS',
                dataObject:{
                    userdetails:user
                }
            })
        }
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

/*
const forgotPasword = async(req, res) => {
    const {email} = req.body;

    try{
        const user = User.findOne({ email});

        if(!user){
            return res.status({
                reason:'User not found',
                statuscode:200,
                status:'FAIL',
                dataObject:{
                    userdetails:user
                }
            });
        }

        const token = crypto.randomBytes(20).toString('hex');

        user.resetPaswordToken = token;
        user.resetPaswordExpires = Date.now()+3600000;  // 1hour

        await user.save();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'your.email@gmail.com',
              pass: 'your-password'
            }
          });
      
          const mailOptions = {
            from: 'naruka.mohit88@gmail.com',
            to: email,
            subject: 'Password reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account. 
              Please click on the following link, or paste this into your browser to complete the process: 
              http://localhost:3000/reset/${token} 
              If you did not request this, please ignore this email and your password will remain unchanged.`
          };
      
          await transporter.sendMail(mailOptions);
      
          res.send('Reset password email sent');

    }catch(err){
        res.status(500).json(err)
    }
}

const resetPasword = async(req, res) => {
    
}

*/

const getUserDetail = async(req, res) => {

    try{
        const user =await User.findById(req.params.id);
    
        if (!user){ return res.status(404).send('User not found')};
     
       

        return res.status(200).json({
            reason:'User found successfully!!',
            statuscode:200,
            status:'SUCCESS',
            dataObject:{
                userdetails:user
            }
        })
    }catch(err){
        res.status(400).json(err.message);
    } 
}


const getAllUsersDetail =async(req, res) => {
        try{
            const user =await User.find({});

            return res.status(200).json({
                reason:'All Users found successfully!!',
                statuscode:200,
                status:'SUCCESS',
                dataObject:{
                    userdetails:user
                }
            })
        }catch(err){
            res.status(400).json(err.message);
        }
}



const updateProfile = async(req,res)=>{
    
    const fname = req.body.fname;
    const lname = req.body.lname;
    const contry = req.body.contry;
    const gender = req.body.gender;

    const userData = {
        fname:fname,
        lname:lname,
        contry:contry,
        gender:gender,
    }

    try{
        const updateUser =await User.findOneAndUpdate(userData);
        
        if(!updateUser){
            return res.status(404).json({
                reason: 'User not found',
                statuscode:404,
                status:'FAILURE',
            });
        }

        return res.status(200).json({
            reason: 'User updated successfully!!',
            statuscode:200,
            status:'SUCCESS',
            dataObject:{
                userdetails:userData
            }
        });

    }catch(err){
        res.status(500).json({err});
    }

}

const deleteProfile = async(req,res)=>{
    const email = req.body.email;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const contry = req.body.contry;
    const gender = req.body.gender;

    const userData = {
        email:email,
        fname:fname,
        lname:lname,
        contry:contry,
        gender:gender,
    }

    try{
        const DeletedUser = await User.findOneAndDelete(userData._id);

        if(!DeletedUser){
            return res.status(404).json({
                reason: 'User not found',
                statuscode:404,
                status:'FAILURE',
            })
        }

        return res.status(404).json({
            reason: 'User Deleted Successfully',
            statuscode:200,
            status:'SUCCESSFUL',
        })

    }catch(err){
        res.status(500).json(err.message);
    }
}



module.exports = {
    register,
    login,
    // forgotPasword,
    // resetPasword,
    getUserDetail,
    getAllUsersDetail,
    updateProfile,
    deleteProfile
}