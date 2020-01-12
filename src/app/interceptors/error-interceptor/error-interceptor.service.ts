import { ErrorService } from './../../services/error/error.service';
import { Injectable, Injector, ErrorHandler, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService implements ErrorHandler {
  constructor(private injector: Injector, private zone: NgZone) {}

  handleError(error: Error): void {
    const router = this.injector.get(Router);
    const errorService = this.injector.get(ErrorService);

    this.zone.run(() => {
      errorService.setCurrentError(error);
      router.navigate(['/', 'error', error.name]);
    });
  }
}
