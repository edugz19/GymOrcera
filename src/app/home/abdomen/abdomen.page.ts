import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abdomen',
  templateUrl: './abdomen.page.html',
  styleUrls: ['./abdomen.page.scss'],
})
export class AbdomenPage implements OnInit {

  segment: string = 'sin_equipamiento';

  sin_equipamiento = [
    { t: 'Abdominales', i: 'https://i.pinimg.com/originals/a4/87/49/a487496bb775fbf575787df765fcf47d.gif' },
    { t: 'Elevación de piernas tumbado', i: 'https://i.pinimg.com/originals/52/da/e4/52dae439cc246e0b6c7263d7b3536234.gif' },
    { t: 'Plancha de palanca larga', i: 'https://hips.hearstapps.com/menshealth-uk/main/assets/armplank.gif' },
    { t: 'Levantamiento de rodillas', i: 'https://www.inspireusafoundation.org/wp-content/uploads/2022/06/hanging-leg-raise-movement.gif' },
    { t: 'Plancha con manos', i: 'https://media.self.com/photos/57d5f882f71ce8751f6b41af/16:9/w_864,h_486,c_limit/plank-challenge-feat.jpg' },
    { t: 'Plancha con sierra', i: 'https://media.self.com/photos/57fea6654b7c91b2239d76eb/master/w_1600%2Cc_limit/FOREARM_PLANK_ROCKS.gif' },
    { t: 'Hollow Hold', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/lyinghollowbodyhold-1457044774.gif' },
    { t: 'Mountain Climbers', i: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/mountainclimberrunning-1472061754.gif' },
    { t: 'Abdominal rusa', i: 'https://j.gifs.com/mwy1v0@large.gif?download=true' },
    { t: 'Plancha lateral con extensión de brazo', i: 'https://media1.popsugar-assets.com/files/thumbor/yVfRMWIJObOn-1OvqAS4cauykJY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/08/27/589/n/1922729/f1c15de14d50bd29_IMB_uPb1G0/i/Side-Plank-Reach-Through-Left-Side.GIF' },
    { t: 'Plancha lateral sobre codo', i: 'https://cdn.jwplayer.com/v2/media/QWIXtADU/poster.jpg?width=720' },
    { t: 'Plancha lateral sobre mano', i: 'https://bodybuilding-wizard.com/wp-content/uploads/2015/05/side-plank-on-hand.jpg' },
    { t: 'Plancha Superman', i: 'https://www.planetfitness.com/sites/default/files/feature-image/xsupermanpose_599690.jpg.pagespeed.ic.kwh38MTfKa.jpg' },
    { t: 'Pull Plank', i: 'https://www.muscleandfitness.com/wp-content/uploads/2016/11/pike_plank0.jpg?quality=86&strip=all' },
    { t: 'Bicho muerto', i: 'https://adelgazarencasa.co/wp-content/uploads/2022/05/dead-bug-o-bicho-muerto.gif' },
    { t: 'Tijeras', i: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/XDRI4C35WNBX3KIUEVU4VPLRRE.gif' },
    
  ];

  con_equipamiento = [
    { t: 'Abdominal con barra', i: 'https://assets.menshealth.co.uk/main/assets/barbell_full_body_workout__weighted_sit-up.gif?mtime=1517579009' },
    { t: 'Crunch de rodillas con polea', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Kneeling-Cable-Crunch.gif' },
    { t: 'Crunch de pie con polea', i: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Standing-Cable-Crunch.gif' },
    { t: 'Abdominal rusa con mancuerna o disco', i: 'https://hips.hearstapps.com/hmg-prod/images/766/fitgif-friday-weighted-russian-twist-slider-thumbnail-override-1515520081.gif?crop=1xw:0.786xh;center,top&resize=1200:*' },
    { t: 'Abdominal con mancuerna o disco', i: 'https://thumbs.gfycat.com/HoarseChiefDotterel-max-1mb.gif' },
    { t: 'Pullthrough de plancha con mancuernas', i: 'https://static.oprah.com/images/o2/201608/201608-cityrow-trainer-pull-thru-450x450.gif' }, 
    { t: 'Cortador de madera de media rodilla con mancuernas', i: 'https://i.pinimg.com/originals/a6/9c/b4/a69cb451eb5812f8968ae3bce5909d92.gif' }, 
    { t: 'Hollow Hold con mancuerna o disco', i: 'https://flabfix.com/wp-content/uploads/2019/08/Dumbbell-Hollow-Body-Hold.jpg' }, 
    { t: 'Remo renegado con mancuernas', i: 'https://media4.giphy.com/media/1n6exUWUnxvyzkYAaG/giphy.gif' },
    { t: 'Oblicuos con polea', i: 'https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/cable-cross.gif?resize=480:*' }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.segment = ev.target.value;
  }

}
