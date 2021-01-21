import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() existenProductos: boolean | undefined;
  @Output() nuevo = new EventEmitter();
  @Output() retirar = new EventEmitter();
  @Output() limpiar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
}
