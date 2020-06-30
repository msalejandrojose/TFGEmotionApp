import { Component, OnInit, ViewChild } from '@angular/core';
import { Alumno } from '../estudiante/alumno';
import { Actividad } from '../Actividad/Actividad';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EstudianteService } from '.././estudiante.service';
import { ClienteWS } from '../WebSockets/clienteWS'
import * as io from 'socket.io-client';
import { VerActividadComponent } from './ver-actividad/ver-actividad.component'
import { VerClaseComponent } from './ver-clase/ver-clase.component'
import { Estudiante, Alumnos } from '../Modelos/modelos'
import { Clase, Profesor } from '../Actividad/Actividad'
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { MensajeComponent } from './mensaje/mensaje.component'
import { faUser, faChalkboardTeacher, faBookOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppComponent } from '../app.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


declare var $: any;
declare var document: any;
declare var snackBar: any;
declare var Swal: any;

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  alumnoCreate: Estudiante = {
    _id: '',
    nombre: '',
    apellidos: '',
    clase: '',
    email: '',
    contrasena: '',
  }

  @ViewChild(VerActividadComponent, { static: false }) verActividadComp: VerActividadComponent;
  @ViewChild(VerClaseComponent, { static: false }) verClaseComp: VerClaseComponent;


  iconUsuarios = faUser;
  iconClases = faChalkboardTeacher;
  iconActividades = faBookOpen;
  iconHome = faHome;

  actividadAbierta = false;

  editarAlumno = false;
  onSelectedAlumno: Estudiante = {
    _id: '',
    nombre: '',
    apellidos: '',
    clase: '',
    email: '',
    contrasena: '',
  }
  listaAlumnos: Estudiante[] = [];
  crearActividad = false;
  editarActividad = false;
  ActividadparaEditar = null;
  vengoDeProfesor = true;
  listaActividades: Actividad[] = [];
  alumnosConectados = [];
  posicionDelAlumnoConectado = null;

  actividadCreada: Object;

  verActividad = false;
  actividadSelected = null;


  gestionAlumnos = false;
  gestionActividades = false;
  gestionClases = false;
  gestionHome = true;
  gestionProfesores = false;
  crearProfesor = false;
  editarProfesor = false;
  ProfesorparaEditar;
  listaClases: Clase[] = [];
  listaProfesores = [];

  crearClase = false;
  editarClase = false;
  verClase = false;
  ClaseparaEditar = null;

  claseSelected;

  ultimaActividadCreada = null;

  crearEstudiante = false;
  editarEstudiante = false;

  verEstadisticasA = false;
  verAlumno;

  verEstadisticasC = false;
  objClaseEstadisticas;

  creandoActividadAsociada = false;

  socket;

  //Tabla de estudiantes
  displayedColumnsEstudiantes = ['nombre', 'apellidos', 'clase', 'estadisticas', 'editarborrar'];
  dataSourceEstudiantes: MatTableDataSource<Estudiante>;

  @ViewChild(MatPaginator, null) paginatorE: MatPaginator;
  @ViewChild(MatSort, null) sortE: MatSort;

  //Tabla de actividades
  displayedColumnsActividades = ['nombre', 'profesor', 'clase', 'estado', 'acciones', 'editarborrar'];
  dataSourceActividades: MatTableDataSource<Actividad>;

  @ViewChild(MatPaginator, null) paginatorA: MatPaginator;
  @ViewChild(MatSort, null) sortA: MatSort;

  //Tabla de clases
  displayedColumnsClases = ['nombre', 'profesor', 'accion1', 'accion2', 'accion3', 'editarborrar'];
  dataSourceClases: MatTableDataSource<Clase>;

  @ViewChild(MatPaginator, null) paginatorC: MatPaginator;
  @ViewChild(MatSort, null) sortC: MatSort;

  //Tabla de clases
  displayedColumnsProfesores = ['nombre', 'apellidos', 'departamento', 'accion1', 'editarborrar'];
  dataSourceProfesores: MatTableDataSource<Profesor>;

  @ViewChild(MatPaginator, null) paginatorP: MatPaginator;
  @ViewChild(MatSort, null) sortP: MatSort;



  constructor(public matDialog: MatDialog, private estudiantes: EstudianteService, public _snackBar: MatSnackBar, public component: AppComponent,private _formBuilder: FormBuilder,private _formBuilder2: FormBuilder) { }

  datosPrimarios;
  datosPrimarios2;
  async ngOnInit() {
    this.datosPrimarios = this._formBuilder.group({
      fromControlNombreEstudiante:['', Validators.required],
      fromControlEmailEstudiante:['', Validators.required],
      fromControlContrasenaEstudiante:['', Validators.required],
    });
    this.datosPrimarios2 = this._formBuilder2.group({
      fromControlNombreEstudiante2:['', Validators.required],
      fromControlEmailEstudiante2:['', Validators.required],
      fromControlContrasenaEstudiante2:['', Validators.required],
    });

    //this.socket = new ClienteWS('profesor');
    //this.socket.ini();
    this.ini();

    ///

    var ju = this;
    //this.listaAlumnos=this.estudiantes.getEstudiantes();
    $.getJSON("/verEstudiantes", function (data) {
      //console.log(data);
      ju.listaAlumnos = data;
      ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
      ju.dataSourceEstudiantes.sort = ju.sortE;
    });

    $.getJSON("/verActividades", function (data) {
      //console.log(data);
      ju.listaActividades = data;
      ju.dataSourceActividades = new MatTableDataSource(ju.listaActividades.reverse());
      ju.dataSourceActividades.paginator = ju.paginatorA;
      ju.dataSourceActividades.sort = ju.sortA;
      console.log(ju.listaActividades);
    });

    $.getJSON("/verClases", function (data) {
      //console.log(data);
      ju.listaClases = data;
      ju.dataSourceClases = new MatTableDataSource(ju.listaClases.reverse());
      ju.dataSourceClases.paginator = ju.paginatorC;
      ju.dataSourceClases.sort = ju.sortC;
    });

    $.getJSON("/verProfesores", function (data) {
      //console.log(data);
      ju.listaProfesores = data;
      //console.log(ju.listaProfesores);
      ju.dataSourceProfesores = new MatTableDataSource(ju.listaProfesores.reverse());
      ju.dataSourceProfesores.paginator = ju.paginatorP;
      ju.dataSourceProfesores.sort = ju.sortP;
    });

    //console.log(this.listaAlumnos);
  }

  /*ngOnChanges() {
    this.dataSourceEstudiantes = new MatTableDataSource(this.listaAlumnos);
  }*/

  async ngAfterViewInit() {
    var ju = this;
    //this.listaAlumnos=this.estudiantes.getEstudiantes();
    await $.getJSON("/verEstudiantes", function (data) {
      //console.log(data);
      ju.listaAlumnos = data;
      ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
      ju.dataSourceEstudiantes.sort = ju.sortE;
    });
  }

  applyFilterE(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceEstudiantes.filter = filterValue;
  }

  applyFilterC(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceClases.filter = filterValue;
  }

  applyFilterA(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceActividades.filter = filterValue;
  }
  applyFilterP(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSourceProfesores.filter = filterValue;
  }

  submitted = false;
  get f() { return this.datosPrimarios.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.datosPrimarios.invalid) {
        return;
    }else{
      this.anadirAlumno();
    }
}

