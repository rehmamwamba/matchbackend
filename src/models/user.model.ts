import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// Définition du schéma utilisateur
export interface UserDocument extends Document {
    nom: string;
    email: string;
    motDePasse: string;
}

const userSchema: Schema = new Schema({
    nom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true }
});

// Avant de sauvegarder l'utilisateur, hachez le mot de passe
userSchema.pre<UserDocument>('save', async function (next) {
    const user = this;
    if (!user.isModified('motDePasse')) return next();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.motDePasse, salt);
    user.motDePasse = hashedPassword;
    next();
});

// Création du modèle utilisateur
const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
