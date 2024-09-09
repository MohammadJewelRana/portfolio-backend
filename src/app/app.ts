// import express, { Application, Request, Response } from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import router from './routes';
// import globalErrorHandler from './errors/globalErrorHandler';
// import notFound from './errors/notFound';

// const app: Application = express();


// //parser
// app.use(express.json());
// // app.use(cors());
// app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
// app.use(express.text());
// app.use(cookieParser());


// app.use('/api', router); //get routes from router folder

// app.get('/', (req: Request, res: Response) => {
//     res.send({
//       message: ' This app is running into the server!!!',
//     });
//   });

//   //global error handling
// app.use(globalErrorHandler); //error handling
// app.use(notFound); //not found route
  
// export default app;




import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';
import globalErrorHandler from './errors/globalErrorHandler';
import notFound from './errors/notFound';

const app: Application = express();

 
const corsOptions = {
  origin: [
      'http://localhost:5173', // Localhost for development
      'https://jewelrana-portfolio.vercel.app' // Your Vercel deployed client
  ],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],  
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle OPTIONS requests for CORS preflight
app.options('*', cors(corsOptions));
 

// Parsers
app.use(express.json());
app.use(express.text());
app.use(cookieParser());

// Routes
app.use('/api', router);

// Health check route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Portfolio app  is running on the server!',
  });
});

// Global error handling
app.use(globalErrorHandler);
app.use(notFound);

export default app;