interface Alumno{
    nombre: string;
    edad: number;
    email: string;
    certificación?: number;
}

const alumno:Alumno={
    nombre: 'Horacio',
    edad: 25,
    email:'horaciojuga66@hotmail.com'
}

console.table(alumno);

let mascotas=['perro','gato','perico'];
mascotas[1]='Nuevo gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);