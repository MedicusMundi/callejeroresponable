angular.module('starter').factory('ComerciosService', [ function() {

  var lista = {};

  lista = [{"categoria": 3, "lon": "42.850837", "direccion": "Badaia 25", "lat": "-2.678306", "nombre": "Kide Emaus", "telefono": "945 250 345"}, 
  {"categoria": 3, "lon": "42.863941", "direccion": "Sierra de Aralar 27", "lat": "-2.695934", "nombre": "La Aguja M\u00e1gica", "telefono": "945 062 718"}, 
  {"categoria": 3, "lon": "42.866576", "direccion": "Getaria 20", "lat": "-2.692906", "nombre": "Los milagros de Eva", "telefono": "945 069 198"}, 
  {"categoria": 3, "lon": "42.848467", "direccion": "Zapater\u00eda 48", "lat": "-2.674098", "nombre": "La cl\u00ednica del zapato", "telefono": "945 276 967"}, 
  {"categoria": 1, "lon": "42.863399", "direccion": "Portal de Foronda 32", "lat": "-2.68399", "nombre": "M\u00aa Jes\u00fas Arreglo y Confecci\u00f3n", "telefono": "945 172 873"}, 
  {"categoria": 1, "lon": "42.849775", "direccion": "Beato Tom\u00e1s de Zumarraga 22", "lat": "-2.678752", "nombre": "Miguel Arroyo Jacome", "telefono": "945 243 880"}, 
  {"categoria": 1, "lon": "42.858491", "direccion": "Paraguay 9", "lat": "-2.678368", "nombre": "Miguel Arroyo Jacome", "telefono": "945 201 880"}, 
  {"categoria": 1, "lon": "42.851191", "direccion": "Bueno Monreal 16", "lat": "-2.670466", "nombre": "Otsogorrinagaia Mendi Elkartea", "telefono": "945 269 407"}, 
  {"categoria": 1, "lon": "42.854681", "direccion": "Senda Valent\u00edn de Foronda 7", "lat": "-2.69996", "nombre": "Reparaci\u00f3n de calzado Kelo", "telefono": "945 228 281"}, 
  {"categoria": 1, "lon": "42.850886", "direccion": "Gorbea 17", "lat": "-2.679833", "nombre": "Retoucherie de Manuela", "telefono": "945 213 733"}, 
  {"categoria": 1, "lon": "42.848005", "direccion": "Pedro Ega\u00f1a 4", "lat": "-2.674592", "nombre": "Ecocandeal", "telefono": "620 440 720"}, 
  {"categoria": 1, "lon": "42.864378", "direccion": "Juntas Generales 76", "lat": "-2.681603", "nombre": "Santiago Rodr\u00edguez Garzo", "telefono": "945 174 531"}, 
  {"categoria": 1, "lon": "42.851784", "direccion": "Correr\u00eda 120", "lat": "-2.673004", "nombre": "Alfarer\u00eda Buztintza", "telefono": "670 326 999"}, 
  {"categoria": 1, "lon": "42.836392", "direccion": "Paseo de la Zumaquera 8", "lat": "-2.671722", "nombre": "Alpargatas Alben", "telefono": "945 139 339"}, 
  {"categoria": 1, "lon": "42.851987", "direccion": "Kutxa", "lat": "-2.675552", "nombre": "Artesan\u00edas Aiasure", "telefono": "945 149 449"}, 
  {"categoria": 1, "lon": "42.858236", "direccion": "Bekolarra 4", "lat": "-2.714835", "nombre": "Borax Cer\u00e1mica", "telefono": "945 220 664"}, 
  {"categoria": 1, "lon": "42.851206", "direccion": "Txiquita 4,  Bajo Dcha", "lat": "-2.672116", "nombre": "Cer\u00e1mica Paco Torres", "telefono": "945 142 913"}, 
  {"categoria": 1, "lon": "42.847094", "direccion": "Portal del Rey 17", "lat": "-2.66846", "nombre": "Centauro", "telefono": "945 226 244"}];

  return lista;

}]);
