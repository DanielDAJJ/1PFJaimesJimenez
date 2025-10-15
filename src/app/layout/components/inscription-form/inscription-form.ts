import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumnos } from '../../../models/alumnos.model';

@Component({
  selector: 'app-inscription-form',
  standalone: false,
  templateUrl: './inscription-form.html',
  styleUrl: './inscription-form.css'
})
export class InscriptionForm {
  @Output() alumnoAgregado = new EventEmitter<Omit<Alumnos, 'id'>>();
  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      cursos: ['']
    })
  }
  onSubmit(): void{
    if(this.alumnoForm.valid){
      const formValue = this.alumnoForm.value;
      const nuevoAlumno: Omit<Alumnos, 'id'> = {
        nombre: formValue.nombre,
        email: formValue.email,
        telefono: formValue.telefono,
        cursos: formValue.cursos ? formValue.cursos.split(',').map((c: string) => c.trim()) : []
      }
      this.alumnoAgregado.emit(nuevoAlumno);
      this.alumnoForm.reset();
    }
  }
}
