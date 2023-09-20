import express from 'express'; 
const router = express.Router(); 
import { Signup } from '../controllers/Admin/signup.js';
import { Login } from '../controllers/Admin/login.js';
import { ValidateToken } from '../middleware/ValidateToken.js';
import { CurrentUser } from '../controllers/Admin/user.js';




//create Admin User 
router.post("/register", Signup); 

//login Admin user 
router.post("/login", Login); 

//get current user info 
router.get("/currentUser", ValidateToken, CurrentUser);  


export { router as userRoute }; 