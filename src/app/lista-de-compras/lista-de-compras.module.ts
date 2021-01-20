import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeComprasRoutingModule } from './lista-de-compras-routing.module';
import { TemplateComponent } from './template.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    ListaDeComprasRoutingModule,
    MaterialModule
  ]
})
export class ListaDeComprasModule { }
