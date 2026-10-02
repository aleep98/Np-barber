import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema ({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    barberId: { type: mongoose.Schema.Types.ObjectId, ref: "Barber", required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    startTime: { type: Date, required: true },
    status: { type: String, enum: ["pending", "confirmed", "completed", "canceled"], default: "pending" },
})

const Appointment = mongoose.model("Appointment", appointmentSchema);
export default Appointment;