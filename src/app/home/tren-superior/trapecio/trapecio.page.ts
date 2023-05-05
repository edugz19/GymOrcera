import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trapecio',
  templateUrl: './trapecio.page.html',
  styleUrls: ['./trapecio.page.scss'],
})
export class TrapecioPage implements OnInit {

  segment: string = 'peso_corporal';
  url = 'assets/images/tren-superior/trapecio/';

  peso_corporal = [
    { t: 'Flexión en V elevada', i: 'assets/images/tren-superior/hombros/flexion v.webp' }
  ];

  barra = [
    { t: 'Remo vertical con barra', i: this.url + 'remo vertical barra.webp'},
    { t: 'Encogimientos con barra', i: this.url + 'encogimiento barra.webp'}
  ];

  poleas = [
    { t: 'Remo vertical con polea', i: this.url + 'remo vertical polea.webp'},
    { t: 'Encogimiento de hombros con polea', i: this.url + 'encogimiento polea.webp'}
  ];

  mancuernas = [
    { t: 'Encogimiento de hombro sentado', i: this.url + 'encogimiento sentado mancuerna.webp' },
    { t: 'Encogimiento de hombro', i: this.url + 'encogimiento mancuerna.webp' },
    { t: 'Encogimiento de hombro en posición de remo', i: this.url + 'encogimientos remo mancuerna.webp' },
    { t: 'Encogimiento de hombro tumbado lateral 30 grados', i: this.url + 'encogimiento 30 grados.webp' },
    { t: 'Encogimiento de hombro tumbado', i: this.url + 'encogimiento tumbado.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
