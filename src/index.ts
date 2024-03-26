import express from 'express';
import  connectDB  from './db'; // Importez la fonction connectDB depuis votre fichier db.ts
import authRoutes from './routes/authRoutes';
import roleRoutes from './routes/roleRoutes';

const app = express();

// Middleware pour parser les données JSON
app.use(express.json());

// Connexion à la base de données MongoDB
connectDB();

// Utilisation des routes d'authentification et des routes de gestion des rôles
app.use('/auth', authRoutes);
app.use('/roles', roleRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
