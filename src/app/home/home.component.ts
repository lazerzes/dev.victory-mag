import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../services/background/background.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private bg: BackgroundService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.bg.setBackground('../../assets/images/backgrounds/ua-heights.png');
  }

  navigateToMain() {
    this.router.navigate(['/', 'volumes']);
  }
}
