import { Component, OnInit } from '@angular/core';
import { Memoria } from '../models/memoria.model';
import { Validators, FormBuilder } from '@angular/forms';
import { MemoriaService } from '../services/memoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edicao-memoria',
  templateUrl: './edicao-memoria.component.html',
  styleUrls: ['./edicao-memoria.component.scss']
})
export class EdicaoMemoriaComponent implements OnInit {

  idMemoria: string;
  memoria: Memoria;
  memorias: Observable<Memoria[]>;


  formulario = this.formBuilder.group({
    memoriaRam: ['', Validators.required],
    armazenamento: ['', Validators.required],
  });
  constructor(
    private formBuilder: FormBuilder,
    private memoriaService: MemoriaService,
    private activedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  async ngOnInit() {

    this.formulario.disable();

    this.idMemoria = this.activedRoute.snapshot.paramMap.get('id');
    this.memoria = await this.memoriaService.get(this.idMemoria);
    this.memorias = this.memoriaService.getObservable();

    this.formulario.patchValue(this.memoria);

    this.formulario.enable();

  }

  async submit() {

    if (!this.formulario.valid || !this.memoria) {
      return;
    }

    this.formulario.disable();

    const memoriaEditada = this.formulario.value as Memoria;

    await this.memoriaService.update(this.idMemoria, memoriaEditada);

    console.log('Uma memoria foi editada -------------------------');
    console.log('Memoria:');
    console.log(this.memoria);
    console.log('Campos atualizados:');
    console.log(memoriaEditada);


    Object.assign(this.memoria, memoriaEditada);

    this.formulario.enable();

  }

  voltar() {
    this.location.back();
  }
  async delete(memoriaId) {
    await this.memoriaService.delete(memoriaId);
  }
}