var express = require('express');
var router = express.Router();
var models = require("../models/index.js");
var prendaControl =  require('../controles/prenda_controles');
var notaControl   =  require('../controles/nota_controles');
var sesionControl =  require('../controles/sesion_controles');
var usuarioControl = require('../controles/usuario_controles');

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
router.param('notaId', notaControl.load)
//router.param('userId', usuarioControl.load);  // autoload :userId

 router.get('/', function(req, res) { 
 		models.Prenda.findByPk(1).then(function(prenda){
 		res.render('index', { prenda: prenda.lugar,										
 			basedat: 	DB_name, usuario: 	user, pwd: pwd,
 			protocolo:	protocol, dialecto:	dialect, puerto: port,
 			host:		host, storage:	stor,	
 			title: 		'Express', errors: [] });})	});


router.get		('/prendas',         					prendaControl.index   );
router.get		('/prendizes/:prendaId(\\d+)',      	prendaControl.show	  );
router.get		('/prendizes/:prendaId(\\d+)/codigo',	prendaControl.codigo  );
router.get		('/prendizes/new',       				sesionControl.loginRequired, prendaControl.new 	  );
router.post		('/prendizes/create',					sesionControl.loginRequired, prendaControl.create  );
router.get		('/prendizes/:prendaId(\\d+)/edit', 	sesionControl.loginRequired, prendaControl.edit	  );
router.put		('/prendizes/:prendaId(\\d+)', 			sesionControl.loginRequired, prendaControl.update  );
router.delete	('/prendizes/:prendaId(\\d+)', 			sesionControl.loginRequired, prendaControl.destroy );


router.get	('/prendizes/:prendaId(\\d+)/notas/n_nota', notaControl.new	  );
router.post	('/prendizes/:prendaId(\\d+)/notas', 		notaControl.create  );
router.get('/prendizes/:prendaId(\\d+)/notas/:notaId(\\d+)/publish', 
	                                    sesionControl.loginRequired, notaControl.publish);

module.exports = router;

// Definición de rutas de sesion
router.get	('/login',  sesionControl.new);     // formulario login
router.post	('/login', sesionControl.create);  // crear sesión
router.get	('/logout', sesionControl.destroy); // destruir sesión

module.exports = router;
