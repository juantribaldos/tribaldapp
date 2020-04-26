
var path = require('path');
var express = require("express");
//if (!global.hasOwnProperty('db')) {
//  
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
		omitNull:	true	 });	//solo Postgres				
// Importar la definicion de la tabla Prenda en prenda.js
var prenda_path = path.join(__dirname, 'prenda');
var Prenda = sequelize.import(prenda_path);

exports.Prenda = Prenda; // ex
console.log("Tabla:  " + Prenda.tableName + "    " + process.env.DATABASE_URL + '   ' + Sequelize.DB_name );

module.exports = { uno: creden, dos: storage|| "" }; 
	//sequelize.sync() crea e inicializa tablas de preguntas en DB
  sequelize.sync().then( function() {
		// success(..) ejecuta el manejador una vez creada la tabla
    Prenda.count().then(function (count){  //success : forma antigua
      if(count === 0){	// la tabla se inicializa solo si esta vacia
	    Prenda.create({ codigo: 'a1b2c3d4e5',
						lugar:'file:///home/jcar/Im%C3%A1genes/Screenshot%20-%20241119%20-%2003:12:14.png',
						vistos: 0 });
	    Prenda.create({ codigo: 'b1c2d3e4f5',
						lugar: 'file:///home/jcar/Im%C3%A1genes/acueducto.jpeg',
						vistos: 0 })
		.then( function(){ console.log( 'Base de datos inicializada' ); });
						 };   });  });
	 console.log( "cuenta count:  "  + Prenda.count );
