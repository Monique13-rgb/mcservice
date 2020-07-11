import { Component, OnInit } from '@angular/core';
import { Imagem } from '../edicao-lista-imagens/edicao-lista-imagens.component';
import { ActivatedRoute } from '@angular/router';
import { CelularesService } from '../services/celulares.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-visualizar-imagens',
  templateUrl: './visualizar-imagens.component.html',
  styleUrls: ['./visualizar-imagens.component.scss']
})
export class VisualizarImagensComponent implements OnInit {
  carregando: boolean;
  idCelulares: string;
  descricaoCelulares: string;
  imagens: Imagem[] = [];

  constructor(
      private actvitedRoute: ActivatedRoute,
      private celularesService: CelularesService,
      private location: Location,
  ) { }

  async ngOnInit() {

      this.carregando = true;

      this.idCelulares = this.actvitedRoute.snapshot.paramMap.get('id');

      const celular = await this.celularesService.get(this.idCelulares);

      this.descricaoCelulares = `${celular.nome} - ${celular.descricao}`;

      if (celular.imagens) {

          console.log(celular.imagens);

          this.imagens = celular.imagens.map<Imagem>(urlImagem => {
              return { url: urlImagem, arquivo: null };
          });

      }

      this.carregando = false;
    }
    voltar() {
      this.location.back();
    }
}
