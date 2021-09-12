const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB connection using mongoose
mongoose.connect('mongodb://localhost:27017/product-project', {
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

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);