import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SistemaService } from '../services/sistema.service';
import { Sistema } from '../models/sistema.model';
import { Location } from '@angular/common';
@Component({
    selector: 'app-cadastrar-sistema',
    templateUrl: './cadastrar-sistema.component.html',
    styleUrls: ['./cadastrar-sistema.component.scss']
})
export class CadastrarSistemaComponent implements OnInit {


    formulario = this.formBuilder.group({
        sistemaOperacional: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private sistemaService: SistemaService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void { }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novoSistema = this.formulario.value as Sistema;
        const sistema = await this.sistemaService.add(novoSistema);

        console.log('Um novo estilo foi salvo ----------------------');
        console.log(sistema);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

    }

    voltar() {
        this.location.back();
    }

}
