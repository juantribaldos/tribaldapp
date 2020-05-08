// Definicion del modelo de Prenda con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Prenda',
    { 
	id: 	{
 		primaryKey: true,
		autoIncrement: true, 
 		type: DataTypes.INTEGER 		
			},
	lugar: {
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


// },{
// 	tableName:"prendas"
// }); 
//console.log("PEDIMOS EL TABLENAME: " + Quiz.tableName);Quiz no esta definido 
