const express = require("express");
const router = express.Router();
const {register,login, getUserDetail,getAllUsersDetail,updateProfile,deleteProfile} = require("../controllers/userController");


router.post('/register',register);
router.post('/login',login);

// router.post('/forgotpassword',forgotPasword);
// router.post('/resetpassword',resetPasword);

router.get('/getuserdetail/:id',getUserDetail);
router.get('/getallusersdetail',getAllUsersDetail);

router.post('/updateprofile/:id',updateProfile);
router.delete('/deleteprofile/:id',deleteProfile);


module.exports = router;
