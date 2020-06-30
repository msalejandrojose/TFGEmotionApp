import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Estudiante } from '../../Modelos/modelos'
import { MatMenuModule } from '@angular/material/menu';
import * as moment from 'moment';
import { ProfesorComponent } from '../profesor.component'
import { Clase, Actividad } from '../../Actividad/Actividad'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

declare var $: any;
declare var Swal:any;

@Component({
  selector: 'app-ver-clase',
  templateUrl: './ver-clase.component.html',
  styleUrls: ['./ver-clase.component.css']
})
export class VerClaseComponent implements OnInit {

  @Input() clase;

  constructor(public profesor: ProfesorComponent, public _snackBar: MatSnackBar) { }

  actividades: Actividad[] = [];

  actividad = null;
  vengoDeProfesor=false;
  creandoActividad=false;

  numeroActFinalizadas = 0;
  numeroActComenzadas = 0;
  numeroActSinComenzar = 0;

  editarActividad = false;
  verEstadisticasClase=false;

  listaAlumnos = [];



  //Tabla de actividades
  displayedColumnsActividades = ['nombre', 'profesor', 'estado', 'acciones', 'editarborrar'];
  dataSourceActividades: MatTableDataSource<Actividad>;

  @ViewChild(MatPaginator, null) paginatorA: MatPaginator;
  @ViewChild(MatSort, null) sortA: MatSort;



  async ngOnInit() {

    /*var ju = this;
    console.log(this.clase);
    for (var id in this.clase.actividades) {
      ju.actividades.push(this.clase.actividades[id]);
    }*/
    console.log(this.clase);
    this.actualizarClase();
    var ju = this;
    //this.listaAlumnos=this.estudiantes.getEstudiantes();
    await $.getJSON("/verEstudiantes", function (data) {
      //console.log(data);
      ju.listaAlumnos = data;
    });
    /*for (let i = 0; i < this.clase.actividades.length; i++) {
      console.log(this.clase.actividades[i]);
      if (this.clase.actividades[i]['estado'] == 'Creada') {
        this.numeroActSinComenzar++;
      } else if (this.clase.actividades[i]['estado'] == 'Comenzada') {
        this.numeroActComenzadas++;
      } else if (this.clase.actividades[i]['estado'] == 'Finalizada') {
        this.numeroActFinalizadas++;
      }
    }*/


  }

  actualizar() {
    this.actividades = [];
    this.actividades.length = 0;
    for (var id in this.clase.actividades) {
      this.actividades.push(this.clase.actividades[id]);
    }
    //console.log(this.actividades.reverse());
    this.dataSourceActividades = new MatTableDataSource(this.actividades.reverse());
    this.dataSourceActividades.paginator = this.paginatorA;
    this.dataSourceActividades.sort = this.sortA;
  }

  async actualizarClase() {
    var ju = this;
    /*$.getJSON("/verClase", this.clase, function (data) {
      console.log(data);
      ju.clase = data;
      ju.actividades.length = 0;
      for (var id in ju.clase.actividades) {
        ju.actividades.push(this.clase.actividades[id]);
      }
      ju.dataSourceActividades = new MatTableDataSource(ju.actividades);
      ju.dataSourceActividades.paginator = ju.paginatorA;
      ju.dataSourceActividades.sort = ju.sortA;
    });*/

    $.ajax({
      type: 'POST',
      url: '/verClase',
      data: JSON.stringify(this.clase),
      success: function (data) {
        console.log(data);
        ju.clase = data;
        console.log(ju.clase);
        ju.actividades.length = 0;
        for (var id in ju.clase.actividades) {
          ju.actividades.push(ju.clase.actividades[id]);
        }
        //console.log(ju.actividades.reverse());
        ju.dataSourceActividades = new MatTableDataSource(ju.actividades.reverse());
        ju.dataSourceActividades.paginator = ju.paginatorA;
        ju.dataSourceActividades.sort = ju.sortA;
      },
      contentType: 'application/json',
      dataType: 'json'
    });

  }

  applyFilterA(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceActividades.filter = filterValue;
  }

  cerrarClase() {
    this.profesor.cerrarClase();
  }

  abrirEstadisticasClase(){
    this.verEstadisticasClase=true;
  }

  cerrarEstadisticasClase(){
    this.verEstadisticasClase=false;
  }

