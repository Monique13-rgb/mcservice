import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../validators/custom-validators';
import { TamanhoTelaService } from '../services/tamanho-tela.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tamanhoTela } from '../models/tamanhoTela.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-cadastrar-tamanho-tela',
    templateUrl: './cadastrar-tamanho-tela.component.html',
    styleUrls: ['./cadastrar-tamanho-tela.component.scss']
})
export class CadastrarTamanhoTelaComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        largura: ['', [Validators.required, CustomValidators.number]],
        altura: ['', [Validators.required, CustomValidators.number]]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private tamanhoTelaService: TamanhoTelaService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void {
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novoTamanho = this.formulario.value as tamanhoTela;
        const tamanho = await this.tamanhoTelaService.add(novoTamanho);

        console.log('Um novo tamanho foi salvo ----------------------');
        console.log(tamanho);

        this.formulario.enable();
        this.formGroupDirective.resetForm();


    }

    voltar() {
        this.location.back();
    }

}