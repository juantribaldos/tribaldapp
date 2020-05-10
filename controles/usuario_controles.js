
var usuarios = {	admin: {id:1, username:"admin", password:"1234"}, 
					pepe:  {id:2, username:"pepe",  password:"5678"},
					nerea: {id:3, username:"nerea",  password:"n3r36"},
					jcar:  {id:4, username:"jcar",  password:"xjcar"}
				};

// Comprueba si el usuario esta registrado en users
// Si autenticación falla o hay errores se ejecuta callback(error).
exports.autenticar = function(login, password, callback) {
	if(usuarios[login]){
		if(password === usuarios[login].password){
			callback(null, usuarios[login]);
		}
		else { callback(new Error('Password erróneo.')); }
	} else { callback(new Error('No existe el usuario.'));}
};
