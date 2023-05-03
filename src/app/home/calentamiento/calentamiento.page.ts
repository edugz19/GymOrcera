import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calentamiento',
  templateUrl: './calentamiento.page.html',
  styleUrls: ['./calentamiento.page.scss'],
})
export class CalentamientoPage implements OnInit {

  items = [
    { t: 'Cinta de andar', d: 'Andar en la cinta de 5 a 10 minutos hará que entres en calor, suba la temperatura de tu cuerpo y tus fibras musculares, tendones y articulaciones se calienten y se vayan adaptando al ejercicio.' },
    { t: 'Bicicleta de spinning', d: 'Pedalear durante 5 o 10 minutos a un ritmo suave hará que actives tu tren inferior y subas las pulsaciones.'},
    { t: 'Jumping Jacks', i: 'https://sworkit.com/wp-content/uploads/2020/06/sworkit-jumping-jack.gif', d: 'Dar  un salto en el sitio al mismo tiempo que abres las piernas y elevas los brazos hacia los laterales y hacia arriba hasta dar una palmada por encima de la cabeza. Con otro salto vuelves a la posición inicial de piernas juntas y brazos caídos, y así sucesivamente. Realizar durante 30 segundos.' },
    { t: 'Trote en el sitio', i: 'https://3.bp.blogspot.com/-wKTl3MNJpH8/WodDQy6s7iI/AAAAAAAAbBc/6AFUGFTH3cQgSZZGZnpSqepdjeGBW2BGwCLcBGAs/s1600/step%2Bby%2Bstep%2Bexercises%2Btrotar%2Ben%2Bel%2Blugar.gif', d: 'Te ayudarán a elevar la temperatura corporal y te prepararán para el ejercicio, ya que moverás todo el cuerpo.' },
    { t: 'Movilidad articular', d: 'Rotar cada articulación del cuerpo durante unos 10-20 segundos para activarla. Realizar desde los tobillos hasta el cuello.' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
