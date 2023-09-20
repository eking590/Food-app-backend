import express from 'express'; 
import Category from '../../models/Category.js';



//create a category 

export const createCategory = async (req, res, next) => {
    console.log("new category", req.user)
    const user_id = req.user._id 
    const category = new Category({
        restaurant_id: user_id,
        description: req.body.description, 
        current_username: req.user.email, 
        name_of_restuarant: req.user.restuarantName

    }) 
    try {
        const categoryCreated = await category.save()
        res.status(201).json(categoryCreated)
        
    } catch (error) {
        res.status(400).json(error)
        
    }
}



//get all categories 

export const getallCategory = async (req, res, next) => {
    
    const allCategory = await Category.find({ user_id: req.user_id }); 
    if(!allCategory) {
        res.status(404).json({ msg: "Error Found!"})
    } 
    res.status(200).json(allCategory); 
}


//get one category

export const getoneCategory = async (req, res) => {
    const id = req.body.id  
   const getCategory = await Category.findById({_id: id}); 

   if(!getCategory){ 
    return res.status(404).json( {msg: 'Category not found!!'}); 
   } 
    
    return res.status(200).json(getCategory) 

} 

//delete one category 

export const deleteoneCategory = async (req, res) => {
    const id  = req.body.id  
    const deleteCategory = await Category.findByIdAndDelete(id); 
    if(!deleteCategory) {
        res.status(404).json( {msg: `cannot find the category with ID ${id}`})
    }
    return res.status(200).json({'deleted Category': deleteCategory}); 
} 


//update a category by id 
export const updateoneCategory = async (req, res) => {
    const id = req.body.id; 
    const getCategory = await Category.findById({_id: id}); 
    if(!getCategory) {
        return res.status(404).json( {msg: `category with ID ${id} is not FOUND!!!`}); 
    }

    const UpdatedCategory = await Category.findByIdAndUpdate(getCategory, req.body, {new: true})    
    return res.status(200).json(UpdatedCategory); 


}
