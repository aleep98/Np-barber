import { randomBytes, scrypt, timingSafeEqual } from "crypto";
import mongoose from "mongoose";

function deriveKey(password: string, salt: string): Promise<Buffer> {
    return new Promise((resolve, reject) => {
        scrypt(password, salt, 64, (error, key) => {
            if (error) reject(error);
            else resolve(key as Buffer);
        });
    });
}

const userSchema = new mongoose.Schema ({
    name: { type: String, required: true, trim: true },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: { type: String, required: true, select: false },
})

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    const salt = randomBytes(16).toString("hex");
    const key = await deriveKey(this.password, salt);
    this.password = `${salt}:${key.toString("hex")}`;
});

export async function verifyPassword(candidatePassword: string, storedPassword: string): Promise<boolean> {
    const [salt, storedKeyHex] = storedPassword.split(":");
    if (!salt || !storedKeyHex) return false;

    const storedKey = Buffer.from(storedKeyHex, "hex");
    const candidateKey = await deriveKey(candidatePassword, salt);
    return storedKey.length === candidateKey.length && timingSafeEqual(storedKey, candidateKey);
}

const User = mongoose.model("User", userSchema);
export default User;