import mongoose from 'mongoose'

const {model, Schema} = mongoose

const Role = new Schema({
    value: {type: String, unique: true, default: 'USER'}
})

export default model('Role', Role)