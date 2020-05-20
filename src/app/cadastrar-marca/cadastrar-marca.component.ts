import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { MarcaService } from '../root-nav/marca.service';
import { Marca } from '../models/marca.model';

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
  ) { }

  ngOnInit(): void {
  }
  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const marca = this.formulario.value as Marca;
    const marcaRetorno = await this.marcaService.add(marca);

    this.formulario.enable();
    this.formGroupDirective.resetForm();
  }
}
