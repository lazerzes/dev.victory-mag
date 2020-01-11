import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss'],
})
export class GenericErrorComponent implements OnInit {
  constructor(private bg: BackgroundService) {}

  ngOnInit() {
    this.bg.setBackground('../../../assets/images/backgrounds/ua-heights-error.png');
  }
}
