import indexController from './App/Controllers/indexController';
import aboutRouter from './App/Controllers/aboutController';


const routes = (app) => {
    app.use('/', indexController);
    app.use('/about', aboutRouter);
}


export default routes;