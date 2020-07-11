import { Component, OnInit } from '@angular/core';
import { Chip } from '../models/chip.model';
import { Marca } from '../models/marca.model';
import { Memoria } from '../models/memoria.model';
import { Sistema } from '../models/sistema.model';
import { tamanhoTela } from '../models/tamanhoTela.model';
import { Celulares } from '../models/celulares.model';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ChipService } from '../services/chip.service';
import { MarcaService } from '../services/marca.service';
import { MemoriaService } from '../services/memoria.service';
import { SistemaService } from '../services/sistema.service';
import { TamanhoTelaService } from '../services/tamanho-tela.service';
import { CelularesService } from '../services/celulares.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.scss']
})
export class CelularesComponent implements OnInit {

  chips: Observable<Chip[]>;
  marcas: Observable<Marca[]>;
  memorias: Observable<Memoria[]>;
  sistemas: Observable<Sistema[]>;
  tamanhoTelas: Observable<tamanhoTela[]>;
  celular: Observable<Celulares[]>;
  usuario: Usuario;

  constructor(
    private router: Router,
    private chipService: ChipService,
    private marcaService: MarcaService,
    private memoriaService: MemoriaService,
    private sistemaService: SistemaService,
    private tamanhotelaService: TamanhoTelaService,
    private celularesService: CelularesService,
    private usuariosService: UsuariosService
  ) { }

  async ngOnInit(): Promise<void> {

    this.usuario = await this.usuariosService.getUsuarioLogado();

    this.chips = this.chipService.getObservable();
    this.marcas = this.marcaService.getObservable();
    this.memorias = this.memoriaService.getObservable();
    this.sistemas = this.sistemaService.getObservable();
    this.tamanhoTelas = this.tamanhotelaService.getObservable();
    this.celular = this.celularesService.getObservable();
  }

  usuarioAdmin(): boolean {

    if (this.usuario && this.usuario.permissao === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  cadastro() {
    this.router.navigate(['home/cadastroCelulares']);
  }
  editarChip(chip: Chip) {
    this.router.navigate([`/home/editarchip/${chip.id}`]);
  }
  cadastrarChip() {
    this.router.navigate(['home/cadastroChip']);
  }
  editarMarca(marca: Marca) {
    this.router.navigate([`/home/editarmarca/${marca.id}`]);
  }
  cadastrarMarca() {
    this.router.navigate(['home/cadastroMarca']);
  }
  editarMemoria(memoria: Memoria) {
    this.router.navigate([`/home/editarmemoria/${memoria.id}`]);
  }
  cadastrarMemoria() {
    this.router.navigate(['home/cadastroMemoria']);
  }
  editarSistema(sistema: Sistema) {
    this.router.navigate([`/home/editarsistema/${sistema.id}`]);
  }
  cadastrarSO() {
    this.router.navigate(['home/cadastroSistema']);
  }
  editartamanhoTela(tamanhotela: tamanhoTela) {
    this.router.navigate([`/home/editartamanhoTela/${tamanhotela.id}`]);
  }
  cadastrartamtela() {
    this.router.navigate(['home/cadastroTamanhoTela']);
  }
  editarCelulares(celulares: Celulares) {
    this.router.navigate([`/home/editarcelular/${celulares.id}`]);
  }
  async delete(celularesId) {
    await this.celularesService.delete(celularesId);
  }
  editarImagem(celular: Celulares) {
    this.router.navigate([`/home/imagens${celular.id}`]);
  }
  visualizarimagens(celular: Celulares) {
    this.router.navigate([`/home/visualizarimagens/${celular.id}`]);
  }
  carrinho() {
    this.router.navigate(['home/carrinho']);
  }
}
