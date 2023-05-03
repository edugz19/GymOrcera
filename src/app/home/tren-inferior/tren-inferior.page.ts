import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tren-inferior',
  templateUrl: './tren-inferior.page.html',
  styleUrls: ['./tren-inferior.page.scss'],
})
export class TrenInferiorPage implements OnInit {

  items = [
    { h: 'Cuádriceps', link: '/home/tren-inferior/cuadriceps'},
    { h: 'Gemelos', link: 'home/tren-inferior/gemelos', },
    { h: 'Isquiotibiales', link: 'home/tren-inferior/isquiotibiales' },
    { h: 'Glúteos', link: 'home/tren-inferior/gluteos' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
