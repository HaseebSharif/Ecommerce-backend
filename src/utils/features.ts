import mongoose, { ConnectOptions } from 'mongoose';

export const dbConnection = (): void => {
  const mongoURI = 'mongodb://127.0.0.1:27017/Ecommerce_Backend';

  const options: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(mongoURI, options)
    .then(() => {
      console.log('MongoDB  connected successfully');
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error);
    });
};
