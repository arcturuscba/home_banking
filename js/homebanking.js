//Declaración de variables
var nombreUsuario = "Arcturus Cba";
var saldoCuenta = 300;
var limiteExtraccion = 4000;

var saldoAgua = 100;
var saldoTelefono = 900;
var saldoLuz = 800;
var saldoInternet = 1000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//funciones nuevas

function comprobarSaldoNegativo (tipo,extraccion) {
    if(extraccion > saldoCuenta) {

      if (tipo == "estraccion"){
        alert("operacion invalida su extraccion excede a su saldo disponible");
        return false;
      }
      else if (tipo == "servicio"){
        alert("operacion invalida el monto del servicio excede a su saldo disponible");
        return false;
      }
    }
    else {
      return true;
    }
}

function comprobarLimiteExtraccion (extraccion) {
    if(extraccion > limiteExtraccion) {
      alert("operacion invalida se excede limite de extracción permitido");
      var error = "su extraccion excede a su saldo disponible";
      return false;
    }
    else {
      return true;
    }
}

function comprobarBilletesDeCien (extraccion){
    var modulo = extraccion % 100;
    if (modulo!=0){
      alert("debe extraer en billetes de $100");
      return false;
    }
    else {
      return true;
    }
}

function restarDinero(montoResta) {
    saldoCuenta -= montoResta;
}

function sumarDinero(montoSuma) {
    saldoCuenta += montoSuma;
}



function cambiarLimiteDeExtraccion() {
  var nuevoLimite = prompt("ingrese el nuevo limite de extraccion");
  alert("Nuevo limite de extracción actualizado a: $" + limiteExtraccion);
  actualizarLimiteEnPantalla();
}

function extraerDinero() {
  var montoAnterior = saldoCuenta;
  var montoExtraccion = prompt("ingrese el monto a extraer");

  if(comprobarLimiteExtraccion(montoExtraccion) && comprobarSaldoNegativo("estraccion",montoExtraccion)  && comprobarBilletesDeCien(montoExtraccion)){
    restarDinero(montoExtraccion);
    actualizarSaldoEnPantalla();
    }
    else {
      console.log("error");
    }
}
function depositarDinero() {
    var montoAnterior = saldoCuenta;
    var montoDeposito = prompt("ingrese el monto a deporsitar");
    montoDeposito = parseInt(montoDeposito);
    sumarDinero(montoDeposito);
    actualizarSaldoEnPantalla();
    alert("has depositado: $" + montoDeposito + "\n" + "saldo anterior: $" + montoAnterior + "\n"  + "saldo actual: $" + saldoCuenta);
}

function pagarServicio() {
  var montoAnterior = saldoCuenta;
  var servicio = prompt("ingrese el numero correspondiente al servicio que desea pagar \n" + "1 - Agua \n"  + "2 - Luz \n" + "3 - Internet\n" + "4 - Telefono\n")
  switch (servicio) {
    case "1":
      servicio = "Agua";
      montoServicio = saldoAgua;
      break;
    case "2":
    servicio = "Luz";
      montoServicio = saldoLuz;
      break;
    case "3":
      servicio = "Internet";
      montoServicio = saldoInternet;
      break;
    case "4":
      servicio = "Telefono";
      montoServicio = saldoTelefono;
      break;
    default:
      alert("No existe un servicio asociado al numero: " + servicio);
  }
  if(comprobarSaldoNegativo("servicio",montoServicio)){
    restarDinero(montoServicio);
    actualizarSaldoEnPantalla(montoServicio);
    alert("has pagado el servicio de: " + servicio + "\n" + "saldo anterior: $" + montoAnterior + "\n"  + "saldo actual: $" + saldoCuenta);
    }
    else {
      console.log("error");
    }


}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
