var models = require("../models/index.js");		// Autoload - factoriza el código si la ruta incluye :quizId
var sequelize = models.sequelize;	

// Autoload :id de comentarios
exports.load = function(req, res, next, notaId) {
  models.Nota.findOne({
            where: {
                id: Number(notaId)
            }
        }).then(function(nota) {
      if (nota) {
        req.nota = nota;
        next();
      } else{next(new Error('No existe notaId=' + notaId))}
    }
  ).catch(function(error){next(error)});
};


exports.new = function(req, res) {
  res.render('notas/n_nota.ejs', { prendaid: req.params.prendaId, errors: []});
console.log("req.params.prendaId:     " + req.params.prendaId );};

exports.create = function(req, res) {
  var nota = models.Nota.build(
      { informe: req.body.nota.informe,          
        PrendaId: req.params.prendaId
        });
      nota.save().then(function(user) {
console.log('Nota ' + nota.informe + ' creado con éxito.');
}) };

//.finally(() => { sequelize.close(); });

