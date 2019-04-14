import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {fromEvent, Observable, Subscription} from 'rxjs';


@Injectable()
export class OfflineService {

  onlineEvent: Observable<Event>;
  offlineEvent: Observable<Event>;
  subscriptions: Subscription[] = [];

  connectionStatusMessage: string;

  constructor(private snackbar: MatSnackBar) {

    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    console.log('offline service');

    this.subscriptions.push(this.onlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Back to online';
      console.log('Online...');
      this.snackbar.open(this.connectionStatusMessage,'close');
    }));

    this.subscriptions.push(this.offlineEvent.subscribe(e => {
      this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
      console.log('Offline...');
      this.snackbar.open(this.connectionStatusMessage, 'close');
    }));

  }
}
