function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if (username == "prueba" && password == "1234") {
		window.location. = "home.html";
	} else {
		alert("Usuario o contraseña incorrectos");
	}
}
