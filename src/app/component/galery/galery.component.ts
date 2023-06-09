import { Component } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent {
  galery: string[] = [
    'assets/image/galery-2.webp',
    'assets/image/galery-3.webp',
  ];
}
