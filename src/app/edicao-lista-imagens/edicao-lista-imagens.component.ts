import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelularesService } from '../services/celulares.service';
import { Celulares } from '../models/celulares.model';
import { Location } from '@angular/common';


export class Imagem {
    url: string;
    arquivo: File;
}

@Component({
    selector: 'app-edicao-lista-imagens',
    templateUrl: './edicao-lista-imagens.component.html',
    styleUrls: ['./edicao-lista-imagens.component.scss']
})
export class EdicaoListaImagensComponent implements OnInit {

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

    adicionarImagens(event: any) {

        const arquivos = event.target.files as FileList;

        for (let index = 0; index < arquivos.length; index++) {

            const arquivo = arquivos[index];

            this.imagens.push({ url: null, arquivo: arquivo });

        }

    }

    imagemEnviada() {
        this.atualizarImagens();
    }

    excluirImagem(imagem: Imagem) {

        const indice = this.imagens.indexOf(imagem);
        this.imagens.splice(indice, 1);

        this.atualizarImagens();

    }

    async atualizarImagens() {

        const imagensCelular = this.imagens.filter(x => x.url).map(x => x.url);

        console.log(imagensCelular);

        const celular = { imagens: imagensCelular } as Celulares;

        await this.celularesService.update(this.idCelulares,celular );

    }

    voltar() {
        this.location.back();
    }

}
