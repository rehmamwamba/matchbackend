import mongoose, { Document, Schema } from 'mongoose';

// Définition de l'interface pour le modèle de rôle
export interface Role extends Document {
  name: string;
  description: string;
}

// Schéma Mongoose pour le modèle de rôle
const roleSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Création du modèle de rôle à partir du schéma
const RoleModel = mongoose.model<Role>('Role', roleSchema);

export default RoleModel;
