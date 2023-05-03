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
    { t: 'Flexión Clásica', i: 'https://www.tafadycursos.com/imagenes/1/flexion-clasica.jpg', d: 'Colocar ambas manos en el suelo a lo ancho de los hombros y luego estirar las piernas hasta formar una línea recta desde los hombros hasta los pies. Finalmente, manteniendo esta postura, se debe doblar los brazos y descender con el pecho en dirección al suelo hasta formar un ángulo de 90º con los codos, volviendo a subir a la posición inicial.' },
    { t: 'Flexión Isométrica', i: 'https://cdn.brujulabike.com/media/10263/conversions/ejercicios-isometricos-beneficios-1000.jpg', d: 'Se debe realizar una flexión normal, pero, luego de descender el pecho hasta el suelo con los codos en ángulo de 90º, se debe sostener esa posición.' },
    { t: 'Flexión de Arquero', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flexion-de-arquero-1556179579.jpg?crop=1xw:1xh;center,top&resize=320:*', d: 'Se debe colocar una mano alejada del cuerpo, de manera que este brazo quede completamente estirado, como se observa en la imagen. Luego, se debe realizar el movimiento de descender con el pecho hasta el suelo, pero aplicando la fuerza solo en el lado del pecho que tiene la mano más cercana al cuerpo.' },
    { t: 'Flexión Inclinada', i: 'https://1.bp.blogspot.com/-xAYLvlwBWD4/XFDT7mkOE2I/AAAAAAAABwA/kO213l3ICUMKbA9NSv2gJM1ia59Im8swgCLcBGAs/s320/flexiones-inclinadas.png', d: 'Se debe colocar ambas manos encima del banco y luego estirar las piernas y mantener el cuerpo recto. Finalmente, es solo realizar las flexiones, hasta que los codos queden un ángulo de 90º.' },
    { t: 'Flexión Declinada', i: 'https://risbelmagazine.es/wp-content/uploads/2023/04/ejercicios-pectorales-casa.jpg', d: 'Colocar ambos pies sobre el banco y luego, manteniendo la posición de flexión normal, pero con los pies elevados.' },
    { t: 'Flexión Explosiva', i: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/palmas-1559815504.jpg?crop=1xw:1xh;center,top&resize=480:*', d: 'Se debe hacer el máximo de fuerza con las manos contra el suelo, para empujar el cuerpo para arriba y crear un ligero salto. Esto garantiza que el músculo se contraiga de forma explosiva.' },
  ];

  maquinaria = [
    { t: 'Press de Pecho', i: 'https://cdn.ossfitness.com/img/full/M5020%20-%20Etenon%20Dual%20Press%20pecho%20-%20hombro.jpg', d: 'Se debe colocar el respaldo en posición tumbada, y bajar el agarre a una posición cómoda. Ajustar el peso y elevar el agarre, y bajar sin llegar al tope. Cambiar ligeramente de posición para trabajar distintas zonas del pectoral. ' }
  ];

  barra = [
    { t: 'Press de banca', i: 'https://inversionflix.com/wp-content/uploads/2021/08/BenchPress-Side-021316.gif', d: 'Colocar el banco en posición tumbada y ajustar los discos en la barra. Agarrar la barra y levantar desde el pecho hasta arriba, en una posición con los brazos estirados. Bajar controladamente.' },
    { t: 'Press de banca inclinado', i: 'https://www.deportrainer.com/img/cms/Post%20de%20blog/press_banca_inclinado/ejecuci%C3%B3n-movimiento-press-superior-con-la-barra.gif', d: 'Colocar el banco en posición reclinada y ajustar los discos en la barra. Realizar el mismo movimiento que el ejercicio anterior.' },
    { t: 'Press desde el suelo', i: 'https://www.operaciontransformer.com/wp-content/uploads/2019/05/floor-press.jpg', d: 'Tumbarse boca arriba y agarrar la barra y levantar desde el pecho hasta arriba, en una posición con los brazos estirados. Bajar controladamente hasta que los codos toquen el suelo.' }
  ];

  poleas = [
    { t: 'Press de pecho con polea', i: 'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/cable-chest-press.gif', d: 'Ajustar las poleas a la altura de los hombros. De espaldas a la máquina, coger los agarres y hacer empujes hacia el frente. También se puede hacer sentado.' },
    { t: 'Aperturas con polea', i: 'https://sporium.net/wp-content/uploads/2020/11/cable-cross.gif', d: 'Ajustar las poleas a la altura de los hombros. Con los brazos abiertos realizar empujes hacia el centro.' },
    { t: 'Pecho en polea con banco inclinado', d: 'Con las poleas cercanas al suelo y con un banco inclinado de espaldas a la máquina, con los brazos estirados realizar empujes desde abajo hacia arriba.' }
  ];

  mancuernas = [
    { t: 'Press con mancuernas', i: 'https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1526590877144-BYR9X8ZX5FROTGOZ2VHL/DSC_6330.mov.gif',  d: 'En banco tumbado, elevar las mancuernas hasta que los brazos queden estirados. Se puede realizar la variante con el banco inclinado.' },
    { t: 'Aperturas con mancuernas', i: 'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Chest-Fly.gif?fit=600%2C600&ssl=1', d: 'En banco tumbado, con los brazos estirados, llevar las mancuernas hacia el centro, juntado las manos. Se pueden realizar las variantes con banco inclinado y declinado.' },
    { t: 'Press con mancuernas alternando brazo', i: 'https://images.squarespace-cdn.com/content/v1/5ede457a2188e55de5de09a7/1607178895611-T9FXSTLZIBYJYIMC6Z4K/Alternating+Dumbbell+Chest+Press.gif',  d: 'El ejercicio se ejecuta de la misma manera que el press normal de mancuernas, pero elevando los brazos alternadamente.' }
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
