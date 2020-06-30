import { Alumno } from '../estudiante/alumno';
import { AlumnosClase } from '../Modelos/modelos'

export class Actividad{
    //id:string;
    nombre:string;
    profesor:{};
    fecha:string;
    alumnos= [];
    estado:string;
    resumen:{};
    clase:{};

    constructor(nombre:string,alumnos){
        this.nombre=nombre;
        this.profesor='Victor Penichet';
        this.alumnos=alumnos;
        this.estado="Creada";
        this.resumen={};
        this.clase={};
    }

}

export class Clase{
    //_id:string;
    nombre:string;
    profesor:{};
    alumnos:AlumnosClase [];
    actividades:{};
    resumen:{};

    constructor(nombre:string,alumnos){
        this.nombre=nombre;
        this.profesor='Victor Penichet';
        this.alumnos=alumnos;
        this.actividades=[];
        this.resumen={};
    }

}
export class Profesor{
    nombre:string;
    apellidos:string;
    departamento:string;
}