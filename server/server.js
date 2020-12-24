import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import colors from 'colors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import morgan from 'morgan';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

//Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config();

//Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3001;
const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', ((req, res) => res.send(process.env.PAYPAL_CLIENT_ID)));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// For Heroku Deploy
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

} else {
    app.get('/', (req, res) => {
        res.send('API Running ... ')
    })
}

//Custom error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server Started in ${process.env.NODE_ENV} mode on Port: ${PORT}`.yellow.bold));