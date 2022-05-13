import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Route, RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { DrinkListComponent } from './pages/drink-list/drink-list.component';
import { WineListComponent } from './pages/wine-list/wine-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import { ItemFoodComponent } from './components/item-food/item-food.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'drinks',
    component: DrinkListComponent,
  },
  {
    path: 'principais',
    component: FoodListComponent,
  },
  {
    path: 'wines',
    component: WineListComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    NavBarComponent,
    FoodListComponent,
    DrinkListComponent,
    WineListComponent,
    CardListComponent,
    ContentComponent,
    ItemFoodComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
