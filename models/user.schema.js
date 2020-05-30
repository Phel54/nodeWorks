import {Schema} from "mongoose";
import sha256 from "sha256";

const userSchema =  new Schema({
    hashedpassword: {type: String, required:true},
    email: {type:String, required:true},
});

/**
 * @param {*} password
 */

 userSchema.methods.comparePassword = function comparePassword(password){
     return this.hashedpassword === sha256(password);
 }

 export default userSchema; 