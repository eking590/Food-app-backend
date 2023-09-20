import mongoose, { Schema, Document, Model } from 'mongoose'; 

//Create Schema 

const CategorySchema = new Schema({
    restaurant_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref:"User",}, 
    description: {type: String}, 
    current_username:{type: String, required: false, ref: "User"}, 
    name_of_restuarant: {type: String, required: false, ref: "User"},

    timestamps:{
        createdAt: {
            type: Date, 
            default: Date.now
        }, 
        updatedAt: {
            type: Date, 
            default: Date.now 
        }
    }
}); 

//create Model 
const Category = mongoose.model('Category', CategorySchema); 
export default Category; 

