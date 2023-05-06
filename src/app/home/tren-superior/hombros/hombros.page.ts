import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hombros',
  templateUrl: './hombros.page.html',
  styleUrls: ['./hombros.page.scss'],
})
export class HombrosPage implements OnInit {

  segment: string = 'peso_corporal';
  url = 'assets/images/tren-superior/hombros/';

  peso_corporal = [
    { t: 'Flexión en V elevada', i: this.url + 'flexion v.webp' }
  ];

  maquinaria = [
    { t: 'Press de Hombro', i: 'assets/images/tren-superior/press pecho hombro.webp', d: 'Se debe colocar el respaldo en posición inclinada, y colocar el agarre en la parte superior. Ajustar el peso y elevar el agarre, y bajar sin llegar al tope. Cambiar ligeramente de posición para trabajar distintas zonas de los hombros. ' }
  ];

  barra = [
    { t: 'Press de hombro', i: this.url + 'press hombro.webp' },
    { t: 'Press de hombro frontal', i: this.url + 'press hombro frontal.webp' },
    { t: 'Remo vertical', i: this.url + 'remo vertical.webp' }
  ];

  poleas = [
    { t: 'Press de hombro con polea por encima de cabeza', i: this.url + 'press hombro polea.webp' },
    { t: 'Elevación lateral con polea', i: this.url + 'elevacion lateral polea.webp' },
    { t: 'Aperturas con polea', i: this.url + 'apertura polea.webp' },
    { t: 'Remo vertical con poleas', i: this.url + 'remo vertical polea.webp' }
  ];

  mancuernas = [
    { t: 'Press de hombro sentado', i: this.url + 'press hombro sentado.webp' },
    { t: 'Elevaciones laterales con mancuernas', i: this.url + 'elevacion lateral mancuerna.webp' },
    { t: 'Elevaciones frontales con mancuernas', i: this.url + 'elevacion frontal mancuerna.webp' },
    { t: 'Elevaciones laterales sentado', i: this.url + 'elevacion lateral sentado.webp' },
    { t: 'Elevaciones laterales en posición de remo', i: this.url + 'elevacion lateral remo.webp' },
    { t: 'Remo trasero con mancuernas', i: this.url + 'remo trasero.webp' },
    { t: 'Apertura inversa con mancuernas', i: this.url + 'remo inverso.webp' },
    { t: 'Press neutral por encima de cabeza con mancuernas', i: this.url + 'press neutral.webp' },
    { t: 'Plancha IYTW', i: this.url + 'iytw.webp' }
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
