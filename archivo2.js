


class Alumno{
    constructor(nombre, apellido, dni){
       this.nombre = nombre;
       this.apellido = apellido;
       this.dni = dni;

    }
}


let lista_alumnos = [];

for (let i=0; i < 3; i++){
   let nombre = prompt("Ingrese su nombre");
   let apellido = prompt("Ingrese su apellido");
   let dni = prompt("Ingrese su DNI");

   let nuevo_alumno = new Alumno (nombre, apellido, dni);

   lista_alumnos.push (nuevo_alumno);
}

console.log(lista_alumnos);

for (let Alumno of lista_alumnos) {
   console.log (Alumno);
}

