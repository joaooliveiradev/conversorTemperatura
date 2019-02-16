function celsiusToFahrenheit(){
// Coletando os valores em Celsius.
var celsius = document.getElementById('celsius').value;


// Convertendo as temperaturas

var converter = (1.8 * celsius) + 32;

//Exibindo os resultados

		document.getElementById('fahrenheit').value = 'ºF '+converter;
}

function FahrenheitToCelsius(){
	// Coletando os valores em Fahrenheit.
var fahrenheit2 = document.getElementById('fahrenheit2').value;

// Convertendo as temperaturas

var converter2 = (fahrenheit2 - 32) / 1.8;

//Exibindo os resultados

		document.getElementById('celsius2').value = 'ºC '+converter2;
}
