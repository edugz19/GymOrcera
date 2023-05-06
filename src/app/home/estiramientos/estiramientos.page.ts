import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estiramientos',
  templateUrl: './estiramientos.page.html',
  styleUrls: ['./estiramientos.page.scss'],
})
export class EstiramientosPage implements OnInit {

  url = 'assets/images/estiramientos/';

  items = [
    { t: 'Gemelos', i: this.url + 'gemelos.webp' },
    { t: 'Isquiotibiales', i: this.url + 'isquios.webp' },
    { t: 'Cuádriceps', i: this.url + 'cuadriceps.webp' },
    { t: 'Glúteos', i: this.url + 'gluteos.webp' },
    { t: 'Abdomen', i: this.url + 'abdomen.webp' },
    { t: 'Oblicuos', i: this.url + 'oblicuos.webp' },
    { t: 'Lumbar', i: this.url + 'lumbar.webp' },
    { t: 'Pectorales', i: this.url + 'pectorales.webp' },
    { t: 'Bíceps', i: this.url + 'biceps.webp' },
    { t: 'Antebrazos', i: this.url + 'antebrazos.webp' },
    { t: 'Dorsales', i: this.url + 'dorsales.webp' },
    { t: 'Trapecio Medio', i: this.url + 'trapecio-medio.webp' },
    { t: 'Tríceps', i: this.url + 'triceps.webp' },
    { t: 'Hombros', i: this.url + 'hombros.webp' },
    { t: 'Trapecio - Cuello', i: this.url + 'trapecio.webp' }

  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
