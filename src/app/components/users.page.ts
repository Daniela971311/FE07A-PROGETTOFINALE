import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  template: `
    <div class="container mt-5 p-5">
      <div class="row">
        <div class="col-md-12">
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Ruoli</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let user of users">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td><span class="btn ruoli" *ngFor="let ruolo of user.roles">{{ruolo.roleName}}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="container d-flex">
        <nav aria-label="Page navigation example justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link" (click)="caricaprevPag(this.p)">
                Previous
              </button>
            </li>


                <li class="page-item" *ngFor="let pagina of numPag; let p = index">
                  <button class="page-link" (click)="caricaPag(p)">
                    {{ p + 1 }}
                  </button>
                </li>


            <li class="page-item">
              <button class="page-link" (click)="caricanextPag(this.p)">
                Next
              </button>
            </li>
          </ul>
        </nav>
     </div>
    </div>
  `,
  styles: [`

    .container{
      background-color:#00000070;

      color:white;
    }

    .ruoli{
      color:white;
    }
    `]
})
export class UsersPage implements OnInit {
 users!:Array<Users>;
 numPag!: any;
 p: number = 0;
 k!: number;
  constructor(private usrSrv:UserService, private router: Router) { }


  ngOnInit(): void {
    this.caricaPag(0);
  }
  caricaPag(k: number) {
    this.usrSrv.getByPage(k).subscribe((res) => {
      this.users = res.content;
      this.p = k;
      this.numPag = Array(res.pageable.totalPages);
    });
  }
  caricaprevPag(k: number) {
    if (this.p == 0) {
      this.caricaPag(k);
      return;
    } else {
      --k;
      this.caricaPag(k);
      return;
    }
  }

  caricanextPag(k: number) {
    if (this.p == 4) {
      this.caricaPag(k);
      return;
    } else {
      ++k;
      this.caricaPag(k);
      return;
    }
  }
  cambiaPag() {
    this.router.navigate(['users']);
  }
}
