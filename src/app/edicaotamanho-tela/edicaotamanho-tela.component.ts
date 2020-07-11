import { Component, OnInit } from '@angular/core';
import { tamanhoTela } from '../models/tamanhoTela.model';
import { CustomValidators } from '../validators/custom-validators';
import { TamanhoTelaService } from '../services/tamanho-tela.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edicaotamanho-tela',
  templateUrl: './edicaotamanho-tela.component.html',
  styleUrls: ['./edicaotamanho-tela.component.scss']
})
export class EdicaotamanhoTelaComponent implements OnInit {
  idtamanhoTela: string;
  tamanhotela: tamanhoTela;
  tamanhoTelas: Observable<tamanhoTela[]>;


  formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    largura: ['', [Validators.required, CustomValidators.number]],
    altura: ['', [Validators.required, CustomValidators.number]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private tamanhotelaService: TamanhoTelaService,
    private snackBar: MatSnackBar,
    private location: Location,
    public activatedRoute: ActivatedRoute,
  ) { }


  async ngOnInit() {

    this.formulario.disable();

    this.idtamanhoTela = this.activatedRoute.snapshot.paramMap.get('id');
    this.tamanhotela = await this.tamanhotelaService.get(this.idtamanhoTela);
    this.tamanhoTelas = this.tamanhotelaService.getObservable();

    this.formulario.patchValue(this.tamanhotela);

    this.formulario.enable();

  }


  async submit() {

    if (!this.formulario.valid || !this.tamanhotela) {
      return;
    }

    this.formulario.disable();

    const tamtelaEditado = this.formulario.value as tamanhoTela;

    await this.tamanhotelaService.update(this.idtamanhoTela, tamtelaEditado);

    console.log('Tamanho da tela foi editado -------------------------');
    console.log('Tamanho da Tela:');
    console.log(this.tamanhotela);
    console.log('Campos atualizados:');
    console.log(tamtelaEditado);


    Object.assign(this.tamanhotela, tamtelaEditado);

    this.formulario.enable();

  }

  voltar() {
    this.location.back();
  }
  async delete(tamanhoTelaId) {
    await this.tamanhotelaService.delete(tamanhoTelaId);
  }
}
