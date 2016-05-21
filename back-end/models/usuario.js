var Sequelize = require('sequelize');

module.exports = function(app, myDatabase) {

	// Crear un modelo (cada tabla de la base de datos es representada por un modelo)
	// Aquí creamos el modelo 'Usuario', que va a representar la tabla 'usuario' en la bd
	var Usuario = myDatabase.define('usuario', {
	  nombreUsuario: Sequelize.STRING,
	  edad: Sequelize.INTEGER
	});
	// Para ver todos los tipos de datos que se pueden usar en un modelo, consulte la referencia: http://docs.sequelizejs.com/en/latest/docs/models-definition/#data-types
	
	// Syncronizar DB: esta función verifica si este modelo necesita una tabla en la DB.
	myDatabase.sync();

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

		myDatabase.sync()
			.then(function() {
				Usuario.create(req.body); 
			})
			.then(function(usuarioCreado) {
				res.status(200).json(usuarioCreado);
			});
	});

	app.delete('/api/usuarios/:id', function(req, res) {
		console.log('==== DELETE /api/usuarios ====');
		var id = req.params.id;
		Usuario.destroy({
			where: {
				id: id
			}
		}).then(function(count) {
			console.log(count);
			if(count > 0) {
				return res.status(200).json({"message": "usuario borrado correctamente"});
			} else {
				return res.status(404).json({"error": "Id not found!"});
			}
		});
	});

};