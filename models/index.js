
var path = require('path');
var express = require("express");
var Sequelize = require('sequelize');
//if (!global.hasOwnProperty('db')) {
//  
var creden = process.env.DATABASE_URL;
//var creden = "postgres://ydzlhmcozpkisi:e7e7ab670dc77aa2e9e277b4cd72460a536fe376ca7d559c28ee845bac0e9576@ec2-54-247-118-139.eu-west-1.compute.amazonaws.com:5432/dd1qae8qjsccgs";
module.exports = { uno: creden }; 
var url = creden.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
//var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name 	= (url[6]||null);
var user 		= (url[2]||null);
var pwd			= (url[3]||null);
var protocol 	= (url[1]||null); 
var dialect 	= (url[1]||null);
var port 		= (url[5]||null);
var host	 	= (url[4]||null);
//var storage		= process.env.DATABASE_STORAGE;		
		// Cargar Modelo ORM
		// Usar BBDD SQLite o Postgres // var sequelize = new Sequelize(null, null, null,
var sequelize = new Sequelize( DB_name, user, pwd, 
		//{dialect: "sqlite", storage: "quiz.sqlite"});
	  { dialect:	protocol,
		protocol:	protocol,
		port:		port,
		host:		host,
		storage:	storage,		// solo SQLite (.env)
		omitNull:	true	 });	//solo Postgres				
								
	// Importar la definicion de la tabla Quiz en quiz.js
							

//}





