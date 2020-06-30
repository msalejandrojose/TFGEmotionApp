import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actividad } from '../../Actividad/Actividad';
import { Alumno } from '../../estudiante/alumno'
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Estudiante, Alumnos } from '../../Modelos/modelos'
import { ProfesorComponent } from '../profesor.component'
import * as moment from 'moment';
import 'moment/locale/es';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  @Input() estudiantes: Estudiante[];
  @Input() editarActividad: Actividad;
  @Output() actividadCreada = new EventEmitter<Object>();

  filteredList1;
  anadirProfesor = false;
  nombreProfesor;
  apellidosProfesor;
  departamentoProfesor;
  listaProfesores = [];
  profesorSeleccionado = {
    nombre: 'Ninguno',
    apellidos:'',
    departamento:'',
  };

  displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
  dataSource: MatTableDataSource<Estudiante>;
  selection = new SelectionModel<Estudiante>(true, []);
  dragPosition = { x: 0, y: 0 };

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  datosPrimarios: FormGroup;

  actividadCreate = {
    nombre: '',
    profesor: {},
    fecha: '',
    alumnos: {},
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
    clase: { _id: '', nombre: 'Sin clase' }
  }

  alumnosSeleccionados = [];

  estudiante = {
    nombre: '',
    apellidos: '',
    clase: '',
    posicionX: 0,
    posicionY: 0,
  }

  constructor(private _formBuilder: FormBuilder, public profesor: ProfesorComponent) {

  }

  async ngOnInit() {
    var ju = this;
    this.datosPrimarios = this._formBuilder.group({
      fromControlNombreActividad:['', Validators.required],
    });
    this.selection.selected.length
    $.getJSON("/verProfesores", function (data) {
      for (let i = 0; i < data.length; i++) {
        ju.listaProfesores.push(data[i]);
      }
      ju.filteredList1 = ju.listaProfesores.slice();
    });

  }
  submitted = false;
  get f() { return this.datosPrimarios.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.datosPrimarios.invalid) {
        return;
    }
}

onReset() {
    this.submitted = false;
    this.datosPrimarios.reset();
}
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.estudiantes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Estudiante): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  comprobarSeleccionados() {
    return (this.selection.selected.length > 0)
  }

  ponerAlumnos() {
    let fila = 0;
    let columna = 0;
    let arryaAlumnos = [];// = this.selection.selected;
    for (let i = 0; i < this.selection.selected.length; i++) {
      //MODIFICADO
      /*if(columna<=5){
        arryaAlumnos.push({
          'nombre':this.selection.selected[i].nombre,
          'apellidos':this.selection.selected[i].apellidos,
          'clase':this.selection.selected[i].clase,

          posicion: {x:0,y:0},
          posicionInicial:{x:columna*70,y:70*fila},
          });
        
        
        //arryaAlumnos[this.selection.selected[i].email]=this.selection.selected[i];
          columna++;
      }else{
        fila++;
        columna=0;
        arryaAlumnos.push({
          'nombre':this.selection.selected[i].nombre,
          'apellidos':this.selection.selected[i].apellidos,
          posicion: {x:0,y:0},
          posicionInicial:{x:columna*70,y:70*fila},
          });
          columna++;
      }*/
      //MODIFICADO
      arryaAlumnos.push(new Alumnos(this.selection.selected[i], { x: 0, y: 0 }, this.actividadCreate, null));

    }

    this.alumnosSeleccionados = arryaAlumnos;
    /*this.actividadCreate.alumnos=arryaAlumnos;
    this.alumnosSeleccionados=this.selection.selected;*/
    console.log(this.alumnosSeleccionados);
  }

  dragEnded($event: CdkDragEnd, item) {
    let posicion = $event.source.getFreeDragPosition();
    item.posicion = $event.source.getFreeDragPosition();
    console.log(item);
    //this.alumno.posicion=this.dragPosition;
  }

  guardarActividad() {
    console.log("Vamos a guardar la actividad");
    //console.log(this.comprobarSeleccionados())
    //this.crearActividad();
    //MODIFICADO
    /*var alumnos=[];
    for(let i = 0;i<this.alumnosSeleccionados.length;i++){
      //alumnos.push({nombre:this.alumnosSeleccionados[i].nombre,apellidos:this.alumnosSeleccionados[i].apellidos,posicion:this.alumnosSeleccionados[i].posicion,posicionInicial:this.alumnosSeleccionados[i].posicionInicial});
      alumnos.push(this.alumnosSeleccionados[i]);
    }
    this.actividadCreate.alumnos=alumnos;
    */
    //MODIFICADO
    this.actividadCreate.profesor=this.profesorSeleccionado;
    this.actividadCreate.fecha = moment().format('LLLL');
    this.actividadCreate.alumnos = this.alumnosSeleccionados;
    console.log(this.actividadCreate);
    this.actividadCreada.emit(this.actividadCreate);
    this.actividadCreate = {
      nombre: '',
      profesor: '',
      fecha: '',
      alumnos: {},
      estado: '',
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
      clase: { _id: '', nombre: 'Sin clase' }
    }
  }

  cerrarModal() {
    this.profesor.cerrarModal();
  }

  verAnadirProfesor() {
    this.anadirProfesor = true;
  }

  cancelarAnadirProfesor() {
    this.anadirProfesor = false;
  }

  async anadirProfesorLista() {
    var ju = this;
    var profesor = {
      nombre: this.nombreProfesor,
      apellidos: this.apellidosProfesor,
      departamento: this.departamentoProfesor,
    }
    $.ajax({
      type: 'POST',
      url: '/registrarProfesor',
      data: JSON.stringify(profesor),
      success: function (data2) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Profesor '" + data2.nombre + "' creado.",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        //ju.profesorSeleccionado = data;
        $.getJSON("/verProfesores", function (data) {
          ju.listaProfesores.length = 0;
          for (let i = 0; i < data.length; i++) {
            ju.listaProfesores.push(data[i]);
          }
          ju.filteredList1 = ju.listaProfesores.slice();
          
        });
        ju.anadirProfesor = false;
        ju.nombreProfesor='';
        ju.apellidosProfesor='';
        ju.departamentoProfesor='';
        ju.selecionarProfesor(data2);
        
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  selecionarProfesor(profesor) {
    console.log(profesor);
    this.profesorSeleccionado = profesor;
    console.log(this.profesorSeleccionado);
  }
  search(value: string) {
    let filter = this.listaProfesores.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    return [...filter];
  }

  seleccionarUnAlumno(){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Hay que seleccionar un alumno como minimo',
      timer:3000,
      timerProgressBar:true,
    })
  }

}