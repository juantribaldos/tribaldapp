var models = require("../models/index.js");		// Autoload - factoriza el código si la ruta incluye :quizId


// Autoload - factoriza el código si la ruta incluye :prendaId
exports.load = function(req, res, next, prendaId) {
	models.Prenda.findByPk(prendaId).then(
		function(prenda){
			if (prenda) {
				req.prenda = prenda;
				next();
			}else {	next(new Error('No existe prendaId=' + prendaId));
			}}	).catch(function(error){ next(error);});
};
// GET /prendas
exports.index = function(req, res) {
		models.Prenda.findAll().then(
			function(prendas){
		res.render('prendizes/index', { prendas: prendas, errors: [] });
			}
		).catch(function(error) {
			next(error);		});
}; 
// GET /prendas/:id
exports.show = function(req, res) {
	res.render('prendizes/show', { prenda: req.prenda, errors: [] });
};
// GET /prendizes/:id/lugar
exports.lugar = function(req, res) {	
	res.render('prendizes/lugar', { prenda: req.prenda, lugar: lugar_url, errors: []});
};

// GET /prendizes/:id/codigo
exports.codigo = function(req, res) {
	res.render('prendizes/codigo', { prenda: req.prenda, codigo: cod_prenda, errors: []});
};

// GET /quizes/new
exports.new = function(req, res) {
  var prenda = models.Prenda.build( // crea objeto quiz 
    {lugar: "Lugar", vistos: "Vistos", codigo: "Codigo"}
  );

  res.render('prendizes/new', {prenda: prenda, errors: []});
};



