import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';

import { HeaderComponent } from './components/base/header/header.component';
import { AsideComponent } from './components/base/aside/aside.component';
import { CarSectionComponent } from './components/base/car-section/car-section.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { CarWrapperComponent } from './components/shopping_cards/car-wrapper/car-wrapper.component';

import { BrandInputComponent } from './components/shopping_cards/filters/brand-input/brand-input.component';
import { ModelInputComponent } from './components/shopping_cards/filters/model-input/model-input.component';
import { PriceInputComponent } from './components/shopping_cards/filters/price-input/price-input.component';
import { ColorInputComponent } from './components/shopping_cards/filters/color-input/color-input.component';
import { FindBtnComponent } from './components/shopping_cards/filters/find-btn/find-btn.component';
import { RadiosComponent } from './components/shopping_cards/filters/radios/radios.component';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    CarSectionComponent,
    FooterComponent,
    CarWrapperComponent,
    BrandInputComponent,
    ModelInputComponent,
    PriceInputComponent,
    ColorInputComponent,
    FindBtnComponent,
    RadiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