onReset() {
    this.submitted = false;
    this.datosPrimarios.reset();
}

  //anadirAlumno(nombre:string,apellidos:string,clase:string,email:string,contrasena:string) {
  anadirAlumno() {
    //this.listaAlumnos.push(new Alumno(this.alumnoCreate.nombre, this.alumnoCreate.apellidos, this.alumnoCreate.clase, this.alumnoCreate.email, this.alumnoCreate.contrasena));
    var ju = this;
    //console.log(this.listaAlumnos);
    $.ajax({
      type: 'POST',
      url: '/registrarEstudiante',
      data: JSON.stringify(this.alumnoCreate),
      success: function (data) {
        //console.log(data);
        //ju.alumnoCreate._id = data._id;
        //ju.listaAlumnos.push(this.alumnoCreate);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Alumno '" + ju.alumnoCreate.nombre + "' creado",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
        $.getJSON("/verEstudiantes", function (data) {
          //console.log(data);
          ju.listaAlumnos = data;
          ju.limpiar();
          ju.editarAlumno = false;
          console.log(ju.listaAlumnos);
          ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
          ju.dataSourceEstudiantes.paginator = ju.paginatorE;
          ju.dataSourceEstudiantes.sort = ju.sortE;
        });
        ju.crearEstudiante = false;
      },
      contentType: 'application/json',
      dataType: 'json'
    });

    /*ju.listaAlumnos.push(this.alumnoCreate);
    ju.limpiar();
    ju.editarAlumno = false;*/



  }

  submitted2 = false;
  get f2() { return this.datosPrimarios2.controls; }
  onSubmit2() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.datosPrimarios2.invalid) {
        return;
    }else{
      this.actualizarAlumno();
    }
}

