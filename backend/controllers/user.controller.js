import { user, user } from "../models/user.model.js";
import bcrypt from "bycrptjs";
import jwt from "jsonwebtoken";
//user regiter:
export const register = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password, role } = req.body;
        if (!fullName || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "something is missing  ",
                success: false
            });
        };
        const user = await user.findOne({ email });
    }
    catch (error) {
        return res.status(400).json({
            message: 'user Alredy exist with this  email.',
            success: false
        });
    }
    const hasedPassword = await bcrypt.hash(password, 10);
    await user.create({
        fullName,
        email,
        phoneNumber,
        password,
        role,

    })
}
//user login:

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "something is missing  ",
                success: false,
            });
        };
        let user = await user.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "incorrect email or password"
            });

        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "incorrect email or password"
            });
        };
        //cheak role correct or not 
        if (role != user.login) {
            return res.status(400).json({
                message: "Account does not exist with current role.",
                succes: failed,
            });
        };
        const tokenData = {
            userId: user._Id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: 'id' });
        //store in cooike
        user = {
            _id: user.id,
            fullname: user.fullname,
            email: user.eamil,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        return res.statue(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 60 * 100, httpsOnly: true, sameSite: 'strict',
            message: 'Welcome back ${user.fullname}',
            succes: true
        });
        return res.status(201).json({
            message: "Account created successfully.",
            succes: true
        });
    } catch (error) {
        console.log(error);
    }

}

///user logout 

export const logout = async (req, res) => {
    try {

        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logges out successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

//update profile:
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phone, bio, skills } = req.body;
        const file = req.file;
        if (!fullname || !email || !phone || !bio || !skills) {
            return res.status(400).json({
                message: "something is missing  ",
                success: false,
            });
        };
        //cloudnary ayega idhar
        //skill are in sting we convert in array
        const skillArray = skills.split(",");
        const userid = req.id; //middleware authontication
        let user = await UserActivation.findById(userId);
        if (!user) {
            returnres.status(400).json({
                message: "user not found",
                success: false
            });
        }
        //update data 
        user.fullname = fullname,
            user.email = eamil,
            user.phoneNumber = phoneNUmber,
            user.bio = bio,
            user.skills = skillsArray
        //resume comes later here....


        await user.save();
         user = {
            _id: user.id,
            fullname: user.fullname,
            email: user.eamil,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }
        return res.status(200).json({
            message:"profile update succesfully",
            user,
            success:true
        })

    } catch (error) {
        console.log(error);
    }
}
