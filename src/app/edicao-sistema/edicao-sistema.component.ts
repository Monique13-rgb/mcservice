import { Component, OnInit } from '@angular/core';
import { Sistema } from '../models/sistema.model';
import { Validators, FormBuilder } from '@angular/forms';
import { SistemaService } from '../services/sistema.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edicao-sistema',
  templateUrl: './edicao-sistema.component.html',
  styleUrls: ['./edicao-sistema.component.scss']
})
export class EdicaoSistemaComponent implements OnInit {

  idSistema: string;
  sistema: Sistema;
  sistemas: Observable<Sistema[]>;

  formulario = this.formBuilder.group({
    sistemaOperacional: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private sistemaService: SistemaService,
    public activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  async ngOnInit() {

    this.formulario.disable();

    this.idSistema = this.activatedRoute.snapshot.paramMap.get('id');
    this.sistema = await this.sistemaService.get(this.idSistema);
    this.sistemas = this.sistemaService.getObservable();
    this.formulario.patchValue(this.sistema);


    this.formulario.enable();

  }

  async submit() {

    if (!this.formulario.valid || !this.sistema) {
      return;
    }

    this.formulario.disable();

    const sistemaEditado = this.formulario.value as Sistema;
    sistemaEditado.id = this.sistema.id;
    await this.sistemaService.update(sistemaEditado);


    console.log('Um sistema foi editado -------------------------');
    console.log('Sistema:');
    console.log(this.sistema);
    console.log('Campos atualizados:');
    console.log(sistemaEditado);


    Object.assign(this.sistema, sistemaEditado);

    this.formulario.enable();

  }

  voltar() {
    this.location.back();
  }
  async delete(sistemaId) {
    await this.sistemaService.delete(sistemaId);
  }
}
