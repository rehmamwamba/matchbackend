const { MongoClient } = require('mongodb');

// Définir l'URL de connexion à la base de données MongoDB
const url = 'mongodb://localhost:27017';

// Nom de la base de données
const dbName = 'mydatabase';

// Fonction pour exécuter les commandes MongoDB
async function main() {
  // Créer une instance du client MongoDB
  const client = new MongoClient(url);

  try {
    // Se connecter au serveur MongoDB
    await client.connect();

    // Sélectionner la base de données
    const db = client.db(dbName);

    // Créer une collection appelée "users"
    await db.createCollection("users");

    // Insérer un document dans la collection "users"
    await db.collection("users").insertOne({
      name: "Alice",
      age: 25,
      email: "alice@example.com"
    });

    console.log("Collection 'users' créée et document inséré avec succès !");
  } catch (err) {
    console.error(err);
  } finally {
    // Fermer la connexion client MongoDB
    await client.close();
  }
}

// Appeler la fonction principale
main();
