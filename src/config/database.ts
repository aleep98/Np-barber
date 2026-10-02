import mongoose from "mongoose";

async function connectDatabase() {
    const connectionString = process.env.MONGO_CONNECTION;

    if (!connectionString) {
        throw new Error("A variável MONGO_CONNECTION não foi definida.");
    }

    try {
        await mongoose.connect(connectionString);
        console.log("Conectado ao banco de dados");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados", error);
        throw error;
    }
}

export default connectDatabase;