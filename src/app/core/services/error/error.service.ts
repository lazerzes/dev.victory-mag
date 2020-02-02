import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorSubject: BehaviorSubject<Error> = new BehaviorSubject(null);

  constructor() {}

  setCurrentError(error: Error): void {
    this.errorSubject.next(error);
  }

  getErrorObservable(): Observable<Error> {
    return this.errorSubject.pipe(shareReplay());
  }
}
