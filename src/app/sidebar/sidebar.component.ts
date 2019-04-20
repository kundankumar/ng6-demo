import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: String;

  constructor(private router: Router) {
    // Didn't worked out
    // router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
    router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = event.url;
        }
    });
  }

  ngOnInit() {
  }

}
