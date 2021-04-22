import express from 'express';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { v4 as uuidv4 } from 'uuid';
import createError from 'http-errors';


// Database
import useDatabase from './config/database';

// Router import
import useRouters from './routes';

// Express app
const app = express();

// Connect to db
useDatabase();

// view engine
app.set('views', path.join(__dirname, '/App/Views'));
app.set('view engine', 'jsx');
const viewEngineOptions = { beautify: true };
app.engine('jsx', require('express-react-views').createEngine(viewEngineOptions));

// Session
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static file 
app.use(express.static(path.join(__dirname, 'public')));

//Routers
useRouters(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



export default app;
