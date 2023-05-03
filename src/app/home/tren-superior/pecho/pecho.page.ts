import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pecho',
  templateUrl: './pecho.page.html',
  styleUrls: ['./pecho.page.scss'],
})
export class PechoPage implements OnInit {

  items = [
    { t: 'Flexión clásica', n: 'Principiante', i: '', d: '' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

}
