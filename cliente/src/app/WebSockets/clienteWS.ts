import * as io from 'socket.io-client';
import { EstudianteComponent } from '../estudiante/estudiante.component'
export class ClienteWS {
	socket = undefined;
	id = '';
	constructor(id) {
		this.id = id;
	}
	ini() {
		this.socket = io.connect();
		this.lanzarSocketSrv();
	}
	crearActividadLista = function (actividad) {
		this.socket.emit('crearActividadLista', actividad);
		console.log("Actividad: " + actividad._id + " está lista.");
	}
	borrarActividadLista = function (actividad) {
		this.socket.emit('borrarActividadLista', actividad);
		console.log("Actividad: " + actividad._id + " YA NO está lista.");
	}

	/*
	this.crearPartida=function(nombrePartida){
		//this.nombrePartida=nombre;
		this.socket.emit('crearPartida',this.nick,nombrePartida);
   			console.log("usuario "+this.nick+" crea partida "+nombrePartida);
	}
	this.obtenerPartidas=function(){
		this.socket.emit("obtenerPartidas");
	}
	this.unirAPartida=function(idp,nick){
		this.socket.emit("unirAPartida",idp,nick);
	}
	this.salir=function(){
		this.socket.emit("salir",this.idp,this.nick);
	}
	this.preparado=function(){
		$('#preparadoBtn').remove();
		this.socket.emit("preparado",this.idp,this.nick);
	}
	this.enviarResultado=function(){
		this.socket.emit("enviarResultado",this.idp,this.nick);
	}
	this.muereEnemigo=function(enemy){
		this.socket.emit("muereEnemigo",this.idp,this.nick,enemy);
	}
	this.jugadorHerido=function(){
		this.socket.emit("jugadorHerido",this.idp,this.nick);
	}
	this.mover=function(operacion,posicion){
		if(this.rival){
			this.socket.emit("mover",this.idp,this.nick,operacion,posicion);
		}
		
	}
	this.obtenerRival=function(jugadores){
		var rival=undefined;
		for(var key in jugadores){
			if (key!=ws.nick){
				rival=jugadores[key];
			}
		}
		return rival;
	}*/


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