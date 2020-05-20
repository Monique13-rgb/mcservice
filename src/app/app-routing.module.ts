import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastrarMarcaComponent } from './cadastrar-marca/cadastrar-marca.component';


const routes: Routes = [

  { path: '', redirectTo: 'listar', pathMatch: 'full' },

  { path:  'cadastrar-marca', component: CadastrarMarcaComponent},
  { path: 'listar', component: ListarComponent},
  { path: '**', component: PaginaNaoEncontradaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
