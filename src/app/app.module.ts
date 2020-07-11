import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  LOCALE_ID} from '@angular/core';

// Angular locale
import localept from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localept, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Reactive forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';








import { environment } from 'src/environments/environment';

import { LayoutModule } from '@angular/cdk/layout';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CadastrarMarcaComponent } from './cadastrar-marca/cadastrar-marca.component';
import { CadastroCelularesComponent } from './cadastro-celulares/cadastro-celulares.component';
import { CadastrarChipComponent } from './cadastrar-chip/cadastrar-chip.component';
import { CadastrarMemoriaComponent } from './cadastrar-memoria/cadastrar-memoria.component';
import { CadastrarSistemaComponent } from './cadastrar-sistema/cadastrar-sistema.component';
import { CadastrarTamanhoTelaComponent } from './cadastrar-tamanho-tela/cadastrar-tamanho-tela.component';
import { EdicaoCelularesComponent } from './edicao-celulares/edicao-celulares.component';
import { EdicaoMarcaComponent } from './edicao-marca/edicao-marca.component';
import { EdicaoMemoriaComponent } from './edicao-memoria/edicao-memoria.component';
import { EdicaoSistemaComponent } from './edicao-sistema/edicao-sistema.component';
import { EdicaotamanhoTelaComponent } from './edicaotamanho-tela/edicaotamanho-tela.component';
import { EdicaoChipComponent } from './edicao-chip/edicao-chip.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CelularesComponent } from './celulares/celulares.component';
import { EdicaoImagemComponent } from './edicao-imagem/edicao-imagem.component';
import { EdicaoListaImagensComponent } from './edicao-lista-imagens/edicao-lista-imagens.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { VisualizarImagensComponent } from './visualizar-imagens/visualizar-imagens.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    CadastrarMarcaComponent,
    CadastroCelularesComponent,
    CadastrarChipComponent,
    CadastrarMemoriaComponent,
    CadastrarSistemaComponent,
    CadastrarTamanhoTelaComponent,
    EdicaoCelularesComponent,
    EdicaoMarcaComponent,
    EdicaoMemoriaComponent,
    EdicaoSistemaComponent,
    EdicaotamanhoTelaComponent,
    EdicaoChipComponent,
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CelularesComponent,
    EdicaoImagemComponent,
    EdicaoListaImagensComponent,
    CarrinhoComponent,
    VisualizarImagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    LayoutModule,
    MatToolbarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
