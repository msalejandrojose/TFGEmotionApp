import { Component, OnInit } from '@angular/core';
import { ProfesorComponent } from '../profesor.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-profesor',
  templateUrl: './crear-profesor.component.html',
  styleUrls: ['./crear-profesor.component.css']
})
export class CrearProfesorComponent implements OnInit {

  constructor(public pComponente:ProfesorComponent,private _formBuilder: FormBuilder) { }

  nombre;
  apellidos;
  departamento;
  datosPrimarios;

  ngOnInit() {
    this.datosPrimarios = this._formBuilder.group({
      fromControlNombreProfesor:['', Validators.required],
    });
  }

  cerrar(){
    this.pComponente.cerrarModal();
  }

  limpiar(){
    this.nombre='';
    this.apellidos='';
    this.departamento='';
  }

  guardar(){

    var profesor ={
      nombre:this.nombre,
      apellidos:this.apellidos,
      departamento:this.departamento
    }
    this.pComponente.guardarP(profesor);
  }

  submitted = false;
  get f() { return this.datosPrimarios.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.datosPrimarios.invalid) {
        return;
    }else{
      this.guardar();
    }
}

onReset() {
    this.submitted = false;
    this.datosPrimarios.reset();
}

}
