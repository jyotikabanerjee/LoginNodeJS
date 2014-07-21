
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};



//Valid users:-


var users = {
    'hamid':'pass1',
    'jyotika': 'pass2',
    'shilpa': 'pass3',
    'sindhura': 'pass4',
    'jacob': 'pass5',
    'kim': 'pass6'
}


exports.login = function(req, res){
    console.log('Function called...');
    var obj = req.body;
    if(obj.username in users){
        if(obj.password === users[obj.username]){
            var login = document.getElementById('login');
            login.setAttribute('border', 'none');
            res.cookie('user', obj.username);
            res.json(200, "USER_AUTHORIZED");
            //res.render('welcome');
        }
        else{
            var login = document.getElementById('login');
            login.setAttribute('border', '3px solid red');
            res.json(404, "USER_UNAUTHORIZED");
            console.log("Unauthorized user...");
        }
    }
    else{
        var login = document.getElementById('login');
        login.setAttribute('border', '3px solid red');
        res.json(404, "USER_NOT_FOUND");
        console.log("User not found...")
    }
}