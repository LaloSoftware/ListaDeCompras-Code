import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'lista', loadChildren: ()=> import('src/app/lista-de-compras/lista-de-compras.module').then(m => m.ListaDeComprasModule)},
  {path: 'instrucciones', loadChildren: () => import('src/app/instrucciones/instrucciones.module').then(m => m.InstruccionesModule)},
  {path: '**', redirectTo: 'lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
