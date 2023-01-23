const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://thanos:PaxwuRF3kyMrV9qs@cluster0.lhfudmt.mongodb.net/?retryWrites=true&w=majority';
// const mongoURL = process.env.MONGO_URL;

//Due to deprecation warning
mongoose.set('strictQuery', false);

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DB connection successful!");
}).catch((err) => {
    console.log("DB connection error: ", err);
});

module.exports = {
    mongoose
};