import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  socket;

  constructor() { }

  setupSocketConnection() {
    this.socket = io();
    this.socket.emit('mi mensaje', 'Hola desde Angular');
    this.socket.on('mi mensaje', (data: string) => {
      console.log(data);
    });
  }


  ini() {
    this.socket=io.connect();
    this.lanzarSocketSrv();
  }
  crearActividadLista = function (socket,actividad) {
    socket.emit('crearActividadLista', actividad);
    console.log("Actividad: " + actividad._id + " está lista.");
  }
  borrarActividadLista = function (socket,actividad) {
    socket.emit('borrarActividadLista', actividad);
    console.log("Actividad: " + actividad._id + " YA NO está lista.");
  }

  lanzarSocketSrv = function () {
    var cli = this;
    this.socket.on('connect', function () {
      console.log("Conectado al servidor de WebSockets");
    });

    this.socket.on('actividadAnadida', function (res) {
      console.log("Se ha añadido una actividad a las listas: " + res._id);
    });

    this.socket.on('actividadBorrada', function (res) {
      console.log("Se ha borrado una actividad a las listas: " + res._id);
    })

    this.socket.on('actividades', function (res) {
      cli.listaActividades.push(res);
        console.log(res);
      //callback(res);

    })
		/*
		this.socket.on('partidaCreada',function(partida){
			console.log("partida creada:",partida);
			cli.idp=partida.idp;
			mostrarPartida(partida);
			mostrarListaJugadores(partida.jugadores);
		});
		this.socket.on('partidas',function(partidas){
			mostrarListaPartidas(partidas);
		});
		this.socket.on('unido',function(partida){
			cli.idp=partida.idp;
			mostrarPartida(partida);
			mostrarListaJugadores(partida.jugadores);
		});
		this.socket.on('nuevoJugador',function(jugadores){
			mostrarListaJugadores(jugadores);
		});
		this.socket.on('saliste',function(){
			mostrarCrearPartida(cli.nick);
			borrarCanvas();
		});
		this.socket.on('saleJugador',function(jugadores){
			mostrarListaJugadores(jugadores);
		});
		this.socket.on('otropreparado',function(jugadores){
			mostrarListaJugadores(jugadores);
		});
		this.socket.on('aJugar',function(data){
			cli.jugador=data.jugadores[cli.nick];
			cli.rival=cli.obtenerRival(data.jugadores);
			mostrarCanvas(data.numJugadores);
		});
		this.socket.on('anotado',function(){ //function(resultados)
			//mostrarListaResultados(resultados)
			console.log("Resultado anotado");
		});
		this.socket.on('finPartida',function(){
			console.log("Fin de la partida");
			alert("Fin de la partida");
			cli.salir();
		});
		this.socket.on("sigueVivo",function(){
			console.log("sigue vivo");
			cli.spriteLocal.volverAInicio();
		});
		this.socket.on("mover",function(operacion,posicion){
			if (cli.spriteRival){
				cli.spriteRival.mover(operacion,posicion);
			}
		});*/
  }

}
