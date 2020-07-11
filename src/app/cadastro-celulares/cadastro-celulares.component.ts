import { Component, OnInit, ViewChild } from '@angular/core';
import { Marca } from '../models/marca.model';
import { Observable } from 'rxjs';
import { Chip } from '../models/chip.model';
import { Memoria } from '../models/memoria.model';
import { Sistema } from '../models/sistema.model';
import { tamanhoTela } from '../models/tamanhoTela.model';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { MarcaService } from '../services/marca.service';
import { CelularesService } from '../services/celulares.service';
import { ChipService } from '../services/chip.service';
import { MemoriaService } from '../services/memoria.service';
import { SistemaService } from '../services/sistema.service';
import { TamanhoTelaService } from '../services/tamanho-tela.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Celulares } from '../models/celulares.model';
import { CustomValidators } from '../validators/custom-validators';
import { Location } from '@angular/common';

@Component({
    selector: 'app-cadastro-celulares',
    templateUrl: './cadastro-celulares.component.html',
    styleUrls: ['./cadastro-celulares.component.scss']
})
export class CadastroCelularesComponent implements OnInit {
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

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

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
    ) { }

    ngOnInit(): void {
        this.marcas = this.marcaService.getObservable();
        this.chips = this.chipService.getObservable();
        this.memorias = this.memoriaService.getObservable();
        this.sistemas = this.sistemaService.getObservable();
        this.tamanhoTelas = this.tamanhoTelaService.getObservable();
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novoCelular = this.formulario.value as Celulares;
        const celular = await this.celularesService.add(novoCelular);

        console.log('Um novo celular foi salvo ----------------------');
        console.log(celular);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

    }

    voltar() {
        this.location.back();
    }

}
