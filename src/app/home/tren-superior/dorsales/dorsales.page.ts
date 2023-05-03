import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dorsales',
  templateUrl: './dorsales.page.html',
  styleUrls: ['./dorsales.page.scss'],
})
export class DorsalesPage implements OnInit {

  segment: string = 'peso_corporal';

  peso_corporal = [
    { t: 'Dominada', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/pullup-1456956490.gif?resize=480:*' },
    { t: 'Flexión australiana', i: 'https://www.sport.es/labolsadelcorredor/wp-content/uploads/2018/05/dominadas-autralianas.jpg' }
  ];

  maquinaria = [
    { t: 'Jalón al pecho', i: 'https://doriangym.es/wp-content/uploads/2021/11/Jalones-al-pecho-para-dorsal.gif' },
    { t: 'Remo en polea baja', i: 'https://doriangym.es/wp-content/uploads/2022/10/rermo-en-polea-baja-o-remo-gironda.gif' }
  ]

  barra = [
    { t: 'Remo inclinado con barra', i: 'https://media0.giphy.com/media/UUn6oTupFoo0T9g6jS/giphy.gif'},
    { t: 'Remo Pendlay pronado con barra', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/barbellrow-1457038583.gif'}
  ];

  poleas = [
    { t: 'Pull-over con polea', i: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/09/pullover-muscles.gif'},
    { t: 'Pull-in con polea', i: 'https://www.inspireusafoundation.org/wp-content/uploads/2021/10/standing-cable-row.gif'}
  ];

  mancuernas = [
    { t: 'Remo con mancuernas bilateral', i: 'https://media.tenor.com/XehF1R8EzM4AAAAC/dumbbell-row.gif' },
    { t: 'Remo con mancuernas unilateral', i: 'https://cdn.shopify.com/s/files/1/1950/1891/files/1_4fb9ab72-7e4a-446e-90c7-1e7cc063fc21.gif?v=1580799063' },
    { t: 'Pull-over con mancuerna', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif' },
    { t: 'Remo inclinado tumbado con mancuernas', i: 'https://thumbs.gfycat.com/ForthrightEmotionalFinch-max-1mb.gif' },
    { t: 'Remo renegado con mancuernas', i: 'https://hips.hearstapps.com/hmg-prod/images/766/fitgif-friday-renegade-row-slider-thumbnail-override-1508272318.gif' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
