import express from 'express';
import connectDB from './src/db/db'; 
import authRoutes from './src/routes/authRoutes';
import roleRoutes from './src/routes/roleRoutes';

const app = express();

app.use(express.json());


connectDB();


app.use('/auth', authRoutes);
app.use('/roles', roleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
