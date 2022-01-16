import mongoose, { ConnectOptions } from "mongoose";

async function connect() {
  const connectDb = await mongoose.connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  } as ConnectOptions);

  return connectDb;
}

async function disconnect() {
  if (process.env.NODE_ENV === "production") {
    await mongoose.disconnect();
  } else {
    console.log("not disconnected");
  }
}

const db = { connect, disconnect };
export default db;
