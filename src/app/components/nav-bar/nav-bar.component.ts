import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngf-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  qtdeItemPedido: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
