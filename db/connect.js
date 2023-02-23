const mongoose = require('mongoose');


mongoose.set('strictQuery', true);
const connectDB = (uri) => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Monggose ATLAS Connected");
    }).catch((err) => {
        console.log(err);
    });
};

module.exports = connectDB;