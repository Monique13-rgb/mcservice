import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CustomValidators } from '../validators/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { Celulares } from '../models/celulares.model';
import { Marca } from '../models/marca.model';
import { Chip } from '../models/chip.model';
import { Memoria } from '../models/memoria.model';
import { Sistema } from '../models/sistema.model';
import { tamanhoTela } from '../models/tamanhoTela.model';
import { MarcaService } from '../services/marca.service';
import { ChipService } from '../services/chip.service';
import { MemoriaService } from '../services/memoria.service';
import { SistemaService } from '../services/sistema.service';
import { TamanhoTelaService } from '../services/tamanho-tela.service';
import { CelularesService } from '../services/celulares.service';

@Component({
    selector: 'app-edicao-celulares',
    templateUrl: './edicao-celulares.component.html',
    styleUrls: ['./edicao-celulares.component.scss']
})
export class EdicaoCelularesComponent implements OnInit {

    idCelulares: string;
    celular: Celulares;

    marcas: Observable<Marca[]>;
    chips: Observable<Chip[]>;
    memorias: Observable<Memoria[]>;
    sistemas: Observable<Sistema[]>;
    tamanhoTelas: Observable<tamanhoTela[]>;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        preco: ['', [Validators.required, CustomValidators.number]],
        idMarca: ['', Validators.required],
        idMemoria: ['', Validators.required],
        idSistema: ['', Validators.required],
        idTamanhoTela: ['', Validators.required],
        idChip: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private marcaService: MarcaService,
        private chipService: ChipService,
        private memoriaService: MemoriaService,
        private sistemaService: SistemaService,
        private tamanhoTelaService: TamanhoTelaService,
        private celularesService: CelularesService,
        private snackBar: MatSnackBar,
        private location: Location,
        private activedRoute: ActivatedRoute,
    ) { }

    async ngOnInit() {

        this.formulario.disable();

        this.marcas = this.marcaService.getObservable();
        this.chips = this.chipService.getObservable();
        this.memorias = this.memoriaService.getObservable();
        this.sistemas = this.sistemaService.getObservable();
        this.tamanhoTelas = this.tamanhoTelaService.getObservable();

        this.idCelulares = this.activedRoute.snapshot.paramMap.get('id');
        this.celular = await this.celularesService.get(this.idCelulares);

        console.log(this.celular);

        this.formulario.patchValue(this.celular);

        this.formulario.enable();
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const celularEditado = this.formulario.value as Celulares;

        const arte = await this.celularesService.update(this.idCelulares, celularEditado);

        console.log('Um produto foi editado -------------------------');
        console.log('Produto:');
        console.log(this.celular);
        console.log('Campos atualizados:');
        console.log(celularEditado);

        Object.assign(this.celular, this.celular);

        this.formulario.enable();

    }

    voltar() {
        this.location.back();
    }

}

