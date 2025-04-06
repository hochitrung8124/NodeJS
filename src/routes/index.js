
import newRouter from './news.js';
import siteRouter from './site.js';
export default function route(app){

    app.use('/news', newRouter);
    app.use('/', siteRouter);
}



