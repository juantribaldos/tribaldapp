// Definicion del modelo de Prenda con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Prenda',
    { lugar: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta DireccionURL"}}
      },
      vistos: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: {msg: "-> Falta Vistos"}}
      },
      codigo: {
        type: DataTypes.STRING,
        validate: { notEmpty: {msg: "-> Falta Código"}}
      }      
    }
)};
//console.log("PEDIMOS EL TABLENAME: " + Quiz.tableName);Quiz no esta definido 

    //,{  //tableName : tabla asociada a este objeto
	//tableName:"Quiz"	
	//}
////////////////////////////////////////////////////////////
// var quiz_path = path.join(__dirname, 'quiz');
// var path = require('path');
// 		// Postgres Database_URL = postgres://user:passwd@host:port/database
// 		// SQLite   DATABASE_URL = sqlite://:@:/
// var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
// var DB_name 	= (url[6]||null);
// var user 		= (url[2]||null);
// var pwd			= (url[3]||null);
// var protocol 	= (url[1]||null); 
// var dialect 	= (url[1]||null);
// var port 		= (url[5]||null);
// var host	 	= (url[4]||null);
// var storage		= process.env.DATABASE_STORAGE;		
// var Sequelize = require('sequelize');	
// var sequelize = new Sequelize( DB_name, user, pwd, 
// 		//{dialect: "sqlite", storage: "quiz.sqlite"});
// 	  { dialect:	protocol,
// 		protocol:	protocol,
// 		port:		port,
// 		host:		host,
// 		storage:	storage,		// solo SQLite (.env)
// 		omitNull:	true	 });// 
// 
// // var Articulo = sequelize.define("Articulo", {
// var Quiz = sequelize.define("Quiz", {
// 
// //titulo:Sequelize.TEXT,
// //contenido:Sequelize.TEXT,
//     
// 	  quizId:{ //indicamos que es una columna de llave primaria
// 		primaryKey:true,
// 		type:Sequelize.INTEGER
// 	  },  
// 	  pregunta: {
//         //type: DataTypes.STRING,
//         type:Sequelize.STRING,
//         validate: { notEmpty: {msg: "-> Falta Pregunta"}}
//       },
//       respuesta: {
//         //type: DataTypes.STRING,
//         type:Sequelize.STRING,
//         validate: { notEmpty: {msg: "-> Falta Respuesta"}}
//       },
//       tema: {
//         //type: DataTypes.STRING,
//         type:Sequelize.STRING,
//         validate: { notEmpty: {msg: "-> Falta Tema"}}
//       }      
//     
// 
// },{  //tableName : tabla asociada a este objeto
// 	tableName:"quiz"	
// });
// 
// Quiz.path = sequelize.import(quiz_path);
//module.exports.Prenda = Prenda;

