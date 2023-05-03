import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-antebrazos',
  templateUrl: './antebrazos.page.html',
  styleUrls: ['./antebrazos.page.scss'],
})
export class AntebrazosPage implements OnInit {

  segment: string = 'peso_corporal';

  peso_corporal = [
    { t: 'Dominadas de bíceps', i: 'https://www.fisioterapiaconmueve.com/wp-content/uploads/2019/11/dominada.jpg' },
    { t: 'Flexión australiana', i: 'https://www.sport.es/labolsadelcorredor/wp-content/uploads/2018/05/dominadas-autralianas.jpg' }
  ];

  barra = [
    { t: 'Curl de muñeca con barra', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2021/01/Barbell-Wrist-Curl.gif'},
    { t: 'Curl de muñeca trasero', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2021/01/Barbell-Wrist-Curl-Behind-the-Back.gif'},
    { t: 'Curl de muñeca invertido', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Reverse-Curl.gif'}
  ];

  mancuernas = [
    { t: 'Curl de muñeca con mancuernas', i: 'https://www.verywellfit.com/thmb/ToOlI6kmhRUNeGqDbvo3tVJK-fQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wristcurl-1056698feeaa4cf88a7586827ad70895.gif'},
    { t: 'Extensión de muñeca con mancuernas', i: 'https://thumbs.gfycat.com/InfantileLonelyCockerspaniel-size_restricted.gif'},
    { t: 'Curl de muñeca invertido con mancuernas', i: 'https://thumbs.gfycat.com/SlushyMetallicAtlanticsharpnosepuffer-size_restricted.gif' }
  ];

  poleas = [
    { t: 'Curl de muñeca con polea', i: 'https://fitnessvolt.com/wp-content/uploads/2020/10/cable-wrist-curl-exercise.jpg' },
    { t: 'Extensión de muñeca con polea', i: 'https://www.workoutsprograms.com/media/cache/exercise_375/uploads/exercise/extension-de-muneca-con-cable-polea-de-pie-init-pos-3132.png' },
    { t: 'Curl de muñeca invertido con polea', i: 'https://cdn-cccio.nitrocdn.com/sQAAylIpwgMYZgBLSXcMgCkUIbfIzHvb/assets/images/optimized/rev-99ed838/wp-content/uploads/2022/04/reverse-cable-curls.gif' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
