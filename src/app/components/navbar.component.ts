import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthGuardGuard } from '../_guard/auth-guard.guard';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">I - Outlay</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a
              class="nav-link  "
              aria-current="page"
              [routerLink]="['']"
              routerLinkActive="router-link-active"
              >Home</a
            >
            <a
              class="nav-link "
              [routerLink]="['login']"
              routerLinkActive="router-link-active"
              [hidden]="this.authSrv.loggedIn()"
              >Accedi</a
            >
            <a
              class="nav-link"
              [routerLink]="['accedi']"
              routerLinkActive="router-link-active"
              [hidden]="this.authSrv.loggedIn()"
              >Registrati</a
            >
            <a
              class="nav-link"
              [routerLink]="['fatture']"
              routerLinkActive="router-link-active"
              >Fatture</a
            >
            <a
              class="nav-link"
              [routerLink]="['clienti']"
              routerLinkActive="router-link-active"
              >Clienti</a
            >
            <a
              class="nav-link"
              [routerLink]="['users']"
              routerLinkActive="router-link-active"
              >Utenti</a
            >
            <a
              class="nav-link btn btn-danger "
              (click)="logOut()"
              [hidden]="!this.authSrv.loggedIn()"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar-expand .navbar-collapse {
      align-content: flex-end;
      flex-wrap: wrap;
      flex-direction: column;
  }
  .navbar-dark .navbar-nav .nav-link{
    margin-right: 1rem;
    color:white;
  }
  .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus{
    color:#8190ff;
  }
  ` ],
})
export class NavbarComponent implements OnInit {
  constructor(private auth: AuthGuardGuard, public authSrv: AuthService) {}
  ngOnInit(): void {}

  logOut() {
    if (this.authSrv.loggedIn()) {
     this.authSrv.logOut();
    } else {
      alert('Effettua il login per accedere ai contenuti');
    }
  }
}
