const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "client" directory
app.use(express.static(path.join(__dirname, 'client')));

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
