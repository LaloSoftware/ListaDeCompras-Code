import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstruccionesRoutingModule } from './instrucciones-routing.module';
import { TemplateComponent } from './template.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    InstruccionesRoutingModule,
    MaterialModule
  ]
})
export class InstruccionesModule { }
