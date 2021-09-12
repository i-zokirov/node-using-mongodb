const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const mongoose = require('mongoose')
const productRoutes = require('./src/routes/routes')
const app = express();
const PORT = 3000;

// bodyparser setup
//body parser middleware
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//DB connection using mongoose
mongoose.connect('mongodb://localhost:27017/productsdb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on('error', console.error.bind(console, 'connection error: '))
mongoose.connection.once('open', () => {
    console.log('Database connected')
})


app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);
app.use('/', productRoutes)
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);