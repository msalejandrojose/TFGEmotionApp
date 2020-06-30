function ServidorWS() {
    this.enviarRemitente = function (socket, mens, datos) {
        socket.emit(mens, datos);
    }
    this.enviarATodos = function (io, nombre, mens, datos) {
        io.sockets.in(nombre).emit(mens, datos);
    }
    this.enviarATodosMenosRemitente = function (socket, nombre, mens, datos) {
        socket.broadcast.to(nombre).emit(mens, datos)
    };
    this.enviarCliente = function (io, socket, id_socket, mens, datos) {
        console.log(io.sockets);
        io.sockets.in(id_socket).emit(mens, datos);
    }
    this.lanzarSocketSrv = function (io, centro) {
        var cli = this;
        io.on('connection', function (socket) {
            //socket.join('123');
            console.log("Nueva conexión");

            socket.on('soyEstudiante', function (estudiante) {
                //socket.join("estudiantes");
                socket.join(estudiante._id);
                //console.log("El id del estudiante es: "+estudiante._id);
                console.log("Conexion asignada al estudiante");
            })
            socket.on('soyProfesor', function () {
                socket.join("profesores");
                console.log("Conexion asignada al profesor");
            })
            socket.on('abrirActividad', function (actividad) {
                //console.log(actividad);
                socket.join(actividad._id);
                console.log("Conexion asignada a la actividad");
            })
            socket.on('meConectoActividad', function (actividad, estudiante) {
                //console.log(actividad);
                cli.enviarATodos(io, actividad._id, 'seHaConectado', estudiante);
            });
            socket.on('listoParaRecibirDatos', function (actividad) {
                for (let i = 0; i < actividad.alumnos.length; i++) {
                    cli.enviarATodos(io, actividad.alumnos[i].estudiante._id, "enviaDatos", actividad);
                }
            })

            socket.on('listoParaNoRecibirDatos', function (actividad) {
                for (let i = 0; i < actividad.alumnos.length; i++) {
                    cli.enviarATodos(io, actividad.alumnos[i].estudiante._id, "noEnviaDatos", actividad);
                }
            })
            socket.on('meDesconectoActividad', function (actividad, estudiante) {
                if (actividad != null || actividad != undefined) {
                    cli.enviarATodos(io, actividad._id, 'seHaDesconectado', estudiante);
                }
            })

            socket.on('crearActividadLista', function (actividad) {

                centro.anadirActividadLista(actividad, function (u) {
                    cli.enviarRemitente(socket, "actividadAnadida", u);
                    //console.log(u.alumnos);
                    //console.log(u.alumnos[i].estudiante._id);
                    //socket.join("profesor");
                    for (let i = 0; i < u.alumnos.length; i++) {
                        cli.enviarATodos(io, u.alumnos[i].estudiante._id, "actividades", u);
                    }

                })

                /*juego.crearPartida(nombrePartida, nick, function (partida) {
                    cli.enviarRemitente(socket, "partidaCreada", partida);
                    socket.join(partida.idp);
                });*/
            });

            socket.on('modificacionDeActividad', function (actividad) {
                for (let i = 0; i < actividad.alumnos.length; i++) {
                    cli.enviarATodos(io, actividad.alumnos[i].estudiante._id, "actividades", actividad);
                }
            })

            socket.on('borrarActividadLista', function (actividad) {
                centro.borrarActividadLista(actividad, function (u) {
                    cli.enviarRemitente(socket, "actividadBorrada", u);
                    for (let i = 0; i < u.alumnos.length; i++) {
                        cli.enviarATodos(io, u.alumnos[i].estudiante._id, "borrarActividad", u);
                    }
                    //cli.enviarATodos(io, "estudiantes", "borrarActividad", u);
                });
            })

            socket.on('envioDeDatos', function (datos, actividad) {
                //console.log(datos);
                if (actividad) {
                    centro.insertarDatos(datos,null);
                    cli.enviarATodos(io, actividad._id, "recepcionDatos", datos);
                }
            })
            
            socket.on('enviarDatosFicticios', function (datos, actividad) {
                //console.log(datos);
                //console.log("Datos Fincticios");
                //console.log(datos);
                //console.log(actividad);
                if (actividad) {
                    centro.insertarDatos(datos,actividad);
                }
            })

            socket.on('empezarActividad', function (actividad) {
                //console.log(datos);
                if (actividad) {
                    centro.empezarActividad(actividad, function (res) {
                        //console.log(res);
                        cli.enviarATodos(io, actividad._id, "actividadEmpezada", res);
                    });

                }
            })

            socket.on('terminarActividad', function (actividad) {
                if (actividad) {
                    centro.terminarActividad(actividad, function (res) {
                        cli.enviarATodos(io, actividad._id, "actividadTerminada", res);
                    });

                }
            })

            socket.on('disconect', function (actividad, estudiante) {
                cli.enviarATodos(io, actividad._id, 'seHaDesconectado', estudiante);
            })

            socket.on('conectarWebCam', function (estudiante) {
                cli.enviarATodos(io, estudiante._id, 'conectarWebCam', estudiante);
            });
            socket.on('conectarLed', function (estudiante) {
                cli.enviarATodos(io, estudiante._id, 'conectarLed', estudiante);
            });
            socket.on('conectarPulsera', function (estudiante) {
                cli.enviarATodos(io, estudiante._id, 'conectarPulsera', estudiante);
            });

            socket.on('webCamConectada', function (actividad, estudiante) {
                if(actividad!=null){
                    cli.enviarATodos(io, actividad._id, 'webCamConectada', estudiante);
                }
                
            })
            socket.on('pulseraConectada', function (actividad, estudiante) {
                if(actividad!=null){
                    cli.enviarATodos(io, actividad._id, 'pulseraConectada', estudiante);
                }
                
            })
            socket.on('ledConectada', function (actividad, estudiante) {
                console.log("Led conectada");
                if(actividad!=null){
                    cli.enviarATodos(io, actividad._id, 'ledConectada', estudiante);
                    console.log("Led conectado");
                }
                
            })

            socket.on('webCamDesonectada', function (actividad, estudiante) {
                if (actividad != null || actividad != undefined) {
                    cli.enviarATodos(io, actividad._id, 'webCamDesonectada', estudiante);
                }
            })
            socket.on('pulseraDesonectada', function (actividad, estudiante) {
                if (actividad != null || actividad != undefined) {
                    cli.enviarATodos(io, actividad._id, 'pulseraDesonectada', estudiante);
                }
            })
            socket.on('ledDesonectada', function (actividad, estudiante) {
                if (actividad != null || actividad != undefined) {
                    cli.enviarATodos(io, actividad._id, 'ledDesonectada', estudiante);
                }
            })

            socket.on('desconectarWebCam', function (estudiante) {
                cli.enviarATodos(io, estudiante._id, 'desconectarWebCam', estudiante);
            });
            socket.on('desconectarLed', function (estudiante) {
                cli.enviarATodos(io, estudiante._id, 'desconectarLed', estudiante);
            });
            socket.on('desconectarPulsera', function (estudiante) {
                cli.enviarATodos(io, estudiante._id, 'desconectarPulsera', estudiante);
            });

            /*
            this.socket.emit('crearActividadLista',this.id,actividad,function(){
			    console.log("Actividad: "+actividad._id+" está lista.");
		    })
            */

            /*
            socket.on('crearPartida', function (nick, nombrePartida) {
                juego.crearPartida(nombrePartida, nick, function (partida) {
                    cli.enviarRemitente(socket, "partidaCreada", partida);
                    socket.join(partida.idp);
                });
            });
            socket.on('obtenerPartidas', function () {
                juego.obtenerPartidasInicial(function (partidas) {
                    cli.enviarRemitente(socket, "partidas", partidas);
                });
            });
            socket.on("unirAPartida", function (idp, nick) {
                var partida = juego.unirAPartida(idp, nick);
                socket.join(idp);
                cli.enviarRemitente(socket, "unido", partida);
                cli.enviarATodosMenosRemitente(socket, idp, "nuevoJugador", partida.jugadores);
            });
            socket.on("salir", function (idp, nick) {
                var partida = juego.salir(idp, nick);
                cli.enviarRemitente(socket, "saliste");
                if (partida != undefined) {
                    cli.enviarATodosMenosRemitente(socket, idp, "saleJugador", partida.jugadores);
                }
            });
            socket.on("preparado", function (idp, nick) {
                juego.jugadorPreparado(idp, nick, function (partida) {
                    cli.enviarATodos(io, idp, "otropreparado", partida.jugadores);
                    if (partida.fase.nombre == "jugando") {
                        cli.enviarATodos(io, idp, "aJugar", { numJugadores: partida.numJugadores, jugadores: partida.jugadores });
                    }
                });
            });

            socket.on("enviarResultado", function (idp, nick) {
                juego.enviarResultado(idp, nick, function (partida) { //function(resultados) 
                    if (partida && partida.fase.nombre == "final") {
                        cli.enviarATodos(io, idp, "finPartida", {}); //resultados
                    }
                    else {
                        cli.enviarRemitente(socket, "anotado"); // ,resultados);
                    }
                });
            });
            socket.on("muereEnemigo", function (idp, nick, enemy) {
                juego.muereEnemigo(idp, nick, enemy, function (partida) {
                    if (partida && partida.fase.nombre == "final") {
                        cli.enviarATodos(io, idp, "finPartida", {}); //resultados
                    }
                    else {
                        cli.enviarRemitente(socket, "anotado"); // ,resultados);
                    }
                })
            });
            socket.on("jugadorHerido", function (idp, nick) {
                juego.jugadorHerido(idp, nick, function (partida) {
                    if (partida && partida.fase.nombre == "final") {
                        cli.enviarATodos(io, idp, "finPartida", {}); //resultados
                        juego.anotarResultado(partida, function () { });

                    }
                    else {
                        cli.enviarRemitente(socket, "sigueVivo"); // ,resultados);
                    }
                })
            });
            socket.on("mover", function (idp, nick, operacion, posicion) {
                cli.enviarATodosMenosRemitente(socket, idp, "mover", operacion, posicion);
            });
            */
        });
    }
}

module.exports.ServidorWS = ServidorWS;