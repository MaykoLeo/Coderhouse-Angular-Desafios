import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})

export class ContentAreaComponent {
  estudianteActual: Estudiante = {
    nombre: 'Julian',
    edad: 28,
    estado: true,
  };

  listaEstudiante: Array<Estudiante> = [
    {
      nombre: 'Luis',
      edad: 26,
      estado: true,
    },
    {
      nombre: 'Ana',
      edad: 21,
      estado: false,
    },
    {
      nombre: 'Jorge',
      edad: 29,
      estado: false,
    },
    {
      nombre: 'Rocio',
      edad: 22,
      estado: true,
    }
  ]
}
