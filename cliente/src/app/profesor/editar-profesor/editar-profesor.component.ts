import { Component, OnInit, Input } from '@angular/core';
import { ProfesorComponent } from '../profesor.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent implements OnInit {

  @Input() editarProfesor;

  constructor(public pComponente:ProfesorComponent,private _formBuilder: FormBuilder) { }

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
    this.editarProfesor.nombre='';
    this.editarProfesor.apellidos='';
    this.editarProfesor.departamento='';
  }

  guardar(){
    this.pComponente.actualizarP(this.editarProfesor);
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
