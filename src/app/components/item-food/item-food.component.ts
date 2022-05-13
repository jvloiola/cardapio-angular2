import { IWine } from './../../models/wine.model';
import { IDrink } from 'src/app/models/drink.model';
import { IBase } from './../../models/base.model';
import { Component, Input, OnInit } from '@angular/core';
import { IFood } from 'src/app/models/food.model';

@Component({
  selector: 'ngf-item-food',
  templateUrl: './item-food.component.html',
  styleUrls: ['./item-food.component.scss'],
})
export class ItemFoodComponent implements OnInit {
  @Input() item?: IFood | IDrink | IWine;

  constructor() {}

  ngOnInit(): void {}
}
