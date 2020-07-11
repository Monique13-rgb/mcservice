import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { ChipService } from '../services/chip.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Chip } from '../models/chip.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastrar-chip',
  templateUrl: './cadastrar-chip.component.html',
  styleUrls: ['./cadastrar-chip.component.scss']
})
export class CadastrarChipComponent implements OnInit {
 
  formulario = this.formBuilder.group({
    quantidade: ['', Validators.required]
});

@ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

constructor(
    private formBuilder: FormBuilder,
    private chipService: ChipService,
    private snackBar: MatSnackBar,
    private location: Location,
) { }

ngOnInit(): void { }

async submit() {

    if (!this.formulario.valid) {
        return;
    }

    this.formulario.disable();

    const novoChip = this.formulario.value as Chip;
    const chip = await this.chipService.add(novoChip);

    console.log('Um novo chip foi salvo ----------------------');
    console.log(chip);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

}

voltar() {
    this.location.back();
}

}