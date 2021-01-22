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
    this.recuperarLista();
  }

  crearElemento(){
    const newDialog = this.dialogRef.open(NuevoComponent, {
      data: {nuevoProducto: this.productos}
    });
    newDialog.afterClosed().subscribe(
      res => {
        if(res) this.productos.push(res);
        this.guardarEnMemoria();
      }
    );
  }

  eliminarElemento(producto: IProducto){
    this.productos = this.productos.filter(p => p !== producto);
    this.guardarEnMemoria();
  }

  limpiarLista(){
    this.productos = [];
    this.eliminarDeMemoria();
  }

  retirarMarcados(){
    this.productos = this.productos.filter(p => p.comprado === false);
    this.guardarEnMemoria();
  }

  guardarEnMemoria(){
    localStorage.setItem("lista", JSON.stringify(this.productos));
    console.log(this.productos);
  }

  recuperarLista(){
    let lista = localStorage.getItem("lista");
    if(lista){
      this.productos = JSON.parse(lista);
    } else {
      this.productos = [];
    }
  }

  eliminarDeMemoria(){
    localStorage.removeItem("lista");
  }
}
