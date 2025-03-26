import path from 'path';
import express from 'express';
const app = express()
const port = 3000
import morgan from 'morgan'
import { engine } from 'express-handlebars';
//HTTP logger
app.use(morgan('combined'))
//template engine
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', 'src/resources/view');
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
