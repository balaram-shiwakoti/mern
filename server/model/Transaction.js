import mongoose from "mongoose";


const TransactionSchema= new mongoose.Schema({
    paymentMethod:String,
    description:String,
    amount:Number
})


const TransactionModel=mongoose.model('Payment',TransactionSchema)
export default TransactionModel