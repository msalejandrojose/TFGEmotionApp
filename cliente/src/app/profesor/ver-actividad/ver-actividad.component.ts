import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Chart } from 'chart.js';
import { Estudiante } from '../../Modelos/modelos'
import { MatMenuModule } from '@angular/material/menu';
import * as moment from 'moment';
import { async } from '@angular/core/testing';
import { ProfesorComponent } from '../../profesor/profesor.component'
import { MatTabsModule, MatTab } from '@angular/material/tabs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import * as h337 from 'heatmap.js'

declare var $: any;
declare var document: any;
declare var Swal: any;
declare var Store: any;

@Component({
  selector: 'app-ver-actividad',
  templateUrl: './ver-actividad.component.html',
  styleUrls: ['./ver-actividad.component.css']
})
export class VerActividadComponent implements OnInit {

  @Input() actividad;
  //@Input() usuariosConectadoss;
  //@Input() aluConectados: Estudiante[];


  //@ViewChild(ProfesorComponent,{static: false}) profesor:ProfesorComponent;

  constructor(public profesor: ProfesorComponent) {
    //console.log(this.usuariosConectados);
    this.comprobarDatos();
  }
  id_actividad;
  aluConectados: Estudiante[] = [];
  estoyComputando = false;
  ColorSad = 'rgba(81,81,255,0.4)'; //Color de la tristeza Correcto
  check: boolean;
  alumnos = [];
  alumnosSelect = [];
  usersConectadosGraf: any;
  usersConectadosGrafEntera: any;
  usuariosConectados = [];
  usuariosTotales = 0;
  porUsuariosConectados = 0;
  dataGrafConectados = [0, 0];
  numeroAlumnos = 0;
  numAlumnosConectados = 0;
  numAlumnosDesconectados = 0;
  numAlumnosTotales = 0;
  vistaGeneral = true;
  vistaMapaDeLaClase = false;
  evolucion = false;
  conectados = false;
  media = false;
  tablaAlumnos = false;
  actualizandoResumen = false;

  numSimulaciones = 0;

  estadoConjuntoSeleccionado = "Estado emocional";
  estadosConjunto = [
    {
      nombre: 'Estado emocional', estados: [
        { nombre: 'alegria', color: 'rgba(255,255,84,1)' },
        { nombre: 'asco', color: 'rgba(0,0,0,0.5)' },
        { nombre: 'miedo', color: 'rgba(0,150,0,1)' },
        { nombre: 'sorpresa', color: 'rgba(89,189,255,1)' },
        { nombre: 'tristeza', color: 'rgba(81,81,255,1)' },
        { nombre: 'ira', color: 'rgba(255,0,0,1)' },
      ]
    },
    {
      nombre: 'Concentrado / Distraido', estados: [
        { nombre: 'distraido', color: 'rgba(70,70,70,1)' },
        { nombre: 'concentrado', color: 'rgba(84,255,84,1)' },
      ]
    },
    {
      nombre: 'Motivado / Frustrado', estados: [
        { nombre: 'frustrado', color: 'rgba(123,123,123,1)' },
        { nombre: 'motivado', color: 'rgba(84,25,80,1)' },
      ]
    }
  ]
  estadosConjunto2 = [
    {
      nombre: 'Estado emocional'
    },
    {
      nombre: 'Concentrado / Distraido'
    },
    {
      nombre: 'Motivado / Frustrado'
    }
  ]
  estadosConjuntoSeleccionado = { nombre: "Estado emocional" };
  datofrustrado = false;
  datomotivado = false;
  datodistraido = false;
  datoconcentrado = false;
  datoAlegria = true;
  datoAsco = true;
  datoMiedo = true;
  datoSorpresa = true;
  datoTristeza = true;
  datoIra = true;

  estados = [
    { nombre: 'alegria', checked: true, color: [255, 255, 84] },
    { nombre: 'asco', checked: false, color: [0, 0, 0] },
    { nombre: 'miedo', checked: false, color: [0, 150, 0] },
    { nombre: 'sorpresa', checked: false, color: [89, 189, 255] },
    { nombre: 'tristeza', checked: false, color: [81, 81, 255] },
    { nombre: 'ira', checked: false, color: [255, 0, 0] },
    { nombre: 'pulsaciones', checked: false, color: [255, 0, 0] },
    { nombre: 'distraido', checked: false, color: [70, 70, 70] },
    { nombre: 'concentrado', checked: false, color: [84, 255, 84] },
    { nombre: 'frustrado', checked: false, color: [123, 123, 123] },
    { nombre: 'motivado', checked: false, color: [84, 25, 80] },
  ];

  estadosGlobales = [
    { nombre: 'alegria', checked: true, color: 'rgba(255,255,84,1)' },
    { nombre: 'asco', checked: true, color: 'rgba(0,0,0,0.5)' },
    { nombre: 'miedo', checked: true, color: 'rgba(0,150,0,1)' },
    { nombre: 'sorpresa', checked: true, color: 'rgba(89,189,255,1)' },
    { nombre: 'tristeza', checked: true, color: 'rgba(81,81,255,1)' },
    { nombre: 'ira', checked: true, color: 'rgba(255,0,0,1)' },
    { nombre: 'distraido', checked: false, color: 'rgba(70,70,70,1)' },
    { nombre: 'concentrado', checked: false, color: 'rgba(84,255,84,1)' },
    { nombre: 'frustrado', checked: false, color: 'rgba(123,123,123,1)' },
    { nombre: 'motivado', checked: false, color: 'rgba(84,25,80,1)' },
  ];

  visualizaciones = [
    { nombre: 'Normal' },
    { nombre: 'Mapa de Calor' }
  ];

  visualizacionSelected = 'Normal';

  resumen = {
    alegria: 0,
    asco: 0,
    miedo: 0,
    sorpresa: 0,
    tristeza: 0,
    ira: 0,
    distraido: 0,
    concentrado: 0,
    frustrado: 0,
    motivado: 0,
    pulsaciones: 0,
  };

  numPulsaciones = 0;

  estadoSeleccionado = 'Estado';
  alumnoSeleccionado = 'Media de la clase';
  alumnoSeleccionadoAlumno = false;
  objAlumnoSeleccionado = null;

  intervaloResumen = null;
  simulandoDatos = false;
  intervaloSimularDatos;

  //alumnosConectados=0;
  alumnosDesconectados = 0;

  configUsersConectados;

  //Datos de las Graficas 

