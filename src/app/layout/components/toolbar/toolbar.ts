import { Component } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  standalone: false,
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {
  title = 'Gestión Académica';
  subtitle: string = 'Lista de Alumnos';
}
