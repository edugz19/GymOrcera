import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorsales',
  templateUrl: './dorsales.page.html',
  styleUrls: ['./dorsales.page.scss'],
})
export class DorsalesPage implements OnInit {

  segment: string = 'peso_corporal';
  url = 'assets/images/tren-superior/dorsales/';

  peso_corporal = [
    { t: 'Dominada', i: this.url + 'dominada.webp' },
    { t: 'Flexión australiana', i: 'assets/images/tren-superior/antebrazos/flexion australiana.webp' }
  ];

  maquinaria = [
    { t: 'Jalón al pecho', i: this.url + '' },
    { t: 'Remo en polea baja', i: this.url + '' }
  ]

  barra = [
    { t: 'Remo con barra agarre supino', i: this.url + 'remo supino.webp'},
    { t: 'Remo Pendlay pronado con barra', i: this.url + 'remo findlay.webp'}
  ];

  poleas = [
    { t: 'Pull-over con polea', i: this.url + 'pullover.webp'},
    { t: 'Pull-in con polea', i: this.url + 'pull in.webp'}
  ];

  mancuernas = [
    { t: 'Remo con mancuernas bilateral', i: this.url + 'remo bilateral.webp' },
    { t: 'Remo con mancuernas unilateral', i: this.url + 'remo unilateral.webp' },
    { t: 'Pull-over con mancuerna', i: this.url + 'pullover mancuerna.webp' },
    { t: 'Remo inclinado tumbado con mancuernas', i: this.url + 'remo inclinado.webp' },
    { t: 'Remo renegado con mancuernas', i: this.url + 'remo renegado.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
