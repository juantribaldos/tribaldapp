var express = require('express');
var router = express.Router();
var traer = require("../models/index");


var creden = traer.uno;

console.log("DB_name: " +  "   " + creden );

var url = creden.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name 	= (url[6]||null);
var user 		= (url[2]||null);
var pwd			= (url[3]||null);
var protocol 	= (url[1]||null); 
var dialect 	= (url[1]||null);
var port 		= (url[5]||null);
var host	 	= (url[4]||null);
var storage		= process.env.DATABASE_STORAGE;		

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
						basedat: DB_name,
						usuario: user,
						pwd:		pwd,
						protocolo:	protocol,
						dialecto:	dialect,
						puerto:		port,
						host:		host,
						storage:	storage });
});


module.exports = router;
