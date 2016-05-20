var Sequelize = require('sequelize');
module.exports = function(app, sequelize) {

	// Crear un modelo (cada tabla de la base de datos es representada por un modelo)
	// Aquí creamos el modelo 'Usuario', que va a representar la tabla 'usuario' en la bd
	var Usuario = sequelize.define('usuario', {
	  nombreUsuario: Sequelize.STRING,
	  edad: Sequelize.INTEGER
	});
	// Para ver todos los tipos de datos que se pueden usar en un modelo, consulte la referencia: http://docs.sequelizejs.com/en/latest/docs/models-definition/#data-types
	

	// RUTAS DEL REST API PARA ESTE MODELO
	app.get('/api/usuarios', function(req, res) {
		console.log('==== GET /api/usuarios ====');
		Usuario.findAll().then(function(usuarios) {
			return res.status(200).json(usuarios);
		});
	});

	app.get('/api/usuarios/:id', function(req, res) {
		var id = req.params.id;
		console.log('==== GET /api/usuarios/' + id + ' ====');
		Usuario.findById(id).then(function(usuario) {
			return res.status(200).json(usuario);
		});
	});

	app.post('/api/usuarios', function(req, res) {
		console.log('==== POST /api/usuarios ====');
		console.log(req.body);

		sequelize.sync()
			.then(function() {
				Usuario.create(req.body); 
			})
			.then(function(usuarioCreado) {
				res.status(200).json(usuarioCreado);
			});

	});

};