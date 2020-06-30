export class Alumno{
    nombre:string;
    apellidos:string;
    clase:string;
    email:string;
    contrasena:string;
    
    constructor(nombre:string,apellidos:string,clase:string,email:string,contrasena:string){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.clase=clase;
        this.email=email;
        this.contrasena=contrasena;
    }

}