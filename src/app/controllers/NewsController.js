class NewsController{
    index(req, res){
        res.render('news');
    }
    show(req, res){
        res.send('Wellcome to my Page!!!');
    }
}
export default new NewsController(); 