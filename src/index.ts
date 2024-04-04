import express from 'express';
import connectDB  from './db/db';

const app = express();

async function startServer() {
    try {
       
        await connectDB();

        // Configurez les routes et autres middleware
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        // Lancez le serveur
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}


startServer();
