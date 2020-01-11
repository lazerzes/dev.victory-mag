import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private bg: BackgroundService) {}

  ngOnInit() {
    this.bg.setBackground('../../assets/images/backgrounds/ua-heights.png');
  }
}
