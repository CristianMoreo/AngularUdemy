import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : 'rick',component:HomeComponent},
  { path : 'pokemon',component:PokemonComponent},
  { path : '',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
