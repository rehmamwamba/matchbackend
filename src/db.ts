// src/db.ts
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/mydatabase?useNewUrlParser=true&useUnifiedTopology=true';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connexion à MongoDB réussie');
  } catch (error) {
    console.error('Erreur lors de la connexion à MongoDB :', error);
  }
};

export default connectDB;