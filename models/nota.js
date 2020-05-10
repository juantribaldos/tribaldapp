// Definicion del modelo de Nota con validación

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'Nota',
    { 	
	informe: {
        type: DataTypes.STRING,
        validate: { notEmpty: { msg: "-> Falta texto" }}
			},
      publicado: {
      	type: DataTypes.BOOLEAN,
      	defaultValue: false
      }      
    }
)};

// },{
// 	tableName:"prendas"
// }); 
//console.log("PEDIMOS EL TABLENAME: " + Quiz.tableName);Quiz no esta definido 
