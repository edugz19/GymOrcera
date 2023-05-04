import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    { h: 'Calentamiento', p: 'Activa tu cuerpo de arriba a abajo', link: '/home/calentamiento'},
    { h: 'Tren superior', p: 'Ejercicios para pecho, espalda, hombros, etc', link: 'home/tren-superior', },
    { h: 'Tren Inferior', p: 'Ejercicios para piernas y glúteos', link: 'home/tren-inferior' },
    { h: 'Abdomen', p: 'Entrenamiento de todo el abdomen', link: 'home/abdomen' },
    { h: 'Cardio', p: 'Ejercicios para quemar calorías', link: 'home/cardio' },
    { h: 'Rutinas HIIT', p: 'Ejercicios con peso corporal y a gran intensidad', link: 'home/hiit' },
    { h: 'Estiramientos', p: 'Estira todos tus músculos', link: 'home/estiramientos' }
  ];

  constructor(
    public router: Router
  ) {}
}
