import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackgroundService } from './core/services/background/background.service';
import { Subscription, Observable } from 'rxjs';
import { HeaderService } from './core/services/header/header.service';
import { FooterService } from './core/services/footer/footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'victory-mag';

  background$: Observable<string> = this.backgroundService.getBackground();
  displayHeader$: Observable<boolean> = this.headerService.getDisplayHeader();
  displayFooter$: Observable<boolean> = this.footerService.getDisplayFooter();

  constructor(private backgroundService: BackgroundService, private headerService: HeaderService, private footerService: FooterService ) {}

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.s
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
  }

  resolveBackground(source: string): string {
    return source ? ['url(', source, ')'].join('') : source;
  }
}
