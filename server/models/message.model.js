import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export const Message = mongoose.model('Message',messageSchema)