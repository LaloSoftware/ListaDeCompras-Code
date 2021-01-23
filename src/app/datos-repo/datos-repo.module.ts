import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosRepoRoutingModule } from './datos-repo-routing.module';
import { MaterialModule } from '../material.module';
import { DatosComponent } from './datos.component';


@NgModule({
  declarations: [DatosComponent],
  imports: [
    CommonModule,
    DatosRepoRoutingModule,
    MaterialModule
  ]
})
export class DatosRepoModule { }
