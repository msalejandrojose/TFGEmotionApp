var dao = require("./dao");
var ObjectID = require("mongodb").ObjectID;
var moment = require('moment');

function Centro() {

    //Atributos
    this.clases = {};
    this.actividades = {};
    this.profesores = {};
    this.resumenActividades = {}
    this.actividadesEnProceso = {};
    this.intervalo = null;
    this.estudiantes = {};
    this.actividadesListas = {};
    this.dao = new dao.Dao();
    this.estoyComputando = false;



    //METODOS

    //CRUD Estudiantes
    this.agregarEstudiante = function (nombre, apellidos, clase, email, contrasena, callback) {
        var ju = this;
        let e = {
            nombre: nombre,
            apellidos: apellidos,
            clase: clase,
            email: email,
            contrasena: contrasena,
        }

        this.dao.connect(function (db) {
            ju.dao.insertarEstudiante(e, function (u) {
                ju.estudiantes[u._id] = new Estudiante(u._id, u.nombre, u.apellidos, u.clase, u.email, u.contrasena);
                //console.log("Estudiante")
                //console.log(ju.estudiantes[u._id]);
                //ju.borrarEstudiante(email);
                //ju.modificarEstudiante("emailAntiguo", "nombre", "apellidos", "clase", "emailNuevo", "contrasena");
                callback(u);
                db.close();
            });
        });

    }

    this.modificarEstudiante = function (est, callback) {
        var ju = this;
        let e = {
            nombre: est.nombre,
            apellidos: est.apellidos,
            clase: est.clase,
            email: est.email,
            contrasena: est.contrasena,
        }

        this.dao.connect(function (db) {

            ju.dao.modificarEstudiante(est._id, e, function (u) {
                //console.log(est._id);
                delete ju.estudiantes[est._id];
                ju.estudiantes[est._id] = est;
                //ju.estudiantes[est._id].modificarDatos(est);
                //console.log(ju.estudiantes[est._id]);
                callback(u);
                db.close();
            });
        });
    }

    this.borrarEstudiante = function (est, callback) {
        var ju = this;
        //console.log(this.estudiantes[_id]);

        this.dao.connect(function (db) {
            ju.dao.eliminarEstudiante(est, function (u) {
                delete ju.estudiantes[est._id];
                //console.log(u);
                callback(est);
                db.close();
            });
        });
    }

    //CRUD Clases
    this.agregarClase = function (clase, callback) {
        var ju = this;
        /*let alumnos = {};
        for (var email in estudiantes) {
            alumnos[email] = new Alumno(estudiantes[email]);
        }*/
        let a = {
            nombre: clase.nombre,
            profesor: clase.profesor,
            alumnos: clase.alumnos,
            actividades: clase.actividades,
            resumen: clase.resumen,
        }

        this.dao.connect(function (db) {
            ju.dao.insertarClase(a, function (ru) {
                ju.clases[ru._id] = new Clase(ru._id, ru.nombre, ru.profesor, ru.alumnos, ru.actividades, ru.resumen);
                //console.log(ju.clases);
                callback(ru);
                db.close();
            });
        });
    }
    this.editarClase = function (act, callback) {
        var ju = this;
        if (!this.clases[act._id]) {
            let alumnos = {};
            /*for (var email in estudiantes) {
                alumnos[email] = new Alumno(estudiantes[email]);
            }*/
            let a = {
                nombre: act.nombre,
                profesor: act.profesor,
                alumnos: act.alumnos,
                actividades: act.actividades,
                resumen: act.resumen,
            }
            this.dao.connect(function (db) {
                //console.log(a);
                ju.dao.modificarClase(act._id, a, function (u) {
                    callback(act);
                    db.close();
                });
            });
        }
    }
    this.borrarClase = async function (act, callback) {
        var ju = this;
        var k;
        var bbdd;
        var a = act;
        var bbdd;
        await this.dao.connect(function (db) {
            var jus = ju;
            for (var i in act.actividades) {
                ju.dao.eliminarActividad(act.actividades[i], function (u) {
                    delete ju.actividades[act._id];
                    jus.dao.eliminarClase(act, function (u) {
                        callback(u);
                    });
                });
            }
            bbdd = db;
        });
        bbdd.close();
        //}
    }

    this.mostrarClase = function (clase, callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.obtenerClaseCriterio(clase._id, function (c) {
                //console.log(c)
                //console.log("clase actualizada");
                callback(c);
                db.close();
            });
        });
    }

    this.mostrarClases = function (callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.mostrarClases(function (u) {
                ju.clases = u;
                //console.log(u);
                callback(u);
                db.close();
            });
        });
    }

    //CRUD Actividades dentro de la Clase

    this.crearActividadEnClase = function (clase, actividad, callback) {
        var ju = this;
        //console.log("crearActividadEnClase")
        //console.log(clase);
        //console.log(actividad);
        if (!this.clases[clase._id]) {
            let ac = {
                nombre: clase.nombre,
                profesor: clase.profesor,
                alumnos: clase.alumnos,
                actividades: clase.actividades,
                resumen: clase.resumen,
            }
            let a = {
                nombre: actividad.nombre,
                profesor: actividad.profesor,
                fecha: actividad.fecha,
                alumnos: actividad.alumnos,
                estado: 'Creada',
                resumen: actividad.resumen,
                clase: actividad.clase,
            }
            this.dao.connect(function (db) {
                ju.dao.insertarActividad(a, function (ru) {
                    let act = {
                        nombre: ru.nombre,
                        profesor: ru.profesor,
                        fecha: ru.fecha,
                        alumnos: ru.alumnos,
                        estado: 'Creada',
                        resumen: ru.resumen,
                        clase: ru.clase,
                    }
                    let alu = [];
                    for (let i = 0; i < ru.alumnos.length; i++) {
                        alu.push(new Alumno(ru.alumnos[i].estudiante, ru.alumnos[i].posicion, ru, ru.alumnos[i].datos, ru.alumnos[i].sensorWebCam, ru.alumnos[i].sensorPulsera, ru.alumnos[i].sensorLed));
                    }
                    ru.alumnos = alu;
                    act.alumnos = alu;
                    ju.dao.modificarActividad(ru._id, act, function (r) {
                        ju.actividades[ru._id] = new Actividad(ru._id, ru.nombre, ru.profesor, ru.fecha, ru.alumnos, ru.estado, ru.clase);
                        
                        ac.actividades[ru._id] = ru;
                        ju.dao.modificarClase(clase._id, ac, function (u) {
                            clase.actividades[ru._id] = ru;
                            console.log("Actividad Creada:");
                            console.log(r);
                            callback(r);
                            db.close();
                        });
                    })
                });
            });
        }
    }
    this.editarActividadEnClase = function (actividad, callback) {
        var ju = this;
        var bbdd;
        let act = {
            nombre: actividad.nombre,
            profesor: actividad.profesor,
            fecha: actividad.fecha,
            estado: actividad.estado,
            alumnos: actividad.alumnos,
            resumen: actividad.resumen,
            clase: actividad.clase,
        }
        //a.actividades[actividad._id] = actividad;
        this.dao.connect(function (db) {
            bbdd = db;
            ju.dao.obtenerClaseCriterio(actividad.clase._id, function (clase) {
                ju.dao.modificarActividad(actividad._id, act, function (u) {
                    console.log("ACtivididad modificada");
                    console.log(u._id);
                    let c = {
                        nombre: clase.nombre,
                        profesor: clase.profesor,
                        alumnos: clase.alumnos,
                        actividades: clase.actividades,
                        resumen: clase.resumen,
                    }
                    if (act.estado == "Comenzada") {
                        ju.actividadesListas[u._id] = u;
                    }
                    if (u != null) {
                        ju.actividades[u._id] = u;
                        c.actividades[u._id] = u;
                    }

                    ju.dao.modificarClase(clase._id, c, function (ru) {
                        if (ru != null || ru != undefined) {
                            console.log("Clase modificada");
                            console.log(ru);
                            callback(u);
                            db.close();
                        }
                    });
                });
            })
        });
    }
    this.borrarActividadEnClase = function (actividad, callback) {
        var ju = this;
        var bbdd;
        //console.log('Hola')
        this.dao.connect(function (db) {
            bbdd = db;
            ju.dao.obtenerClaseCriterio(actividad.clase._id, function (clase) {
                //console.log('Hola')
                ju.dao.eliminarActividad(actividad, function (u) {
                    delete ju.actividades[actividad._id];
                    let c = {
                        nombre: clase.nombre,
                        profesor: clase.profesor,
                        alumnos: clase.alumnos,
                        actividades: clase.actividades,
                        resumen: clase.resumen,
                    }
                    delete c.actividades[actividad._id]
                    ju.dao.modificarClase(clase._id, c, function (u) {
                        delete clase[actividad._id];
                        ju.clases[clase._id] = clase;
                        ju.dao.obtenerClaseCriterio(clase._id, function (c) {
                            callback(c);
                            db.close();
                        });
                    });
                });
            })
        });
    }

    //CRUD Actividades
    this.agregarActividad = function (nombre, profesor, fecha, alumnos, resumen, clase, callback) {
        var ju = this;
        let a = {
            nombre: nombre,
            profesor: profesor,
            fecha: fecha,
            alumnos: alumnos,
            estado: 'Creada',
            resumen: resumen,
            clase: clase,
        }

        this.dao.connect(function (db) {
            ju.dao.insertarActividad(a, function (ru) {
                let alu = [];
                for (let i = 0; i < ru.alumnos.length; i++) {
                    ru.alumnos[i].id_item = ru.alumnos[i]._id + ru._id;
                }
                for (let i = 0; i < ru.alumnos.length; i++) {
                    alu.push(new Alumno(ru.alumnos[i].estudiante, ru.alumnos[i].posicion, ru, ru.alumnos[i].datos, ru.alumnos[i].sensorWebCam, ru.alumnos[i].sensorPulsera, ru.alumnos[i].sensorLed));
                }
                ru.alumnos = alu;
                ju.dao.modificarActividad(ru._id, ru, function (u) {
                    ju.actividades[u._id] = new Actividad(u._id, u.nombre, u.profesor, u.fecha, u.alumnos, u.estado, u.clase);
                    callback(u);
                    db.close();
                });
            });
        });
    }
    this.editarActividad = function (act, callback) {
        var ju = this;
        let alumnos = {};
        let a = {
            nombre: act.nombre,
            profesor: act.profesor,
            fecha: act.fecha,
            alumnos: act.alumnos,
            estado: act.estado,
            resumen: act.resumen,
            clase: act.clase,
        }
        this.dao.connect(function (db) {
            //console.log(a);
            ju.dao.modificarActividad(act._id, a, function (u) {
                //ju.actividades[u._id].editarActividad(u.nombre, u.profesor, u.alumnos, u.estado);
                //console.log(u);
                if (act.estado == "Comenzada") {
                    ju.actividadesListas[act._id] = act;
                }
                //console.log("Valor de la bbdd");
                //console.log(u);
                if (u != null) {
                    //console.log(act._id);
                    ju.actividades[u._id] = u;
                    callback(u);
                }
                db.close();
            });
        });

    }
    this.borrarActividad = function (act, callback) {
        var ju = this;
        //if (this.actividades[_id] != null) {
        this.dao.connect(function (db) {
            ju.dao.eliminarActividad(act, function (u) {
                delete ju.actividades[act._id];
                callback(u);
                db.close();
            });
        });
        //}
    }
    this.obtenerActividad = function (act, callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.obtenerActividadCriterio(act._id, function (u) {
                callback(u);
                db.close();
            });
        });
    }
    this.verActividadesDeAlumno = function (alumno, callback) {
        var ju = this;
        var actividades = [];
        this.dao.connect(function (db) {
            ju.dao.mostrarActividades(function (u) {
                for (let i = 0; i < u.length; i++) {
                    for (let j = 0; j < u[i].alumnos.length; j++) {
                        //console.log(u[i].alumnos[j].estudiante)
                        if (alumno._id == u[i].alumnos[j].estudiante._id) {
                            actividades.push(u[i]);
                        }
                    }
                }
                callback(actividades);
                db.close();
            });
        });

    }
    this.obtenerActividadComenzada = function (act, callback) {
        if (this.actividades[act._id] != undefined || this.actividades[act._id] != null) {
            console.log("coneseguir");
            callback(this.actividades[act._id]);
        } else {
            callback(null);
        }
    }

    //CRUD Profesores

    this.mostrarProfesores = function (callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.mostrarProfesores(function (u) {
                ju.profesores = u;
                //console.log(u);
                callback(u);
                db.close();
            });
        });
    }

    this.agregarProfesor = function (profesor, callback) {
        var ju = this;
        let p = {
            nombre: profesor.nombre,
            apellidos: profesor.apellidos,
            departamento: profesor.departamento,
        }
        this.dao.connect(function (db) {
            ju.dao.insertarProfesor(p, function (u) {
                ju.profesores[u._id] = new Profesor(u._id, u.nombre, u.apellidos, u.departamento);
                //console.log(ju.profesores[u._id]);
                callback(u);
                db.close();
            });
        });
    }

    this.editarProfesor = function (profesor, callback) {
        var ju = this;
        let p = {
            nombre: profesor.nombre,
            apellidos: profesor.apellidos,
            departamento: profesor.departamento,
        }
        this.dao.connect(function (db) {
            ju.dao.modificarProfesor(profesor._id, p, function (u) {
                ju.profesores[u._id] = new Profesor(u._id, u.nombre, u.apellidos, u.departamento);
                //console.log(ju.profesores[u._id]);
                callback(u);
                db.close();
            });
        });
    }

    this.borrarProfesor = function (profesor, callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.eliminarProfesor(profesor, function (u) {
                delete ju.profesores[profesor._id];
                //console.log(u);
                callback(profesor);
                db.close();
            });
        });
    }

    //Gestion de datos de la actividad
    this.empezarActividad = function (actividad, callback) {
        var ju = this;
        //console.log("Empezar");
        //console.log(actividad._id);
        this.actividades[actividad._id] = actividad;
        //console.log(this.actividades);
        this.actividadesListas[actividad._id] = actividad;
        console.log("Actividad Comenzada");
        if (actividad.clase._id == "") {
            this.editarActividad(actividad, function (res) {
                if (res != '') {
                    var num = 0;
                    //console.log("Actividad empezada");
                    //console.log(res);
                    ju.actividadesEnProceso[actividad._id] = actividad._id;
                    ju.resumenActividades[actividad._id] = new DatosResumen();
                    ju.comprobar()
                    console.log(res);
                    callback(res);
                }
            });
        } else {
            this.editarActividadEnClase(actividad, function (res) {
                if (res != '') {
                    //console.log("Actividad empezada");
                    //console.log(res);
                    ju.actividadesEnProceso[actividad._id] = actividad._id;
                    ju.resumenActividades[actividad._id] = new DatosResumen();
                    ju.comprobar()
                    console.log(res);
                    callback(res);
                }
            });
        }
    }

    this.comprobar = function () {
        //console.log("Comprobar");
        var num = 0;
        for (var key in this.actividadesEnProceso) {
            num++;
        }
        if (num == 1) {
            //console.log("Creacion del intervalo");
            this.intervalo = setInterval(async => {
                this.hacerResumenActividad();
            }, 20000);
        }
        if (num == 0) {
            console.log("Limpiar el intervalo");
            clearImmediate(this.intervalo);
        }
    }

    this.hacerResumenActividad = async function () {
        this.estoyComputando = true;

        for (var key in this.actividadesEnProceso) {
            
              
            var tiempo = moment().format();
            var sumatorioE = this.resumenActividades[key].alegria +
                this.resumenActividades[key].asco +
                this.resumenActividades[key].ira +
                this.resumenActividades[key].miedo +
                this.resumenActividades[key].sorpresa +
                this.resumenActividades[key].tristeza;
            var sumatorioDC = this.resumenActividades[key].distraido + this.resumenActividades[key].concentrado;
            var sumatorioMF = this.resumenActividades[key].motivado + this.resumenActividades[key].frustrado;
            if(sumatorioE>0){
            //console.log(sumatorioE);
            //console.log(key);
            //console.log(this.actividades);
            //console.log(this.actividades[key]);
            if (this.actividades[key] == undefined && this.actividades[key] == null) {
                for (var k in this.actividades) {
                    if (k == key) {
                        console.log("PETA");
                        this.actividades[key] = this.actividades[k];
                        console.log(this.actividades[key]);
                    }
                }
            }
            this.actividades[key].resumen.alegria.push({ y: this.resumenActividades[key].alegria * 100 / sumatorioE, x: tiempo });
            this.actividades[key].resumen.asco.push({ y: this.resumenActividades[key].asco * 100 / sumatorioE, x: tiempo });
            this.actividades[key].resumen.concentrado.push({ y: this.resumenActividades[key].concentrado * 100 / sumatorioDC, x: tiempo });
            this.actividades[key].resumen.distraido.push({ y: this.resumenActividades[key].distraido * 100 / sumatorioDC, x: tiempo });
            this.actividades[key].resumen.frustrado.push({ y: this.resumenActividades[key].frustrado * 100 / sumatorioMF, x: tiempo });
            this.actividades[key].resumen.ira.push({ y: this.resumenActividades[key].ira * 100 / sumatorioE, x: tiempo });
            this.actividades[key].resumen.miedo.push({ y: this.resumenActividades[key].miedo * 100 / sumatorioE, x: tiempo });
            this.actividades[key].resumen.motivado.push({ y: this.resumenActividades[key].motivado * 100 / sumatorioMF, x: tiempo });
            this.actividades[key].resumen.sorpresa.push({ y: this.resumenActividades[key].sorpresa * 100 / sumatorioE, x: tiempo });
            this.actividades[key].resumen.tristeza.push({ y: this.resumenActividades[key].tristeza * 100 / sumatorioE, x: tiempo });
            this.actividades[key].resumen.pulsaciones.push({ y: this.resumenActividades[key].pulsaciones / this.resumenActividades[key].nPulsaciones, x: tiempo });
            this.resumenActividades[key] = new DatosResumen();
            console.log("resumen");
            }
        }
        this.estoyComputando = false;
    }

    this.insertarDatos = async function (datos, act) {
        var ju = this;
        var id;
        if (act == null) {

        } else {
            if (this.actividades[act._id] == null || this.actividades[act._id] == undefined) {
                this.actividades[act._id] = act;
                this.resumenActividades[act._id] = new DatosResumen();
                console.log("Cambio de actividad en la insercion de datos");
            }

        }
        try {
            //console.log("Insertar datos");
            //console.log(datos);
            //console.log(this.actividades);
            //console.log(this.actividades[datos.id_actividad]);
            for (let i = 0; i < this.actividades[datos.id_actividad].alumnos.length; i++) {
                //console.log(this.actividades[datos.id_actividad].alumnos[i]);
                //console.log(datos.id_item);
                if (datos.id_item == ju.actividades[datos.id_actividad].alumnos[i].id_item) {
                    if (!ju.estoyComputando) {
                        console.log(datos);
                        console.log(ju.resumenActividades[datos.id_actividad]);
                        ju.resumenActividades[datos.id_actividad]['alegria'] += datos.alegria.y;
                        ju.resumenActividades[datos.id_actividad]['asco'] += datos.asco.y;
                        ju.resumenActividades[datos.id_actividad]['concentrado'] += datos.concentrado.y;
                        ju.resumenActividades[datos.id_actividad]['distraido'] += datos.distraido.y;
                        ju.resumenActividades[datos.id_actividad]['frustrado'] += datos.frustrado.y;
                        ju.resumenActividades[datos.id_actividad]['ira'] += datos.ira.y;
                        ju.resumenActividades[datos.id_actividad]['miedo'] += datos.miedo.y;
                        ju.resumenActividades[datos.id_actividad]['motivado'] += datos.motivado.y;
                        ju.resumenActividades[datos.id_actividad]['sorpresa'] += datos.sorpresa.y;
                        ju.resumenActividades[datos.id_actividad]['tristeza'] += datos.tristeza.y;
                        ju.resumenActividades[datos.id_actividad]['pulsaciones'] += datos.pulsaciones.y;
                        ju.resumenActividades[datos.id_actividad]['nPulsaciones']++;
                    }

                    ju.actividades[datos.id_actividad].alumnos[i].datos.alegria.push({ x: datos.alegria.x, y: datos.alegria.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.asco.push({ x: datos.asco.x, y: datos.asco.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.ira.push({ x: datos.ira.x, y: datos.ira.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.miedo.push({ x: datos.miedo.x, y: datos.miedo.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.sorpresa.push({ x: datos.sorpresa.x, y: datos.sorpresa.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.tristeza.push({ x: datos.tristeza.x, y: datos.tristeza.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.pulsaciones.push({ x: datos.pulsaciones.x, y: datos.pulsaciones.y })
                    ju.actividades[datos.id_actividad].alumnos[i].datos.tiempo.push({ x: datos.tiempo.x, y: datos.tiempo.y })
                    ju.actividades[datos.id_actividad].alumnos[i].datos.distraido.push({ x: datos.distraido.x, y: datos.distraido.y })
                    ju.actividades[datos.id_actividad].alumnos[i].datos.concentrado.push({ x: datos.concentrado.x, y: datos.concentrado.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.frustrado.push({ x: datos.frustrado.x, y: datos.frustrado.y });
                    ju.actividades[datos.id_actividad].alumnos[i].datos.motivado.push({ x: datos.motivado.x, y: datos.motivado.y });
                    console.log(ju.actividades[datos.id_actividad].alumnos[i].datos);
                    console.log(datos.id_actividad);
                    console.log("Datos modificados en el servidor");
                }
            }
        } catch (e) {
            //console.log("error en la inserccion de datos");
            console.log(e);
        }
        //console.log(this.actividades[datos.id_actividad]);

    }

    this.terminarActividad = function (actividad, callback) {
        var ju = this;
        //console.log("SERVIDOR");
        //console.log(actividad._id);
        //console.log(ju.actividades);
        console.log("Terminar Actividad")
        console.log(this.actividades);
        if (this.actividades[actividad._id]) {
            console.log("Esta guardada");
            for (var key in ju.actividades) {
                if (ju.actividades[key]._id == actividad._id) {
                    ju.actividades[actividad._id].estado = "Finalizada";
                    ju.actividades[actividad._id].fecha = actividad.fecha;
                    //console.log("datos a almacenar");
                    //console.log(ju.actividades[key].resumen);
                    //console.log(ju.actividades[key].alumnos[0].datos);
                    console.log("Actividad terminada");
                    //console.log(ju.actividades[key]);
                    if (actividad.clase._id == "") {
                        this.editarActividad(ju.actividades[actividad._id], function (res) {
                            if (res != '') {
                                //console.log("Actividad terminada");
                                //console.log(res);
                                delete ju.actividadesEnProceso[actividad._id];
                                delete ju.resumenActividades[actividad._id];
                                ju.actividadesListas[actividad._id] = actividad;
                                ju.comprobar();
                                console.log(res);
                                console.log("terminada y enviada");
                                console.log(ju.actividadesEnProceso);
                                callback(res);
                            }
                        })
                    } else {
                        console.log("***");
                        console.log(key);
                        console.log(actividad._id);
                        console.log(ju.actividades[key].alumnos[0].datos);
                        this.editarActividadEnClase(ju.actividades[actividad._id], function (res) {
                            if (res != '') {
                                //console.log("Actividad terminda");
                                //console.log(res);
                                delete ju.actividadesEnProceso[actividad._id];
                                delete ju.resumenActividades[actividad._id];
                                ju.actividadesListas[actividad._id] = actividad;
                                ju.comprobar()
                                console.log(res);
                                console.log("terminada y enviada");
                                console.log(ju.actividades[key]);
                                //console.log(ju.actividades);
                                callback(res);
                            }
                        })
                    }
                    break;
                }
            }
        } else {
            console.log("Esta no guardada");
            if (actividad.clase._id == "") {
                this.editarActividad(actividad, function (res) {
                    if (res != '') {
                        //console.log("Actividad terminada");
                        //console.log(res);
                        delete ju.actividadesEnProceso[actividad._id];
                        delete ju.resumenActividades[actividad._id];
                        ju.actividadesListas[actividad._id] = actividad;
                        ju.comprobar();
                        callback(res);
                    }
                })
            } else {
                this.editarActividadEnClase(actividad, function (res) {
                    if (res != '') {
                        //console.log("Actividad terminda");
                        //console.log(res);
                        delete ju.actividadesEnProceso[actividad._id];
                        delete ju.resumenActividades[actividad._id];
                        ju.actividadesListas[actividad._id] = actividad;
                        ju.comprobar()
                        callback(res);
                    }
                })
            }
        }
        //console.log(this.actividadesListas);
    }

    //Añadir Alumnos a la Actividad
    this.anadirAlumnoaActividad = function (_id, emailEstudiante, callback) {
        var ju = this;
        var act = this.actividades[_id];
        if (act != null) {
            act.alumnos[emailEstudiante] = new Alumno(this.estudiantes[emailEstudiante]);
            this.dao.connect(function (db) {
                ju.dao.modificarActividad(act, function (u) {
                    //console.log(ju.actividades);
                    ju.actividades[_id].anadirAlumno(ju.estudiantes[emailEstudiante]);
                    callback(u);
                    db.close();
                });
            });
        }
    }

    this.borrarAlumnoDeActividad = function (_id, emailAlumno, callback) {
        this.actividades[_id].borrarAlumno(emailAlumno);

        var ju = this;
        var act = this.actividades[_id];
        if (act != null) {
            delete act.alumnos[emailAlumno];
            this.dao.connect(function (db) {
                ju.dao.modificarActividad(act, function (u) {
                    //console.log(ju.actividades);
                    //ju.actividades[nombreActividad].anadirAlumno(ju.estudiantes[emailEstudiante]);
                    ju.actividades[_id].borrarAlumno(emailAlumno);
                    callback(u);
                    db.close();
                });
            });
        }
    }

    //Print
    this.mostrarEstudiante = function (email) {
        //console.log(this.estudiantes[email]);
        return this.estudiantes[email];
    }
    this.mostrarEstudiantes = function (callback) {
        //console.log(this.estudiantes);
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.mostrarEstudiantes(function (u) {
                ju.estudiantes = u;
                callback(u);
                db.close();
            });
        });
        //return this.estudiantes;
    }
    this.mostrarActividades = function (callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.mostrarActividades(function (u) {
                //ju.actividades = u;
                callback(u);
                db.close();
            });
        });
    }

    this.anadirActividadLista = function (act, callback) {
        if (this.actividadesListas[act._id] == null) {
            this.actividadesListas[act._id] = act;
        }
        //console.log(this.actividadesListas);
        callback(this.actividadesListas[act._id]);
    }

    this.borrarActividadLista = function (act, callback) {
        delete this.actividadesListas[act._id];
        callback(act);
    }

    this.mostrarActividadListasxAlumno = function (id_alu, callback) {
        let actividades = [];
        //console.log(id_alu);
        for (var id in this.actividadesListas) {
            for (let i = 0; i < this.actividadesListas[id].alumnos.length; i++) {
                if (this.actividadesListas[id].alumnos[i].estudiante._id == id_alu) {
                    actividades.push(this.actividadesListas[id]);
                    break;
                }
            }
        }
        callback(actividades);
    }

    //Iniciar Sesion
    this.iniciarSesion = function (email, contrasena, callback) {
        var ju = this;
        this.dao.connect(function (db) {
            ju.dao.obtenerEstudianteCriterio({ $and: [{ 'contrasena': contrasena }, { 'email': email }] }, function (u) {
                if (u == undefined) {
                    console.log(u);
                    callback({ _id: null });
                }
                else {
                    //console.log("El usuario es: " + u._id);
                    //console.log("Se ha podido Loguear");
                    console.log(u);
                    callback(u);
                }
                db.close();
            });
        });

    }

}

function Actividad(id, nombre, profesor, fecha, alumnos, estado, clase) {

    //Atributos
    this._id = id;
    this.nombre = nombre;
    this.profesor = profesor;
    this.fecha = fecha;
    this.alumnos = alumnos;
    this.estado = estado;
    this.resumen = {};
    this.clase = {};

    //Metodos
    this.anadirAlumno = function (estudiante, posicion) {

        this.alumnos[estudiante.email] = new Alumno(estudiante, posicion, this);

    }
    this.editarActividad = function (nombre, profesor, alumnos, estado) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.estado = estado;
        return this;
    }
    this.borrarAlumno = function (nombre) {
        delete this.alumnos[nombre];
        return this;
    }

    //Print
    this.mostrarActividad = function () {
        return this;
    }

}


function Clase(id, nombre, profesor, alumnos, actividades, resumen) {

    //Atributos
    this._id = id;
    this.nombre = nombre;
    this.profesor = profesor;
    this.alumnos = alumnos;
    this.actividades = actividades;
    this.resumen = resumen;

    //Metodos
    /*this.anadirAlumno = function (estudiante, posicion) {

        this.alumnos[estudiante.email] = new Alumno(estudiante, posicion, this);

    }
    this.editarActividad = function (nombre, profesor, alumnos, estado) {
        this.nombre = nombre;
        this.profesor = profesor;
        this.alumnos = alumnos;
        this.estado = estado;
        return this;
    }
    this.borrarAlumno = function (nombre) {
        delete this.alumnos[nombre];
        return this;
    }

    //Print
    this.mostrarActividad = function () {
        return this;
    }*/

}

function Estudiante(id, nombre, apellidos, clase, email, contrasena) {

    //Atributos
    this._id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.clase = clase;
    this.email = email;
    this.contrasena = contrasena;

    this.modificarDatos = function (est) {
        this.nombre = est.nombre;
        this.apellidos = est.apellidos;
        this.clase = est.clase;
        this.email = est.email;
        this.contrasena = est.contrasena;
        return this;
    }

}

function Profesor(id, nombre, apellidos, departamento) {
    this._id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.departamento = departamento;
}

function Alumno(estudiante, posicion, actividad, datos, sensorWebCam, sensorPulsera, sensorLed) {

    //Atributos
    this.estudiante = estudiante;
    this.posicion = posicion;
    this.id_item = this.estudiante._id + actividad._id;
    this.datos = datos;
    this.sensorWebCam = sensorWebCam;
    this.sensorPulsera = sensorPulsera;
    this.sensorLed = sensorLed;
    this.setActividad = function (act) {
        this.id_item = this.estudiante._id + act._id;
    }
}

function DatosResumen() {
    this.alegria = 0;
    this.asco = 0;
    this.concentrado = 0;
    this.distraido = 0;
    this.frustrado = 0;
    this.ira = 0;
    this.miedo = 0;
    this.motivado = 0;
    this.sorpresa = 0;
    this.tristeza = 0;
    this.pulsaciones = 0;
    this.nPulsaciones = 0;
}

module.exports.Centro = Centro;