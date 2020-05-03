var express = require('express');
var router = express.Router();
var models = require("../models/index.js");
var prendaControl = require('../controles/prenda_controles');


//var traer = require('../models/index');

var creden = models.uno;				//antes rojo
var stor = models.dos;					//antes rojo
//var Prenda = models.tres;	//var storage	= "sqlite://:@:/";//antes rojo
console.log("Storage: " +  "   " + stor );

var url = creden.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name 	= (url[6]||null);var user 		= (url[2]||null);
var pwd			= (url[3]||null);var protocol 	= (url[1]||null); 
var dialect 	= (url[1]||null);var port 		= (url[5]||null);
var host	 	= (url[4]||null);

//var storage		= "sqlite://:@:/";		
/* GET home page. ByPk*/

//router.get('/', function(req, res, next) {
//  res.render('index', { title: 		'Express' });	});

// Autoload de comandos con :quizId
router.param('prendaId', prendaControl.load); 		// autoload :prendaId

 router.get('/', function(req, res) { 
 		models.Prenda.findByPk(1).then(function(prenda){
 		res.render('index', { prenda: prenda.lugar,										
 			basedat: 	DB_name, usuario: 	user, pwd: pwd,
 			protocolo:	protocol, dialecto:	dialect, puerto: port,
 			host:		host, storage:	stor,	
 			title: 		'Express'});})	});


router.get('/prendas',         					prendaControl.index );
router.get('/l_prendas/:prendaId(\\d+)',        prendaControl.show	);
router.get('/prendas/new',         				prendaControl.new );




module.exports = router;
