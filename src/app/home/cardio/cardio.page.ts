import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardio',
  templateUrl: './cardio.page.html',
  styleUrls: ['./cardio.page.scss'],
})
export class CardioPage implements OnInit {

  segment: string = 'sin_equipamiento';

  sin_equipamiento = [
    { t: 'Skater Jumps', i: 'assets/images/calentamiento/skater jumps.webp' },
    { t: 'Jumping Jacks', i: 'assets/images/calentamiento/jumping jacks.webp' },
    { t: 'Burpees', i: 'assets/images/tren-inferior/cuadriceps/burpee.webp' },
    { t: 'Salto de la rana', i: 'assets/images/cardio/salto rana.webp' },
    { t: 'Lateral Shuffle Taps', i: 'assets/images/cardio/lateral shuffle.webp' },
    { t: 'Mountain Climbers', i: 'assets/images/abdomen/mountain climbers.webp' },
    { t: 'Cardio Boxing', i: 'assets/images/cardio/cardio boxing.webp' },
    { t: 'Sentadillas con salto', i: 'assets/images/tren-inferior/cuadriceps/sentadilla con salto.webp' },
    { t: 'Zancadas con salto', i: 'assets/images/cardio/zancadas salto.webp' },
    { t: 'Saltos con rodillas al pecho', i: 'assets/images/calentamiento/saltos.webp' }
  ];

  con_equipamiento = [
    { t: 'Comba', i: 'assets/images/cardio/comba.webp' },
    { t: 'Levantamiento de mancuernas', i: 'assets/images/cardio/levantamiento mancuernas.webp' },
    { t: 'Cargadas de mancuernas con peso', i: 'assets/images/cardio/cargada mancuernas.webp' },
    { t: 'Swing con un brazo', i: 'assets/images/cardio/swing.webp' },
    { t: 'Cinta de correr con intervalos', i: 'assets/images/calentamiento/cinta.webp' },
    { t: 'Bici spinning con intervalos', i: 'assets/images/calentamiento/bici.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
