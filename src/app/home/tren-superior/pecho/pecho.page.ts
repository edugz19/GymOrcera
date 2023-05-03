import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pecho',
  templateUrl: './pecho.page.html',
  styleUrls: ['./pecho.page.scss'],
})
export class PechoPage implements OnInit {

  segment: string = 'peso_corporal';

  peso_corporal = [
    { t: 'Flexión Clásica', i: 'https://www.tafadycursos.com/imagenes/1/flexion-clasica.jpg' },
    { t: 'Flexión Isométrica', i: 'https://cdn.brujulabike.com/media/10263/conversions/ejercicios-isometricos-beneficios-1000.jpg' },
    { t: 'Flexión de Arquero', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flexion-de-arquero-1556179579.jpg?crop=1xw:1xh;center,top&resize=320:*' },
    { t: 'Flexión Inclinada', i: 'https://1.bp.blogspot.com/-xAYLvlwBWD4/XFDT7mkOE2I/AAAAAAAABwA/kO213l3ICUMKbA9NSv2gJM1ia59Im8swgCLcBGAs/s320/flexiones-inclinadas.png' },
    { t: 'Flexión Declinada', i: 'https://risbelmagazine.es/wp-content/uploads/2023/04/ejercicios-pectorales-casa.jpg' },
    { t: 'Flexión Explosiva', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/palmas-1559815504.jpg?crop=1xw:1xh;center,top&resize=480:*' },
  ];

  maquinaria = [
    { t: 'Press de Pecho', i: 'https://cdn.ossfitness.com/img/full/M5020%20-%20Etenon%20Dual%20Press%20pecho%20-%20hombro.jpg', d: 'Se debe colocar el respaldo en posición tumbada, y bajar el agarre a una posición cómoda. Ajustar el peso y elevar el agarre, y bajar sin llegar al tope. Cambiar ligeramente de posición para trabajar distintas zonas del pectoral. ' }
  ];

  barra = [
    { t: 'Press de banca', i: 'https://inversionflix.com/wp-content/uploads/2021/08/BenchPress-Side-021316.gif' },
    { t: 'Press de banca inclinado', i: 'https://www.deportrainer.com/img/cms/Post%20de%20blog/press_banca_inclinado/ejecuci%C3%B3n-movimiento-press-superior-con-la-barra.gif' },
    { t: 'Press desde el suelo', i: 'https://www.operaciontransformer.com/wp-content/uploads/2019/05/floor-press.jpg' }
  ];

  poleas = [
    { t: 'Press de pecho con polea', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/cable-chest-press.gif' },
    { t: 'Aperturas con polea', i: 'https://sporium.net/wp-content/uploads/2020/11/cable-cross.gif' },
    { t: 'Press de pecho en polea sentado en banco', i: 'https://gymvisual.com/img/p/1/5/8/4/4/15844.gif' },
    { t: 'Aperturas en polea sentado en banco', i: 'https://gymvisual.com/img/p/1/8/4/2/3/18423.gif' }
  ];

  mancuernas = [
    { t: 'Press con mancuernas', i: 'https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1526590877144-BYR9X8ZX5FROTGOZ2VHL/DSC_6330.mov.gif'},
    { t: 'Aperturas con mancuernas', i: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Chest-Fly.gif?fit=600%2C600&ssl=1' },
    { t: 'Press con mancuernas alternando brazo', i: 'https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1607178895611-T9FXSTLZIBYJYIMC6Z4K/Alternating+Dumbbell+Chest+Press.gif' }
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
