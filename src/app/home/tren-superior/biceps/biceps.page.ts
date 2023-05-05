import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.page.html',
  styleUrls: ['./biceps.page.scss'],
})
export class BicepsPage implements OnInit {

  segment: string = 'peso_corporal';
  url = 'assets/images/tren-superior/biceps/'

  peso_corporal = [
    { t: 'Dominadas de bíceps', i: this.url + 'dominada biceps.webp' },
    { t: 'Flexión', i: 'assets/images/tren-superior/pecho/flexion.webp' }
  ];

  barra = [
    { t: 'Curl de bíceps con barra', i: this.url + 'curl biceps barra.webp'},
    { t: 'Curl inverso de bíceps con barra', i: this.url + 'curl inverso biceps barra.webp'},
    { t: 'Remo con barra con brazo individual', i: this.url + 'remo barra individual.webp'},
    { t: 'Remo con barra', i: this.url + 'remo barra.webp' },
    { t: 'Remo Pendlay con agarre supino', i: this.url + 'remo pendlay supino.webp' }
  ];

  poleas = [
    { t: 'Curl con agarre bayesiano', i: this.url + 'curl bayesiano.webp'},
    { t: 'Curl con agarre martillo', i: this.url + 'curl martillo.webp'},
    { t: 'Curl con agarre invertido', i: this.url + 'curl invertido.webp' }
  ];

  mancuernas = [
    { t: 'Curl de bíceps con mancuernas', i: this.url + 'curl biceps mancuerna.webp' },
    { t: 'Curl con mancuernas con agarre martillo', i: this.url + 'curl martillo mancuerna.webp' },
    { t: 'Curl con mancuernas con agarre invertido', i: this.url + 'curl inverso mancuerna.webp' },
    { t: 'Curl individual con rodilla en banco', i: this.url + 'remo individual rodilla.webp' },
    { t: 'Curl en banco inclinado con agarre martillo', i: this.url + 'curl martillo inclinado.webp' },
    { t: 'Curl en banco inclinado con agarre invertido', i: this.url + 'curl martillo inclinado.webp' },
    { t: 'Remo tumbado con mancuernas en banco inclinado', i: this.url + 'curl inclinado inverso.webp' },
    { t: 'Curl de un solo brazo en banco inclinado', i: this.url + 'curl individual inclinado.webp' },
    { t: 'Curl de araña en banco inclinado', i: this.url + 'curl araña.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
