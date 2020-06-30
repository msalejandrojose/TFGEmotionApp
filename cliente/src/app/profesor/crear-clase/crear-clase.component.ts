import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actividad, Clase } from '../../Actividad/Actividad';
import { Alumno } from '../../estudiante/alumno'
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Estudiante, Alumnos, AlumnosClase } from '../../Modelos/modelos'
import { ProfesorComponent } from '../../profesor/profesor.component'

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

  @Input() estudiantes: Estudiante[];
  //estudiantes: Estudiante[];
  //@Input() editarActividad: Actividad;
  //@Output() actividadCreada = new EventEmitter<Object>();

  filteredList1;
  anadirProfesor = false;
  nombreProfesor;
  apellidosProfesor;
  departamentoProfesor;
  listaProfesores = [];
  profesorSeleccionado = {
    nombre: 'Ninguno',
    apellidos: '',
    departamento: '',
  };

  //Prueba de una tabla con filtro y paginacion
  displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
  dataSource: MatTableDataSource<Estudiante>;
  selection = new SelectionModel<Estudiante>(true, []);
  dragPosition = { x: 0, y: 0 };

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  datosPrimarios: FormGroup;
  seleccionAlumno: FormGroup;

  claseCreate: Clase = {
    nombre: '',
    profesor: {},
    alumnos: [],
    actividades: {},
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
  ngOnInit() {
    var ju = this;
    this.datosPrimarios = this._formBuilder.group({
      fromControlNombreActividad: ['', Validators.required],
    });

    $.getJSON("/verProfesores", function (data) {
      for (let i = 0; i < data.length; i++) {
        ju.listaProfesores.push(data[i]);
      }
      ju.filteredList1 = ju.listaProfesores.slice();
    });

  }
  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.estudiantes);
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      arryaAlumnos.push(new AlumnosClase(this.selection.selected[i], { x: 0, y: 0 }));

    }

    this.alumnosSeleccionados = arryaAlumnos;
    /*this.claseCreate.alumnos=arryaAlumnos;
    this.alumnosSeleccionados=this.selection.selected;*/
    console.log(this.alumnosSeleccionados);
  }

  dragEnded($event: CdkDragEnd, item) {
    let posicion = $event.source.getFreeDragPosition();
    item.posicion = $event.source.getFreeDragPosition();
    console.log(item);
    //this.alumno.posicion=this.dragPosition;
  }

  async guardarActividad() {
    var ju = this;
    this.claseCreate.alumnos = this.alumnosSeleccionados;
    this.claseCreate.profesor = this.profesorSeleccionado;
    console.log(this.claseCreate);
    //this.actividadCreada.emit(this.claseCreate);
    $.ajax({
      type: 'POST',
      url: '/registrarClase',
      data: JSON.stringify(ju.claseCreate),
      success: function (data) {
        ju.profesor.actualizarClases(ju.claseCreate, false);
      },
      contentType: 'application/json',
      dataType: 'json'
    });
    this.claseCreate = {
      nombre: '',
      profesor: {},
      alumnos: [],
      actividades: {},
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
        ju.nombreProfesor = '';
        ju.apellidosProfesor = '';
        ju.departamentoProfesor = '';
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
