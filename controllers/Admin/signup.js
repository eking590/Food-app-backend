import express from "express"; 
import User from "../../models/User.js"; 

import { hashPassword } from "../../utils/Index.js"

import bcrypt from "bcrypt"; 

export const Signup = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, restuarantName } = req.body; 

    const apiKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
    const password = await hashPassword(req.body.password); 
    const user = new User({ firstName, lastName, email, phoneNumber, restuarantName, password })
    try {
        //check if user with email already exists 
        const userExists = await User.findOne( { email }) ; 
        if (userExists) {
            console.log(userExists)
            return res.status(201).send({ msg: "User Already exist" })

        }
        //save user to database 
        await user.save(); 
         //send welcome email 
        //welcomeEmail(user.email, user.firstName);
        const data = user 
        res.status(201).send({
            data: data, 
            msg: "Signup successful"
        }); 
    } catch (error) {
        console.log("there was an error", error); 
        res.status(400).send(error); 
    }
       

}