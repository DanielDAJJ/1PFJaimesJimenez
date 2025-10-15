import { Injectable } from '@angular/core';
import { AlumnosData } from '../data/alumnos-data/alumnos-data';
import { Alumnos } from '../models/alumnos.model';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: Alumnos[] = [...AlumnosData];

  constructor() { }
  getAlumnos(): Alumnos[] {
    return this.alumnos;
  }
  getAlumnosByName(nombre: string): Alumnos[]{
    return this.alumnos.filter(alumno=> alumno.nombre === nombre)
  }
  agregarAlumno(alumno: Alumnos): void{
    const nuevoId = this.alumnos.length > 0 ? Math.max(...this.alumnos.map(a => a.id)) + 1 : 1;
    this.alumnos.push({...alumno, id: nuevoId});
  }
  eliminarAlumno(id: number): void{
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
  }
}
