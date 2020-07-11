import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Marca } from '../models/marca.model';
import { MarcaService } from '../services/marca.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
    selector: 'app-cadastrar-marca',
    templateUrl: './cadastrar-marca.component.html',
    styleUrls: ['./cadastrar-marca.component.scss']
})
export class CadastrarMarcaComponent implements OnInit {

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private marcaService: MarcaService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void { }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novaMarca = this.formulario.value as Marca;
        const marca = await this.marcaService.add(novaMarca);

        console.log('Um novo estilo foi salvo ----------------------');
        console.log(marca);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

    }

    voltar() {
        this.location.back();
    }

}