  graficaLineal = null;
  graficaLinealEntera;
  dataLinealesSeleccionados = null;
  configuracionGraficaLineal = {
    type: 'line',
    data: {
      datasets: [
        {
          label: this.estadoSeleccionado,
          backgroundColor: this.ColorSad,
          borderColor: this.ColorSad,
          fill: false,
          data: this.dataLinealesSeleccionados,
        }
      ]

    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: this.estadoSeleccionado,
      },
      legend: {
        position: 'bottom',
      },
      scales: {
        xAxes: [{
          type: 'time',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Tiempo'
          },
          ticks: {
            major: {
              fontStyle: 'bold',
              fontColor: '#FF0000'
            }
          }
        }],
        yAxes: [{
          label: 'Porcentaje',
          type: "linear",
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Porcentaje',
          },
          position: "left",
          id: "y-axis-1",
          gridLines: {
            display: false
          },
          labels: {
            show: true,
          },
          ticks: {
            beginAtZero: true
          }
        }, {
          label: 'Pulsaciones',
          type: "linear",
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Pulsaciones',
          },
          position: "right",
          id: "y-axis-2",
          gridLines: {
            display: false
          },
          labels: {
            show: true,

          }
        }]
      }
    }
  };

  graficaResumen = null;
  graficaResumenEntera;
  datosResumenSeleccionados = {
    alegria: 100,
    asco: 100,
    miedo: 100,
    sorpresa: 100,
    tristeza: 100,
    ira: 100,
    distraido: 100,
    concentrado: 100,
    frustrado: 100,
    motivado: 100,
  };

  configuracionGraficaResumen = {}

  botonCreadaCargando = false;
  botonFinalizadaCargando = false;
  botonReanudarCargando = false;

  //Tabla de estudiantes
  displayedColumnsAlumnos = ['nombre', 'estado', 'pulsaciones', 'webcam', 'pulsera', 'led'];
  dataSourceAlumnos: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, null) paginatorA: MatPaginator;
  @ViewChild(MatSort, null) sortA: MatSort;


  //Tabla de alumnos
  alumnosTabla = [];

  async ngOnInit() {
    var ju = this;
    this.id_actividad = this.actividad._id;
    //console.log(this.actividad);
    this.alumnosTabla.length = 0;
    //console.log(angular.element( document.querySelector( '#some-id' ) ))
    document.getElementById("datoAlegria").style.display = "block";
    document.getElementById("datoAsco").style.display = "block";
    document.getElementById("datoMiedo").style.display = "block";
    document.getElementById("datoSorpresa").style.display = "block";
    document.getElementById("datoTristeza").style.display = "block";
    document.getElementById("datoIra").style.display = "block";
    document.getElementById("datodistraido").style.display = "none";
    document.getElementById("datoconcentrado").style.display = "none";
    document.getElementById("datofrustrado").style.display = "none";
    document.getElementById("datomotivado").style.display = "none";
    this.datoAlegria = true;
    if (this.actividad.estado == 'Comenzada') {
      try {
        $.ajax({
          type: 'POST',
          url: '/obtenerActividadComenzada',
          data: JSON.stringify(ju.actividad),
          success: function (data) {
            if (data != null) {
              ju.actividad = data;
              Swal.fire(
                'Actividad recuperada',
                'La actividad se ha recuperado exitosamente.',
                'success'
              )
            }
          },
          contentType: 'application/json',
          dataType: 'json'
        });
      } catch (e) {
        console.log(e);
      }

      this.intervaloResumen = setInterval(async => {
        this.insertarResumen();
      }, 20000);
    }
    if (this.actividad.estado == 'Creada') {
      document.getElementById("conectadosPequeños").style.display = "none";
    }
    if (this.actividad.estado == "Finalizada") {
      document.getElementById("conectadosPequeños").style.display = "none";
      for (let i = 0; i < this.actividad.alumnos.length; i++) {
        let pul = 0;
        for (let j = 0; j < this.actividad.alumnos[i].datos.pulsaciones.length; j++) {
          pul += this.actividad.alumnos[i].datos.pulsaciones[j].y;

        }
        this.alumnosTabla.push({
          id_item: this.actividad.alumnos[i].id_item,
          nombre: this.actividad.alumnos[i].estudiante.nombre,
          apellidos: this.actividad.alumnos[i].estudiante.apellidos,
          estado: 'Desconectado',
          //pulsaciones: pul / this.actividad.alumnos[i].datos.pulsaciones.length,
          pulsaciones: Math.round(pul / this.actividad.alumnos[i].datos.pulsaciones.length),
          webcam: this.actividad.alumnos[i].sensorWebCam,
          pulsera: this.actividad.alumnos[i].sensorPulsera,
          led: this.actividad.alumnos[i].sensorLed,
          estudiante: this.actividad.alumnos[i].estudiante,
          intervalo: '',
          cargandoC: false,
          cargandoP: false,
          cargandoL: false,
        });
      }
      var alegria = 0;
      for (let j = 0; j < this.actividad.resumen.alegria.length; j++) {
        alegria += this.actividad.resumen.alegria[j].y;
      }
      this.datosResumenSeleccionados.alegria = Math.round(alegria / this.actividad.resumen.alegria.length)
      var asco = 0;
      for (let j = 0; j < this.actividad.resumen.asco.length; j++) {
        asco += this.actividad.resumen.asco[j].y;
      }
      this.datosResumenSeleccionados.asco = Math.round(asco / this.actividad.resumen.asco.length);
      var miedo = 0;
      for (let j = 0; j < this.actividad.resumen.miedo.length; j++) {
        miedo += this.actividad.resumen.miedo[j].y;
      }
      this.datosResumenSeleccionados.miedo = Math.round(miedo / this.actividad.resumen.miedo.length);
      var sorpresa = 0;
      for (let j = 0; j < this.actividad.resumen.sorpresa.length; j++) {
        sorpresa += this.actividad.resumen.sorpresa[j].y;
      }
      this.datosResumenSeleccionados.sorpresa = Math.round(sorpresa / this.actividad.resumen.sorpresa.length);
      var tristeza = 0;
      for (let j = 0; j < this.actividad.resumen.tristeza.length; j++) {
        tristeza += this.actividad.resumen.tristeza[j].y;
      }
      this.datosResumenSeleccionados.tristeza = Math.round(tristeza / this.actividad.resumen.tristeza.length);
      var ira = 0;
      for (let j = 0; j < this.actividad.resumen.ira.length; j++) {
        ira += this.actividad.resumen.ira[j].y;
      }
      this.datosResumenSeleccionados.ira = Math.round(ira / this.actividad.resumen.ira.length);
      var distraido = 0;
      for (let j = 0; j < this.actividad.resumen.distraido.length; j++) {
        distraido += this.actividad.resumen.distraido[j].y;
      }
      this.datosResumenSeleccionados.distraido = Math.round(distraido / this.actividad.resumen.distraido.length);
      var concentrado = 0;
      for (let j = 0; j < this.actividad.resumen.concentrado.length; j++) {
        concentrado += this.actividad.resumen.concentrado[j].y;
      }
      this.datosResumenSeleccionados.concentrado = Math.round(concentrado / this.actividad.resumen.concentrado.length);
      var frustrado = 0;
      for (let j = 0; j < this.actividad.resumen.frustrado.length; j++) {
        frustrado += this.actividad.resumen.frustrado[j].y;
      }
      this.datosResumenSeleccionados.frustrado = Math.round(frustrado / this.actividad.resumen.frustrado.length);
      var motivado = 0;
      for (let j = 0; j < this.actividad.resumen.motivado.length; j++) {
        motivado += this.actividad.resumen.motivado[j].y;
      }
      this.datosResumenSeleccionados.motivado = Math.round(motivado / this.actividad.resumen.motivado.length);
      document.getElementById("progress-alegria").style.width = this.datosResumenSeleccionados.alegria + "%";
      document.getElementById("progress-asco").style.width = this.datosResumenSeleccionados.asco + "%";
      document.getElementById("progress-ira").style.width = this.datosResumenSeleccionados.ira + "%";
      document.getElementById("progress-miedo").style.width = this.datosResumenSeleccionados.miedo + "%";
      document.getElementById("progress-sorpresa").style.width = this.datosResumenSeleccionados.sorpresa + "%";
      document.getElementById("progress-tristeza").style.width = this.datosResumenSeleccionados.tristeza + "%";
      document.getElementById("progress-distraido").style.width = this.datosResumenSeleccionados.distraido + "%";
      document.getElementById("progress-concentrado").style.width = this.datosResumenSeleccionados.concentrado + "%";
      document.getElementById("progress-frustrado").style.width = this.datosResumenSeleccionados.frustrado + "%";
      document.getElementById("progress-motivado").style.width = this.datosResumenSeleccionados.motivado + "%";
      //console.log(this.datosResumenSeleccionados);
    } else {
      for (let i = 0; i < this.actividad.alumnos.length; i++) {
        this.alumnosTabla.push({
          id_item: this.actividad.alumnos[i].id_item,
          nombre: this.actividad.alumnos[i].estudiante.nombre,

          estado: 'Desconectado',
          pulsaciones: '--',
          estudiante: this.actividad.alumnos[i].estudiante,
          webcam: this.actividad.alumnos[i].sensorWebCam,
          pulsera: this.actividad.alumnos[i].sensorPulsera,
          led: this.actividad.alumnos[i].sensorLed,
          intervalo: '',
          cargandoC: false,
          cargandoP: false,
          cargandoL: false,
        });
      }
    }
    if (this.actividad.estado == 'Comenzada') {
      this.activarTodasPulseras();
      this.activarTodasWebCam();
      this.activarTodosLeds();
    }
    //console.log(this.alumnosTabla);

    this.dataSourceAlumnos = new MatTableDataSource(this.alumnosTabla);
    this.dataSourceAlumnos.paginator = this.paginatorA;
    this.dataSourceAlumnos.sort = this.sortA;

  }

  applyFilterA(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceAlumnos.filter = filterValue;
  }


  async cargarGraficas() {
    this.ocultarTodos();
    this.vistaGeneral = true;
    document.getElementById("vistaGeneral").style.display = "block";
    this.alumnos = this.actividad.alumnos;
    this.alumnosSelect.length = 0;
    this.alumnosSelect.push({ nombre: 'media', id: '', checked: true });
    for (let i = 0; i < this.actividad.alumnos.length; i++) {
      this.alumnosSelect.push({ nombre: this.actividad.alumnos[i].estudiante.nombre, id: this.actividad.alumnos[i].estudiante._id, checked: false });
    }
    //this.actividad.estado="Comenzada";
    this.numAlumnosTotales = 0;
    for (var i in this.actividad.alumnos) {
      //this.usuariosTotales++;
      this.numAlumnosTotales++;
    }
    //console.log("Alumnos Totales: " + this.numAlumnosTotales);
    this.numAlumnosDesconectados = this.numAlumnosTotales - this.numAlumnosConectados;
    this.dataGrafConectados = [this.aluConectados.length, this.numAlumnosDesconectados];
    //console.log(this.usuariosTotales);
    this.configUsersConectados = {
      type: 'doughnut',
      data: {
        datasets: [{
          data: this.dataGrafConectados,
          backgroundColor: [
            'rgba(133, 193, 233,1)',
            'rgba(0,0,0,0.1)']
        }],
        labels: [
          'Conectado',
          'Desconectado',
        ],
      },
      options: {
        responsive: true,
        cutoutPercentage: 50,
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        legend: {
          position: 'bottom',
        },
      }
    };
    this.porUsuariosConectados = (this.numAlumnosConectados / this.numAlumnosTotales) * 100;
    this.porUsuariosConectados = Math.round(this.porUsuariosConectados);
    //console.log("Porcentaje:")
    //console.log(this.numAlumnosConectados);
    //console.log(this.usuariosTotales);
    if (this.usersConectadosGraf != null) {
      this.usersConectadosGraf.destroy();
      this.usersConectadosGrafEntera.destroy();
    }
    this.usersConectadosGraf = await new Chart('usersConectados', this.configUsersConectados);
    this.usersConectadosGrafEntera = await new Chart('usersConectadosEntera', this.configUsersConectados);


    //Grafica Lineal 
    /*this.configuracionGraficaLineal = {
      type: 'line',
      data: {
        datasets: [
          {
            label: this.estadoSeleccionado,
            backgroundColor: this.ColorSad,
            borderColor: this.ColorSad,
            fill: false,
            data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
          }
        ]
  
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: this.estadoSeleccionado,
        },
        scales: {
          xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Tiempo'
            },
            ticks: {
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Porcentaje'
            }
          }]
        }
      }
    };
    this.graficaLineal = await new Chart('graficaLineal', this.configuracionGraficaLineal);
    console.log("cargar graficas");*/
    this.actualizarGraficaLineal();
  }

  seleccionarEstadoGlobal(estado) {
    this.estadosConjuntoSeleccionado = estado;
    if (estado.nombre == "Estado emocional") {
      this.estadosGlobales = [
        { nombre: 'alegria', checked: true, color: 'rgba(255,255,84,1)' },
        { nombre: 'asco', checked: true, color: 'rgba(0,0,0,0.5)' },
        { nombre: 'miedo', checked: true, color: 'rgba(0,150,0,1)' },
        { nombre: 'sorpresa', checked: true, color: 'rgba(89,189,255,1)' },
        { nombre: 'tristeza', checked: true, color: 'rgba(81,81,255,1)' },
        { nombre: 'ira', checked: true, color: 'rgba(255,0,0,1)' },
        { nombre: 'distraido', checked: false, color: 'rgba(70,70,70,1)' },
        { nombre: 'concentrado', checked: false, color: 'rgba(84,255,84,1)' },
        { nombre: 'frustrado', checked: false, color: 'rgba(123,123,123,1)' },
        { nombre: 'motivado', checked: false, color: 'rgba(84,25,80,1)' },
      ];
    } else if (estado.nombre == "Concentrado / Distraido") {
      this.estadosGlobales = [
        { nombre: 'alegria', checked: false, color: 'rgba(255,255,84,1)' },
        { nombre: 'asco', checked: false, color: 'rgba(0,0,0,0.5)' },
        { nombre: 'miedo', checked: false, color: 'rgba(0,150,0,1)' },
        { nombre: 'sorpresa', checked: false, color: 'rgba(89,189,255,1)' },
        { nombre: 'tristeza', checked: false, color: 'rgba(81,81,255,1)' },
        { nombre: 'ira', checked: false, color: 'rgba(255,0,0,1)' },
        { nombre: 'distraido', checked: true, color: 'rgba(70,70,70,1)' },
        { nombre: 'concentrado', checked: true, color: 'rgba(84,255,84,1)' },
        { nombre: 'frustrado', checked: false, color: 'rgba(123,123,123,1)' },
        { nombre: 'motivado', checked: false, color: 'rgba(84,25,80,1)' },
      ];
    } else if (estado.nombre = "Motivado / Frustrado") {
      this.estadosGlobales = [
        { nombre: 'alegria', checked: false, color: 'rgba(255,255,84,1)' },
        { nombre: 'asco', checked: false, color: 'rgba(0,0,0,0.5)' },
        { nombre: 'miedo', checked: false, color: 'rgba(0,150,0,1)' },
        { nombre: 'sorpresa', checked: false, color: 'rgba(89,189,255,1)' },
        { nombre: 'tristeza', checked: false, color: 'rgba(81,81,255,1)' },
        { nombre: 'ira', checked: false, color: 'rgba(255,0,0,1)' },
        { nombre: 'distraido', checked: false, color: 'rgba(70,70,70,1)' },
        { nombre: 'concentrado', checked: false, color: 'rgba(84,255,84,1)' },
        { nombre: 'frustrado', checked: true, color: 'rgba(123,123,123,1)' },
        { nombre: 'motivado', checked: true, color: 'rgba(84,25,80,1)' },
      ];
    }
    this.actualizarGraficaGlobal();
  }

  ngAfterViewInit() {
    this.cargarGraficas();
    this.actualizarGraficaGlobal();
  }

  comprobarDatos() {
    setInterval(async () => {
      //console.log(this.aluConectados);
      if (this.numAlumnosConectados != this.aluConectados.length) {
        this.numAlumnosConectados = this.aluConectados.length;
        //console.log(this.numAlumnosConectados);
        this.numAlumnosDesconectados = this.numAlumnosTotales - this.numAlumnosConectados;
        this.dataGrafConectados = [this.numAlumnosConectados, this.numAlumnosDesconectados];
        //console.log(this.dataGrafConectados);
        this.porUsuariosConectados = (this.numAlumnosConectados / this.numAlumnosTotales) * 100;
        this.porUsuariosConectados = Math.round(this.porUsuariosConectados);
        //console.log("Porcentaje:")
        //console.log(this.numAlumnosConectados);
        //console.log(this.usuariosTotales);
        //console.log(this.usuariosTotales);

        this.configUsersConectados = {
          type: 'doughnut',
          data: {
            datasets: [{
              data: this.dataGrafConectados,
              backgroundColor: [
                'rgba(133, 193, 233,1)',
                'rgba(0,0,0,0.1)']
            }],
            labels: [
              'Conectado',
              'Desconectado',
            ],
          },
          options: {
            responsive: true,
            cutoutPercentage: 50,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
              position: 'bottom',
            },
          }
        };
        if (this.usersConectadosGraf != null) {
          this.usersConectadosGraf.destroy();
          this.usersConectadosGrafEntera.destroy();
        }
        this.usersConectadosGraf = new Chart('usersConectados', this.configUsersConectados);
        this.usersConectadosGrafEntera = new Chart('usersConectadosEntera', this.configUsersConectados);
      }
    }, 1000);
  }

  dragEnded($event: CdkDragEnd, item) {
    //let posicion=$event.source.getFreeDragPosition();
    item.posicion = $event.source.getFreeDragPosition();
    //console.log(item);
    //this.alumno.posicion=this.dragPosition;
  }

  /*comenzar() {
    this.botonCreadaCargando = true;
    this.botonReanudarCargando = true;
    let ju = this;
    let act = this.actividad;
    act.estado = "Comenzada";
    $.ajax({
      type: 'POST',
      url: '/actualizarActividad',
      data: JSON.stringify(act),
      success: function (data) {
        console.log(data);
        ju.actividad = data;
        console.log(ju.actividad);
        ju.profesor.listoParaRecibirDatos(ju.actividad);
  
        ju.intervaloResumen = setInterval(async => {
          ju.insertarResumen();
        }, 20000);
        ju.botonCreadaCargando = false;
        ju.botonReanudarCargando = false;
        ju.actividad.estado = "Comenzada";
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }*/

  comenzar() {
    this.botonCreadaCargando = true;
    this.botonReanudarCargando = true;
    let ju = this;
    let act = this.actividad;
    act.estado = "Comenzada";
    //this.profesor.empezarActividad(this.actividad);
    setTimeout(async => {
      if (this.botonCreadaCargando) {
        this.mensajeProcesoEnMarcha();
      }
    }, 5000);
    setTimeout(async => {
      if (this.botonCreadaCargando) {
        this.mensajeProcesoEnMarcha();
      }
    }, 15000);
    setTimeout(async => {
      if (this.botonCreadaCargando) {
        this.mensajeAlgoHaIdoMal();
      }
    }, 25000);
    $.ajax({
      type: 'POST',
      url: '/empezarActividad',
      data: JSON.stringify(act),
      success: function (data) {
        // console.log(data);
        ju.actividad = data;
        // console.log(ju.actividad);
        ju.profesor.listoParaRecibirDatos(ju.actividad);
        ju.intervaloResumen = setInterval(async => {
          ju.insertarResumen();
        }, 20000);
        ju.botonCreadaCargando = false;
        ju.botonReanudarCargando = false;
        ju.actividad.estado = "Comenzada";
        document.getElementById("conectadosPequeños").style.display = "block";
        document.getElementById("datoAlegria").style.display = "block";
        document.getElementById("datoAsco").style.display = "block";
        document.getElementById("datoMiedo").style.display = "block";
        document.getElementById("datoSorpresa").style.display = "block";
        document.getElementById("datoTristeza").style.display = "block";
        document.getElementById("datoIra").style.display = "block";
        document.getElementById("datodistraido").style.display = "none";
        document.getElementById("datoconcentrado").style.display = "none";
        document.getElementById("datofrustrado").style.display = "none";
        document.getElementById("datomotivado").style.display = "none";
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  actividadEmpezada(actividad) {
    //console.log(actividad);
    this.actividad = actividad;
    this.profesor.listoParaRecibirDatos(this.actividad);
    this.intervaloResumen = setInterval(async => {
      if (this.resumen.alegria > 0) {
        this.insertarResumen();
      }
    }, 20000);
    this.botonCreadaCargando = false;
    this.botonReanudarCargando = false;
    this.actividad.estado = "Comenzada";
  }

  /*terminar() {
    //console.log(this.usuariosConectadoss);
    let ju = this;
    let act = this.actividad;
    act.fecha = moment().format('LLLL');
    act.estado = "Finalizada";
    this.botonFinalizadaCargando = true;
    $.ajax({
      type: 'POST',
      url: '/actualizarActividad',
      data: JSON.stringify(act),
      success: function (data) {
        console.log(data);
        ju.actividad = data;
        ju.profesor.listoParaNoRecibirDatos(ju.actividad);
        clearInterval(ju.intervaloResumen);
        ju.botonFinalizadaCargando = false;
        ju.actividad.estado = "Finalizada";
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }*/

  terminar() {
    this.limpiarMapaClase();
    //console.log(this.usuariosConectadoss);
    clearInterval(this.intervaloSimularDatos);
    this.simulandoDatos = false;
    let ju = this;
    let act = this.actividad;
    act.fecha = moment().format('LLLL');
    act.estado = "Finalizada";
    this.botonFinalizadaCargando = true;
    setTimeout(async => {
      if (this.botonFinalizadaCargando) {
        this.mensajeProcesoEnMarcha();
      }
    }, 5000);
    setTimeout(async => {
      if (this.botonFinalizadaCargando) {
        this.mensajeProcesoEnMarcha();
      }
    }, 15000);
    setTimeout(async => {
      if (this.botonFinalizadaCargando) {
        ju.profesor.listoParaNoRecibirDatos(ju.actividad);
        clearInterval(ju.intervaloResumen);
        this.mensajeAlgoHaIdoMal();
      }
    }, 27000);
    //this.profesor.terminarActividad(this.actividad);
    $.ajax({
      type: 'POST',
      url: '/terminarActividad',
      data: JSON.stringify(act),
      success: function (data) {
        //console.log(data);
        ju.actividad = data;
        ju.profesor.listoParaNoRecibirDatos(ju.actividad);
        clearInterval(ju.intervaloResumen);
        ju.botonFinalizadaCargando = false;
        ju.actividad.estado = "Finalizada";
        ju.cambiarAGeneral();
        ju.limpiarMapaClase();
        //document.getElementById("gUsuariosConectados").style.display = "none";
        document.getElementById("conectadosPequeños").style.display = "none";
        ju.ngOnInit();
        ju.cargarGraficas();
        ju.actualizarGraficaGlobal();
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  async limpiarMapaClase() {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      await console.log(this.alumnosTabla[i].intervalo)
      await clearInterval(this.alumnosTabla[i].intervalo);
      await console.log(this.alumnosTabla[i].intervalo);
      this.alumnosTabla[i].intervalo = setInterval(() => {
        $('#' + this.alumnosTabla[i].id_item + '').css("background-color", 'rgba(255,255,255,1)');
      }, 1)
      await clearInterval(this.alumnosTabla[i].intervalo);
      setTimeout(async => {
        $('#' + this.alumnosTabla[i].id_item + '').css("background-color", 'rgba(255,255,255,1)');
      }, 1500);
    }
  }

  actividadTerminada(actividad) {
    // console.log(actividad);
    this.actividad = actividad;
    this.profesor.listoParaNoRecibirDatos(this.actividad);
    clearInterval(this.intervaloResumen);
    this.botonFinalizadaCargando = false;
    this.actividad.estado = "Finalizada";
  }

  cerrarActividad() {
    //this.actividadCreada.emit("cerrar");
    if (this.actividad.estado == "Creada") {
      this.profesor.listoParaNoRecibirDatos(this.actividad);
    }
    if (this.actividad.estado == "Comenzada") {
      Swal.fire(
        'Se cerrará la aplicación.',
        'El proceso de recolección de datos, seguira ejecutándose en segundo plano.',
        'question'
      );
    }

    clearInterval(this.intervaloResumen);
    this.profesor.cerrarActividad('ok');
  }

  async cambiarAGeneral() {
    this.ocultarTodos();
    document.getElementById("vistaGeneral").style.display = "block";
    this.vistaGeneral = true;
    this.vistaMapaDeLaClase = false;
    //await this.cargarGraficas();
    // console.log("terminado de cargar");
    //await this.cargarGraficas();
    //await this.cambiarAGeneral();
  }

  cambiarAMapa() {
    this.ocultarTodos();
    document.getElementById("vistaMapaDeLaClase").style.display = "block";
    this.vistaMapaDeLaClase = true;
    // console.log(this.vistaGeneral);
  }

  cambiarAConectados() {
    this.ocultarTodos();
    this.conectados = true;

    //document.getElementById("gUsuariosConectados").style.display = "block";
  }

  cambiarAEvolucion() {
    this.ocultarTodos();
    this.evolucion = true;

    document.getElementById("GraficoEvolucion").style.display = "block";
  }

  cambiarAMedia() {
    this.ocultarTodos();
    this.media = true;

    document.getElementById("gEstadoUsuarios").style.display = "block";
  }

  cambiarAAlumnos() {
    this.ocultarTodos();
    this.tablaAlumnos = true;
    document.getElementById("tablaUsuarios").style.display = "block";
  }



  ocultarTodos() {
    document.getElementById("vistaGeneral").style.display = "none";
    document.getElementById("vistaMapaDeLaClase").style.display = "none";
    document.getElementById("GraficoEvolucion").style.display = "none";
    //document.getElementById("gUsuariosConectados").style.display = "none";
    document.getElementById("gEstadoUsuarios").style.display = "none";
    document.getElementById("tablaUsuarios").style.display = "none";
    this.vistaGeneral = false;
    this.vistaMapaDeLaClase = false;
    this.evolucion = false;
    this.conectados = false;
    this.media = false;
    this.tablaAlumnos = false;
  }

  async insertarDatos(datos) {
    //console.log(datos);
    //console.log(datos);
    //console.log(this.actividad.alumnos);
    for (let i = 0; i < this.actividad.alumnos.length; i++) {
      for (let j = 0; j < this.alumnosTabla.length; j++) {
        if (datos.id_item == this.actividad.alumnos[i].id_item && datos.id_item == this.alumnosTabla[j].id_item) {
          if (!this.estoyComputando) {
            if (this.alumnosTabla[j].webcam) {
              this.resumen.alegria += datos.alegria.y;
              this.resumen.asco += datos.asco.y;
              this.resumen.concentrado += datos.concentrado.y;
              this.resumen.distraido += datos.distraido.y;
              this.resumen.frustrado += datos.frustrado.y;
              this.resumen.ira += datos.ira.y;
              this.resumen.miedo += datos.miedo.y;
              this.resumen.motivado += datos.motivado.y;
              this.resumen.sorpresa += datos.sorpresa.y;
              this.resumen.tristeza += datos.tristeza.y;
              this.actividad.alumnos[i].datos.alegria.push({ x: datos.alegria.x, y: datos.alegria.y });
              this.actividad.alumnos[i].datos.asco.push({ x: datos.asco.x, y: datos.asco.y });
              this.actividad.alumnos[i].datos.ira.push({ x: datos.ira.x, y: datos.ira.y });
              this.actividad.alumnos[i].datos.miedo.push({ x: datos.miedo.x, y: datos.miedo.y });
              this.actividad.alumnos[i].datos.sorpresa.push({ x: datos.sorpresa.x, y: datos.sorpresa.y });
              this.actividad.alumnos[i].datos.tristeza.push({ x: datos.tristeza.x, y: datos.tristeza.y });

              this.actividad.alumnos[i].datos.tiempo.push({ x: datos.tiempo.x, y: datos.tiempo.y })
              this.actividad.alumnos[i].datos.distraido.push({ x: datos.distraido.x, y: datos.distraido.y })
              this.actividad.alumnos[i].datos.concentrado.push({ x: datos.concentrado.x, y: datos.concentrado.y });
              this.actividad.alumnos[i].datos.frustrado.push({ x: datos.frustrado.x, y: datos.frustrado.y });
              this.actividad.alumnos[i].datos.motivado.push({ x: datos.motivado.x, y: datos.motivado.y });
              $('#' + datos.id_item + '').css("background-color", datos.color);
              this.alumnosTabla[i].estado = datos.estadoEmocional;
            }
            else {
              this.alumnosTabla[i].estado = '--';
            }
            if (this.alumnosTabla[j].pulsera) {
              this.resumen.pulsaciones += datos.pulsaciones.y;
              this.numPulsaciones++;
              this.actividad.alumnos[i].datos.pulsaciones.push({ x: datos.pulsaciones.x, y: datos.pulsaciones.y });
              this.alumnosTabla[j].pulsaciones = datos.pulsaciones.y;
              if (datos.pulsaciones.y > 100) {
                this.alumnosTabla[j].intervalo = setInterval(() => {
                  setTimeout(() => {
                    $('#' + datos.id_item + '').css("background-color", datos.color);
                  }, 900);
                  setTimeout(() => {
                    $('#' + datos.id_item + '').css("background-color", 'rgba(255,255,255,1)');
                    console.log("intervalo");
                  }, 100);
                  console.log(this.alumnosTabla[j].intervalo);
                }, 1000);

              } else {
                clearInterval(this.alumnosTabla[j].intervalo);
                //$('#' + datos.id_item + '').fadeTo(5000, 1);
                $('#' + datos.id_item + '').css("background-color", datos.color);
              }
            } else {
              this.alumnosTabla[j].pulsaciones = '--';
              clearInterval(this.alumnosTabla[j].intervalo);

              $('#' + datos.id_item + '').css("background-color", datos.color);
            }
            this.graficaLineal.update();
            this.graficaLinealEntera.update()
          }
        }
      }

    }
  }

  parpadeo() {

  }


  animacion(id) {
    //document.getElementById('formulario').classList.toggle('fade');
    $('#' + id + '').blink({
      delay: 1000
    });
  }

  async insertarResumen() {
    //Datos Emocionales
    let sumaTotalEmociones = 0;
    //console.log(this.resumen);
    let x = moment().format();
    this.estoyComputando = true;
    sumaTotalEmociones = this.resumen.alegria + this.resumen.asco + this.resumen.ira + this.resumen.miedo + this.resumen.sorpresa + this.resumen.tristeza;
    if (sumaTotalEmociones > 0) {
      this.datosResumenSeleccionados.alegria = Math.round((this.resumen.alegria / sumaTotalEmociones) * 100);
      this.datosResumenSeleccionados.asco = Math.round((this.resumen.asco / sumaTotalEmociones) * 100);
      this.datosResumenSeleccionados.ira = Math.round((this.resumen.ira / sumaTotalEmociones) * 100);
      this.datosResumenSeleccionados.miedo = Math.round((this.resumen.miedo / sumaTotalEmociones) * 100);
      this.datosResumenSeleccionados.sorpresa = Math.round((this.resumen.sorpresa / sumaTotalEmociones) * 100);
      this.datosResumenSeleccionados.tristeza = Math.round((this.resumen.tristeza / sumaTotalEmociones) * 100);

      this.actividad.resumen.alegria.push({ x: x, y: this.datosResumenSeleccionados.alegria });
      this.actividad.resumen.asco.push({ x: x, y: this.datosResumenSeleccionados.asco });
      this.actividad.resumen.ira.push({ x: x, y: this.datosResumenSeleccionados.ira });
      this.actividad.resumen.miedo.push({ x: x, y: this.datosResumenSeleccionados.miedo });
      this.actividad.resumen.sorpresa.push({ x: x, y: this.datosResumenSeleccionados.sorpresa });
      this.actividad.resumen.tristeza.push({ x: x, y: this.datosResumenSeleccionados.tristeza });
      try {
        document.getElementById("progress-alegria").style.width = this.datosResumenSeleccionados.alegria + "%";
        document.getElementById("progress-asco").style.width = this.datosResumenSeleccionados.asco + "%";
        document.getElementById("progress-ira").style.width = this.datosResumenSeleccionados.ira + "%";
        document.getElementById("progress-miedo").style.width = this.datosResumenSeleccionados.miedo + "%";
        document.getElementById("progress-sorpresa").style.width = this.datosResumenSeleccionados.sorpresa + "%";
        document.getElementById("progress-tristeza").style.width = this.datosResumenSeleccionados.tristeza + "%";
      } catch (e) {

      }
      //Datos de las pulsaciones
      this.actividad.resumen.pulsaciones.push({ x: x, y: (this.resumen.pulsaciones / this.numPulsaciones) });

      //Datos cognitivos
      let sumaTotalEstadoDisConc = this.resumen.distraido + this.resumen.concentrado;
      this.datosResumenSeleccionados.concentrado = Math.round((this.resumen.concentrado / sumaTotalEstadoDisConc) * 100);
      this.datosResumenSeleccionados.distraido = Math.round((this.resumen.distraido / sumaTotalEstadoDisConc) * 100);
      this.actividad.resumen.distraido.push({ x: x, y: this.datosResumenSeleccionados.concentrado });
      this.actividad.resumen.concentrado.push({ x: x, y: this.datosResumenSeleccionados.concentrado });
      try {
        document.getElementById("progress-distraido").style.width = this.datosResumenSeleccionados.distraido + "%";
        document.getElementById("progress-concentrado").style.width = this.datosResumenSeleccionados.concentrado + "%";
      } catch (e) {

      }
      let sumaTotalEstadoFrusMotiv = this.resumen.frustrado + this.resumen.motivado;
      this.datosResumenSeleccionados.motivado = Math.round((this.resumen.motivado / sumaTotalEstadoFrusMotiv) * 100);
      this.datosResumenSeleccionados.frustrado = Math.round((this.resumen.frustrado / sumaTotalEstadoFrusMotiv) * 100);
      this.actividad.resumen.frustrado.push({ x: x, y: this.datosResumenSeleccionados.frustrado });
      this.actividad.resumen.motivado.push({ x: x, y: this.datosResumenSeleccionados.motivado });
      try {
        document.getElementById("progress-frustrado").style.width = this.datosResumenSeleccionados.frustrado + "%";
        document.getElementById("progress-motivado").style.width = this.datosResumenSeleccionados.motivado + "%";
      } catch (e) {

      }
      this.estoyComputando = false;
      //Datos del tiempo
      this.actividad.resumen.tiempo.push(x);
      console.log("Resumen")
      console.log(this.resumen);
      this.actualizarGraficaGlobal();
      //Reseteo de datos
      this.resumen = {
        alegria: 0,
        asco: 0,
        miedo: 0,
        sorpresa: 0,
        tristeza: 0,
        ira: 0,
        distraido: 0,
        concentrado: 0,
        frustrado: 0,
        motivado: 0,
        pulsaciones: 0,
      };
      this.numPulsaciones = 0;
    }
    // console.log(this.actividad);
  }

  seleccionarEstado(estado) {
    /*console.log(this.estados);
    this.estadoSeleccionado = estado;
    if (this.objAlumnoSeleccionado == null) {
      this.configuracionGraficaLineal = {
        type: 'line',
        data: {
          datasets: [
            {
              label: this.estadoSeleccionado,
              backgroundColor: this.ColorSad,
              borderColor: this.ColorSad,
              fill: false,
              data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
            }
          ]
  
        },
        legend:{
          labels:{
            position: 'bottom',
          }
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: this.estadoSeleccionado,
          },
          scales: {
            xAxes: [{
              type: 'time',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Tiempo'
              },
              ticks: {
                major: {
                  fontStyle: 'bold',
                  fontColor: '#FF0000'
                }
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Porcentaje'
              }
            }]
          }
        }
      };
      this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);
    }
    else {
      for (let i = 0; i < this.actividad.alumnos.length; i++) {
        if (this.actividad.alumnos[i].id_item == this.objAlumnoSeleccionado.id_item) {
          this.configuracionGraficaLineal = {
            type: 'line',
            data: {
              datasets: [
                {
                  label: this.estadoSeleccionado,
                  backgroundColor: this.ColorSad,
                  borderColor: this.ColorSad,
                  fill: false,
                  data: this.actividad.alumnos[i].datos['' + this.estadoSeleccionado + ''],
                }
              ]
  
            },
            options: {
              responsive: true,
              title: {
                display: true,
                text: this.estadoSeleccionado,
              },
              scales: {
                xAxes: [{
                  type: 'time',
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Tiempo'
                  },
                  ticks: {
                    major: {
                      fontStyle: 'bold',
                      fontColor: '#FF0000'
                    }
                  }
                }],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Porcentaje'
                  }
                }]
              }
            }
          };
          this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);
        }
      }
    }*/

  }
  seleccionarAlumno(alumno) {
    /*console.log(this.alumnosSelect);
    this.alumnoSeleccionado = alumno.estudiante.nombre;
    this.objAlumnoSeleccionado = alumno;
    this.alumnoSeleccionadoAlumno = true;
    for (let i = 0; i < this.actividad.alumnos.length; i++) {
      if (this.actividad.alumnos[i].id_item == this.objAlumnoSeleccionado.id_item) {
        this.configuracionGraficaLineal = {
          type: 'line',
          data: {
            datasets: [
              {
                label: this.estadoSeleccionado,
                backgroundColor: this.ColorSad,
                borderColor: this.ColorSad,
                fill: false,
                data: this.actividad.alumnos[i].datos['' + this.estadoSeleccionado + ''],
              }
            ]
  
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: this.estadoSeleccionado,
            },
            scales: {
              xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Tiempo'
                },
                ticks: {
                  major: {
                    fontStyle: 'bold',
                    fontColor: '#FF0000'
                  }
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Porcentaje'
                }
              }]
            }
          }
        };
        this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);
      }
    }*/
  }
  seleccionarMediaAlumnos() {
    //this.actualizarGraficaLineal();
    /*this.alumnoSeleccionado = 'Media de la clase';
    this.objAlumnoSeleccionado = null;
    this.alumnoSeleccionadoAlumno = false;
    //this.actividad.resumen.alegria
    this.configuracionGraficaLineal = {
      type: 'line',
      data: {
        datasets: [
          {
            label: this.estadoSeleccionado,
            backgroundColor: this.ColorSad,
            borderColor: this.ColorSad,
            fill: false,
            data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
          }
        ]
  
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: this.estadoSeleccionado,
        },
        scales: {
          xAxes: [{
            type: 'time',
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Tiempo'
            },
            ticks: {
              major: {
                fontStyle: 'bold',
                fontColor: '#FF0000'
              }
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Porcentaje'
            }
          }]
        }
      }
    };
    this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);*/

  }

  async actualizarGraficaLineal() {
    await setTimeout(async => {
      // console.log("asdasd");
      var datos = [];
      for (let i = 0; i < this.alumnosSelect.length; i++) {
        if (this.alumnosSelect[i].checked) {
          if (this.alumnosSelect[i].nombre == "media") {
            for (let j = 0; j < this.estados.length; j++) {
              if (this.estados[j].checked) {
                if (this.estados[j].nombre == "pulsaciones") {
                  var color = this.colorRGB(this.estados[j].color, i + j)
                  datos.push({
                    label: this.estados[j].nombre + ' de ' + this.alumnosSelect[i].nombre,
                    backgroundColor: color,
                    borderColor: color,
                    fill: false,
                    data: this.actividad.resumen['' + this.estados[j].nombre + ''],
                    yAxisID: 'y-axis-2',
                  });
                } else {
                  var color = this.colorRGB(this.estados[j].color, i + j)
                  datos.push({
                    label: this.estados[j].nombre + ' de ' + this.alumnosSelect[i].nombre,
                    backgroundColor: color,
                    borderColor: color,
                    fill: false,
                    data: this.actividad.resumen['' + this.estados[j].nombre + ''],
                    yAxisID: 'y-axis-1',
                  });
                }

                // console.log(this.alumnosSelect);
                // console.log(this.estados);

              }
            }
          } else {
            for (let h = 0; h < this.actividad.alumnos.length; h++) {
              if (this.alumnosSelect[i].id == this.actividad.alumnos[h].estudiante._id) {
                for (let j = 0; j < this.estados.length; j++) {
                  if (this.estados[j].checked) {
                    if (this.estados[j].nombre == "pulsaciones") {
                      var color = this.colorRGB(this.estados[j].color, i + h)
                      datos.push({
                        label: this.estados[j].nombre + ' de ' + this.alumnosSelect[i].nombre,
                        backgroundColor: color,
                        borderColor: color,
                        fill: false,
                        data: this.actividad.alumnos[h].datos['' + this.estados[j].nombre + ''],
                        yAxisID: 'y-axis-2',
                      });
                    } else {
                      var color = this.colorRGB(this.estados[j].color, i + h)
                      datos.push({
                        label: this.estados[j].nombre + ' de ' + this.alumnosSelect[i].nombre,
                        backgroundColor: color,
                        borderColor: color,
                        fill: false,
                        data: this.actividad.alumnos[h].datos['' + this.estados[j].nombre + ''],
                        yAxisID: 'y-axis-1',
                      });
                    }

                    // console.log(this.alumnosSelect);
                    //console.log(this.estados);

                  }
                }
              }
            }
          }

        }
      }
      this.configuracionGraficaLineal = {
        type: 'line',
        data: {
          datasets: datos

        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: this.estadoSeleccionado,
          },
          legend: {
            position: 'bottom',
          },
          scales: {
            xAxes: [{
              type: 'time',
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Tiempo'
              },
              ticks: {
                major: {
                  fontStyle: 'bold',
                  fontColor: '#FF0000'
                }
              }
            }],
            yAxes: [{
              label: 'Porcentaje',
              type: "linear",
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Porcentaje',
              },
              position: "left",
              id: "y-axis-1",
              gridLines: {
                display: false
              },
              labels: {
                show: true,
              },
              ticks: {
                beginAtZero: true
              }
            }, {
              label: 'Pulsaciones',
              type: "linear",
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Pulsaciones',
              },
              position: "right",
              id: "y-axis-2",
              gridLines: {
                display: false
              },
              labels: {
                show: true,

              }
            }]
          }
        }
      };
      if (this.graficaLineal != null) {
        this.graficaLineal.destroy();
        this.graficaLinealEntera.destroy();
      }
      this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);
      this.graficaLinealEntera = new Chart('graficaLinealEntera', this.configuracionGraficaLineal);
    }, 500);

  }
  graficaGlobal() {

  }

  actualizarGraficaGlobal() {
    // console.log(this.estadosGlobales);
    //setTimeout(async => {


    var labels = [];
    var colores = [];
    var datos = [];

    for (let i = 0; i < this.estadosGlobales.length; i++) {
      if (this.estadosGlobales[i].checked) {
        labels.push(this.estadosGlobales[i].nombre);
        colores.push(this.estadosGlobales[i].color);
        datos.push(this.datosResumenSeleccionados[this.estadosGlobales[i].nombre]);
      }
    }
    this.configUsersConectados = {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          backgroundColor: colores,
          data: datos
        }]
      },
      options: {
        responsive: true,
        cutoutPercentage: 50,
        borderColor: 'rgba(12,12,12,1)',
        legend: {
          position: 'right',
        },
      }
    };
    if (this.graficaResumen != null) {
      this.graficaResumen.destroy();
      this.graficaResumenEntera.destroy();
    }
    this.graficaResumen = new Chart('estadoGlobal', this.configUsersConectados);
    this.graficaResumenEntera = new Chart('estadoGlobalEntero', this.configUsersConectados)
    //}, 500);
  }


  colorRGB(estado, num) {
    //'rgba(81,81,255,0.)'
    // console.log(estado);
    var r = estado[0] - 40 + num * 10;
    var g = estado[1] - 40 + num * 10;
    var a = estado[2] - 40 + num * 10;
    // console.log('rgba(' + r + ',' + g + ',' + a + ')');
    var color = "(" + r + "," + g + "," + a + ",0.8)";
    return "rgba" + color;
  }

  generarNumero() {
    return Math.round(Math.random() * 40);
  }

  async simularDatos() {
    var ju = this;
    // console.log("NumSimulaciones: "+this.numSimulaciones);
    if (!this.simulandoDatos) {
      this.numSimulaciones = 0;
      this.simulandoDatos = true;
      this.actualizarGraficaLineal();
      if (this.numSimulaciones == 0) {
        this.activarTodasPulseras();
        this.activarTodasWebCam();
        this.activarTodosLeds();

      }
      this.intervaloSimularDatos = setInterval(async => {
        for (let i = 0; i < this.actividad.alumnos.length; i++) {
          if (this.numSimulaciones == 0) {
            this.usuarioConectado(this.actividad.alumnos[i].estudiante);
            this.activarTodasPulseras();
            this.activarTodasWebCam();
            this.activarTodosLeds();
          }
          var datos = {};
          var max = 100;
          var alegria = Math.round(Math.random() * (max - 0) + 0);
          max = max - alegria;
          var asco = Math.round(Math.random() * (max - 0) + 0);
          max = max - asco;
          var ira = Math.round(Math.random() * (max - 0) + 0);
          max = max - ira;
          var miedo = Math.round(Math.random() * (max - 0) + 0);
          max = max - miedo;
          var sorpresa = Math.round(Math.random() * (max - 0) + 0);
          max = max - sorpresa;
          var tristeza = Math.round(Math.random() * (max - 0) + 0);
          max = max - tristeza;
          console.log(this.actividad);
          datos['id_actividad'] = this.id_actividad;
          console.log("ID Actividad: " + this.actividad._id);
          datos['id_item'] = this.actividad.alumnos[i].id_item;
          //console.log("Datos generados1");
          let x = moment().format();
          //Estado Emocional
          datos['id_item'] = this.actividad.alumnos[i].id_item;
          //Alegria
          datos['alegria'] = {
            x: x,
            y: alegria,
          }
          //Asco
          datos['asco'] = {
            x: x,
            y: asco,
          }
          //Ira
          datos['ira'] = {
            x: x,
            y: ira,
          }
          //Miedo
          datos['miedo'] = {
            x: x,
            y: miedo,
          }

          //Sorpresa
          datos['sorpresa'] = {
            x: x,
            y: sorpresa,
          }
          //Triteza
          datos['tristeza'] = {
            x: x,
            y: tristeza,
          }
          //console.log("Datos generados2");
          var num = Math.round(Math.random() * ((this.estadosConjunto[0].estados.length - 1) - 0) + 0);
          //console.log(num);
          datos['color'] = this.estadosConjunto[0].estados[num].color;
          datos['estadoEmocional'] = this.estadosConjunto[0].estados[num].nombre;
          datos
          //Estado de las Pulsaciones
          datos['pulsaciones'] = {
            x: x,
            y: Math.round(Math.random() * (130 - 50) + 50),
          }
          //Estado temporal
          datos['tiempo'] = x
          max = 100;
          var distraido = Math.round(Math.random() * (max - 0) + 0);
          var concentrado = 100 - distraido;
          //var concentrado = Math.round(Math.random() * (max - 0) + 0);

          //Estado Cognitivo
          datos['distraido'] = {
            x: x,
            y: distraido,
          }
          datos['concentrado'] = {
            x: x,
            y: concentrado,
          }
          //console.log("Datos generados4");
          max = 100;
          var frustrado = Math.round(Math.random() * (max - 0) + 0);
          var motivado = 100 - frustrado;
          //var motivado = Math.round(Math.random() * (max - 0) + 0);
          datos['frustrado'] = {
            x: x,
            y: frustrado,
          }
          datos['motivado'] = {
            x: x,
            y: motivado,
          };
          //console.log("Datos generados5");
          console.log(datos);
          this.insertarDatos(datos);
          this.profesor.enviarDatos(datos, ju.actividad);
        }
        this.numSimulaciones++;
      }, 7000);
    } else {
      this.simulandoDatos = false;
      clearInterval(this.intervaloSimularDatos);
      this.numSimulaciones == 0;
      for (let i = 0; i < this.actividad.alumnos.length; i++) {
        this.usuarioDesconectado(this.actividad.alumnos[i].estudiante);

      }
      //console.log(this.alumnosTabla);
      for (let i = 0; i < this.alumnosTabla.length; i++) {
        await console.log(this.alumnosTabla[i].intervalo)
        await clearInterval(this.alumnosTabla[i].intervalo);
        await console.log(this.alumnosTabla[i].intervalo);
        this.alumnosTabla[i].intervalo = setInterval(() => {
          $('#' + this.alumnosTabla[i].id_item + '').css("background-color", 'rgba(255,255,255,1)');
        }, 1)
        await clearInterval(this.alumnosTabla[i].intervalo);
        setTimeout(async => {
          $('#' + this.alumnosTabla[i].id_item + '').css("background-color", 'rgba(255,255,255,1)');
        }, 1500);
      }
      //console.log(this.alumnosTabla);
      //this.usuarioDesconectado()
    }
  }

  actualizarResumen() {
    this.actualizandoResumen = true;
    if (this.resumen.alegria >= 20) {
      this.insertarResumen();
    }
    this.actualizandoResumen = false;
  }
  resumenActualizar() {

  }


  mensajeProcesoEnMarcha() {
    let timerInterval;
    Swal.fire({
      title: 'Este proceso puede tardar!',
      timer: 6000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
    })
  }

  mensajeAlgoHaIdoMal() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo ha ido mal, se redirigirá a la pagina de inicio.',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    }).then((result) => {
      this.profesor.salir();
    })
  }

  pintarMapaCalor() {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector('.heatmap')
    });

    // now generate some random data
    var points = [];
    var max = 0;
    var width = 840;
    var height = 400;
    var len = 200;

    while (len--) {
      var val = Math.floor(Math.random() * 100);
      max = Math.max(max, val);
      var point = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        value: val
      };
      points.push(point);
    }
    // heatmap data format
    var data = {
      max: max,
      data: points
    };
    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(data);
  }




  ngOnDestroy() {
    clearInterval(this.intervaloResumen);
  }

  seleccionVisualizacion(visualizacion) {
    this.visualizacionSelected = visualizacion.nombre;
    if (visualizacion.nombre == "Mapa de Calor") {
      //$('.example-box').addClass('item');
      //$('.item').removeClass("example-box");
      this.pintarMapaCalor();
    } else if (visualizacion.nombre == "Normal") {
      //$('.item').addClass('example-box');
      //$('.example-box').removeClass("item");
    }
  }


  seleccionarEstadoConjunto(estado) {
    this.estadoConjuntoSeleccionado = estado.nombre;
    if (this.estadoConjuntoSeleccionado == "Estado emocional") {
      document.getElementById("datoAlegria").style.display = "block";
      document.getElementById("datoAsco").style.display = "block";
      document.getElementById("datoMiedo").style.display = "block";
      document.getElementById("datoSorpresa").style.display = "block";
      document.getElementById("datoTristeza").style.display = "block";
      document.getElementById("datoIra").style.display = "block";
      document.getElementById("datodistraido").style.display = "none";
      document.getElementById("datoconcentrado").style.display = "none";
      document.getElementById("datofrustrado").style.display = "none";
      document.getElementById("datomotivado").style.display = "none";
      this.datoAlegria = true;
      this.datoAsco = true;
      this.datoMiedo = true;
      this.datoSorpresa = true;
      this.datoTristeza = true;
      this.datoIra = true;
      this.datodistraido = false;
      this.datoconcentrado = false;
      this.datofrustrado = false;
      this.datomotivado = false;

    } else if (this.estadoConjuntoSeleccionado == "Concentrado / Distraido") {
      document.getElementById("datoAlegria").style.display = "none";
      document.getElementById("datoAsco").style.display = "none";
      document.getElementById("datoMiedo").style.display = "none";
      document.getElementById("datoSorpresa").style.display = "none";
      document.getElementById("datoTristeza").style.display = "none";
      document.getElementById("datoIra").style.display = "none";
      document.getElementById("datodistraido").style.display = "block";
      document.getElementById("datoconcentrado").style.display = "block";
      document.getElementById("datofrustrado").style.display = "none";
      document.getElementById("datomotivado").style.display = "none";
      this.datodistraido = true;
      this.datoconcentrado = true;
      this.datofrustrado = false;
      this.datomotivado = false;
      this.datoAlegria = false;
      this.datoAsco = false;
      this.datoMiedo = false;
      this.datoSorpresa = false;
      this.datoTristeza = false;
      this.datoIra = false;
    }
    else if (this.estadoConjuntoSeleccionado == "Motivado / Frustrado") {
      document.getElementById("datoAlegria").style.display = "none";
      document.getElementById("datoAsco").style.display = "none";
      document.getElementById("datoMiedo").style.display = "none";
      document.getElementById("datoSorpresa").style.display = "none";
      document.getElementById("datoTristeza").style.display = "none";
      document.getElementById("datoIra").style.display = "none";
      document.getElementById("datodistraido").style.display = "none";
      document.getElementById("datoconcentrado").style.display = "none";
      document.getElementById("datofrustrado").style.display = "block";
      document.getElementById("datomotivado").style.display = "block";
      this.datofrustrado = true;
      this.datomotivado = true;
      this.datodistraido = false;
      this.datoconcentrado = false;
      this.datoAlegria = false;
      this.datoAsco = false;
      this.datoMiedo = false;
      this.datoSorpresa = false;
      this.datoTristeza = false;
      this.datoIra = false;
    }
  }
  activarTodasWebCam() {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (this.simulandoDatos) {
        this.alumnosTabla[i].webcam = true;
      } else {
        this.activarWebCam(this.alumnosTabla[i].estudiante);
      }
    }
    //console.log(this.alumnosTabla);
  }

  activarWebCam(usuario) {

    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        if (this.simulandoDatos) {
          this.alumnosTabla[i].webcam = true;
        } else {
          this.profesor.conectarWebCam(usuario);
          this.alumnosTabla[i].cargandoC = true;
          setTimeout(async => {
            this.alumnosTabla[i].cargandoC = false;
          }, 7000);
        }

      }
    }

  }

  desactivarWebCam(usuario) {
    if (this.simulandoDatos) {
      for (let i = 0; i < this.alumnosTabla.length; i++) {
        if (usuario._id == this.alumnosTabla[i].estudiante._id) {
          this.alumnosTabla[i].webcam = false;
        }
      }
    } else {
      this.profesor.desconectarWebCam(usuario);
    }
  }

  webCamActivada(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].webcam = true;
        this.alumnosTabla[i].cargandoC = false;
      }
    }
  }

  webCamDesconectada(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].webcam = false;
      }
    }
  }

  activarTodasPulseras() {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (this.simulandoDatos) {
        this.alumnosTabla[i].pulsera = true;
      } else {
        this.activarPulsera(this.alumnosTabla[i].estudiante);
      }
    }

    /*for (let i = 0; i < this.actividad.alumnos.length; i++) {
      this.activarPulsera(this.actividad.alumnos[i].estudiante);
    }*/
  }

  activarPulsera(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        if (this.simulandoDatos) {
          this.alumnosTabla[i].pulsera = true;
        } else {
          this.profesor.conectarPulsera(usuario);
          this.alumnosTabla[i].cargandoP = true;
          setTimeout(async => {
            this.alumnosTabla[i].cargandoP = false;
          }, 7000);
        }

      }
    }

  }

  desactivarPulsera(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        if (this.simulandoDatos) {
          this.alumnosTabla[i].pulsera = false;
        } else {
          this.profesor.desconectarPulsera(usuario);
        }

      }
    }
  }

  pulseraActivada(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].pulsera = true;
        this.alumnosTabla[i].cargandoP = false;
      }
    }
  }
  pulseraDesconectada(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].pulsera = false;
      }
    }
  }

  activarTodosLeds() {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (this.simulandoDatos) {
        this.alumnosTabla[i].led = true;
      } else {
        this.activarLed(this.alumnosTabla[i].estudiante);
      }
    }
    /*for (let i = 0; i < this.actividad.alumnos.length; i++) {
      this.activarLed(this.actividad.alumnos[i].estudiante);
    }*/
  }

  activarLed(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        if (this.simulandoDatos) {
          this.alumnosTabla[i].led = true;
        } else {
          this.profesor.conectarLed(usuario);
          this.alumnosTabla[i].cargandoL = true;
          setTimeout(async => {
            this.alumnosTabla[i].cargandoL = false;
          }, 7000);
        }

      }
    }

  }

  desactivarLed(usuario) {
    if (this.simulandoDatos) {
      for (let i = 0; i < this.alumnosTabla.length; i++) {
        if (usuario._id == this.alumnosTabla[i].estudiante._id) {
          this.alumnosTabla[i].led = false;
        }
      }
    } else {
      this.profesor.desconectarLed(usuario);
    }

  }

  ledActivado(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].led = true;
        this.alumnosTabla[i].cargandoL = false;
        //console.log("led activado");
      }
    }

  }
  ledDesconectada(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].led = false;
      }
    }
  }

  usuarioConectado(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].estado = 'Conectado';
        if (!this.usuarioYaConectado(usuario)) {
          this.aluConectados.push(usuario);
        }
        this.comprobarDatos();
      }
    }
  }
  usuarioYaConectado(usuario) {
    let num = 0;
    for (let i = 0; i < this.aluConectados.length; i++) {
      if (this.aluConectados[i]._id == usuario._id) {
        num++;
      }
    }
    if (num == 0) {
      return false;
    } else {
      return true;
    }

  }
  usuarioDesconectado(usuario) {
    for (let i = 0; i < this.alumnosTabla.length; i++) {
      if (usuario._id == this.alumnosTabla[i].estudiante._id) {
        this.alumnosTabla[i].estado = 'Desconectado';
        for (let j = 0; j < this.aluConectados.length; j++) {
          if (this.aluConectados[j]._id == usuario._id) {
            this.aluConectados.splice(j, 1);
          }
        }
      }
    }
    this.comprobarDatos();
  }

}
