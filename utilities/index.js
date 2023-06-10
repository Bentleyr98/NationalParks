/* check if user is logged in */ 
const isLoggedIn = function(req, res, next) { 
        if (req.oidc.isAuthenticated()){
            console.log("Authenticated");
            return next(); 
        }
        res.redirect('/login'); 
    }


module.exports = {isLoggedIn};