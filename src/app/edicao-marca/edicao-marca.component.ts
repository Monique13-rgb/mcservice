import { Component, OnInit } from '@angular/core';
import { Marca } from '../models/marca.model';
import { Validators, FormBuilder } from '@angular/forms';
import { MarcaService } from '../services/marca.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edicao-marca',
  templateUrl: './edicao-marca.component.html',
  styleUrls: ['./edicao-marca.component.scss']
})
export class EdicaoMarcaComponent implements OnInit {

  idMarca: string;
  marca: Marca;
  marcas: Observable<Marca[]>;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private marcaService: MarcaService,
    private activedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  async ngOnInit() {

    this.formulario.disable();

    this.idMarca = this.activedRoute.snapshot.paramMap.get('id');
    this.marca = await this.marcaService.get(this.idMarca);
    this.marcas = this.marcaService.getObservable();

    this.formulario.patchValue(this.marca);

    this.formulario.enable();

  }

  async submit() {

    if (!this.formulario.valid || !this.marca) {
      return;
    }

    this.formulario.disable();

    const marcaEditada = this.formulario.value as Marca;

    await this.marcaService.update(this.idMarca, marcaEditada);

    console.log('Uma marca foi editada -------------------------');
    console.log('Marca:');
    console.log(this.marca);
    console.log('Campos atualizados:');
    console.log(marcaEditada);


    Object.assign(this.marca, marcaEditada);

    this.formulario.enable();

  }

  voltar() {
    this.location.back();
  }
  async delete(marcaId) {
    await this.marcaService.delete(marcaId);
  }
}