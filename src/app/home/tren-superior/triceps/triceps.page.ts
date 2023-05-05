import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-triceps',
  templateUrl: './triceps.page.html',
  styleUrls: ['./triceps.page.scss'],
})
export class TricepsPage implements OnInit {

  segment: string = 'peso_corporal';
  url = 'assets/images/tren-superior/triceps/';

  peso_corporal = [
    { t: 'Flexión diamante', i: this.url + 'flexion diamante.webp' },
    { t: 'Fondos en banco', i: this.url + 'fondos.webp' }
  ];

  barra = [
    { t: 'Press banca con agarre cerrado', i: this.url + 'press agarre cerrado.webp'},
    { t: 'Extensión de tríceps tumbado com barra', i: this.url + 'extension barra.webp'},
    { t: 'Extensión de tríceps por encima de cabeza', i: this.url + 'extension overhead.webp'}
  ];

  poleas = [
    { t: 'Pushdown con polea', i: this.url + 'pushdown.webp'},
    { t: 'Trituracráneos con polea', i: this.url + 'trituracraneos polea.webp' },
    { t: 'Extensión de triceps con polea por encima de cabeza', i: this.url + 'extension polea.webp' }
  ];

  mancuernas = [
    { t: 'Press banca inclinado con mancuernas', i: this.url + 'press inclinado.webp' },
    { t: 'Press banca con mancuernas', i: this.url + 'press tumbado.webp' },
    { t: 'Trituracráneos con mancuernas', i: this.url + 'trituracraneos mancuerna.webp' },
    { t: 'Extensión de tríceps sentado por encima de cabeza con mancuerna', i: this.url + 'extension sentado.webp' },
    { t: 'Extensión de tríceps por encima de cabeza con mancuerna', i: this.url + 'extension triceps.webp' },
    { t: 'Contragolpe de tríceps con mancuerna', i: this.url + 'contragolpe.webp' },
    { t: 'Prensa con mancuernas', i: this.url + 'prensa mancuernas.webp' },
    { t: 'Press de tríceps por encima de cabeza alternando', i: this.url + 'press alterno.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
