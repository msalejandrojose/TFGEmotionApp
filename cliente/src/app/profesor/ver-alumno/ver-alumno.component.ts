import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { ProfesorComponent } from '../profesor.component'
import * as moment from 'moment';
import { Chart } from 'chart.js';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-ver-alumno',
  templateUrl: './ver-alumno.component.html',
  styleUrls: ['./ver-alumno.component.css']
})
export class VerAlumnoComponent implements OnInit {

  @Input() alumno;

  estados = [
    { nombre: 'alegria' },
    { nombre: 'asco' },
    { nombre: 'miedo' },
    { nombre: 'sorpresa' },
    { nombre: 'tristeza' },
    { nombre: 'ira' },
    { nombre: 'distraido' },
    { nombre: 'concentrado' },
    { nombre: 'frustrado' },
    { nombre: 'motivado' },
  ];

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

  estadoConjuntoSeleccionado;
  estadoGeneralSeleccionado;



  estadoSeleccionado = 'alegria';

  actividades = [];
  editarActividadesView = false;


  graficaEstados;
  graficaEstadosConjuntos;
  graficaEstadoGlobal;
  configGrafEstados;
  configGrafEstadosConjuntos;
  configEstadoGlobal;
  estadoIndividual = [];
  estadoGeneral = [];
  estadoGlobalAlumno = [
    { nombre: 'alegria', datos: 0 },
    { nombre: 'asco', datos: 0 },
    { nombre: 'miedo', datos: 0 },
    { nombre: 'sorpresa', datos: 0 },
    { nombre: 'tristeza', datos: 0 },
    { nombre: 'ira', datos: 0 },
    { nombre: 'distraido', datos: 0 },
    { nombre: 'concentrado', datos: 0 },
    { nombre: 'frustrado', datos: 0 },
    { nombre: 'motivado', datos: 0 },
  ]
  pulsacionesIndividuales = [];

  labels = [];
  datosIndividuales = {
    alegria: [],
    asco: [],
    miedo: [],
    sorpresa: [],
    tristeza: [],
    ira: [],
    pulsaciones: [],
    distraido: [],
    concentrado: [],
    frustrado: [],
    motivado: [],
  }
  datosGenerales = {
    alegria: [],
    asco: [],
    miedo: [],
    sorpresa: [],
    tristeza: [],
    ira: [],
    pulsaciones: [],
    distraido: [],
    concentrado: [],
    frustrado: [],
    motivado: [],
  }

  displayedColumns = ['select', 'nombre', 'profesor', 'estado'];
  dataSource: MatTableDataSource<Object>;
  selection = new SelectionModel<Object>(true, []);
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  constructor(public profesor: ProfesorComponent) { }

