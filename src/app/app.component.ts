import { Component } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router) {}
  title = 'smart-learn';
   isLoginRoute(): boolean {
    // handle cases like '/login' and '/login/...' (child routes)
    try {
      return typeof this.router.url === 'string' && this.router.url.indexOf('/login') === 0;
    } catch (e) {
      return false;
    }
  }
}
