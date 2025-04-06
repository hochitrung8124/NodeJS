class SiteController{
    index(req, res){
        res.render('home');
    }
    search(req, res){
        res.render('Search');
    }
}
export default new SiteController(); 