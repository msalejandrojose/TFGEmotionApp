var fs = require("fs");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;
var exp = require("express");
var secure = require('ssl-express-www');
var app = exp();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var srvWS = require('./servidor/servidorWS');
var ws = new srvWS.ServidorWS();

var modelo = require("./servidor/modelo");

var centro = new modelo.Centro();


app.set('port', (process.env.PORT || 5000));

app.use(exp.static(__dirname + "/public"));
//app.use(exp.static(__dirname + "/cliente_Prueba"));

var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(secure);

app.get("/verEstudiantes", function (request, response) {
  centro.mostrarEstudiantes(function (res) {
    response.send(res);
    return res;
  })
});

app.post("/registrarEstudiante", function (request, response) {
  var est = request.body;
  centro.agregarEstudiante(est.nombre, est.apellidos, est.clase, est.email, est.contrasena, function (res) {
    if (res != '') {
      console.log("Estudiante agregado");
      response.send(res);
    }
  })
});

app.put("/actualizarEstudiante", function (request, response) {
  var est = request.body;
  console.log(est);
  centro.modificarEstudiante(est, function (res) {
    response.send(res);
  })
});

app.delete("/eliminarEstudiante", function (request, response) {
  var est = request.body;
  console.log(est._id);
  centro.borrarEstudiante(est, function (res) {
    response.send(res);
  });
});

app.get("/verActividades", function (request, response) {
  centro.mostrarActividades(function (res) {
    response.send(res);
    return res;
  })
});

app.post("/verActividadesComenzadas", function (request, response) {
  var alumno = request.body;
  centro.mostrarActividadListasxAlumno(alumno._id, function (res) {
    console.log("Actividades abiertas");
    console.log(res);
    response.send(res);
  })
});

app.post("/verActividadesDeAlumno", function (request, response) {
  var alumno = request.body;
  centro.verActividadesDeAlumno(alumno, function (res) {
    response.send(res);
  })
});

app.post("/registrarActividad", function (request, response) {
  var act = request.body;
  centro.agregarActividad(act.nombre, act.profesor, act.fecha, act.alumnos, act.resumen, act.clase, function (res) {
    if (res != '') {
      console.log("Actividad agregada");
      //console.log(res);
      response.send(res);
    }
  })
});

app.post("/actualizarActividad", function (request, response) {
  var act = request.body;
  //console.log(act);
  if (act.clase._id == "") {
    centro.editarActividad(act, function (res) {
      if (res != '') {
        console.log("Actividad actualizada");
        //console.log(res);
        response.send(res);
      }
    })
  } else {
    centro.editarActividadEnClase(act, function (res) {
      if (res != '') {
        console.log("Actividad editada");
        response.send(res);
      }
    })
  }

});

app.delete("/eliminarActividad", function (request, response) {
  var act = request.body;
  //console.log(act._id);
  if (act.clase._id == "") {
    centro.borrarActividad(act, function (res) {
      response.send(res);
    });
  } else {
    centro.borrarActividadEnClase(act, function (res) {
      response.send(res);
    })
  }

});

app.post("/empezarActividad", function (request, response) {
  var act = request.body;
  //console.log(act._id);
  centro.empezarActividad(act, function (res) {
    response.send(res);
  })
});

app.post("/terminarActividad", function (request, response) {
  var act = request.body;
  //console.log(act._id);
  console.log("|||||||");
  centro.terminarActividad(act, function (respuesta) {
    response.send(respuesta);
  })
});

//CRUD Clases

app.get("/verClases", function (request, response) {
  centro.mostrarClases(function (res) {
    response.send(res);
    //return res;
  })
});

app.post("/verClase", function (request, response) {
  var clase = request.body;
  centro.mostrarClase(clase, function (res) {
    response.send(res);
    //return res;
  })
});

app.post("/registrarClase", function (request, response) {
  var clase = request.body;
  console.log(clase);
  centro.agregarClase(clase, function (res) {
    if (res != '') {
      console.log("Clase creada");
      response.send(res);
    }
  })
});

app.post("/actualizarClase", function (request, response) {
  var clase = request.body;
  console.log(clase);
  centro.editarClase(clase, function (res) {
    if (res != '') {
      console.log("Clase actualizada");
      response.send(res);
    }
  })
});

app.delete("/eliminarClase", function (request, response) {
  var clase = request.body;
  console.log(clase);
  centro.borrarClase(clase, function (res) {
    if (res != '') {
      console.log("Clase borrada");
      response.send(res);
    }
  })
});

app.post("/agregarActividadEnClase", function (request, response) {
  var clase = request.body.clase;
  var act = request.body.act;
  centro.crearActividadEnClase(clase, act, function (res) {
    if (res != '') {
      console.log("Actividad creada y añadida");
      response.send(res);
    }
  })
});

app.post("/editarActividadEnClase", function (request, response) {
  var clase = request.body.clase;
  var act = request.body.act;
  centro.editarActividadEnClase(clase, act, function (res) {
    if (res != '') {
      console.log("Actividad editada");
      response.send(res);
    }
  })
});

app.delete("/borrarActividadEnClase", function (request, response) {
  var clase = request.body.clase;
  var act = request.body.act;
  centro.borrarActividadEnClase(clase, act, function (res) {
    if (res != '') {
      console.log("Actividad borrada");
      response.send(res);
    }
  })
});

app.get("/verProfesores", function (request, response) {
  centro.mostrarProfesores(function (res) {
    response.send(res);
    //return res;
  })
});

app.post("/registrarProfesor", function (request, response) {
  var profesor = request.body;
  console.log(profesor);
  centro.agregarProfesor(profesor, function (res) {
    if (res != '') {
      console.log("Profesor creado");
      response.send(res);
    }
  })
});

app.post("/actualizarProfesor", function (request, response) {
  var profesor = request.body;
  console.log(profesor);
  console.log("ASD");
  centro.editarProfesor(profesor, function (res) {
    if (res != '') {
      console.log("Profesor actualizado");
      console.log(res);
      response.send(res);
    }
  })
});

app.delete("/eliminarProfesor", function (request, response) {
  var profesor = request.body;
  console.log(profesor);
  centro.borrarProfesor(profesor, function (res) {
    if (res != '') {
      console.log("Profesor borrado");
      response.send(res);
    }
  })
});

app.post("/estudianteIniciarSesion", function (request, response) {
  var est = request.body;
  //console.log(est);
  centro.iniciarSesion(est.email, est.contrasena, function (res) {
    response.send(res);
  })
});

app.post("/obtenerActividadComenzada", function (request, response) {
  var act = request.body;
  centro.obtenerActividadComenzada(act, function (res) {
    response.send(res);
  })
});

app.post("/obtenerActividad", function (request, response) {
  var act = request.body;
  centro.obtenerActividad(act, function (res) {
    response.send(res);
  })
});



server.listen(app.get('port'), function () {
  console.log('Node app se está ejecutando en el puerto', port);
});

ws.lanzarSocketSrv(io, centro);