  ngOnInit() {
    var ju = this;
    this.estadoConjuntoSeleccionado = this.estadosConjunto[0];
    this.estadoGeneralSeleccionado = this.estadosConjunto[0];
    $.ajax({
      type: 'POST',
      url: '/verActividadesDeAlumno',
      data: JSON.stringify(ju.alumno),
      success: function (data) {
        ju.actividades = data;
        ju.dataSource = new MatTableDataSource(ju.actividades);
        ju.dataSource.paginator = ju.paginator;
        ju.dataSource.sort = ju.sort;
        ju.dataSource.data.forEach(row => {
          ju.selection.select(row);
        });
        //console.log(ju.actividades);
        ju.computarDatos();
        ju.actualizarGraficas();
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Object): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  seleccionarEstado(estado) {
    this.estadoSeleccionado = estado.nombre;
    this.actualizarEstados();
  }

  seleccionarEstadoConjunto(estado) {
    this.estadoConjuntoSeleccionado = estado;
    this.actualizarEC();
  }

  seleccionarEstadoGeneral(estado) {
    this.estadoGeneralSeleccionado = estado;
    this.actualizarGeneral();
  }

  actualizar() {
    //console.log(this.selection.selected);
    this.actividades.length = 0;
    console.log(this.actividades);
    console.log(this.selection.selected);
    this.actividades = this.selection.selected;
    this.editarActividadesView = false;
    this.estadoGlobalAlumno = [
      { nombre: 'alegria', datos: 0 },
      { nombre: 'asco', datos: 0 },
      { nombre: 'miedo', datos: 0 },
      { nombre: 'sorpresa', datos: 0 },
      { nombre: 'tristeza', datos: 0 },
      { nombre: 'ira', datos: 0 },
      { nombre: 'distraido', datos: 0 },
      { nombre: 'concentrado', datos: 0 },
      { nombre: 'frustrado', datos: 0 },
      { nombre: 'motivado', datos: 0 },
    ]
    this.datosIndividuales = {
      alegria: [],
      asco: [],
      miedo: [],
      sorpresa: [],
      tristeza: [],
      ira: [],
      pulsaciones: [],
      distraido: [],
      concentrado: [],
      frustrado: [],
      motivado: [],
    }
    this.datosGenerales = {
      alegria: [],
      asco: [],
      miedo: [],
      sorpresa: [],
      tristeza: [],
      ira: [],
      pulsaciones: [],
      distraido: [],
      concentrado: [],
      frustrado: [],
      motivado: [],
    }
    this.labels.length=0;
    this.computarDatos();
    this.actualizarGraficas();
    document.getElementById("graficas").style.display = "block";
  }

  cancelar() {
    this.profesor.cerrarEstadisticasAlumno();
  }
  cancelarEdicion() {
    this.editarActividadesView = false;
    document.getElementById("graficas").style.display = "block";
  }
  editarActividades() {
    var ju = this;
    this.editarActividadesView = true;
    document.getElementById("graficas").style.display = "none";
  }

  computarDatos() {
    for (let i = 0; i < this.actividades.length; i++) {
      this.labels.push(this.actividades[i].nombre);
      var alegria = 0;
      var asco = 0;
      var miedo = 0;
      var sorpresa = 0;
      var tristeza = 0;
      var ira = 0;
      var pulsaciones = 0;
      var distraido = 0;
      var concentrado = 0;
      var frustrado = 0;
      var motivado = 0;

      for (let j = 0; j < this.actividades[i].resumen.alegria.length; j++) {
        alegria += this.actividades[i].resumen.alegria[j].y;
      }
      this.datosGenerales.alegria.push(alegria / this.actividades[i].resumen.alegria.length);

      for (let j = 0; j < this.actividades[i].resumen.asco.length; j++) {
        asco += this.actividades[i].resumen.asco[j].y;
      }
      this.datosGenerales.asco.push(asco / this.actividades[i].resumen.asco.length);

      for (let j = 0; j < this.actividades[i].resumen.miedo.length; j++) {
        miedo += this.actividades[i].resumen.miedo[j].y;
      }
      this.datosGenerales.miedo.push(miedo / this.actividades[i].resumen.miedo.length);

      for (let j = 0; j < this.actividades[i].resumen.sorpresa.length; j++) {
        sorpresa += this.actividades[i].resumen.sorpresa[j].y;
      }
      this.datosGenerales.sorpresa.push(sorpresa / this.actividades[i].resumen.sorpresa.length);

      for (let j = 0; j < this.actividades[i].resumen.tristeza.length; j++) {
        tristeza += this.actividades[i].resumen.tristeza[j].y;
      }
      this.datosGenerales.tristeza.push(tristeza / this.actividades[i].resumen.tristeza.length);

      for (let j = 0; j < this.actividades[i].resumen.ira.length; j++) {
        ira += this.actividades[i].resumen.ira[j].y;
      }
      this.datosGenerales.ira.push(ira / this.actividades[i].resumen.ira.length);

      for (let j = 0; j < this.actividades[i].resumen.pulsaciones.length; j++) {
        pulsaciones += this.actividades[i].resumen.pulsaciones[j].y;
      }
      this.datosGenerales.pulsaciones.push(pulsaciones / this.actividades[i].resumen.pulsaciones.length);

      for (let j = 0; j < this.actividades[i].resumen.distraido.length; j++) {
        distraido += this.actividades[i].resumen.distraido[j].y;
      }
      for (let j = 0; j < this.actividades[i].resumen.concentrado.length; j++) {
        concentrado += this.actividades[i].resumen.concentrado[j].y;
      }
      this.datosGenerales.distraido.push(distraido*100 / (distraido+concentrado));
      this.datosGenerales.concentrado.push(concentrado*100 / (distraido+concentrado));

      for (let j = 0; j < this.actividades[i].resumen.frustrado.length; j++) {
        frustrado += this.actividades[i].resumen.frustrado[j].y;
      }
      for (let j = 0; j < this.actividades[i].resumen.motivado.length; j++) {
        motivado += this.actividades[i].resumen.motivado[j].y;
      }
      this.datosGenerales.frustrado.push(frustrado*100 / (frustrado+motivado));
      this.datosGenerales.motivado.push(motivado*100 / (frustrado+motivado));

      for (let j = 0; j < this.actividades[i].alumnos.length; j++) {
        if (this.actividades[i].alumnos[j].estudiante._id == this.alumno._id) {
          for (let q = 0; q < this.estados.length; q++) {
            var a = 0;
            var num=0;
            for (let k = 0; k < this.actividades[i].alumnos[j].datos[this.estados[q].nombre].length; k++) {
              if(this.actividades[i].alumnos[j].datos[this.estados[q].nombre][k].y!=null || this.actividades[i].alumnos[j].datos[this.estados[q].nombre][k].y!=undefined){
                a += this.actividades[i].alumnos[j].datos[this.estados[q].nombre][k].y;
                num++;
              }
            }
            this.datosIndividuales[this.estados[q].nombre].push(a / num);
            num=0;
          }
          var a = 0;
          for (let x = 0; x < this.actividades[i].alumnos[j].datos.pulsaciones.length; x++) {
            a += this.actividades[i].alumnos[j].datos.pulsaciones[x].y;
          }
          this.datosIndividuales.pulsaciones.push(a / this.actividades[i].alumnos[j].datos.pulsaciones.length);
        }
      }
    }
    for (let i = 0; i < this.estadoGlobalAlumno.length; i++) {
      var a = 0;
      //console.log(this.datosIndividuales)
      for (let j = 0; j < this.datosIndividuales[this.estadoGlobalAlumno[i].nombre].length; j++) {
        //console.log(this.datosIndividuales[this.estadoGlobalAlumno[i].nombre][j]);
        a += this.datosIndividuales[this.estadoGlobalAlumno[i].nombre][j];
      }
      //console.log(a);
      this.estadoGlobalAlumno[i].datos = (a / this.datosIndividuales[this.estadoGlobalAlumno[i].nombre].length);
    }
  }

  actualizarGraficas() {
    this.actualizarEstados();
    this.actualizarEC();
    this.actualizarGeneral();
  }

  actualizarEstados() {
    this.configGrafEstados = {
      type: 'line',
      data: {
        datasets: [
          {
            type: 'line',
            label: 'Pulsaciones ' + this.alumno.nombre,
            data: this.datosIndividuales.pulsaciones,
            borderColor: '#E45F4D',
            backgroundColor: '#E45F4D',
            fill: false,
            yAxisID: 'y-axis-2',
          }, {
            type: 'line',
            label: 'Media ' + this.estadoSeleccionado,
            data: this.datosGenerales[this.estadoSeleccionado],
            backgroundColor: 'rgba(74,154,216,0.55)',
            borderColor: 'rgba(74,154,216,0.55)',
            fill: false,
            yAxisID: 'y-axis-1',
          }, {
            type: 'bar',
            label: '' + this.estadoSeleccionado + ' de ' + this.alumno.nombre,
            data: this.datosIndividuales[this.estadoSeleccionado],
            backgroundColor: 'rgba(50,166,255,0.9)',
            borderColor: 'rgba(50,166,255,0.9)',
            barPercentage: 0.9,
            yAxisID: 'y-axis-1',
          }],
        labels: this.labels
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              offsetGridLines: false,
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
    }
    if (this.graficaEstados != null) {
      this.graficaEstados.destroy();
    }
    this.graficaEstados = new Chart('progresoTotal', this.configGrafEstados)
  }

  actualizarEC() {
    var datos = [];
    for (let i = 0; i < this.estadoConjuntoSeleccionado.estados.length; i++) {
      datos.push(
        {
          type: 'bar',
          label: '' + this.estadoConjuntoSeleccionado.estados[i].nombre,
          data: this.datosIndividuales[this.estadoConjuntoSeleccionado.estados[i].nombre],
          backgroundColor: this.estadoConjuntoSeleccionado.estados[i].color,
          borderColor: this.estadoConjuntoSeleccionado.estados[i].color,
          barPercentage: 0.9,
        }
      );
    }
    this.configGrafEstados = {
      type: 'bar',
      data: {
        datasets: datos,
        labels: this.labels
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            gridLines: {
              offsetGridLines: false,
            },
            stacked: true,
          }],
          yAxes: [{
            label: 'Porcentaje',
            type: "linear",
            stacked: true,
            display: true,
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
          }]
        }
      }
    }
    if (this.graficaEstadosConjuntos != null) {
      this.graficaEstadosConjuntos.destroy();
    }
    this.graficaEstadosConjuntos = new Chart('progresoConjuntoTotal', this.configGrafEstados)
  }

  actualizarGeneral() {
    var labels = [];
    var colores = [];
    var datos = [];
    //console.log(this.estadoGlobalAlumno);

    for (let i = 0; i < this.estadoGeneralSeleccionado.estados.length; i++) {
      /*datos.push(
        {
          type: 'bar',
          label: 'Datos ' + this.estadoConjuntoSeleccionado.estados[i].nombre + ' de ' + this.alumno.nombre,
          data: this.datosIndividuales[this.estadoConjuntoSeleccionado.estados[i].nombre],
          backgroundColor: this.estadoConjuntoSeleccionado.estados[i].color,
          borderColor: this.estadoConjuntoSeleccionado.estados[i].color,
          barPercentage: 0.9,
        }
      );*/
      for (let j = 0; j < this.estadoGlobalAlumno.length; j++) {
        if (this.estadoGlobalAlumno[j].nombre == this.estadoGeneralSeleccionado.estados[i].nombre) {
          labels.push(this.estadoGeneralSeleccionado.estados[i].nombre);
          colores.push(this.estadoGeneralSeleccionado.estados[i].color);
          datos.push(this.estadoGlobalAlumno[j].datos);
        }
      }

    }
    //console.log(datos);
    //console.log(labels);
    this.configEstadoGlobal = {
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
    if (this.graficaEstadoGlobal != null) {
      this.graficaEstadoGlobal.destroy();
    }
    this.graficaEstadoGlobal = new Chart('resumenGeneral', this.configEstadoGlobal);
  }


  irHome(){
    this.profesor.abrirActividadActual();
  }
}
