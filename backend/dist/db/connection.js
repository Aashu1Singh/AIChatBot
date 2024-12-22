import mongoose from "mongoose";
async function connectToDb() {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI);
        console.log("Data base connected succesfully");
    }
    catch (error) {
        console.log("Error in connecting database " + error);
        throw new error();
    }
}
async function disconnectFromDb() {
    try {
        await mongoose.disconnect();
    }
    catch (error) {
        console.log("Error while disconnecting Database " + error);
    }
}
export { connectToDb, disconnectFromDb };
//# sourceMappingURL=connection.js.map