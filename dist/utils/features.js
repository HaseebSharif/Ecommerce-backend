import mongoose from 'mongoose';
export const dbConnection = () => {
    const mongoURI = 'mongodb://127.0.0.1:27017/Ecommerce_24';
    const options = {
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
