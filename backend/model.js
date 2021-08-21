import mongoose from 'mongoose'

const userfields = {
    name: {
        type: String,
        default: null,
      },
    email : {
        type:String,
        default:null,
        
    }
}



const UserSchema = new mongoose.Schema(userfields);
const UserModel = mongoose.model("user", UserSchema);

 export default UserModel;