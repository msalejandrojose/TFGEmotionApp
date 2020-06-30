import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/cdk/overlay/typings/overlay-directives';
import { Estudiante } from '../Modelos/modelos'
import { SocketioService } from '../socketio.service'
import { ClienteWS } from '../WebSockets/clienteWS'
import { Actividad } from '../Actividad/Actividad'
import * as io from 'socket.io-client';
import { Sensor } from '../estudiante/sensor'
//import { pulseraMiBand } from '../../assets/bundle.js'

import { MiBand } from 'miband/src/miband.js'
import * as moment from 'moment';
declare const faceapi: any;
declare var $: any;
declare var navigator: any;
declare var pulseraMiband: any;
declare var Swal: any;
declare var window: any;

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  @Output() estudianteIniciado = new EventEmitter<Object>();

  ColorHappy = 'rgba(255,255,84,1)'; //Color de la felicidad Correcto
  ColorNeutral = 'rgba(84,255,84,1)'; //Color Neutro Incorrecto
  ColorSad = 'rgba(81,81,255,1)'; //Color de la tristeza Correcto
  ColorAngry = 'rgba(255,0,0,1)'; //Color del enfado Correcto
  ColorFearful = 'rgba(0,150,0,1)'; //Color del miedo Correcto
  ColorDisgusted = 'rgba(0,0,0,0.5)'; //Color del disgusto Incorrecto
  ColorSurprised = 'rgba(89,189,255,1)'; //Color de la Sorpresa Correcto
  ColorHappy2 = [255, 255, 0, 1];
  ColorNeutral2 = [84, 255, 84, 1];
  ColorSad2 = [81, 81, 255, 1];
  ColorAngry2 = [255, 0, 0, 1];
  ColorFearful2 = [0, 150, 0, 1];
  ColorDisgusted2 = [80, 80, 80, 1];
  ColorSurprised2 = [89, 189, 255, 1];
  colorPredominante;
  intervaloNormal;
  intervaloAlto;
  intervaloMuyAlto;
  intervaloAltisimo;

  video;

  iniciando = false;

  displaySize;


  estudiante: Estudiante = {
    _id: '',
    nombre: '',
    apellidos: '',
    clase: '',
    email: '',
    contrasena: '',
  };
  camara: Sensor = {
    nombre: 'Camara',
    estado: 'Desconectado',
    cargando: false,
    data: null
  };
  led: Sensor = {
    nombre: 'Led',
    estado: 'Desconectado',
    cargando: false,
    data: null
  };
  pulsera: Sensor = {
    nombre: 'Pulsera',
    estado: 'Desconectado',
    cargando: false,
    data: null
  };
  noHayEstudiante = true;
  conectadoaActividad = false;

  listaActividades: Actividad[] = [];
  listaGestionActividades = {};
  listaSensores: Sensor[] = [];
  actividadActual;
  id_item;

  socket;
  id = '';
  device;

  intervaloDeEnvio: any = null;
  estoyComputando = false;

  pulsaciones = 0;
  pulsacionesMax = 180;
  pulsacionesMin = 30;

  emocionAlegria = 0;
  emocionTristeza = 0;
  emocionIra = 0;
  emocionMiedo = 0;
  emocionAsco = 0;
  emocionSorpresa = 0;
  emocionNeutra = 0;
  datosTotalesEmocionales = 0;
  contador = 0;


  canvas = null;

  intervaloGenerarDatos = null;
  intervaloPulsaciones = null;
  intervaloEnvio = null;


  band = null;
  chart = [];
  configurarSensores = false;


  constructor(private socketService: SocketioService) {

  }


  ngOnInit() {
    //window.onbeforeunload = this.preguntarAntesDeSalir();
    //this.empezar();

    window.addEventListener("beforeunload", (event) => {
      if (this.conectadoaActividad) {
        //event.preventDefault();
        event.returnValue = "Se ha desconectado de la actividad";
        //console.log(event);

        //this.meDesconectoActividad(this.actividadActual);
        this.desconectarse();
        return event;
      }

    });

    this.listaSensores.push(this.camara);
    this.listaSensores.push(this.led);
    this.listaSensores.push(this.pulsera);

  }
  myFunction() {
    return "Write something clever here...";
  }

  prueba(act) {
    console.log(act);
  }

  async conectarse(actividad) {
    //console.log("Me he conectado a la actividad");
    this.conectadoaActividad = true;
    console.log(actividad);
    this.actividadActual = actividad;
    //console.log(this.actividadActual.alumnos);
    /*for (var key in this.actividadActual.alumnos) {
      if(this.actividadActual.alumnos[key].estudiante._id=this.estudiante._id){
        console.log("Estudiate id: "+this.estudiante._id)
        this.id_item=this.actividadActual.alumnos[key].id_item;
        //console.log(this.id_item);
      }
    }*/
    this.id_item = this.estudiante._id + actividad._id;
    //this.empezar();
    //this.soyEstudiante();
    //this.conectarActividad();
    //console.log("asd");

    //this.conectarLed();
    this.meConectoActividad(this.actividadActual);
    await this.conectarWebCam(this.camara);
    await this.conectarLed(this.led);
    await this.conectarPulsera(this.pulsera);
    //console.log(actividad);
    if (actividad.estado == "Comenzada") {
      this.empezar()
    }
    //this.empezar();
  }

  async desconectarse() {
    var ju = this;
    this.webCamDesconectada(this.actividadActual);
    this.pulseraDesconectada(this.actividadActual);
    this.ledDesconectada(this.actividadActual);
    //console.log("Me he desconectado de la actividad");

    //console.log(this.actividadActual.alumnos);
    /*for (var key in this.actividadActual.alumnos) {
      if(this.actividadActual.alumnos[key].estudiante._id=this.estudiante._id){
        console.log("Estudiate id: "+this.estudiante._id)
        this.id_item=this.actividadActual.alumnos[key].id_item;
        //console.log(this.id_item);
      }
    }*/
    this.id_item = null;
    //this.soyEstudiante();
    //this.conectarActividad();
    //console.log("asd");

    //this.conectarLed();
    this.meDesconectoActividad(ju.actividadActual);
    clearInterval(ju.intervaloDeEnvio);
    this.conectadoaActividad = false;
    this.actividadActual = null;
    clearInterval(ju.intervaloGenerarDatos);
    clearInterval(ju.intervaloDeEnvio);
    console.log(this.intervaloDeEnvio);
    this.listaActividades.length = await 0;
    await this.obtenerActividadesComenzadas();
    //this.empezar();
  }

  limpiar() {
    this.estudiante = {
      _id: '',
      nombre: '',
      apellidos: '',
      clase: '',
      email: '',
      contrasena: '',
    };
  }


  iniciarSesion() {
    var ju = this;
    this.iniciando = true;
    $.ajax({
      type: 'POST',
      url: '/estudianteIniciarSesion',
      data: JSON.stringify(ju.estudiante),
      success: function (data) {
        //console.log(data);
        //console.log(data);
        if (data._id == null) {
          Swal.fire({
            icon: 'error',
            title: 'Usuario no regitrado',
            text: 'No se ha encontrado usuario!',
            timer: 2000,
            timerProgressBar: true,
          });
          ju.limpiar();
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Se ha podido iniciar sesion exitosamente',
            timer: 4000,
            timerProgressBar: true,
          })
          ju.estudiante = data;
          ju.noHayEstudiante = false;
          ju.estudianteIniciado.emit(ju.estudiante);
          ju.id = ju.estudiante._id;
          ju.ini();
          ju.obtenerActividadesComenzadas();
        }
        ju.iniciando = false;


        //ju.socket = new SocketioService(ju.estudiante._id);
        //ju.socket.ini();
        //ju.socketService.setupSocketConnection();
        //ju.conectadoaActividad = true;
        //ju.empezar();
      },
      contentType: 'application/json',
      dataType: 'json'
    });

  }

  obtenerActividadesComenzadas() {
    var ju = this;
    $.ajax({
      type: 'POST',
      url: '/verActividadesComenzadas',
      data: JSON.stringify(ju.estudiante),
      success: function (data) {
        ju.listaActividades = data;
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  async conectarWebCam(sensor) {
    setTimeout(async =>{
      this.camara.cargando=false;
    },7000);
    sensor.cargando = true;
    sensor.data = document.getElementById('video');

    let constraints = {
      audio: false,
      video: {
        width: 720, height: 480
      }
    };
    try {
      if (sensor.data != null || sensor.data != undefined) {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        this.camara.data.srcObject = stream;
        sensor.cargando = false;
        sensor.estado = "Conectado";

        this.webCamConectada(this.actividadActual);
      }

    } catch (e) {
      //errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
      //console.log(e);
      this.navegadorNoCompatible();
    }

  }
  handleSuccess(stream) {
    //window.stream = stream;
    this.camara.data.srcObject = stream;
  }

  conectarWebCam2(sensor) {

    sensor.data = document.getElementById('video');
    try {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(
          (stream) => {
            //console.log(stream)
            //this.video.srcObject = stream;
            sensor.data.srcObject = stream;
            sensor.estado = "Conectado";

          }).catch((err) => console.log(err));
    } catch (err) {
      console.log("Error al conectar la WebCam")
    }




    //this.empezar();
  }

  async empezar() {


    //console.log(this.video.srcObject);
    if (this.camara.data) {
      Promise.all([
        faceapi.nets.ageGenderNet.loadFromUri('assets/modelos'),
        faceapi.nets.faceExpressionNet.loadFromUri('assets/modelos'),
        faceapi.nets.faceLandmark68Net.loadFromUri('assets/modelos'),
        faceapi.nets.faceLandmark68TinyNet.loadFromUri('assets/modelos'),
        faceapi.nets.faceRecognitionNet.loadFromUri('assets/modelos'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('assets/modelos'),
        faceapi.nets.tinyFaceDetector.loadFromUri('assets/modelos'),
        //faceapi.nets.tinyYolov2.loadFromUri('assets/modelos'),
      ]);
      try {
        this.canvas = faceapi.createCanvasFromMedia(this.camara.data)
        document.body.append(this.canvas)
        this.displaySize = { width: this.camara.data.width, height: this.camara.data.height }
        faceapi.matchDimensions(this.canvas, this.displaySize);
        this.intervaloGenerarDatos = setInterval(async () => {

          try {
            var detections = await faceapi.detectSingleFace(this.camara.data, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            //var datos = faceapi.resizeResults(detections, this.displaySize).expressions;
            //var datosFisicos = await faceapi.detectSingleFace(this.camara.data).withFaceLandmarks().withAgeAndGender()

            var datosNeutral = faceapi.resizeResults(detections, this.displaySize).expressions.neutral;
            var datosHappy = faceapi.resizeResults(detections, this.displaySize).expressions.happy;
            var datosSad = faceapi.resizeResults(detections, this.displaySize).expressions.sad;
            var datosAngry = faceapi.resizeResults(detections, this.displaySize).expressions.angry;
            var datosFearful = faceapi.resizeResults(detections, this.displaySize).expressions.fearful;
            var datosSurprised = faceapi.resizeResults(detections, this.displaySize).expressions.surprised;
            var datosDisgusted = faceapi.resizeResults(detections, this.displaySize).expressions.disgusted;
            if (!this.estoyComputando) {
              this.emocionAlegria += datosHappy;
              this.emocionAsco += datosDisgusted;
              this.emocionIra += datosAngry;
              this.emocionMiedo += datosFearful;
              this.emocionSorpresa += datosSurprised;
              this.emocionTristeza += datosSad;
            }
          } catch (error) {
            //console.log("No hay datos que enviar");
            //console.log(error);
          }
        }, 1000)
      } catch (e) {
        //console.log(e);
      }
    }
    this.intervaloDeEnvio = setInterval(async => {
      this.computacionDatos();
    }, 7000);
  }



  async computacionDatos() {
    /*
    push({
        x: moment().format(),
        y: -30
      });
    */
    this.estoyComputando = true;
    let datos = {};
    console.log("COMPUTACION DATOS");
    try {
      datos['id_actividad'] = this.actividadActual._id;
    } catch (e) {
      //console.log(e);
    }
    let x = moment().format();
    if (this.pulsera.estado == "Conectado") {
      datos['pulsaciones'] = {
        x: x,
        y: this.pulsaciones,
      }
    }
    if (this.camara.estado == "Conectado") {


      let predominante = 0;
      //Estado Emocional
      this.datosTotalesEmocionales = this.emocionAlegria + this.emocionAsco + this.emocionIra + this.emocionMiedo + this.emocionSorpresa + this.emocionTristeza;//+this.emocionNeutra;
      datos['id_item'] = this.id_item;
      this.colorPredominante = this.ColorNeutral2;
      //Alegria
      datos['alegria'] = {
        x: x,
        y: Math.round((this.emocionAlegria / this.datosTotalesEmocionales) * 100),
      }
        ;
      if (predominante < datos['alegria'].y) {
        predominante = datos['alegria'].y;
        this.colorPredominante = this.ColorHappy2;
      }

      //Asco
      datos['asco'] = {
        x: x,
        y: Math.round((this.emocionAsco / this.datosTotalesEmocionales) * 100),
      }
      if (predominante < datos['asco'].y) {
        predominante = datos['asco'].y;
        this.colorPredominante = this.ColorDisgusted2;
      }

      //Ira
      datos['ira'] = {
        x: x,
        y: Math.round((this.emocionIra / this.datosTotalesEmocionales) * 100),
      }
      if (predominante < datos['ira'].y) {
        predominante = datos['ira'].y;
        this.colorPredominante = this.ColorAngry2;
      }

      //Miedo
      datos['miedo'] = {
        x: x,
        y: Math.round((this.emocionMiedo / this.datosTotalesEmocionales) * 100),
      }
      if (predominante < datos['miedo']) {
        predominante = datos['miedo'].y;
        this.colorPredominante = this.ColorFearful2;
      }

      //Sorpresa
      datos['sorpresa'] = {
        x: x,
        y: Math.round((this.emocionSorpresa / this.datosTotalesEmocionales) * 100),
      }
      if (predominante < datos['sorpresa']) {
        predominante = datos['sorpresa'].y;
        this.colorPredominante = this.ColorSurprised2;
      }

      //Triteza
      datos['tristeza'] = {
        x: x,
        y: Math.round((this.emocionTristeza / this.datosTotalesEmocionales) * 100),
      }
      if (predominante < datos['tristeza'].y) {
        predominante = datos['tristeza'].y;
        this.colorPredominante = this.ColorSad2;
      }
      predominante = 0;
      /*datos['neutra']=this.emocionNeutra/this.datosTotalesEmocionales;
      if(datos['tristeza']<datos['neutra']){
        this.colorPredominante=this.ColorNeutral2;
      }*/
      if (this.ColorAngry2 == this.colorPredominante) {
        datos['estadoEmocional'] = 'Ira';
      }
      if (this.ColorDisgusted2 == this.colorPredominante) {
        datos['estadoEmocional'] = 'Asco';
      }
      if (this.ColorFearful2 == this.colorPredominante) {
        datos['estadoEmocional'] = 'Miedo';
      }
      if (this.ColorHappy2 == this.colorPredominante) {
        datos['estadoEmocional'] = 'Feliz';
      }
      if (this.ColorSad2 == this.colorPredominante) {
        datos['estadoEmocional'] = 'Triste';
      }
      if (this.ColorSurprised2 == this.colorPredominante) {
        datos['estadoEmocional'] = 'Sorpresa';
      }
      datos['color'] = 'rgba(' + this.colorPredominante[0] + ',' + this.colorPredominante[1] + ',' + this.colorPredominante[2] + ',' + this.colorPredominante[3] + ')';
      //console.log('rgba('+this.colorPredominante[0]+','+this.colorPredominante[1]+','+this.colorPredominante[2]+','+this.colorPredominante[3]+')');
      //$('#estadoAlumno').css('background-color', 'rgba(' + this.colorPredominante[0] + ',' + this.colorPredominante[1] + ',' + this.colorPredominante[2] + ',' + this.colorPredominante[3] + ')');

      if (this.led.data) {
        if (this.pulsera.estado == "Conectado") {
          if (this.pulsaciones < 100) {
            this.ponerColor();
            this.limpiarIntervalos();
          } else if (this.pulsaciones >= 100 && this.pulsaciones < 120) {
            this.limpiarIntervalos();
            this.intervaloAlto = setInterval(async => {
              setTimeout(async => {
                this.ponerColor();
              }, 900);
              setTimeout(async => {
                this.ponerNegro();
              }, 100);
            }, 1000);
          } else if (this.pulsaciones >= 120 && this.pulsaciones < 140) {
            this.limpiarIntervalos();
            this.intervaloMuyAlto = setInterval(async => {
              setTimeout(async => {
                this.ponerColor();
              }, 600);
              setTimeout(async => {
                this.ponerNegro();
              }, 100);
            }, 700);
          } else if (this.pulsaciones >= 140) {
            this.limpiarIntervalos();
            this.intervaloAltisimo = setInterval(async => {
              setTimeout(async => {
                this.ponerColor();
              }, 300);
              setTimeout(async => {
                this.ponerNegro();
              }, 100);
            }, 400);
          }
        }

      }
      this.emocionAlegria = 0;
      this.emocionAsco = 0;
      this.emocionIra = 0;
      this.emocionMiedo = 0;
      this.emocionSorpresa = 0;
      this.emocionTristeza = 0;
      this.emocionNeutra = 0;
      this.datosTotalesEmocionales = 0;

      //Estado de las Pulsaciones

      //Estado temporal
      datos['tiempo'] = x

      //Estado Cognitivo
      datos['distraido'] = {
        x: x,
        y: 0,
      }
      if (this.pulsera.estado == "Conectado") {
        if (datos['pulsaciones'].y > 85 || datos['pulsaciones'].y<50) {
          datos['distraido'] = {
            x: x,
            y: Math.round(datos['sorpresa'].y),
          }
        }
      } else {
        datos['distraido'] = {
          x: x,
          y: Math.round(datos['sorpresa'].y),
        }
      }
      console.log(datos);
      if (datos['alegria'].y == NaN || datos['alegria'].y == null) {
        datos['distraido'] = {
          x: x,
          y: 100,
        }
      }
      console.log(datos);
      datos['concentrado'] = {
        x: x,
        y: Math.round(100 - datos['distraido'].y),
      }
      console.log(datos);
      datos['frustrado'] = {
        x: x,
        y: 0,
      }
      if ((datos['sorpresa'].y + datos['tristeza'].y) > 25) {
        datos['frustrado'] = {
          x: x,
          y: Math.round(datos['frustrado'].y + 25),
        }
      }
      if ((datos['asco'].y + datos['ira'].y) > 25) {
        datos['frustrado'] = {
          x: x,
          y: Math.round(datos['frustrado'].y + 25),
        }
      }
      if ((datos['miedo'].y + datos['tristeza'].y) > 25) {
        datos['frustrado'] = {
          x: x,
          y: Math.round(datos['frustrado'].y + 25),
        }
      }
      if ((datos['sorpresa'].y + datos['ira'].y) > 25) {
        datos['frustrado'] = {
          x: x,
          y: Math.round(datos['frustrado'].y + 25),
        }
      }
      if (datos['alegria'].y == NaN || datos['alegria'].y == null) {
        datos['frustrado'] = {
          x: x,
          y: 100,
        }
      }
      datos['motivado'] = {
        x: x,
        y: Math.round(100 - datos['frustrado'].y),
      };
    }
    console.log("Datos listos para enviar");
    console.log(datos);
    this.enviarDatos(datos);
    //this.enviarEmocionesWebCam(datos);
    this.estoyComputando = false;
  }

  limpiarIntervalos() {
    clearInterval(this.intervaloAlto);
    clearInterval(this.intervaloMuyAlto);
    clearInterval(this.intervaloAltisimo);
  }

  parar() {
    /*this.video.addEventListener('stop', function () {
      console.log("Se ha parado");
    })*/
  }

  pulsar(event) {
    if (event.keyCode === 13 && !event.shiftKey) {
      this.iniciarSesion();
    }
  }

  navegadorNoCompatible() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Navegador no valido',
    })
  }
  noSeHaPodidoConectar(){
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'No se ha podido conectar, comprueba el estado del Bluetooth',
      timer:3000,
      timerProgressBar:true,
    })
  }
  actualizaNavegador() {

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Cierra los programas que utilicen la WebCam y vuelvelo a intentar.',
      timer: 4000,
      timerProgressBar: true,
    }).then(async => {
      if (this.conectadoaActividad) {
        this.desconectarse();
      }
      document.location.reload();
    });
  }

  //Gestion de los Sensore

  conectarSensor(sensor) {
    if (sensor.nombre == "Led") {
      this.conectarLed(sensor);
    }
    if (sensor.nombre == "Camara") {
      this.conectarWebCam(sensor);
      //this.empezar()
    }
    if (sensor.nombre == "Pulsera") {
      this.conectarPulsera(sensor);
    }
  }

  async conectarPulsera(sensor) {
    setTimeout(async =>{
      this.pulsera.cargando=false;
    },7000);
    try {
      sensor.cargando = true;
      var conectado = await pulseraMiband.connect();
      //console.log(conectado);
      if (conectado) {
        sensor.estado = "Conectado";
        this.intervaloPulsaciones = setInterval(async => {
          this.pulsometro(sensor)
        }, 2000);
      } else {
        sensor.cargando = false;
        this.noSeHaPodidoConectar();
      }
    } catch (e) {
      //console.log(e);
      sensor.cargando = false;
      this.navegadorNoCompatible();
    }
  }

  pulsometro(sensor) {
    if (sensor.estado == "Conectado") {
      this.pulsaciones = pulseraMiband.pulsacionesActuales;

      //console.log(this.pulsaciones);
      if (this.pulsaciones > 0) {
        sensor.cargando = false;
        this.pulseraConectada(this.actividadActual);
        //console.log(this.pulsaciones);
      }
    }
  }
  async desconectarSensor(sensor) {
    if (sensor.nombre == "Led") {
      //console.log(sensor);
      sensor.cargando = true;
      this.ponerNegro();
      sensor.data.close();
      sensor.data = null;
      sensor.cargando = false;
      sensor.estado = "Desconectado";
      this.ledDesconectada(this.actividadActual);
    }
    if (sensor.nombre == "Camara") {
      /*navigator.getUserMedia({ audio: false, video: true },
        function (stream) {
          // can also use getAudioTracks() or getVideoTracks()
          var track = stream.getTracks()[0];  // if only one media track
          // ...
          track.stop();
          sensor.data = null;
          sensor.estado = "Desconectado";
        },
        function (error) {
          console.log('getUserMedia() error', error);
        });*/

      ///
      //sensor.data = document.getElementById('video');

      let constraints = {
        audio: false,
        video: {
          width: 720, height: 480
        }
      };
      try {
        sensor.cargando = true;
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        var track = stream.getTracks()[0];  // if only one media track
        // ...
        track.stop();
        sensor.data = null;
        sensor.cargando = false;
        sensor.estado = "Desconectado";
        this.webCamDesconectada(this.actividadActual);
        if (this.intervaloGenerarDatos != null) {
          clearImmediate(this.intervaloGenerarDatos);
        }
      } catch (e) {
        //errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
        //console.log(e);
        //console.log("Has tenido un error");
      }

    }
    if (sensor.nombre == "Pulsera") {
      sensor.cargando = true;
      pulseraMiband.desconnect();
      clearInterval(this.intervaloPulsaciones);
      sensor.data = null;
      sensor.cargando = false;
      sensor.estado = "Desconectado";
      this.pulseraDesconectada(this.actividadActual);
    }
  }

  //Implementacion del led

  async conectarLed(sensor) {
    setTimeout(async =>{
      this.led.cargando=false;
    },7000);
    var ju = this;
    sensor.cargando = true;
    //console.log("Conectandose...");
    try {
      let led = await navigator.hid.requestDevice({
        filters: [{
          vendorId: 0x20a0,
          productId: 0x41e5,
        }]
      });
      //device.open();
      //console.log(this.device);
      //console.log(led);
      if (led.length != 0) {
        this.socket.emit('ledConectada', this.actividadActual, this.estudiante);
        await led[0].open();
        sensor.data = led[0];
        //console.log(sensor.data);
        this.ponerBlanco();
        sensor.cargando = false;
        this.led.estado = "Conectado";
        //await ju.ledConectada(ju.actividadActual);
      } else {
        sensor.cargando = false;
      }


    } catch (err) {
      // No device was selected.
      sensor.cargando = false;
      this.navegadorNoCompatible();
    }
    //console.log(this.listaSensores)

    if (this.device !== undefined) {
      // Add |device| to the UI.
    }

  }

  desconectarCamara() {
    this.desconectarSensor(this.camara);
  }
  conectarCamara() {
    this.conectarSensor(this.camara);
  }

  abrirGestionSensores() {
    this.configurarSensores = true;
  }
  cerrarGestionSensores() {
    this.configurarSensores = false;
  }

  async ponerHappy() {
    await this.fadeToColor(this.led.data, [255, 255, 0]);
  }
  async ponerNeutral() {
    await this.fadeToColor(this.led.data, [84, 255, 84]);
  }
  async ponerSad() {
    await this.fadeToColor(this.led.data, [81, 81, 255]);
  }
  async ponerAngry() {
    await this.fadeToColor(this.led.data, [255, 0, 0]);
  }
  async ponerFearful() {
    await this.fadeToColor(this.led.data, [0, 150, 0]);
  }
  async ponerDisgusted() {
    await this.fadeToColor(this.led.data, [80, 80, 80]);
  }
  async ponerSurprised() {
    await this.fadeToColor(this.led.data, [89, 189, 255]);
  }

  async ponerColor() {
    await this.fadeToColor(this.led.data, [this.colorPredominante[0], this.colorPredominante[1], this.colorPredominante[2]]);
  }
  async ponerNegro() {
    await this.fadeToColor(this.led.data, [0, 0, 0]);
  }
  async ponerBlanco() {
    await this.fadeToColor(this.led.data, [255, 255, 255]);
  }

  async fadeToColor(device, [r, g, b]) {

    const reportId = 1;
    //console.log([r, g, b]);
    //console.log(this.led.data);
    //console.log(device);
    const data = Uint8Array.from([r, g, b]);
    //const negro = Uint8Array.from([0x63, 0, 0, 0, 0x00, 0x10, 0x00, 0x00]);
    try {
      //console.log(data);
      await device.sendFeatureReport(1, data);
      //await device.sendFeatureReport(1,negro);

    } catch (error) {

    }
  }

  ngOnDestroy() {
    if (this.actividadActual != null) {
      this.socket.emit('meDesconectoActividad', this.actividadActual, this.estudiante);
    }
    clearInterval(this.intervaloGenerarDatos);
    clearInterval(this.intervaloPulsaciones);
    clearInterval(this.intervaloDeEnvio);
    if (pulseraMiband != null || pulseraMiband != undefined) {
      pulseraMiband.desconnect();
    }

  }

  //Implementacion de los sockets

  ini() {
    this.socket = io.connect();
    this.lanzarSocketSrv();
    this.soyEstudiante();
  }

  soyEstudiante = function () {
    this.socket.emit('soyEstudiante', this.estudiante);
  }

  crearActividadLista = function (actividad) {
    this.socket.emit('crearActividadLista', actividad);
    //console.log("Actividad: " + actividad._id + " está lista.");
  }
  borrarActividadLista = function (actividad) {
    this.socket.emit('borrarActividadLista', actividad);
    //console.log("Actividad: " + actividad._id + " YA NO está lista.");
  }
  enviarDatos = function (datos) {
    this.socket.emit('envioDeDatos', datos, this.actividadActual);
  }
  meConectoActividad = function (actividad) {
    this.socket.emit('meConectoActividad', actividad, this.estudiante);
  }
  meDesconectoActividad = function (actividad) {
    this.socket.emit('meDesconectoActividad', actividad, this.estudiante);
  }

  webCamConectada = function (actividad) {
    this.socket.emit('webCamConectada', actividad, this.estudiante)
  }
  pulseraConectada = function (actividad) {
    this.socket.emit('pulseraConectada', actividad, this.estudiante)
  }
  ledConectada = function (actividad) {
    console.log("led conectado")
    this.socket.emit('ledConectada', actividad, this.estudiante)
  }

  webCamDesconectada = function (actividad) {
    this.socket.emit('webCamDesonectada', actividad, this.estudiante)
  }
  pulseraDesconectada = function (actividad) {
    this.socket.emit('pulseraDesonectada', actividad, this.estudiante)
  }
  ledDesconectada = function (actividad) {
    this.socket.emit('ledDesonectada', actividad, this.estudiante)
  }


  lanzarSocketSrv = function () {
    var cli = this;
    this.socket.on('connect', function () {
      //console.log("Conectado al servidor de WebSockets");
    });

    this.socket.on('actividadAnadida', function (res) {
      //console.log("Se ha añadido una actividad a las listas: " + res._id);
    });

    this.socket.on('actividadBorrada', function (res) {
      //console.log("Se ha borrado una actividad a las listas: " + res._id);
    })

    this.socket.on('actividades', function (res) {
      /*console.log(res._id);
      console.log(cli.listaGestionActividades[res._id]);
      console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\")
      if (!cli.listaGestionActividades[res._id]) {
        cli.listaGestionActividades[res._id] = res;
        console.log(cli.listaGestionActividades[res._id]);
        cli.listaActividades == null;
        for (var key in cli.listaGestionActividades) {
          cli.listaActividades.push(cli.listaGestionActividades[key]);
        }
      }*/
      //callback(res);
      cli.listaGestionActividades[res._id] = res;
      //console.log(cli.listaGestionActividades);
      //console.log(cli.listaGestionActividades[res._id]);

      cli.listaActividades.length = 0;
      for (var key in cli.listaGestionActividades) {
        //console.log(cli.listaGestionActividades[key]);
        cli.listaActividades.push(cli.listaGestionActividades[key]);
      }
    })

    this.socket.on('borrarActividad', function (res) {
      //console.log(cli.listaGestionActividades[res._id]);
      delete cli.listaGestionActividades[res._id];
      //console.log(cli.listaGestionActividades)
      //console.log(cli.listaGestionActividades[res._id]);

      cli.listaActividades.length = 0;
      //console.log(cli.listaActividades);
      for (var key in cli.listaGestionActividades) {
        //cli.listaActividades.push(cli.listaGestionActividades[key]);
      }

      //callback(res);
    })

    this.socket.on('enviaDatos', function (actividad) {
      //console.log("Listo! voy a enviar datos");
      cli.actividad = actividad;
      cli.empezar();
    });

    this.socket.on('noEnviaDatos', function (actividad) {
      console.log('Ya no voy a enviar datos');
      cli.desconectarse();
    })


    this.socket.on('recepcionEmociones', function (datos) {
      console.log(datos);
    })

    this.socket.on('conectarWebCam', function (estudiante) {
      if (cli.camara.estado == "Conectado") {
        cli.webCamConectada(cli.actividadActual, estudiante);
      } else {
        cli.conectarSensor(cli.camara);
      }
    })
    this.socket.on('conectarLed', function (estudiante) {
      //console.log("Conectar Led");
      //cli.conectarSensor(cli.led);
      if (cli.led.estado == "Conectado") {
        cli.ledConectada(cli.actividadActual, estudiante);
      } else {
        Swal.fire({
          title: '¿Se desea conectar el Led?',
          text: "El led se conectará",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si, deseo conectarlo',
        }).then((result) => {
          if (result.value) {
            cli.conectarLed(cli.led);
          }
        })
      }


    })
    this.socket.on('conectarPulsera', function (estudiante) {
      //console.log("Conectar Pulsera");
      //cli.conectarSensor(cli.pulsera);
      if (cli.pulsera.estado == "Conectado") {
        cli.pulseraConectada(cli.actividadActual, estudiante);
      } else {
        Swal.fire({
          title: '¿Se desea conectar el la pulsera?',
          text: "La pulsera se conectará",
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si, deseo conectarla',
        }).then((result) => {
          if (result.value) {
            cli.conectarPulsera(cli.pulsera);
          }
        })
      }


    })

    this.socket.on('desconectarWebCam', function (estudiante) {
      cli.desconectarSensor(cli.camara);
    })
    this.socket.on('desconectarLed', function (estudiante) {
      cli.desconectarSensor(cli.led);
    })
    this.socket.on('desconectarPulsera', function (estudiante) {
      cli.desconectarSensor(cli.pulsera);
    })
    /*
     this.listaSensores.push(this.camara);
    this.listaSensores.push(this.led);
    this.listaSensores.push(this.pulsera);
    */

  }


}
