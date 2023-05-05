import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gemelos',
  templateUrl: './gemelos.page.html',
  styleUrls: ['./gemelos.page.scss'],
})
export class GemelosPage implements OnInit {

  segment: string = 'peso_corporal';
  url: string = './assets/images/tren-inferior/gemelos/';

  peso_corporal = [
    { t: 'Elevación de talones', i: this.url + 'elevacion talones.webp' },
    { t: 'Caminata Tip Toe', i: this.url + 'tip toe.webp' }
  ];

  maquinaria = [
    { t: 'Máquina de gemelos', i: this.url + 'maquina gemelos.webp', d: 'Para trabajar los gemelos deberá sentarse, ajustando el acolchamiento a sus rodillas y colocando los pies en la plataforma. Para usar peso sólo es necesario colocar los discos en el soporte y para efectuar el ejercicio deberá elevar los talones.' },
  ];

  barra = [
    { t: 'Elevaciones de talones con barra', i: this.url + 'elevaciones talones barra.webp' },
    { t: 'Elevaciones de talones sentado con barra', i: this.url + 'elevaciones gemelos barra sentado.webp' }
  ];

  poleas = [
    { t: 'Elevaciones de talones con polea', i: this.url + 'elevaciones gemelos polea.webp' }
  ];

  mancuernas = [
    { t: 'Elevaciones de talones con mancuernas', i: this.url + 'elevaciones talones mancuernas.webp' },
    { t: 'Elevaciones de talones sentado con mancuernas', i: this.url + 'elevaciones talones mancuernas sentado.webp' }
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
