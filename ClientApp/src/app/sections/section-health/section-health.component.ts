import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from '../../services/server.service';
import { Server } from '../../shared/server';
import { Observable } from 'rxjs/Rx';
import { AnonymousSubscription } from 'rxjs/Subscription';
import { ServerMessage } from '../../shared/server-message';

/*
const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 1, name: 'dev-mail', isOnline: true},
  {id: 1, name: 'prod-web', isOnline: false},
  {id: 1, name: 'prod-mail', isOnline: false}
];
*/

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit, OnDestroy {

  constructor(private _serverService: ServerService) { }

  servers: Server[];
  timerSubscription: AnonymousSubscription;

  ngOnInit() {
    this.refreshData();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  refreshData() {
    this._serverService.getServers().subscribe(res => {
      this.servers = res;
    });

    this.subscribeToData();
  }

  subscribeToData() {
    this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  }

  sendMessage(msg: ServerMessage) {
    this._serverService.handleServerMessage(msg)
    .subscribe(res => console.log(res), err => console.log(err));
  }
}
