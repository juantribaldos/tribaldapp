
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
module.exports = { uno: creden, dos: storage|| "" }; 
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

	//var sequelize = new Sequelize(null, null, null,
		//{dialect: "sqlite", storage: "quiz.sqlite"});


	// Importar la definicion de la tabla Quiz en quiz.js





