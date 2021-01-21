import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProducto } from '../models/producto.interface';
import { NuevoComponent } from './components/nuevo/nuevo.component';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.sass']
})
export class TemplateComponent implements OnInit {
  productos: IProducto[];

  constructor(
    private dialogRef: MatDialog
  ) {
    this.productos = [];
  }

  ngOnInit(): void {
  }

  crearElemento(){
    const newDialog = this.dialogRef.open(NuevoComponent, {
      data: {nuevoProducto: this.productos}
    });
    newDialog.afterClosed().subscribe(
      res => {
        if(res) this.productos.push(res);
        console.log(this.productos);
      }
    );
  }

  limpiarLista(){
    this.productos = [];
  }

  retirarMarcados(){
    this.productos = this.productos.filter(p => p.comprado === false);
  }
}
