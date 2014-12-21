var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

var authRoutes = {
    /* GET home page. */
    
    index : function(req, res) {
      res.render('pages/index', { title: 'Apptuned' });
    },

    sendMail : function (req, res) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'daviesray.ornyx@gmail.com',
                pass: 'ornyxoft1990amayos'
            }
        });
        transporter.sendMail({
            from: 'daviesray.ornyx@address',
            to: 'dawoodyray@gmail.com',
            subject: 'hello',
            text: 'hello world!'
        });
        res.send({'status':'This went well'});
    }
}


module.exports = authRoutes;
