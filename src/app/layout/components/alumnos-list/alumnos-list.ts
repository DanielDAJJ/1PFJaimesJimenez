import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../../services/alumnos.service';
import { Alumnos } from '../../../models/alumnos.model';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-alumnos-list',
  standalone: false,
  templateUrl: './alumnos-list.html',
  styleUrl: './alumnos-list.css'
})
export class AlumnosList implements OnInit{
  alumnos: Alumnos[] = [];
  displayedColumns: string[] = ['id' ,'nombre', 'email', 'telefono', 'cursos', 'acciones'];
  dataSource!: MatTableDataSource<Alumnos>;

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    this.dataSource = new MatTableDataSource(this.alumnosService.getAlumnos());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEliminarAlumno(id: number): void {
    this.alumnosService.eliminarAlumno(id);
    this.cargarAlumnos();
  }

  onAlumnoAgregado(nuevoAlumno: Omit<Alumnos, 'id'>): void {
    this.alumnosService.agregarAlumno(nuevoAlumno as Alumnos);
    this.cargarAlumnos();
  }
}
