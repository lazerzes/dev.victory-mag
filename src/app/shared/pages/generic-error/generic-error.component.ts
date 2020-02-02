import { ErrorService } from '../../../core/services/error/error.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackgroundService } from 'src/app/core/services/background/background.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss'],
})
export class GenericErrorComponent implements OnInit, OnDestroy {
  errorMessage: any = null;

  subscription: Subscription = null;

  showErrorAdvanced = false;

  constructor(
    private bg: BackgroundService,
    private error: ErrorService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.bg.setBackground('../../../assets/images/backgrounds/ua-heights-error.png');
    this.subscription = this.getErrorMessage().subscribe(data => (this.errorMessage = data));
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    this.subscription.unsubscribe();
    this.error.setCurrentError(null);
  }

  getErrorMessage(): Observable<any> {
    const errorRef$ = (err: string) =>
      this.http.get('../../../assets/data/errors.json').pipe(
        switchMap(data => {
          if (Array.isArray(data)) {
            const response = data.filter(single => [err, 'Default'].includes(single.errorType));
            return of(response.length > 0 ? response[0] : null);
          }
          return of(data);
        })
      );

    return this.route.paramMap.pipe(
      switchMap(paramMap => {
        return errorRef$(paramMap.get('errorType'));
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

  getErrorAdvanced(): Observable<Error> {
    return this.error.getErrorObservable();
  }
}
