const mysql = require('mysql');
const nodemailer = require('nodemailer');
const exphbs = require('express-handlebars');


    const db = mysql.createConnection({
        host     : 'lunge-database.ch0uzb2cuoae.us-west-2.rds.amazonaws.com',
        user     : 'admin',
        password : 'o0SgT30xueqiajnVsPaT',
        database : 'lunge',
        port: 3306
    });

    db.connect((err) => {
    if(err) throw err;
	db.query("SELECT id, firstname, email, password from user", function (err, result) {
    if (err) throw err;
	var result;
    var i, len, text;
for (i = 0, len = result.length, text = ""; i < len; i++) {
  text += result[i] + "<br>";
console.log(text)
}

	
  });
});
   
