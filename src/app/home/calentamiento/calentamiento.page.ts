import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calentamiento',
  templateUrl: './calentamiento.page.html',
  styleUrls: ['./calentamiento.page.scss'],
})
export class CalentamientoPage implements OnInit {

  url = 'assets/images/calentamiento/';

  items = [
    { t: 'Cinta de andar', i: this.url + 'cinta.webp', d: 'Andar en la cinta de 5 a 10 minutos hará que entres en calor, suba la temperatura de tu cuerpo y tus fibras musculares, tendones y articulaciones se calienten y se vayan adaptando al ejercicio.' },
    { t: 'Bicicleta de spinning', i: this.url + 'bici.webp', d: 'Pedalear durante 5 o 10 minutos a un ritmo suave hará que actives tu tren inferior y subas las pulsaciones.'},
    { t: 'Jumping Jacks', i: this.url + 'jumping jacks.webp', d: 'Dar  un salto en el sitio al mismo tiempo que abres las piernas y elevas los brazos hacia los laterales y hacia arriba hasta dar una palmada por encima de la cabeza. Con otro salto vuelves a la posición inicial de piernas juntas y brazos caídos, y así sucesivamente. Realizar durante 30 segundos.' },
    { t: 'Trote en el sitio', i: this.url + 'trote.webp', d: 'Te ayudarán a elevar la temperatura corporal y te prepararán para el ejercicio, ya que moverás todo el cuerpo.' },
    { t: 'Movilidad articular', d: 'Rotar cada articulación del cuerpo durante unos 10-20 segundos para activarla. Realizar desde los tobillos hasta el cuello.' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
