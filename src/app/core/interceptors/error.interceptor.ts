import { ErrorService } from '../services/error/error.service';
import { Injectable, Injector, ErrorHandler, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements ErrorHandler {
  constructor(private injector: Injector, private zone: NgZone) {}

  handleError(error: Error): void {
    const router = this.injector.get(Router);
    const errorService = this.injector.get(ErrorService);

    if (['TypeError'].includes(error.name)) {
      console.error(error);
      return;
    }

    this.zone.run(() => {
      errorService.setCurrentError(error);
      router.navigate(['/', 'error', error.name]);
    });
  }
}
