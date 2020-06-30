export class Estudiante {
    _id = '';
    nombre = '';
    apellidos = '';
    clase = '';
    email = '';
    contrasena = '';
}

export class Alumnos {
    //Atributos
    estudiante: Estudiante;
    id_item = '';
    posicion = {};
    datos = {
        alegria: [],
        asco: [],
        miedo: [],
        sorpresa: [],
        tristeza: [],
        ira: [],
        pulsaciones: [],
        tiempo: [],
        distraido: [],
        concentrado: [],
        frustrado: [],
        motivado: [],
    };
    sensorWebCam = false;
    sensorPulsera = false;
    sensorLed = false;

    constructor(est, posicion, act, datos) {
        this.estudiante = est;
        this.id_item = est._id + act._id;
        this.posicion = posicion;
        this.sensorWebCam = false;
        this.sensorPulsera = false;
        this.sensorLed = false;
        if (datos == null) {
            this.datos = {
                alegria: [],
                asco: [],
                miedo: [],
                sorpresa: [],
                tristeza: [],
                ira: [],
                pulsaciones: [],
                tiempo: [],
                distraido: [],
                concentrado: [],
                frustrado: [],
                motivado: [],
            };
        } else {
            this.datos = datos;
        }

    }

    setActividad(act) {
        this.id_item = this.estudiante._id + act._id;
    }
}

export class AlumnosClase {
    //Atributos
    estudiante: Estudiante;
    posicion = {};
    sensorWebCam = false;
    sensorPulsera = false;
    sensorLed = false;

    constructor(est, posicion) {
        this.estudiante = est;
        this.posicion = posicion;
        this.sensorWebCam = false;
        this.sensorPulsera = false;
        this.sensorLed = false;
    }
}