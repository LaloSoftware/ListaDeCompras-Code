import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeComprasRoutingModule } from './lista-de-compras-routing.module';
import { TemplateComponent } from './template.component';
import { MaterialModule } from '../material.module';
import { ListadoComponent } from './components/listado/listado.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoComponent } from './components/nuevo/nuevo.component';


@NgModule({
  declarations: [TemplateComponent, ListadoComponent, MenuComponent, NuevoComponent],
  imports: [
    CommonModule,
    ListaDeComprasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListaDeComprasModule { }
