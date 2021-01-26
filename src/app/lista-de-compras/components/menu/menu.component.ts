import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  @Input() existenProductos: boolean | undefined;
  @Output() nuevo = new EventEmitter();
  @Output() retirar = new EventEmitter();
  @Output() limpiar = new EventEmitter();
  constructor() { }
}
