
var path = require('path');
var express = require("express");
//if (!global.hasOwnProperty('db'))
		// Postgres Database_URL = postgres://user:passwd@host:port/database
		// SQLite   DATABASE_URL = sqlite://:@:/
// Cargar Modelo ORM
var Sequelize = require('sequelize');			
		
if (process.env.NODE_ENV === 'production') {
  // Your dev-only logic goes here
  //var creden = "postgres://ydzlhmcozpkisi:e7e7ab670dc77aa2e9e277b4cd72460a536fe376ca7d559c28ee845bac0e9576@ec2-54-247-118-139.eu-west-1.compute.amazonaws.com:5432/dd1qae8qjsccgs";
	var creden = process.env.DATABASE_URL;
}else{
	var creden 	="sqlite://:@:/";
	var storage	= "quiz.sqlite";	
}								

var url = creden.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
//var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name 	= (url[6]||null);
var user 		= (url[2]||null);
var pwd			= (url[3]||null);
var protocol 	= (url[1]||null); 
var dialect 	= (url[1]||null);
var port 		= (url[5]||null);
var host	 	= (url[4]||null);		
		// Usar BBDD SQLite o Postgres // var sequelize = new Sequelize(null, null, null,var sequelize = new Sequelize( DB_name, user, pwd, 
		//{dialect: "sqlite", storage: "quiz.sqlite"});
var sequelize = new Sequelize( DB_name, user, pwd, 
	  { dialect:	protocol,
		protocol:	protocol,
		port:		port,
		host:		host,
		storage:	storage,		// solo SQLite (.env)
		omitNull:	true,			//solo Postgres
		define:{
		timestamps:false, //columnas que dicen cuando se creó la tabla
		freezeTableName:true //Se quita la convección sobre el nombre	
		}});									
//try {
//  sequelize.authenticate();
//  console.log('Connection has been established successfully.');
//} catch (error) {
//  console.error('Unable to connect to the database:', error);
//}

// Importar la definicion de la tabla Prenda en prenda.js
//var prenda_path = path.join(__dirname, 'prenda');
//var Prenda = sequelize.import(prenda_path);
//exports.Prenda = Prenda;
var Prenda = sequelize.define("Prenda",{
 	id:{
 		primaryKey: true,
		autoIncrement: true, 
 		type:Sequelize.INTEGER
 	},
	lugar:{
		type:Sequelize.STRING,
		validate:{ notEmpty: {msg:"-> Falta DireccionURL"}}
	},
	vistos:{
		type:Sequelize.INTEGER,
		validate:{ notEmpty: {msg:"-> Falta Vistos"}}
	},
	codigo:{
		type:Sequelize.STRING,
		validate:{ notEmpty: {msg:"-> Falta Vistos"}}
	},
},{
	tableName:"prendas"
}); 

	console.log("Tabla:  " + Prenda.tableName + "    " + process.env.DATABASE_URL + '   ' + Sequelize.DB_name );

	//sequelize.sync() crea e inicializa tablas de preguntas en DB
  sequelize.sync().then( function() {
		// success(..) ejecuta el manejador una vez creada la tabla
    Prenda.count().then(function (count){  //success : forma antigua
      if(count === 0){	// la tabla se inicializa solo si esta vacia
	    Prenda.create({ //id: 1,
						lugar:'https://drive.google.com/open?id=0B1oK-10muE7xNDgxUFFvNjV4TWs',
						vistos: 0,
						codigo: 'pant0niño0vaqu0lllm0' });
	    Prenda.create({ //id: 2,
						lugar: 'https://drive.google.com/open?id=1wp_ua-Ss8vMg447ez4RDPOj1BIpSBZMO',
						vistos: 0,
						codigo: 'chaq0muje0vaqu0lla20' })
		.then( function(){ console.log( 'Base de datos inicializada num  ' ); });
						 }else{ console.log( 'Base de datos num de reg:  ' +  count);						 
					};   });  });
//EXPORTANDO EL MODELO DE LA TABLA ARTICULO		//exports.Quiz = Quiz;

module.exports = { uno: creden, dos: storage|| "" }; 	//antes rojo 										
module.exports.Prenda = Prenda; 
console.log("type of Prenda:   " + "    " + typeof Prenda);// => funcion  class extends Model {}

module.exports.sequelize = sequelize;									//antes negro
