require('dotenv').config();

const express = require('express');
const app = express();

const sponsorsRouter = require('./routes/sponsors.js');
const orphansRouter = require('./routes/orphans.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Orphan System API</title>
            </head>
            <body style="font-family: Arial; text-align: center; margin-top: 50px;">
                <h1>👋 Welcome to Orphan & Sponsor API</h1>
                <p>Backend system built with Node.js, Express, and Sequelize</p>

                <h3>📌 Available Endpoints:</h3>
                <ul style="list-style: none;">
                    <li>👤 Sponsors → /api/sponsors</li>
                    <li>🧒 Orphans → /api/orphans</li>
                </ul>

                <p style="color: green;">Status: Running ✅</p>
            </body>
        </html>
    `);
});

app.use('/api/sponsors', sponsorsRouter);
app.use('/api/orphans', orphansRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});