import jwt from "jsonwebtoken"
import { userModel } from "../models/usermodels.js";

const refreshToken = async(req,res)=>{

    const { refreshToken } = req.body;

    if(!refreshToken){
        return res.status(400).json({ msg: "Refresh token is required" });

    }

    try {
        const decoded = jwt.verify(refreshToken,process.env.JWT_REFRESH_SECRET);

        const user = await userModel.findById(decoded.id);

        if (!user || user.refreshToken !== token) {
          return res.status(403).json({ msg: "Invalid refresh token" });
        }
        
        // Generate a new refresh token
        const accessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
          );


        // Generate a new refresh token
        const newRefreshToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: process.env.JWT_REFRESH_EXPIRATION }
        );
  
      // Update the refresh token in the database
      user.refreshToken = newRefreshToken;
      await user.save();

       res.status(200).json({ 
        accessToken,
        refreshToken:refreshToken,
        });
    } catch (error) {
        res.status(403).json({ msg: "Invalid or expired refresh token" });
    }
}

export {refreshToken}