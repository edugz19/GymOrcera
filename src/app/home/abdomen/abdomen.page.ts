import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.page.html',
  styleUrls: ['./abdomen.page.scss'],
})
export class AbdomenPage implements OnInit {

  segment: string = 'sin_equipamiento';
  url = 'assets/images/abdomen/';

  sin_equipamiento = [
    { t: 'Abdominal', i: this.url + 'abdominal.webp' },
    { t: 'Plancha', i: this.url + 'plancha.webp' },
    { t: 'Elevación de piernas tumbado', i: this.url + 'elevacion piernas.webp' },
    { t: 'Plancha Long Lever', i: this.url + 'long lever.webp' },
    { t: 'Levantamiento de rodillas', i: this.url + 'knee raises.webp' },
    { t: 'Plancha con manos', i: this.url + 'plancha manos.webp' },
    { t: 'Hollow Hold', i: this.url + 'hollow hold.webp' },
    { t: 'Mountain Climbers', i: this.url + 'mountain climbers.webp' },
    { t: 'Abdominal rusa', i: this.url + 'abdominal rusa.webp' },
    { t: 'Plancha con rotación', i: this.url + 'plancha rotacion.webp' },
    { t: 'Plancha escalonada', i: this.url + 'plancha escalonada.webp' },
    { t: 'Plancha lateral con giro', i: this.url + 'plancha lateral giro.webp' },
    { t: 'Plancha lateral con toque de rodilla', i: this.url + 'plancha lateral rodilla.webp' },
    { t: 'Plancha lateral sobre codo', i: this.url + 'plancha lateral codo.webp' },
    { t: 'Plancha lateral sobre mano', i: this.url + 'plancha lateral mano.webp' },
    { t: 'Plancha Superman', i: this.url + 'superman.webp' },
    { t: 'Bicho muerto', i: this.url + 'bicho muerto.webp' },
    { t: 'Tijeras', i: this.url + 'tijeras.webp' },
    
  ];

  con_equipamiento = [
    { t: 'Rueda abdominal', i: this.url + 'rueda abdominal.webp' },
    { t: 'Abdominal con barra', i: this.url + 'abdominal barra.webp' },
    { t: 'Crunch de rodillas con polea', i: this.url + 'crunch rodillas.webp' },
    { t: 'Crunch de pie con polea', i: this.url + 'crunch polea.webp' },
    { t: 'Abdominal rusa con mancuerna o disco', i: this.url + 'abdominal rusa mancuerna.webp' },
    { t: 'Abdominal con mancuerna o disco', i: this.url + 'abdominal mancuerna.webp' },
    { t: 'Pullthrough en plancha con mancuernas', i: this.url + 'pull plancha.webp' }, 
    { t: 'Cortador de madera de media rodilla con mancuernas', i: this.url + 'cortador rodillas.webp' }, 
    { t: 'Hollow Hold con mancuerna o disco', i: this.url + 'hollow hold mancuerna.webp' }, 
    { t: 'Remo renegado con mancuernas', i: this.url + 'remo renegado.webp' },
    { t: 'Plancha IYTW', i: 'assets/images/tren-superior/hombros/iytw.webp' },
    { t: 'Oblicuos con polea', i: this.url + 'oblicuos polea.webp' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
