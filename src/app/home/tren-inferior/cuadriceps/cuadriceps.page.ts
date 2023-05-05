import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuadriceps',
  templateUrl: './cuadriceps.page.html',
  styleUrls: ['./cuadriceps.page.scss'],
})
export class CuadricepsPage implements OnInit {

  segment: string = 'peso_corporal';
  url: string = './assets/images/tren-inferior/cuadriceps/';

  peso_corporal = [
    { t: 'Sentadilla', i: this.url + 'sentadilla.webp' },
    { t: 'Zancada frontal', i: this.url + 'zancada frontal.webp' },
    { t: 'Sentadilla búlgara', i: this.url + 'sentadilla bulgara.webp' },
    { t: 'Sentadilla con salto', i: this.url + 'sentadilla con salto.webp' },
    { t: 'Zancada trasera', i: this.url + 'zancada trasera.webp' },
    { t: 'Sentadilla con elevación de talones', i: this.url + 'sentadilla talones.webp' },
    { t: 'Zancada lateral', i: this.url + 'zancada lateral.webp' },
    { t: 'Burpee', i: this.url + 'burpee.webp' }
  ];

  maquinaria = [
    { t: 'Máquina de femorales', i: this.url + 'maquina femorales.webp', d: 'Para trabajar los cuádriceps deberá ponerse el contrapeso, usando la palaca, en una de las posiciones 1, 2 o 3, quedando abajo. Tras esto, colocar los pies por detrás del contrapeso, ajustar el peso y el acolchamiento a los cuádriceps, y realizar el empuje hacia arriba hasta llegar a una posición horizontal.' },
  ];

  barra = [
    { t: 'Sentadilla con barra', i: this.url + 'sentadilla barra.webp' },
    { t: 'Peso muerto', i: this.url + 'peso muerto.webp' },
    { t: 'Peso muerto de sumo con barra', i: this.url + 'sumo deadlift.webp' },
    { t: 'Sentadilla búlgara con barra', i: this.url + 'sentadilla bulgara barra.webp' },
    { t: 'Zancada frontal con barra', i: this.url + 'zancada frontal con barra.webp' },
    { t: 'Sentadilla con elevación de talones con barra', i: this.url + 'sentadilla talones barra.webp' },
    { t: 'Zancada trasera con barra', i: this.url + 'zancada trasera barra.webp' },
    { t: 'Peso muerto trasero', i: this.url + 'peso muerto trasero.webp' }
  ];

  poleas = [
    { t: 'Sentadilla con polea', i: this.url + 'sentadilla polea.webp' },
    { t: 'Zancada con polea', i: this.url + 'zancada polea.webp' },
    { t: 'Extnesión de pierna de pie en polea', i: this.url + 'extension pierna polea.webp' }
  ];

  mancuernas = [
    { t: 'Sentadilla con mancuerna', i: this.url + 'sentadilla mancuerna.webp' },
    { t: 'Sentadilla búlgara con mancuerna', i: this.url + 'sentadilla bulgara mancuerna.webp' },
    { t: 'Zancada frontal con mancuernas', i: this.url + 'zancada frontal mancuerna.webp' },
    { t: 'Zancada trasera con mancuernas', i: this.url + 'zancada trasera mancuerna.webp' },
    { t: 'Zancada lateral con mancuerna', i: this.url + 'zancada lateral mancuerna.webp' }
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
