import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.page.html',
  styleUrls: ['./biceps.page.scss'],
})
export class BicepsPage implements OnInit {

  segment: string = 'peso_corporal';

  peso_corporal = [
    { t: 'Dominadas de bíceps', i: 'https://www.fisioterapiaconmueve.com/wp-content/uploads/2019/11/dominada.jpg' },
    { t: 'Flexiones', i: 'https://www.tafadycursos.com/imagenes/1/flexion-clasica.jpg' }
  ];

  barra = [
    { t: 'Curl de bíceps con barra', i: 'https://workouts4fitness.files.wordpress.com/2017/05/wide-grip-standing-barbell-curls.gif'},
    { t: 'Curl inverso de bíceps con barra', i: 'http://www.compoundlifts.co.uk/wp-content/uploads/arms-biceps-barbell-biceps-reversecurl-end-8435-300x300.jpg'},
    { t: 'Remo con barra con brazo individual', i: 'https://thumbs.gfycat.com/TheseDazzlingAmericanratsnake-max-1mb.gif'},
    { t: 'Remo con barra', i: 'https://s.yimg.com/ny/api/res/1.2/Oi9U67IJKzG7HhKDxjes6A--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://media.zenfs.com/en/hearst_mens_health_171/c9dd6e94eb976d4f55c82d6ae25d8477' }
  ];

  poleas = [
    { t: 'Curl con agarre bayesiano', i: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/10/bayesian-curl.gif'},
    { t: 'Curl con agarre martillo', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/rope-bicep-curls.gif'},
    { t: 'Curl con agarre invertido', i: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Reverse-Grip-EZ-bar-Biceps-Curl.gif' }
  ];

  mancuernas = [
    { t: 'Curl de bíceps con mancuernas', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellcurl-1457043876.gif' },
    { t: 'Curl con mancuernas con agarre martillo', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/hammercurl-1456956209.gif' },
    { t: 'Curl con mancuernas con agarre invertido', i: 'https://thumbs.gfycat.com/SlushyMetallicAtlanticsharpnosepuffer-size_restricted.gif' },
    { t: 'Curl individual con rodilla en banco', i: 'https://www.oldschoollabs.com/wp-content/uploads/2020/12/02921301-Dumbbell-Bent-over-Row_back_Back_720.gif' },
    { t: 'Curl en banco inclinado con agarre martillo', i: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/02/dumbbell-incline-hammer-curl.gif' },
    { t: 'Remo tumbado con mancuernas en banco inclinado', i: 'https://thumbs.gfycat.com/ForthrightEmotionalFinch-max-1mb.gif' },
    { t: 'Curl de un solo brazo en banco inclinado', i: 'https://gymvisual.com/img/p/7/2/8/5/7285.gif' },
    { t: 'Curl de araña en banco inclinado', i: 'https://hips.hearstapps.com/menshealth-uk/main/assets/spider-curl.gif' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
