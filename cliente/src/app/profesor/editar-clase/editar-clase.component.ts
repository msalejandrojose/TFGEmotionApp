import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actividad, Clase } from '../../Actividad/Actividad';
import { Estudiante, Alumnos, AlumnosClase } from '../../Modelos/modelos'
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ProfesorComponent } from '../../profesor/profesor.component'

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-editar-clase',
  templateUrl: './editar-clase.component.html',
  styleUrls: ['./editar-clase.component.css']
})
export class EditarClaseComponent implements OnInit {

  @Input() estudiantes: Estudiante[];
  @Input() editarActividad: Clase;

  filteredList1;
  anadirProfesor = false;
  nombreProfesor;
  apellidosProfesor;
  departamentoProfesor;
  listaProfesores = [];
  profesorSeleccionado = {};



  //Prueba de una tabla con filtro y paginacion
  displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
  dataSource: MatTableDataSource<Estudiante>;
  selection = new SelectionModel<Estudiante>(true, []);
  dragPosition = { x: 0, y: 0 };

  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  @ViewChild(MatSort, null) sort: MatSort;

  datosPrimarios: FormGroup;
  seleccionAlumno: FormGroup;

  alumnosSeleccionados = [];
  arryaAlumnos = [];
  arrayAlumnosAntiguos = [];

  constructor(private _formBuilder: FormBuilder, public profesor: ProfesorComponent) { }

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
    this.profesorSeleccionado=ju.editarActividad.profesor;

    for (var i in this.editarActividad.alumnos) {
      console.log(this.editarActividad.alumnos[i]);
      //this.selection.selected.push(this.editarActividad.alumnos[i].estudiante);
      //this.arryaAlumnos.push(new Alumnos(this.editarActividad.alumnos[i].estudiante, { x: 0, y: 0 }, this.editarActividad));
    }/*
    console.log(this.selection);*/
    //this.selection.selected=this.editarActividad.alumnos.
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.estudiantes);
    /*console.log("Prueba");
    console.log(this.dataSource);*/
    this.dataSource.data.forEach(row => {
      for (var i in this.editarActividad.alumnos) {
        if (this.editarActividad.alumnos[i].estudiante._id == row._id) {
          this.selection.select(row);
          this.actualizarr(row);
          this.arrayAlumnosAntiguos.push(new AlumnosClase(this.editarActividad.alumnos[i].estudiante, this.editarActividad.alumnos[i].posicion));
        }
      }
      //this.actualizarr(row);
      console.log(this.arryaAlumnos);
    })
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

  async actualizarr(item) {
    this.arryaAlumnos.push(new AlumnosClase(item, { x: 0, y: 0 }));
    this.alumnosSeleccionados = this.arryaAlumnos;
    this.ponerAlumnos;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      this.dataSource.data.forEach(row => {
        this.selection.select(row);
        //this.arryaAlumnos.push(new Alumnos(row, { x: 0, y: 0 }, this.editarActividad))
        //this.alumnosSeleccionados = this.arryaAlumnos;
        this.ponerAlumnos();
      });
  }

  checkboxLabel(row?: Estudiante): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'}`;
  }

  dragEnded($event: CdkDragEnd, item) {
    let posicion = $event.source.getFreeDragPosition();
    item.posicion = $event.source.getFreeDragPosition();
    //console.log(item);
    //this.alumno.posicion=this.dragPosition;
  }

  comprobarSeleccionados() {
    return (this.selection.selected.length > 0)
  }

  ponerAlumnos() {
    var listaID = {};
    var arrayListaID = [];
    this.arryaAlumnos = [];
    console.log(this.selection.selected.length);
    let fila = 0;
    let columna = 0;
    // = this.selection.selected;
    /*for (let i = 0; i < this.selection.selected.length; i++) {
      this.arryaAlumnos.push(new AlumnosClase(this.selection.selected[i], { x: 0, y: 0 }, this.editarActividad));
    }*/
    for (let i = 0; i < this.selection.selected.length; i++) {
      listaID[this.selection.selected[i]._id] = new AlumnosClase(this.selection.selected[i], { x: 0, y: 0 });
    }
    for (let j = 0; j < this.arrayAlumnosAntiguos.length; j++) {
      //console.log(listaID[this.arrayAlumnosAntiguos[j].estudiante._id])
      if (listaID[this.arrayAlumnosAntiguos[j].estudiante._id] != null) {
        listaID[this.arrayAlumnosAntiguos[j].estudiante._id] = this.arrayAlumnosAntiguos[j];
      }

    }
    for (var id in listaID) {
      arrayListaID.push(listaID[id]);
    }

    this.alumnosSeleccionados = arrayListaID;
    /*this.actividadCreate.alumnos=arryaAlumnos;
    this.alumnosSeleccionados=this.selection.selected;*/
    console.log(this.alumnosSeleccionados);
  }


  actualizar() {
    this.editarActividad.alumnos = this.alumnosSeleccionados;
    this.editarActividad.profesor = this.profesorSeleccionado;
    var ju = this;
    console.log(this.editarActividad);

    $.ajax({
      type: 'POST',
      url: '/actualizarClase',
      data: JSON.stringify(ju.editarActividad),
      success: function (data) {
        ju.profesor.actualizarClases(ju.editarActividad, true);
        ju.profesor.cerrarModal();
      },
      contentType: 'application/json',
      dataType: 'json'
    });
    //this.actividadEditada.emit(this.editarActividad);
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