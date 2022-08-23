 
 function login (){

    let usuario = document.getElementById("user");
    let password = document.getElementById("pass");
    let dia= document.getElementById("dia");
    let mes= document.getElementById("mes");
    let año= document.getElementById("año");
   
    if(usuario == "cesar123" && password == "1234"){
      window.location("pagina.html");
    }

 }




 var articulos = [
   { nombre: "televisor" , precio :2200},
   { nombre: "computadora" , precio :3500},
   { nombre: "refrigeradora" , precio :2500},
   { nombre: "lavadora" , precio :2000},
   { nombre: "motocicleta" , precio :15000}
 ]

 var filtrararticulos = articulos.filter(function(articulos){
      return articulos.precio <= 3000;
 })
 
 filtrararticulos;


 var mapeararticulo = articulos.map(function(articulo){
    return articulo.nombre;
 })


 var encontrararticulo = articulos.find(function(articulo){
      return articulo.nombre === " motocicleta";
 });


 var nombre = "Cesar";  /* String*/
 var apellido = "Rivera";  /*string */
 var nombre_de_usuario = "surgicalDs"; /*string */
 var edad = 21 ;  /* number */
 var correo = "riveracesar@gmail.com";  /*string*/
 var mayor_de_edad = true;   /*boolean */
 var dinero_ahorrado = 2000;  /* number*/
 var deudad = 500 ;   /* number */



  let nombre_completo = nombre + " " + apellido ;
  let deudas_totales = dinero_ahorrado - deudas ;

  console.log("Mi nombre es "+ nombre + " y me apellido " + apellido + " pero me puedes decir Messi");
  console.log("El total de mi dinero actual es " + deudas_totales);


  const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");



 function consultanombre(name,lastname,nick){

    let nombre_completo = name + " " + lastname;
    console.log("Mi nombre es " + nombre_completo + ", pero prefiero que me digas " + nick + ".");
 }
 consultanombre("cesar","rivera","Messi");

 const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
 
  let suscripcion = "Basic";

if(suscripcion == "Free"){
  console.log("Solo puedes tomar los cursos gratis");
} else if ( suscripcion == "Basic"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if ( suscripcion == "Expert"){
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if ( suscripcion == "ExpertPlus"){
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}
let i =0;
while(i <5){
  i++;
  console.log("El valor de i es : " + i);
}


for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

 let respuesta =  prompt("Cuanto es la suma de 2 +2 ");

 if (respuesta == 4){
   alert("En horabuena sos un genio  pibe");
 } else if (respuesta != 4){
   alert ("Muy mala hostia chaval pongase a estudiar mas cabron");
 }


 let numeros = [1,2,3,4,5];

  function numbers (numeros){

    var impre = numeros.map(function(num){
      return 
    })
    console.log(numeros[0]);
  }


  
  


  