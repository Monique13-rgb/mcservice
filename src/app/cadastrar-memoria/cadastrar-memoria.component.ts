import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { MemoriaService } from '../services/memoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Memoria } from '../models/memoria.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-cadastrar-memoria',
    templateUrl: './cadastrar-memoria.component.html',
    styleUrls: ['./cadastrar-memoria.component.scss']
})
export class CadastrarMemoriaComponent implements OnInit {

    formulario = this.formBuilder.group({
        memoriaRam: ['', Validators.required],
        armazenamento: ['', Validators.required],
    });

    @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    constructor(
        private formBuilder: FormBuilder,
        private memoriaService: MemoriaService,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    ngOnInit(): void { }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const novaMemoria = this.formulario.value as Memoria;
        const memoria = await this.memoriaService.add(novaMemoria);

        console.log('Um novo estilo foi salvo ----------------------');
        console.log(memoria);

        this.formulario.enable();
        this.formGroupDirective.resetForm();

    }

    voltar() {
        this.location.back();
    }

}


