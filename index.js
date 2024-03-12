import express from 'express';
import session from 'express-session';
import pedidosRoutes from './src/routes/pedidosRoutes.js';
import bodyParser from 'body-parser';
import authRoutes from './src/routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: true
  })
);

// Middleware para configurar las cabeceras CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permitir acceso desde cualquier origen
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use('/api', pedidosRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
