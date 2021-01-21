import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.sass']
})
export class NuevoComponent implements OnInit {
  nuevoProductoFG: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<NuevoComponent>
    ) {
    this.nuevoProductoFG = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
      cantidad: new FormControl(1, [Validators.required, Validators.min(1)]),
      comprado: new FormControl(false, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.nuevoProductoFG.valid){
      this.dialogRef.close(this.nuevoProductoFG.value);
    }
  }
}
