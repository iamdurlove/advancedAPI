require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');

const productJSON = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(productJSON);
        console.log('Product created');
    } catch (err) {
        console.error(err);
    }
};

start();