import { generateToken } from "../utils/token-generator.js";
import 'dotenv/config';

const default_user ={
    id : 1,
    email: process.env.MAIL,
    password: process.env.PASS,
    
}

export async function login (req,res){

    
    const {email,password} = req.body;

    const user ={id: 1 ,email};

    if (email === default_user.email && password ===default_user.password){

        const token = generateToken(user);
        res.json({token});
    } else {
        res.sendStatus(401);
    }

};