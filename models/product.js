const mongoose = require('mongoose');

//creating model instance
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name must be provided"]
    },
    price: {
        type: Number,
        required: [true, "Product price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['apple', 'samsung', 'dell', 'mi'],
            message: `{VALUE} is not supported`
        }
    }
});


//crating new collection
module.exports = mongoose.model('Product', productSchema);