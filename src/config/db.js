import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://murodiljonabdumutalovtg1_db_user:vu5rzmEfiNtKsu09@cluster0.13z7s2v.mongodb.net/moc-doc",
    );

    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
}
