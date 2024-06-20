import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {

  public curepipeForecast: Forecast = {
    name: 'Rainy',
    location: 'Curepipe',
    date: new Date()
  };

  public forecasts: Forecast[] = [
    {
      name: 'Sunny',
      location: 'Port Louis',
      date: new Date()
    },
    {
      name: 'Windy',
      location: 'Gris Gris',
      date: new Date(2024, 5, 18)
    },
    {
      name: 'Rainy',
      location: 'Curepipe',
      date: new Date(),
      rainfall: 50
    },
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.forecasts);

    this.curepipeForecast.name = '';
  }

}
