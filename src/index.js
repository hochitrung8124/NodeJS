import path from 'path';
import express from 'express';
import  route  from './routes/index.js';
const app = express()
const port = 3000
import morgan from 'morgan'
import { engine } from 'express-handlebars';
app.use(express.static('src/public'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//HTTP logger
app.use(morgan('combined'))
//template engine
// chạy client
// main has header and fooder 
app.engine(
    ".hbs",
    engine({
      extname: ".hbs",
     // partialsDir: "src/resources/view/partials", // ✅ Đăng ký thư mục chứa partials
    })
  );
app.set('view engine', 'hbs');
app.set('views', 'src/resources/view');
// home has body
route(app);
route
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
