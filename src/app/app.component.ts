import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarShop';
  carList = [
    {brand: 'BMW', price:70000, color:'black', model:'m5', photo: 'img/bmw_m5.jpg'}, 
    {brand: 'BMW', price:18000, color:'white', model:'E39', photo: 'img/bmwe39.jpg'},
    {brand: 'Dodge', price:100000, color:'red', model:'Challenger', photo: 'img/dodge_challenger.jpg'},
    {brand: 'Dodge', price:180000, color:'red', model:'Viper', photo: 'img/dodge_viper.jpg'},
    {brand: 'AUDI', price:200000, color:'yellow', model:'R8', photo: 'img/audi_r8.jpg'},
    {brand: 'AUDI', price:38000, color:'black', model:'A3', photo: 'img/audi_a3.jpg'},
    {brand: 'Bugatti', price:1700000, color:'blue', model:'Veyron', photo: 'img/bugatti_veyron.jpg'},
    {brand: 'Aston Martin', price:170000, color:'orange', model:'Rapid', photo: 'img/am_rapid.jpg'},
    {brand: 'Toyota', price:10000, color:'red', model:'Yaris', photo: 'img/toyota_yaris.jpg'},
    {brand: 'Toyota', price:25000, color:'black', model:'RAV4', photo: 'img/toyota_rav4.jpg'},
    {brand: 'Land Rover', price:30000, color:'green', model:'Defender', photo: 'img/lr_defender.jpg'},
    {brand: 'Range Rover', price:78000, color:'black', model:'Sport', photo: 'img/rr_sport.jpg'},
    {brand: 'Skoda', price:20000, color:'white', model:'Octavia', photo: 'img/scoda_octavia.jpg'},
    {brand: 'Skoda', price:15000, color:'blue', model:'Fabia', photo: 'img/Skoda_Fabia.jpg'}
];
}
