import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundService {
  private backgroundSubject$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {}

  setBackground(src) {
    this.backgroundSubject$.next(src);
  }

  getBackground(): Observable<string> {
    return this.backgroundSubject$.asObservable();
  }
}
