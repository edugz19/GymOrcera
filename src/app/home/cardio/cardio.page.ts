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
    { t: 'Skater Jumps', i: 'https://i.pinimg.com/originals/f5/6d/4e/f56d4ede81655fb34bedf0ec9430bfde.gif' },
    { t: 'Jumping Jacks', i: 'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif' },
    { t: 'Burpees', i: 'https://media1.popsugar-assets.com/files/2014/02/27/847/n/1922729/1baf9ec0f5ce4ea9_burpee.3.gif.xxxlarge.gif' },
    { t: 'Salto de la rana', i: 'https://qph.cf2.quoracdn.net/main-qimg-7f099e2a65339103ad9ccf3a4ae53484' },
    { t: 'Lateral Shuffle Taps', i: 'https://media1.popsugar-assets.com/files/thumbor/ufaO3h4ibKqQ-4tTjU-HOAzjKn0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/30/083/n/1922729/863416dc9c25cc58_LATERAL_SHUFFLE_TOUCH_GIF.gif' },
    { t: 'Mountain Climbers', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/mountainclimberrunning-1472061754.gif' },
    { t: 'Jabs con jumping jacks', i: 'https://www.nourishmovelove.com/wp-content/uploads/2022/05/two-jabs-and-two-overhead-jacks.gif' },
    { t: 'Sentadillas con salto', i: 'https://www.actitudfem.com/files/media/files/rutina-para-reducir-cintura.gif' },
    { t: 'Zancadas con salto', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zancada-1572947010.gif?resize=320:*' },
    { t: 'Saltos con rodillas al pecho', i: 'https://www.yomeentreno.com/wp-content/uploads/2017/07/rodillas-al-pecho.gif' }
  ];

  con_equipamiento = [
    { t: 'Comba', i: 'https://www.sportlife.es/uploads/s1/76/20/25/5/article-puesta-punto-comba-10-minutos-56333c1f19460.jpeg' },
    { t: 'Cargadas de mancuernas con peso', i: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dumbell-clean.gif?resize=480:*' },
    { t: 'Swing con un brazo', i: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/one-arm-swing.gif?resize=768:*' },
    { t: 'Cinta de correr con intervalos', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cinta-correr-technogym-my-run-1612435715.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*' },
    { t: 'Bici spinning con intervalos', i: 'https://i.blogs.es/f398fc/1366_2000-9-/1366_2000.jpeg' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
