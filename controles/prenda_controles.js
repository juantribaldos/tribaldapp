var models = require("../models/index.js");		// Autoload - factoriza el código si la ruta incluye :quizId


// Autoload - factoriza el código si la ruta incluye :prendaId
exports.load = function(req, res, next, prendaId) {
	models.Prenda.findOne({
		where: { id: Number(prendaId) },
		include: [{ model: models.Nota }]
	}).then( function(prenda) {
			if (prenda) {
				req.prenda = prenda;
				console.log("Autoload prenda: " + prendaId);
				next();
			} else {
				next(new Error('No existe prendaId=' + prendaId));
				console.log("Autoload ERROR: " + prendaId);
			}
		}
	).catch(function(error) {
		next(error);
	});
}
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
	var prenda = models.Prenda.build( 
	    { lugar: "Lugar", vistos: "Vistos", codigo: "Codigo" });
  res.render('prendizes/new', { prenda: prenda, errors: [] });		};

exports.create = function(req, res){
  var prenda = models.Prenda.build( req.body.prenda );  		
	prenda.save({ fields: [ "lugar", "codigo", "vistos" ]})
	.then( function(){ res.redirect('/prendas')});	};

exports.edit = function(req, res) {			//console.log("Estoy en EDIT");
    var prenda = req.prenda;  // req.quiz: autoload de instancia de quiz
	res.render('prendizes/edit', { prenda: prenda, errors: []});
};
 // PUT /prendizes/:id
exports.update = function(req, res) {			//console.log("Estoy en UPDATE");
    req.prenda.lugar   = req.body.prenda.lugar;
	req.prenda.vistos  = req.body.prenda.vistos;
	req.prenda.codigo  = req.body.prenda.codigo;
    // req.prenda 
	var errors = req.prenda.validate();	//ya que el objeto errors no tiene then(
	req.prenda 						// save: guarda en DB campos pregunta y respuesta de quiz
    .save({ fields: ["lugar", "vistos", "codigo"] })
    .then( function(){ res.redirect('/prendas') })   
}
// DELETE /quizes/:id
exports.destroy = function(req, res) {
	req.prenda.destroy().then(function() {
		res.redirect('/prendas');
	}).catch(function(error) { next(error) });
};
