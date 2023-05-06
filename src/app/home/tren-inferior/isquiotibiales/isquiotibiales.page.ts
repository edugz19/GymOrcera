import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-isquiotibiales',
  templateUrl: './isquiotibiales.page.html',
  styleUrls: ['./isquiotibiales.page.scss'],
})
export class IsquiotibialesPage implements OnInit {

  segment: string = 'peso_corporal';
  url: string = './assets/images/tren-inferior/isquios/';

  peso_corporal = [
    { t: 'Patada trasera', i: this.url + 'patada trasera.webp' },
    { t: 'Peso muerto romano a una pierna', i: this.url + 'peso muerto romano pierna.webp' },
    { t: 'Curl nórdico', i: this.url + 'curl nordico.webp' },
    { t: 'Zancada trasera', i: 'assets/images/tren-inferior/cuadriceps/zancada trasera.webp' }
  ];

  maquinaria = [
    { t: 'Máquina de femorales', i: this.url + 'maquina femorales.webp', d: 'Para trabajar los cuádriceps deberá ponerse el contrapeso, usando la palaca, en una de las posiciones 1, 2 o 3, quedando abajo. Tras esto, colocar los pies por detrás del contrapeso, ajustar el peso y el acolchamiento a los cuádriceps, y realizar el empuje hacia arriba hasta llegar a una posición horizontal.' },
  ];

  barra = [
    { t: 'Peso muerto romano', i: 'assets/images/tren-inferior/gluteos/peso muerto romano.webp' },
    { t: 'Peso muerto a una pierna', i: 'assets/images/tren-inferior/gluteos/peso muerto pierna.webp' }
  ];

  poleas = [
    { t: 'Peso muerto romano con polea', i: 'assets/images/tren-inferior/gluteos/sentadilla romana polea.webp' },
    { t: 'Peso muerto a una pierna con polea', i: 'assets/images/tren-inferior/gluteos/peso muerto pierna polea.webp' },
    { t: 'Curl de isquios con polea', i: this.url + 'curl polea.webp' },
    { t: 'Pullthrough con polea', i: 'assets/images/tren-inferior/gluteos/tirar polea.webp' },
  ];

  mancuernas = [
    { t: 'Peso muerto romano con mancuerna', i: 'assets/images/tren-inferior/gluteos/peso muerto romano mancuerna.webp' },
    { t: 'Curl de isquios con mancuerna', i: this.url + 'curl isquios mancuerna.webp' },
    { t: 'Peso muerto a una pierna con mancuerna', i: this.url + 'pero muerto pierna mancuerna.webp' },
    { t: 'Balanceo de mancuerna', i: this.url + 'balanceo mancuerna.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
