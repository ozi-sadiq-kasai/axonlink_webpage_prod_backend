import mongoose from 'mongoose';

const WaitingSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    State:String,
})

const Waiting = mongoose.model('WaitingResponse', WaitingSchema);
export default Waiting;