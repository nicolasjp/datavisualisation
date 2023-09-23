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
      <ul class="nav nav-pills">
        <li><a class="nav-link" style="color: white;" routerLink="/welcome">Home</a></li>
      </ul>
    </nav>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <ul class="nav nav-pills">
        <li><a class="nav-link" style="color: white;" routerLink="/guillaume">Guillaume visualisation</a></li>
      </ul>
    </nav>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <ul class="nav nav-pills">
        <li><a class="nav-link" style="color: white;" routerLink="/nicolas">Nicolas visualisation</a></li>
      </ul>
    </nav>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <ul class="nav nav-pills">
        <li><a class="nav-link" style="color: white;" routerLink="/fabian">Fabian visualisation</a></li>
      </ul>
    </nav>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <ul class="nav nav-pills">
        <li><a class="nav-link" style="color: white;" routerLink="/yohan">Yohan visualisation</a></li>
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
