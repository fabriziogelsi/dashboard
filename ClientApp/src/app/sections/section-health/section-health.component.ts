import { Component, OnInit } from '@angular/core';

import { Server } from '../../shared/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnline: true},
  {id: 1, name: 'dev-mail', isOnline: true},
  {id: 1, name: 'prod-web', isOnline: false},
  {id: 1, name: 'prod-mail', isOnline: false}
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
