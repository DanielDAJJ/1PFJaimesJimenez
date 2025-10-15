import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  standalone: false,
  templateUrl: './side-nav-bar.html',
  styleUrl: './side-nav-bar.css',
})
export class SideNavBar {
  public menuItems: { label: string; route: string }[] = [
    { label: 'Alumnos', route: '/alumnos' },
    { label: 'Cursos', route: '/cursos' },
    { label: 'Inscripciones', route: '/inscripciones' }
  ]
}
