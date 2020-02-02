import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private readonly displayHeaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setDisplayHeader(shouldDisplay: boolean): void {
    this.displayHeaderSubject.next(shouldDisplay);
  }

  getDisplayHeader(): Observable<boolean> {
    return this.displayHeaderSubject.asObservable().pipe(shareReplay(1));
  }

}
