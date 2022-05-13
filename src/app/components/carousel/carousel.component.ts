import { Component, OnInit } from '@angular/core';

interface IMenu {
  titulo: string;
  enderecoImagem: string;
}

@Component({
  selector: 'ngf-carousel, ngbd-carousel-basic',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  listaMenu: IMenu[] = [
    {
      titulo: 'COMIDAS',
      enderecoImagem: 'assets/imagens/dadinho.jpg',
    },
    {
      titulo: 'DRINKS',
      enderecoImagem: 'assets/imagens/drinks.webp',
    },
    {
      titulo: 'WINES',
      enderecoImagem: 'assets/imagens/white_wine.webp',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
