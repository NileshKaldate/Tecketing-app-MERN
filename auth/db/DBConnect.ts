import mongoose from "mongoose";
import { DatabaseConnectionError } from "../errors/database-connection-error";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://nileshkaldate:nilesh12345@cluster1.ygeq6if.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log(
      `mongoDb connect !! DB HOST : `,
      connectionInstance.connection.host
    );
  } catch (err) {
    throw new DatabaseConnectionError();
  }
};

export default connectDB;
