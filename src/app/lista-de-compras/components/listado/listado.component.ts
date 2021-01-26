import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducto } from 'src/app/models/producto.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent {
  @Input() listado: IProducto[] | undefined;
  @Output() eliminar = new EventEmitter();
  @Output() guardar = new EventEmitter();

  constructor() { }

  functGuardar() {
    setTimeout(() => {
      this.guardar.emit();
    }, 200);
  }
}
