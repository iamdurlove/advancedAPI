require('dotenv').config();
const express = require('express');
const products_routes = require('../routes/product');
const connectDB = require('../db/connect');

const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hi')
})


//middleware or to set router
app.use('/api/products', products_routes);


// Starting the server
const startServer = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log('listening on port ' + PORT);
        })
    }
    catch (err) {
        res.status(400).send(err);
    }
}

startServer();