  actualizarActividad(actividad){
    var ju = this;
    $.ajax({
      type: 'POST',
      url: '/actualizarActividad',
      data: JSON.stringify(actividad),
      success: function (data) {
        $.ajax({
          type: 'POST',
          url: '/verClase',
          data: JSON.stringify(this.clase),
          success: function (data) {
            console.log(data);
            ju.clase = data;
            console.log(ju.clase);
            ju.actividades.length = 0;
            for (var id in ju.clase.actividades) {
              ju.actividades.push(ju.clase.actividades[id]);
            }
            //console.log(ju.actividades.reverse());
            ju.dataSourceActividades = new MatTableDataSource(ju.actividades.reverse());
            ju.dataSourceActividades.paginator = ju.paginatorA;
            ju.dataSourceActividades.sort = ju.sortA;
            ju.editarActividad=false;
          },
          contentType: 'application/json',
          dataType: 'json'
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Actividad '" + actividad.nombre + "' editada",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No entrar.',
          confirmButtonText: 'Entrar en la actividad',
          timer: 4000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.value) {
            ju.abrirActividad(actividad);
          }
        })
        //ju.menActividadEditada();
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  crearActividad() {
    //console.log("creamos una actividad");
    this.creandoActividad=true;
    var ju = this;
    var actividadCreate: Actividad = {
      nombre: '',
      profesor: '',
      fecha: '',
      alumnos: [],
      estado: 'Creada',
      resumen: {
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
      },
      clase: { _id: this.clase._id, nombre: this.clase.nombre },
    }
    var num=0;
    for(var i in this.clase.actividades){
      num++;
    }
    num++;
    actividadCreate.nombre = this.clase.nombre + ' ' + num;
    actividadCreate.profesor = this.clase.profesor;
    actividadCreate.fecha = moment().format('LLLL');
    var arrayAlumnos = [];
    for (let i = 0; i < this.clase.alumnos.length; i++) {
      arrayAlumnos.push({
        estudiante: this.clase.alumnos[i].estudiante,
        id_item: '',
        posicion: this.clase.alumnos[i].posicion,
        sensorWebCam:this.clase.alumnos[i].sensorWebCam,
        sensorPulsera:this.clase.alumnos[i].sensorPulsera,
        sensorLed:this.clase.alumnos[i].sensorLed,
        datos: {
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
        }
      });
    }
    actividadCreate.alumnos = arrayAlumnos;
    console.log("estamos a punto de crearla");
    $.ajax({
      type: 'POST',
      url: '/agregarActividadEnClase',
      data: JSON.stringify({ clase: this.clase, act: actividadCreate }),
      success: function (data) {
        //ju.clase = data;
        ju.creandoActividad=false;
        console.log("Actividad creada");
        console.log(data);
        //ju.ultimaActividadCreada = data;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Actividad '" + data.nombre + "' creada",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No entrar.',
          confirmButtonText: 'Entrar en la actividad',
          timer: 4000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.value) {
            ju.abrirActividad(data);
          }
        })
        //console.log(data);
        ju.actualizarClase();
        //ju.menActividadCreada();
        //abrirActividad
      },
      contentType: 'application/json',
      dataType: 'json'
    });




  }
  crearActividadFuera(clase) {
    var ju = this;
    var actividadCreate: Actividad = {
      nombre: '',
      profesor: '',
      fecha: '',
      alumnos: [],
      estado: 'Creada',
      resumen: {
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
      },
      clase: clase,
    }
    actividadCreate.nombre = clase.nombre + ' ' + moment().format('LLLL');
    actividadCreate.profesor = clase.profesor;
    actividadCreate.fecha = moment().format('LLLL');
    var arrayAlumnos = [];
    for (let i = 0; i < clase.alumnos.length; i++) {
      arrayAlumnos.push({
        estudiante: clase.alumnos[i].estudiante,
        id_item: '',
        posicion: clase.alumnos[i].posicion,
        sensorWebCam:clase.alumnos[i].sensorWebCam,
        sensorPulsera:clase.alumnos[i].sensorPulsera,
        sensorLed:clase.alumnos[i].sensorLed,
        datos: {
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
        }
      });
    }
    actividadCreate.alumnos = arrayAlumnos;

    $.ajax({
      type: 'POST',
      url: '/agregarActividadEnClase',
      data: JSON.stringify({ clase: clase, act: actividadCreate }),
      success: function (data) {
        ju.clase = data;
        //ju.ultimaActividadCreada = data;
        console.log("Clase Actualizada");
        console.log(data);
        ju.actualizarClase();
        //ju.menActividadCreada();
        //abrirActividad
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  abrirActividad(clase) {
    this.profesor.abrirActividad(clase);
  }

  editarA(actividad) {
    this.editarActividad = true;
    this.actividad = actividad;
    this.vengoDeProfesor=false;
  }
  cancelar() {
    this.editarActividad = false;
    this.actividad = null;
  }

  borrarA(act) {
    var ju = this;
    Swal.fire({
      title: '¿Estas seguro?',
      text: "La actividad '"+act.nombre+"' se eliminará",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, deseo borrarlo'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          'La actividad '+act.nombre+' se ha borrado.',
          'success',
          $.ajax({
            type: 'DELETE',
            url: '/eliminarActividad',
            data: JSON.stringify(act),
            success: function (data) {
              console.log('actividad borrada');
              console.log(data);
              ju.clase = data;
              //console.log("Actividad eliminado");
              ju.actualizarClase();
              //ju.menActividadBorrada();
            },
            contentType: 'application/json',
            dataType: 'json'
          })
        )
      }
    })
  }

  menActividadBorrada() {
    let men = this._snackBar.open('Actividad Borrada', 'Cerrar', {
      duration: 1000,
    });
  }

  /*menActividadCreada() {
    let men = this._snackBar.open('Actividad Creada', 'Abrir', {
      duration: 5000,
    });

    men.onAction().subscribe(() => {
      this.gestionClases = false;
      this.gestionActividades = true;
      this.crearClase = false;
      this.editarClase = false;
      this.verClase = false;
      this.abrirActividad(this.ultimaActividadCreada);
    })
  }*/

  irHome(){
    this.profesor.abrirActividadActual();
  }

}
