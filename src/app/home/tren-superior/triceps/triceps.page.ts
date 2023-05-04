import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-triceps',
  templateUrl: './triceps.page.html',
  styleUrls: ['./triceps.page.scss'],
})
export class TricepsPage implements OnInit {

  segment: string = 'peso_corporal';

  peso_corporal = [
    { t: 'Flexiones diamante', i: 'http://blog.ferrato.com/wp-content/uploads/2019/01/5.gif' },
    { t: 'Fondos en banco', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fondos-en-banco-1621951812.gif?resize=320:*' }
  ];

  barra = [
    { t: 'Press banca con agarre cerrado', i: 'https://media.tenor.com/TgbVYDE_Ea4AAAAC/dokuz-close-grip-barbell-press.gif'},
    { t: 'Extensión de tríceps tumbado com barra', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Barbell-Lying-Tricep-Extension.gif'},
    { t: 'Extensión de tríceps por encima de cabeza', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Barbell-Standing-Triceps-Extension.gif'}
  ];

  poleas = [
    { t: 'Pushdown con polea', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/triceps-pushdown-with-straight-handle.gif'},
    { t: 'Pushdown cruzado con polea ', i: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Cable-Crossover-Triceps-Extension.gif'},
    { t: 'Trituracráneos con polea', i: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/03/cable-tricep-overhead-extensions.gif' },
    { t: 'Extensión de triceps con polea por encima de cabeza', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/04/cable-rope-overhead-triceps-extension.gif' }
  ];

  mancuernas = [
    { t: 'Press banca inclinado con mancuernas', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/Dumbbell-Incline-Press.gif' },
    { t: 'Press banca con mancuernas', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbellbenchpress-1457043820.gif' },
    { t: 'Trituracráneos con mancuernas', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Dumbbell-Skull-Crusher.gif' },
    { t: 'Extensión de tríceps sentado por encima de cabeza con mancuerna', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2017/05/dboverheadextension-1496163021.gif' },
    { t: 'Extensión de tríceps por encima de cabeza con mancuerna', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/dumbbelloverheadtricepsextension-1456956005.gif' },
    { t: 'Contragolpe de tríceps con mancuerna', i: 'https://media.tenor.com/jqwaOmRs-7gAAAAC/tricep-kick-back-tricep.gif' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
