import express from 'express'; 
const router = express.Router(); 

import { ValidateToken } from '../middleware/ValidateToken.js';
import { createCategory, deleteoneCategory, getallCategory, getoneCategory, updateoneCategory } from '../controllers/category/index.js';





//create category 
router.post("/create-category", ValidateToken, createCategory); 
router.get("/get-one-category", ValidateToken, getoneCategory);
router.get("/get-all-category",ValidateToken, getallCategory); 
router.put("/update-category",ValidateToken, updateoneCategory); 
router.delete("/delete-category", ValidateToken, deleteoneCategory); 



export { router as categoryRoute }; 