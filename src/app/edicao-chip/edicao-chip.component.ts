import { Component, OnInit } from '@angular/core';
import { Chip } from '../models/chip.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ChipService } from '../services/chip.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edicao-chip',
  templateUrl: './edicao-chip.component.html',
  styleUrls: ['./edicao-chip.component.scss']
})
export class EdicaoChipComponent implements OnInit {

  idChip: string;
  chip: Chip;
  chips: Observable<Chip[]>;

  formulario = this.formBuilder.group({
    quantidade: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private chipService: ChipService,
    private activedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  async ngOnInit() {

    this.formulario.disable();

    this.idChip = this.activedRoute.snapshot.paramMap.get('id');
    this.chip = await this.chipService.get(this.idChip);
    this.chips = this.chipService.getObservable();

    this.formulario.patchValue(this.chip);

    this.formulario.enable();

  }

  async submit() {

    if (!this.formulario.valid || !this.chip) {
      return;
    }

    this.formulario.disable();

    const chipEditado = this.formulario.value as Chip;

    await this.chipService.update(this.idChip, chipEditado);

    console.log('Um chip foi editado -------------------------');
    console.log('Chip:');
    console.log(this.chip);
    console.log('Campos atualizados:');
    console.log(chipEditado);


    Object.assign(this.chip, chipEditado);

    this.formulario.enable();
  }

  voltar() {
    this.location.back();
  }
  async delete(chipId) {
    await this.chipService.delete(chipId);
  }
}