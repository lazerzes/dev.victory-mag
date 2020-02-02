import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackgroundService } from './core/services/background/background.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'victory-mag';
  subscriber: Subscription;

  background: string;

  constructor(private bg: BackgroundService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.subscriber = this.bg.getBackground().subscribe(data => {
      this.background = data ? ['url(', data, ')'].join('') : data;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.subscriber.unsubscribe();
  }
}
