import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductosComponent } from './list-productos/list-productos.component';
import { DescProductosComponent } from './desc-productos/desc-productos.component';

const routes: Routes = [
  {path: 'productos',component:ListProductosComponent},
  {path: 'detalleProducto',component:DescProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
