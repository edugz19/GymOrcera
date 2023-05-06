import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gluteos',
  templateUrl: './gluteos.page.html',
  styleUrls: ['./gluteos.page.scss'],
})
export class GluteosPage implements OnInit {

  segment: string = 'peso_corporal';
  url: string = './assets/images/tren-inferior/gluteos/';

  peso_corporal = [
    { t: 'Puente', i: this.url + 'puente.webp' },
    { t: 'Zancada frontal', i: 'assets/images/tren-inferior/cuadriceps/zancada frontal.webp' },
    { t: 'Sentadilla con salto', i: 'assets/images/tren-inferior/cuadriceps/sentadilla con salto.webp' },
    { t: 'Zancada trasera', i: 'assets/images/tren-inferior/cuadriceps/zancada trasera.webp' },
    { t: 'Sentadilla con elevación de talones', i: 'assets/images/tren-inferior/cuadriceps/sentadilla talones.webp' },
    { t: 'Zancada lateral', i: 'assets/images/tren-inferior/cuadriceps/zancada lateral.webp' },
    { t: 'Sentadilla dividida', i: this.url + 'sentadilla dividida.webp' }, 
    { t: 'Burpee', i: 'assets/images/tren-inferior/cuadriceps/burpee.webp' },
    { t: 'Puente elevado con cruce de piernas', i: this.url + 'puente elevado cruce.webp' },
    { t: 'Puente elevado', i: this.url + 'puente elevado.webp' },
    { t: 'Puente elevado con pierna elevada', i: this.url + 'puente elevado pierna.webp' },
  ];

  barra = [
    { t: 'Empuje de cadera con barra', i: this.url + 'empuje cadera barra.webp' },
    { t: 'Puente con barra', i: this.url + 'puente barra.webp' },
    { t: 'Sentadilla con barra', i: 'assets/images/tren-inferior/cuadriceps/sentadilla barra.webp' },
    { t: 'Peso muerto con barra', i: 'assets/images/tren-inferior/cuadriceps/peso muerto.webp' },
    { t: 'Peso muerto de sumo', i: 'assets/images/tren-inferior/cuadriceps/sumo deadlift.webp' },
    { t: 'Peso muerto romano', i: this.url + 'peso muerto romano.webp' },
    { t: 'Sentadilla búlgara con barra', i: 'assets/images/tren-inferior/cuadriceps/sentadilla bulgara barra.webp' }, 
    { t: 'Sentadilla talones elevados con barra', i: 'assets/images/tren-inferior/cuadriceps/sentadilla talones barra.webp' },
    { t: 'Peso muerto a una pierna', i: this.url + 'peso muerto pierna.webp' },
    { t: 'Zancada frontal con barra', i: 'assets/images/tren-inferior/cuadriceps/zancada frontal con barra.webp' }, 
    { t: 'Zancada trasera con barra', i: 'assets/images/tren-inferior/cuadriceps/zancada trasera barra.webp' },
    { t: 'Peso muerto trasero', i: 'assets/images/tren-inferior/cuadriceps/peso muerto trasero.webp' },
  ];

  poleas = [
    { t: 'Sentadilla con polea', i: 'assets/images/tren-inferior/cuadriceps/sentadilla polea.webp' },
    { t: 'Peso muerto romano con polea', i: this.url + 'sentadilla romana polea.webp' },
    { t: 'PLevantamiento de abductores con polea', i: this.url + 'levantamiento abductor polea.webp' },
    { t: 'Patada trasera con polea', i: this.url + 'patada trasera.webp' },
    { t: 'Sentadilla dividida con polea', i: this.url + 'sentadilla dividida polea.webp' },
    { t: 'Peso muerto a una pierna con polea', i: this.url + 'peso muerto pierna polea.webp' },
    { t: 'Pullthrough de polea', i: this.url + 'tirar polea.webp' }
  ];

  mancuernas = [
    { t: 'Empuje de cadera con mancuerna', i: this.url + 'empuje cadera mancuerna.webp' },
    { t: 'Peso muerto romano con mancuerna', i: this.url + 'peso muerto romano mancuerna.webp' },
    { t: 'Puente con mancuerna', i: this.url + 'puente mancuerna.webp' },
    { t: 'Sentadilla con pausa con mancuernas', i: this.url + 'sentadilla pausa.webp' },
    { t: 'Sentadilla con mancuerna', i: 'assets/images/tren-inferior/cuadriceps/sentadilla mancuerna.webp' },
    { t: 'Sentadilla bulgara con mancuerna', i: 'assets/images/tren-inferior/cuadriceps/sentadilla bulgara mancuerna.webp' },
    { t: 'Estocada lateral con mancuerna', i: this.url + 'estocada lateral.webp' },
    { t: 'Zancada frontal con mancuerna', i: 'assets/images/tren-inferior/cuadriceps/zancada frontal mancuerna.webp' },
    { t: 'Zancada trasera con mancuerna', i: 'assets/images/tren-inferior/cuadriceps/zancada trasera mancuerna.webp' },
    { t: 'Zancada lateral con mancuerna', i: 'assets/images/tren-inferior/cuadriceps/zancada lateral mancuerna.webp' },
    { t: 'Zancada dividida con mancuerna', i: this.url + 'sentadilla dividida mancuerna.webp' }
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
