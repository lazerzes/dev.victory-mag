import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private readonly displayFooterSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setDisplayFooter(shouldDisplay: boolean): void {
    this.displayFooterSubject.next(shouldDisplay);
  }

  getDisplayFooter(): Observable<boolean> {
    return this.displayFooterSubject.asObservable().pipe(shareReplay(1));
  }
}
