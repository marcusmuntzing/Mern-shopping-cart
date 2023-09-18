require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes')

connectDB();
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);


const PORT = process.env.PORT; 
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));


