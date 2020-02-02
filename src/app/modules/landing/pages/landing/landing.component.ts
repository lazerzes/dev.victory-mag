import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackgroundService } from 'src/app/core/services/background/background.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  constructor(
    private bgService: BackgroundService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.bgService.setBackground('../../../../../assets/images/backgrounds/ua-heights.png');
  }

  ngOnDestroy() {
    this.bgService.setBackground(null);
  }

  navigateToMain() {
    this.router.navigate(['/', 'home']);
  }

}
