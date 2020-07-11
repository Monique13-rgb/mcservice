import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastrarMarcaComponent } from './cadastrar-marca/cadastrar-marca.component';
import { CadastroCelularesComponent } from './cadastro-celulares/cadastro-celulares.component';
import { CadastrarChipComponent } from './cadastrar-chip/cadastrar-chip.component';
import { CadastrarMemoriaComponent } from './cadastrar-memoria/cadastrar-memoria.component';
import { CadastrarSistemaComponent } from './cadastrar-sistema/cadastrar-sistema.component';
import { CadastrarTamanhoTelaComponent } from './cadastrar-tamanho-tela/cadastrar-tamanho-tela.component';


import { EdicaoCelularesComponent } from './edicao-celulares/edicao-celulares.component';
import { EdicaoMarcaComponent } from './edicao-marca/edicao-marca.component';
import { EdicaoChipComponent } from './edicao-chip/edicao-chip.component';
import { EdicaoMemoriaComponent } from './edicao-memoria/edicao-memoria.component';
import { EdicaoSistemaComponent } from './edicao-sistema/edicao-sistema.component';
import { EdicaotamanhoTelaComponent } from './edicaotamanho-tela/edicaotamanho-tela.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './home/home.component';
import { CelularesComponent } from './celulares/celulares.component';
import { EdicaoListaImagensComponent } from './edicao-lista-imagens/edicao-lista-imagens.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { VisualizarImagensComponent } from './visualizar-imagens/visualizar-imagens.component';


const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'usuarios/cadastro', component: CadastroUsuarioComponent },

  {
    path: 'home', component: HomeComponent,
    children: [

      { path: 'celulares', component: CelularesComponent },

      { path: 'cadastroCelulares', component: CadastroCelularesComponent, canActivate: [AdminGuard] },
      { path: 'cadastroMarca', component: CadastrarMarcaComponent,canActivate: [AdminGuard] },
      { path: 'cadastroChip', component: CadastrarChipComponent, canActivate: [AdminGuard] },
      { path: 'cadastroMemoria', component: CadastrarMemoriaComponent, canActivate: [AdminGuard] },
      { path: 'cadastroSistema', component: CadastrarSistemaComponent, canActivate: [AdminGuard] },
      { path: 'cadastroTamanhoTela', component: CadastrarTamanhoTelaComponent, canActivate: [AdminGuard] },


      { path: 'editarcelular/:id', component: EdicaoCelularesComponent, canActivate: [AdminGuard] },
      { path: 'editarmarca/:id', component: EdicaoMarcaComponent, canActivate: [AdminGuard] },
      { path: 'editarchip/:id', component: EdicaoChipComponent, canActivate: [AdminGuard] },
      { path: 'editarmemoria/:id', component: EdicaoMemoriaComponent, canActivate: [AdminGuard] },
      { path: 'editarsistema/:id', component: EdicaoSistemaComponent, canActivate: [AdminGuard] },
      { path: 'editartamanhoTela/:id', component: EdicaotamanhoTelaComponent, canActivate: [AdminGuard] },
      { path: 'imagens/:id', component: EdicaoListaImagensComponent, canActivate: [AdminGuard] },
      { path: 'visualizarimagens/:id', component: VisualizarImagensComponent },
      
      
      { path: 'carrinho', component: CarrinhoComponent},
      { path: '**', component: PaginaNaoEncontradaComponent }

    ]
  },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
