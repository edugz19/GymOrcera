import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antebrazos',
  templateUrl: './antebrazos.page.html',
  styleUrls: ['./antebrazos.page.scss'],
})
export class AntebrazosPage implements OnInit {

  segment: string = 'peso_corporal';
  url = 'assets/images/tren-superior/antebrazos/'

  peso_corporal = [
    { t: 'Dominadas de bíceps', i: this.url + 'dominada biceps.webp' },
    { t: 'Flexión australiana', i: this.url + 'flexion australiana.webp' }
  ];

  barra = [
    { t: 'Curl de muñeca con barra', i: this.url + 'curl muñeca barra.webp'},
    { t: 'Curl de muñeca trasero', i: this.url + 'curl muñeca trasero barra.webp'},
    { t: 'Curl de muñeca invertido', i: this.url + 'curl invertido antebrazo.webp'}
  ];

  mancuernas = [
    { t: 'Curl de muñeca con mancuernas', i: this.url + 'curl muñeca mancuerna.webp'},
    { t: 'Extensión de muñeca con mancuernas', i: this.url + 'extension muñeca mancuerna.webp'},
    { t: 'Curl de muñeca invertido con mancuernas', i: this.url + 'curl antebrazo invertido mancuerna.webp' }
  ];

  poleas = [
    { t: 'Curl de muñeca con polea', i: this.url + 'curl muñeca polea.webp' },
    { t: 'Curl de muñeca invertido con polea', i: this.url + 'curl antebrazo invertido polea.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
