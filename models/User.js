import mongoose from 'mongoose'

const {model, Schema} = mongoose

const User = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    roles: [{type: String, ref: 'Role'}]
})

export default model('User', User)