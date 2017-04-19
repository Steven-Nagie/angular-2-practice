import { Component } from '@angular/core';

@Component({
  //as element
  selector: 'app-server',
  //as attribute
  // selector: '[app-server]',
  //as class
  // selector: '.app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})
export class ServerComponent {
  serverId: number = 12;
  serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
