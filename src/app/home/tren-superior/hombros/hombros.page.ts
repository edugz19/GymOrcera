import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hombros',
  templateUrl: './hombros.page.html',
  styleUrls: ['./hombros.page.scss'],
})
export class HombrosPage implements OnInit {

  segment: string = 'peso_corporal';

  peso_corporal = [
    { t: 'Flexión en V elevada', i: 'https://workout-temple.com/wp-content/uploads/2022/10/pike-push-ups-small.jpg' }
  ];

  maquinaria = [
    { t: 'Press de Hombro', i: 'https://cdn.ossfitness.com/img/full/M5020%20-%20Etenon%20Dual%20Press%20pecho%20-%20hombro.jpg', d: 'Se debe colocar el respaldo en posición inclinada, y colocar el agarre en la parte superior. Ajustar el peso y elevar el agarre, y bajar sin llegar al tope. Cambiar ligeramente de posición para trabajar distintas zonas de los hombros. ' }
  ];

  barra = [
    { t: 'Press de hombro', i: 'https://hips.hearstapps.com/menshealth-uk/main/assets/how-to-do-the-military-press.gif' },
    { t: 'Press de hombro frontal', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Barbell-Front-Raise.gif' },
    { t: 'Remo vertical', i: 'https://blog.squatwolf.com/wp-content/uploads/2021/07/2-2.gif' }
  ];

  poleas = [
    { t: 'Press de hombro con polea por encima de cabeza', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Cable-Shoulder-Press.gif' },
    { t: 'Elevación lateral con polea', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Lateral-Raise.gif' },
    { t: 'Aperturas con polea', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/cable-rear-delt-fly.gif' },
    { t: 'Remo vertical con poleas', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2017/04/uprightrow-1491252369.gif' }
  ];

  mancuernas = [
    { t: 'Press de hombro sentado', i: 'https://thumbs.gfycat.com/ExcitableOblongFluke-max-1mb.gif'},
    { t: 'Elevaciones laterales con mancuernas', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lateralraise-1456955524.gif' },
    { t: 'Elevaciones frontales con mancuernas', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/frontraise-1456955633.gif' },
    { t: 'Elevaciones laterales sentado', i: 'https://thumbs.gfycat.com/AfraidLawfulCob-max-1mb.gif' },
    { t: 'Elevaciones laterales en posición de remo', i: 'https://img.livestrong.com/630x/ppds/a32e5b4f-ca57-46b1-89af-069054c91212.gif' }
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
