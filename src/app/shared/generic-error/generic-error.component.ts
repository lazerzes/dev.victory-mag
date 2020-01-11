import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackgroundService } from 'src/app/services/background/background.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss'],
})
export class GenericErrorComponent implements OnInit, OnDestroy {
  errorType: string = null;
  errorMessage: any = null;

  subscription: Subscription = null;

  constructor(private bg: BackgroundService, private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.errorType = this.route.snapshot.paramMap.get('errorType') || null;
  }

  ngOnInit() {
    this.bg.setBackground('../../../assets/images/backgrounds/ua-heights-error.png');

    this.subscription = this.getError().subscribe(data => (this.errorMessage = data));
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    this.subscription.unsubscribe();
  }

  getError(): Observable<any> {
    return this.http.get('../../../assets/data/errors.json').pipe(
      switchMap(data => {
        if (Array.isArray(data)) {
          const response = data.filter(single => [this.errorType, 'Default'].includes(single.errorType));
          return of(response.length > 0 ? response[0] : null);
        }
        return of(data);
      })
    );
  }

  handleErrorRedirect(navigationType: string, navigationTarget: string | string[]) {
    if (navigationType === 'external' && !Array.isArray(navigationTarget)) {
      window.location.href = navigationTarget;
    } else if (navigationType === 'internal' && Array.isArray(navigationTarget)) {
      this.router.navigate(navigationTarget);
    } else {
      throw new Error('Unknown or invalid navigation paramaters.');
    }
  }
}
