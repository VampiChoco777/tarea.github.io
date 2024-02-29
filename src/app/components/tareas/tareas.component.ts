import { Component } from '@angular/core';
import { Tarea } from '../../../assets/models/Tarea';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent {
  listTareas: Tarea[] = [];
  nombreTarea = '';


agregarTarea()
  {
    const tarea: Tarea =
    {
      nombre: this.nombreTarea,
      estado: false
    }
    this.listTareas.push(tarea);
    this.nombreTarea = "";
  }

  eliminarTarea(index: number): void
  {
    this.listTareas.splice(index, 1);
  }

  actualizarTarea(tarea: Tarea, index: number )
  {
    this.listTareas[index].estado = !tarea.estado;
  }

  constructor(){}
  ngOnInit(): void {

  }

}
