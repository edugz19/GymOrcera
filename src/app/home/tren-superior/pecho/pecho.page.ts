import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pecho',
  templateUrl: './pecho.page.html',
  styleUrls: ['./pecho.page.scss'],
})
export class PechoPage implements OnInit {

  segment: string = 'peso_corporal';
  url: string = 'assets/images/tren-superior/pecho/';

  peso_corporal = [
    { t: 'Flexión Clásica', i: this.url + 'flexion.webp' },
    { t: 'Flexión Isométrica', i: this.url +  'flexion isometrica.webp' },
    { t: 'Flexión de Arquero', i: this.url + 'flexion arquero.webp' },
    { t: 'Flexión Inclinada', i: this.url + 'flexion inclinada.webp' },
    { t: 'Flexión Declinada', i: this.url + 'flexion declinada.webp' },
    { t: 'Flexión Explosiva', i: this.url + 'flexion explosiva.webp' },
  ];

  maquinaria = [
    { t: 'Press de Pecho', i: 'assets/images/tren-superior/press pecho hombro.webp', d: 'Se debe colocar el respaldo en posición tumbada, y bajar el agarre a una posición cómoda. Ajustar el peso y elevar el agarre, y bajar sin llegar al tope. Cambiar ligeramente de posición para trabajar distintas zonas del pectoral. ' }
  ];

  barra = [
    { t: 'Press de banca', i: this.url + 'press banca.webp' },
    { t: 'Press de banca inclinado', i: this.url + 'press banca inclinado.webp' },
    { t: 'Press desde el suelo', i: this.url + 'press banca suelo.webp' }
  ];

  poleas = [
    { t: 'Press de pecho con polea', i: this.url + 'press pecho polea.webp' },
    { t: 'Aperturas con polea', i: this.url + 'apertura pecho polea.webp' }
  ];

  mancuernas = [
    { t: 'Press con mancuernas', i: this.url + 'press pecho mancuernas.webp'},
    { t: 'Press inclinado con mancuernas', i: this.url + 'press pecho inclinado mancuernas.webp'},
    { t: 'Aperturas con mancuernas', i: this.url + 'aperturas pecho mancuernas.webp' },
    { t: 'Press con mancuernas alternando brazo', i: this.url + 'press pecho alternando mancuernas.webp' }
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
