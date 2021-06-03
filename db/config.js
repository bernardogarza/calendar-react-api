import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB ONLINE');
  } catch (error) {
    console.log(error);
    throw new Error('Problems connecting to DB');
  }
};
