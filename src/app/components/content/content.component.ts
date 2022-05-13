import { Component, OnInit } from '@angular/core';

interface IMenu {
  titulo: string;
  enderecoImagem: string;
  link: string;
}

@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  listaMenu: IMenu[] = [
    {
      titulo: 'COMIDAS',
      enderecoImagem: 'assets/imagens/dadinho.jpg',
      link: '/principais',
    },
    {
      titulo: 'DRINKS',
      enderecoImagem: 'assets/imagens/drinks.webp',
      link: '/classicos',
    },
    {
      titulo: 'WINES',
      enderecoImagem: 'assets/imagens/white_wine.webp',
      link: 'comecar',
    },
  ];

  ngOnInit(): void {}

  constructor() {}
}
