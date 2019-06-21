// Main Routes Controller

//// HomePage
exports.getHomePage = (req, res, next) => {
   res.render('index', {
      path: '/',
      pageTitle: 'Home'
   });
};