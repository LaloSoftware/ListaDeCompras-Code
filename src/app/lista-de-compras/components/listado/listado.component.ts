import { Component, Input, OnInit } from '@angular/core';
import { IProducto } from 'src/app/models/producto.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass']
})
export class ListadoComponent implements OnInit {
  @Input() listado: IProducto[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarEstado(producto: IProducto){
    producto.comprado = !producto.comprado;
  }
}