onReset2() {
    this.submitted = false;
    this.datosPrimarios2.reset();
}
  actualizarAlumno() {
    var ju = this;
    $.ajax({
      type: 'PUT',
      url: '/actualizarEstudiante',
      data: JSON.stringify(ju.onSelectedAlumno),
      success: function (data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Alumno '" + ju.onSelectedAlumno.nombre + "' editado",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
        $.getJSON("/verEstudiantes", function (data) {
          ju.listaAlumnos = data;
          ju.limpiar();
          ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
          ju.dataSourceEstudiantes.paginator = ju.paginatorE;
          ju.dataSourceEstudiantes.sort = ju.sortE;
          ju.editarAlumno = false;
        });
      },
      contentType: 'application/json',
      dataType: 'json'
    });

  }

  verEstadisticasAlumno(alumno) {
    this.verEstadisticasA = true;
    this.verAlumno = alumno;
    this.ponerArriba();
  }
  cerrarEstadisticasAlumno() {
    this.verEstadisticasA = false;
    this.verAlumno = null;
  }

  verEstadisticasClase(clase) {
    this.verEstadisticasC = true;
    this.objClaseEstadisticas = clase;
    this.ponerArriba();

  }
  cerrarEstadisticasClase() {
    this.verEstadisticasC = false;
    this.objClaseEstadisticas = null;
  }

  limpiar() {
    if (this.editarAlumno) {
      this.onSelectedAlumno = {
        _id: '',
        nombre: '',
        apellidos: '',
        clase: '',
        email: '',
        contrasena: '',
      }
    } else {
      this.alumnoCreate = {
        _id: '',
        nombre: '',
        apellidos: '',
        clase: '',
        email: '',
        contrasena: '',
      }
    }

  }
  editar(item: Estudiante) {
    this.editarAlumno = true;
    this.onSelectedAlumno = item;
  }
  borrar(item: Estudiante) {
    var ju = this;
    Swal.fire({
      title: '¿Estas seguro?',
      text: "El alumno '" + item.nombre + "' se eliminará",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, deseo borrarlo',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          "El alumno '" + item.nombre + "' se ha borrado.",
          'success',
          $.ajax({
            type: 'DELETE',
            url: '/eliminarEstudiante',
            data: JSON.stringify(item),
            success: function (data) {
              console.log("Estudiante eliminado");
              $.getJSON("/verEstudiantes", function (data) {
                ju.listaAlumnos = data;
                ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
                ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                ju.dataSourceEstudiantes.sort = ju.sortE;
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          }),
        )
      }
    })
    /*$.ajax({
      type: 'DELETE',
      url: '/eliminarEstudiante',
      data: JSON.stringify(item),
      success: function (data) {
        console.log("Estudiante eliminado");
        $.getJSON("/verEstudiantes", function (data) {
          ju.listaAlumnos = data;
          ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
          ju.dataSourceEstudiantes.paginator = ju.paginatorE;
          ju.dataSourceEstudiantes.sort = ju.sortE;
        });
      },
      contentType: 'application/json',
      dataType: 'json'
    });*/
  }

  abrirActividadActual() {
    //this.actividadAbierta = true;
    this.gestionHome = true;
    this.gestionActividades = false;
    this.gestionAlumnos = false;
    this.gestionClases = false;
    this.gestionProfesores = false;


  }

  abrirAlumnos() {
    var ju = this;
    //this.listaAlumnos=this.estudiantes.getEstudiantes();
    $.getJSON("/verEstudiantes", function (data) {
      //console.log(data);
      ju.listaAlumnos = data;
      ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
      ju.dataSourceEstudiantes.sort = ju.sortE;
    });

    this.gestionHome = false;
    this.gestionActividades = false;
    this.gestionAlumnos = true;
    this.verEstadisticasA = false;
    this.crearEstudiante = false;
    this.editarAlumno = false;
    this.gestionClases = false;
    this.crearProfesor = false;
    this.editarProfesor = false;
    this.gestionProfesores = false;
  }
  abrirActividades() {
    var ju = this;
    try{
      $.getJSON("/verActividades", function (data) {
        //console.log(data);
        ju.listaActividades = data;
        ju.dataSourceActividades = new MatTableDataSource(ju.listaActividades.reverse());
        ju.dataSourceActividades.paginator = ju.paginatorA;
        ju.dataSourceActividades.sort = ju.sortA;
        //console.log("Actividades Cargadas");
      });
    }catch(e){

    }
    
    this.gestionHome = false;
    this.gestionActividades = true;
    this.crearActividad = false;
    this.editarActividad = false;
    this.gestionAlumnos = false;
    this.gestionClases = false;
    this.crearProfesor = false;
    this.editarProfesor = false;
    this.gestionProfesores = false;

    //this.openDialog()
  }

  abrirCrearEstudiantes() {
    this.editarAlumno = false;
    this.crearEstudiante = true;
  }
  cerrarCrearEstudiantes() {
    this.editarAlumno = false;
    this.crearEstudiante = false;
  }

  abrirClases() {
    var ju = this;
    try {
      $.getJSON("/verClases", function (data) {
        //console.log(data);
        ju.listaClases = data;
        ju.dataSourceClases = new MatTableDataSource(ju.listaClases.reverse());
        ju.dataSourceClases.paginator = ju.paginatorC;
        ju.dataSourceClases.sort = ju.sortC;
      });
    } catch (e) {

    }
    this.verClase = false;
    /*this.gestionClases = true;
    this.gestionAlumnos = false;
    this.verActividad = false;
    this.gestionActividades = false;*/
    this.gestionHome = false;
    this.gestionActividades = false;
    this.gestionAlumnos = false;
    this.gestionClases = true;
    this.crearClase = false;
    this.editarClase = false;
    this.verEstadisticasC = false;
    this.gestionProfesores = false;
    this.crearProfesor = false;
    this.editarProfesor = false;
  }

  abrirClase(clase) {
    this.claseSelected = clase;
    this.verClase = true;
    this.ponerArriba();
  }

  abrirProfesores() {
    var ju = this;
    try {
      $.getJSON("/verProfesores", function (data) {
        //console.log(data);
        ju.listaProfesores = data;
        ju.dataSourceProfesores = new MatTableDataSource(ju.listaProfesores.reverse());
        ju.dataSourceProfesores.paginator = ju.paginatorP;
        ju.dataSourceProfesores.sort = ju.sortP;
      });
    } catch (e) {

    }
    this.verClase = false;
    /*this.gestionClases = true;
    this.gestionAlumnos = false;
    this.verActividad = false;
    this.gestionActividades = false;*/
    this.gestionHome = false;
    this.gestionActividades = false;
    this.gestionAlumnos = false;
    this.gestionClases = false;
    this.crearClase = false;
    this.editarClase = false;
    this.verEstadisticasC = false;
    this.crearProfesor = false;
    this.editarProfesor = false;
    this.gestionProfesores = true;
  }

  editarP(profesor) {
    this.editarProfesor = true;
    this.ProfesorparaEditar = profesor;
  }

  guardarP(profesor) {
    var ju = this;

    $.ajax({
      type: 'POST',
      url: '/registrarProfesor',
      data: JSON.stringify(profesor),
      success: function (data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Profesor '" + profesor.nombre + "' creado",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        ju.crearProfesor = false;
        $.getJSON("/verProfesores", function (data) {
          //console.log(data);
          ju.listaProfesores = data;
          ju.dataSourceProfesores = new MatTableDataSource(ju.listaProfesores.reverse());
          ju.dataSourceProfesores.paginator = ju.paginatorP;
          ju.dataSourceProfesores.sort = ju.sortP;

        });
        //ju.menActividadCreada();
        //ju.listaActividades.push(actividad);

      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  actualizarP(profesor) {
    var ju = this;
    $.ajax({
      type: 'POST',
      url: '/actualizarProfesor',
      data: JSON.stringify(profesor),
      success: function (data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Profesor '" + profesor.nombre + "' actualizado",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
        ju.editarProfesor = false;
        $.getJSON("/verProfesores", function (data) {
          //console.log(data);
          ju.listaProfesores = data;
          ju.dataSourceProfesores = new MatTableDataSource(ju.listaProfesores.reverse());
          ju.dataSourceProfesores.paginator = ju.paginatorP;
          ju.dataSourceProfesores.sort = ju.sortP;

        });
        //ju.menActividadCreada();
        //ju.listaActividades.push(actividad);

      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  borrarP(profesor) {
    var ju = this;
    Swal.fire({
      title: '¿Estas seguro?',
      text: "El profesor '" + profesor.nombre + "' se eliminará",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, deseo borrarlo',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          "El profesor " + profesor.nombre + "' se ha borrado.",
          'success',
          $.ajax({
            type: 'DELETE',
            url: '/eliminarProfesor',
            data: JSON.stringify(profesor),
            success: function (data) {
              console.log("Profesor eliminado");
              $.getJSON("/verProfesores", function (data) {
                //console.log(data);
                ju.listaProfesores = data;
                ju.dataSourceProfesores = new MatTableDataSource(ju.listaProfesores.reverse());
                ju.dataSourceProfesores.paginator = ju.paginatorP;
                ju.dataSourceProfesores.sort = ju.sortP;
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          }),
        )
      }
    })
  }

  abrirCrearActividad() {
    this.crearActividad = true;
  }
  abrirCrearProfesor() {
    this.crearProfesor = true;
  }

  abrirCrearClase() {
    this.crearClase = true;
  }
  async cerrarModal() {
    this.crearActividad = false;
    this.crearClase = false;
    this.editarActividad = false;
    this.editarClase = false;
    this.editarProfesor = false;
    this.crearProfesor = false;
    var ju = this;
    //this.listaAlumnos=this.estudiantes.getEstudiantes();
    await $.getJSON("/verEstudiantes", function (data) {
      //console.log(data);
      ju.listaAlumnos = data;
      ju.dataSourceEstudiantes = new MatTableDataSource(ju.listaAlumnos.reverse());
      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
      ju.dataSourceEstudiantes.sort = ju.sortE;
    });

    await $.getJSON("/verActividades", function (data) {
      //console.log(data);
      ju.listaActividades = data;
      ju.dataSourceActividades = new MatTableDataSource(ju.listaActividades.reverse());
      ju.dataSourceActividades.paginator = ju.paginatorA;
      ju.dataSourceActividades.sort = ju.sortA;
    });

    await $.getJSON("/verClases", function (data) {
      //console.log(data);
      ju.listaClases = data;
      ju.dataSourceClases = new MatTableDataSource(ju.listaClases.reverse());
      ju.dataSourceClases.paginator = ju.paginatorC;
      ju.dataSourceClases.sort = ju.sortC;
    });

    await $.getJSON("/verProfesores", function (data) {
      //console.log(data);
      ju.listaProfesores = data;
      ju.dataSourceProfesores = new MatTableDataSource(ju.listaProfesores.reverse());
      ju.dataSourceProfesores.paginator = ju.paginatorP;
      ju.dataSourceProfesores.sort = ju.sortP;
    });
  }

  guardarActividad(actividad: Object) {
    //this.actividadCreada = actividad;
    var ju = this;
    //console.log(actividad);

    $.ajax({
      type: 'POST',
      url: '/registrarActividad',
      data: JSON.stringify(actividad),
      success: function (data) {
        ju.ultimaActividadCreada = data;
        /*$.getJSON("/verEstudiantes", function (data) {
          //console.log(data);
          ju.listaAlumnos = data;
          ju.limpiar();
          ju.editarAlumno = false;
          console.log(ju.listaAlumnos);
        });*/
        $.getJSON("/verActividades", function (dataa) {
          //console.log(data);
          ju.listaActividades = dataa;
          ju.dataSourceActividades = new MatTableDataSource(ju.listaActividades.reverse());
          ju.dataSourceActividades.paginator = ju.paginatorA;
          ju.dataSourceActividades.sort = ju.sortA;
          ju.crearActividad = false;
          console.log(ju.listaActividades);
        });
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
            ju.gestionClases = false;
            ju.gestionActividades = true;
            ju.crearClase = false;
            ju.editarClase = false;
            ju.verClase = false;
            ju.abrirActividad(data);
          }
        })
        //ju.menActividadCreada();
        //ju.listaActividades.push(actividad);

      },
      contentType: 'application/json',
      dataType: 'json'
    });



  }
  actualizarActividad(actividad: Object) {
    var ju = this;
    console.log(actividad);

    $.ajax({
      type: 'POST',
      url: '/actualizarActividad',
      data: JSON.stringify(actividad),
      success: function (data) {

        //this.actividad=data;
        //ju.ultimaActividadCreada = data;
        $.getJSON("/verActividades", function (dataa) {
          //console.log(data);
          ju.listaActividades = dataa;
          ju.dataSourceActividades = new MatTableDataSource(ju.listaActividades.reverse());
          ju.dataSourceActividades.paginator = ju.paginatorA;
          ju.dataSourceActividades.sort = ju.sortA;
          ju.editarActividad = false;
          console.log(ju.listaActividades);
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Actividad '" + data.nombre + "' editada",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No entrar.',
          confirmButtonText: 'Entrar en la actividad',
          timer: 4000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.value) {
            ju.gestionClases = false;
            ju.gestionActividades = true;
            ju.crearClase = false;
            ju.editarClase = false;
            ju.verClase = false;
            ju.abrirActividad(data);
          }
        })
        //ju.menActividadEditada();
      },
      contentType: 'application/json',
      dataType: 'json'
    });
  }

  async actualizarClases(clase, editada) {
    this.crearClase = false;
    this.editarClase = false;
    var ju = this;
    if (clase != null) {
      if (editada) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Clase '" + clase.nombre + "' editada",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
      } else {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Clase '" + clase.nombre + "' creada",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
      }
    }


    $.getJSON("/verClases", function (data) {
      //console.log(data);
      ju.listaClases = data;
      ju.dataSourceClases = new MatTableDataSource(ju.listaClases.reverse());
      ju.dataSourceClases.paginator = ju.paginatorC;
      ju.dataSourceClases.sort = ju.sortC;
    });
  }

  editarA(act) {
    this.editarActividad = true;
    this.ActividadparaEditar = act;
    this.vengoDeProfesor = true;
  }

  editarC(clase) {
    this.editarClase = true;
    this.ClaseparaEditar = clase;
  }

  agregarDatosActividad(datos) {
    this.verActividadComp.insertarDatos(datos);

    //this.actividadSelected.alumnos
  }


  borrarA(act) {
    var ju = this;
    Swal.fire({
      title: '¿Estas seguro?',
      text: "La actividad '" + act.nombre + "' se eliminará",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, deseo borrarlo',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Borrado!',
          "La actividad " + act.nombre + "' se ha borrado.",
          'success',
          $.ajax({
            type: 'DELETE',
            url: '/eliminarActividad',
            data: JSON.stringify(act),
            success: async function (data) {
              console.log("Actividad eliminado");
              await $.getJSON("/verActividades", function (data) {
                ju.listaActividades = data;
                ju.dataSourceActividades = new MatTableDataSource(ju.listaActividades.reverse());
                ju.dataSourceActividades.paginator = ju.paginatorA;
                ju.dataSourceActividades.sort = ju.sortA;
                //ju.menActividadBorrada();
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          })
        )
      }
    })

  }

  async borrarC(clase) {
    var ju = this;
    Swal.fire({
      title: '¿Estas seguro?',
      text: "La clase '" + clase.nombre + "' se eliminará",
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
          "La clase '" + clase.nombre + "' se ha borrado.",
          'success',
          $.ajax({
            type: 'DELETE',
            url: '/eliminarClase',
            data: JSON.stringify(clase),
            success: function (data) {
              console.log(data);
              console.log("Clase eliminada");
              /*$.getJSON("/verClases", function (data) {
                //console.log(data);
                ju.listaClases = data;
              });*/
              ju.actualizarClases(null, null);
            },
            contentType: 'application/json',
            dataType: 'json'
          })
        )
      }
    })
  }




  abrirActividad(actividad) {

    this.actividadAbierta = true;
    this.component.activarActividadActual();
    this.verActividad = true;
    this.actividadSelected = actividad;
    this.crearActividadLista(actividad);
    this.abroActividad(actividad);
    this.abrirActividadActual();
    this.ponerArriba();
  }

  ponerArriba() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  cerrarActividad(cerrar: Object) {
    //console.log(this.actividadSelected);
    this.actividadAbierta = false;
    this.component.desactivarActividadActual();
    //this.socket.emit('listoParaNoRecibirDatos', this.actividadSelected);
    //
    if (this.actividadSelected.estado == "Creada") {
      this.borrarActividadLista(this.actividadSelected);
    }
    this.verActividad = false;
    this.actividadSelected = null;
    this.claseSelected = null;
    this.ponerArriba();

    //this.alumnosConectados.length=0
    //this.alumnosConectados = [];
  }

  cerrarClase() {
    this.verClase = false;
    this.actualizarClases(null, null);
  }
  esta(estudiante) {
    for (let i = 0; i < this.alumnosConectados.length; i++) {
      if (this.alumnosConectados[i]._id == estudiante._id) {
        this.posicionDelAlumnoConectado = i;
        return true;
      }
    }
    return false;
  }

  async crearActividadAsociada(clase) {

    this.creandoActividadAsociada = true;
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
      clase: { _id: clase._id, nombre: clase.nombre }
    }
    var num=0;
    for(var i in clase.actividades){
      num++;
    }
    num++;
    actividadCreate.nombre = clase.nombre + ' ' + num;
    actividadCreate.profesor = clase.profesor;
    actividadCreate.fecha = moment().format('LLLL');
    var arrayAlumnos = [];
    for (let i = 0; i < clase.alumnos.length; i++) {
      arrayAlumnos.push({
        estudiante: clase.alumnos[i].estudiante,
        id_item: '',
        posicion: clase.alumnos[i].posicion,
        sensorWebCam: clase.alumnos[i].sensorWebCam,
        sensorPulsera: clase.alumnos[i].sensorPulsera,
        sensorLed: clase.alumnos[i].sensorLed,
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

    await $.ajax({
      type: 'POST',
      url: '/agregarActividadEnClase',
      data: JSON.stringify({ clase: clase, act: actividadCreate }),
      success: function (data) {
        //ju.clase=data;
        ju.ultimaActividadCreada = data;
        console.log("Clase Creada");
        console.log(data);
        //

        //ju.actualizar();
        //ju.menActividadCreada();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: "Actividad '" + data.nombre + "' editada",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No entrar.',
          confirmButtonText: 'Entrar en la actividad',
          timer: 4000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.value) {
            ju.gestionClases = false;
            ju.gestionActividades = true;
            ju.crearClase = false;
            ju.editarClase = false;
            ju.verClase = false;
            ju.abrirActividad(data);
          }
        })
        /*$.getJSON("/verClases", function (data) {
          //console.log(data);
          ju.listaClases = data;
          ju.dataSourceClases = new MatTableDataSource(ju.listaClases);
          ju.dataSourceClases.paginator = ju.paginatorC;
          ju.dataSourceClases.sort = ju.sortC;
        });*/
        //abrirActividad
        ju.creandoActividadAsociada = false;
      },
      contentType: 'application/json',
      dataType: 'json'
    });
    //this.abrirClase(clase);

    /*var ju = this;
    var actividadCreate = {
      nombre: '',
      profesor: '',
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
      }
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
      url: '/registrarActividad',
      data: JSON.stringify(actividadCreate),
      success: function (data) {
        ju.ultimaActividadCreada = data;
        console.log(data);
        $.getJSON("/verActividades", function (data) {
          //console.log(data);
          ju.listaActividades = data;
          ju.crearActividad = false;
          console.log(ju.listaActividades);
        });
        //ju.listaActividades.push(actividad);
        ju.menActividadCreada();
        clase.actividades.push(data);
        $.ajax({
          type: 'POST',
          url: '/actualizarClase',
          data: JSON.stringify(clase),
          success: function (data) {
            ju.actualizarClases();
          },
          contentType: 'application/json',
          dataType: 'json'
        });


        //abrirActividad
      },
      contentType: 'application/json',
      dataType: 'json'
    });

    */
  }


  menActividadCreada() {
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
  }

  menActividadEditada() {
    let men = this._snackBar.open('Actividad Editada', 'Abrir', {
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
  }

  menActividadBorrada() {
    let men = this._snackBar.open('Actividad Borrada', 'Cerrar', {
      duration: 1000,
    });
  }

  actividadEmpezada(actividad) {
    this.verActividadComp.actividadEmpezada(actividad);
  }

  actividadTerminada(actividad) {
    this.verActividadComp.actividadTerminada(actividad);
  }

  salir(){
    this.component.salir();
  }



  //Gestion de los WebSockets

  ini() {
    this.socket = io.connect();
    this.lanzarSocketSrv();
    this.soyProfesor();
  }

  soyProfesor = function () {
    this.socket.emit('soyProfesor');
  }

  abroActividad = function (actividad) {
    this.socket.emit('abrirActividad', actividad);
  }

  crearActividadLista = function (actividad) {
    this.socket.emit('crearActividadLista', actividad);
    //console.log("Actividad: " + actividad._id + " está lista.");
  }
  borrarActividadLista = function (actividad) {
    this.socket.emit('borrarActividadLista', actividad);
    //console.log("Actividad: " + actividad._id + " YA NO está lista.");
  }
  listoParaRecibirDatos = function (actividad) {
    this.socket.emit('listoParaRecibirDatos', actividad);
    this.socket.emit('modificacionDeActividad', actividad);
  }
  listoParaNoRecibirDatos = function (actividad) {
    this.socket.emit('listoParaNoRecibirDatos', actividad);
    this.socket.emit('modificacionDeActividad', actividad);
  }

  empezarActividad = function (actividad) {
    this.socket.emit('empezarActividad', actividad);
    this.socket.emit('crearActividadLista', actividad);

  }

  terminarActividad = function (actividad) {
    this.socket.emit('terminarActividad', actividad);
    this.socket.emit('borrarActividadLista', actividad);

  }

  conectarWebCam = function (estudiante) {
    this.socket.emit('conectarWebCam', estudiante);
  }
  conectarLed = function (estudiante) {
    this.socket.emit('conectarLed', estudiante);
  }
  conectarPulsera = function (estudiante) {
    this.socket.emit('conectarPulsera', estudiante);
  }

  desconectarWebCam = function (estudiante) {
    this.socket.emit('desconectarWebCam', estudiante);
  }
  desconectarLed = function (estudiante) {
    this.socket.emit('desconectarLed', estudiante);
  }
  desconectarPulsera = function (estudiante) {
    this.socket.emit('desconectarPulsera', estudiante);
  }
  enviarDatos = function (datos, actividad) {
    console.log("enviando datos");
    this.socket.emit('enviarDatosFicticios', datos, actividad);
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

    this.socket.on('seHaConectado', function (res) {
      if (!cli.esta(res)) {
        cli.alumnosConectados.push(res);
        cli.verActividadComp.usuarioConectado(res);
      }

    })

    this.socket.on('seHaDesconectado', function (res) {
      if (cli.esta(res)) {
        cli.alumnosConectados.splice(cli.posicionDelAlumnoConectado, 1);
        cli.verActividadComp.usuarioDesconectado(res);
      }
    })

    this.socket.on('recepcionDatos', function (datos) {
      console.log(datos);
      $('#' + datos.id_item + '').css("background-color", datos.color);
      cli.agregarDatosActividad(datos);
      //console.log(datos.pulsaciones);
    })

    this.socket.on('actividadEmpezada', function (res) {
      cli.actividadEmpezada(res);
    })

    this.socket.on('actividadTerminada', function (res) {
      cli.actividadTerminada(res);
    })

    this.socket.on('webCamConectada', function (estudiante) {
      cli.verActividadComp.webCamActivada(estudiante);
    })
    this.socket.on('pulseraConectada', function (estudiante) {
      cli.verActividadComp.pulseraActivada(estudiante);
    })
    this.socket.on('ledConectada', function (estudiante) {
      cli.verActividadComp.ledActivado(estudiante);
    })

    this.socket.on('webCamDesonectada', function (estudiante) {
      cli.verActividadComp.webCamDesconectada(estudiante);
    })
    this.socket.on('pulseraDesonectada', function (estudiante) {
      cli.verActividadComp.pulseraDesconectada(estudiante);
    })
    this.socket.on('ledDesonectada', function (estudiante) {
      cli.verActividadComp.ledDesconectada(estudiante);
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
