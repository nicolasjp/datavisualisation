import { Component } from '@angular/core';

@Component({
  selector : 'app-root',
  template:`
  <div class="toolbar" role="banner">
    <img
      width="40"
      alt="Angular Logo"
      src="/assets/img/logoVisu.jpg"
    />
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{title}}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/guillaume">Home</a></li>
        <li><a class="nav-link" routerLink="/products">Product List</a></li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetVisu';
}
