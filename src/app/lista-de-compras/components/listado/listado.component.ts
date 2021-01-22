import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProducto } from 'src/app/models/producto.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {
  @Input() listado: IProducto[] | undefined;
  @Output() eliminar = new EventEmitter();
  @Output() guardar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  functGuardar() {
    setTimeout(() => {
      console.log('esperando');
      this.guardar.emit();
    }, 200);
  }
}
