import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  template: `
    <div class="container">
      <div class="screen p-3" id="loginQuad">
        <div class="screen__content">
          <form #form="ngForm" (ngSubmit)="onsignup(form)">
            <div class="login__field">
              <label for="username">Username</label>
              <input
                ngModel
                type="username"
                class="login__input"
                name="username"
                placeholder="Username"
                id="username"
              />
            </div>
            <div class="login__field">
              <label for="email">Email</label>
              <input
                placeholder="mario@rossi.com"
                ngModel
                name="email"
                class="login__input"
                type="email"
                id="email"
              />
            </div>

            <div class="login__field">
              <label for="password">Password</label>
              <input
                type="password"
                class="login__input"
                ngModel
                name="password"
                id="password"
                placeholder="Minimo 6 caratteri"
              />
            </div>
            <div class="">
              <h3 class="mt-2">Seleziona il tuo ruolo:</h3>
              <select
                ngModel
                name="ruolo"
                class="form-select my-3"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="ROLE_USER">Utente</option>
                <option value="ROLE_ADMIN">Amministratore</option>
              </select>
            </div>
            <button
              class="button login__submit"
              [disabled]="false"
              type="submit"
            >
              <span class="button__text">Registrati</span>
            </button>
          </form>
          <div class="social-login">
            <h3>I - Outlay</h3>
          </div>
        </div>
        <div class="screen__background">
          <span
            class="screen__background__shape screen__background__shape4"
          ></span>
          <span
            class="screen__background__shape screen__background__shape3"
          ></span>
          <span
            class="screen__background__shape screen__background__shape2"
          ></span>
          <span
            class="screen__background__shape screen__background__shape1"
          ></span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Raleway, sans-serif;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #00000070;
        padding: 5rem;
      }

      .screen {
        background: linear-gradient(90deg, #0e0745, #252077);
        position: relative;
        height: 600px;
        width: 450px;
        box-shadow: 0px 0px 24px #090531;
        border-radius: 1.5rem;
      }

      .screen__content {
        z-index: 1;
        position: relative;
        height: 100%;
      }

      .screen__background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        -webkit-clip-path: inset(0 0 0 0);
        clip-path: inset(0 0 0 0);
      }

      .screen__background__shape {
        transform: rotate(45deg);
        position: absolute;
      }

      .screen__background__shape1 {
        height: 520px;
        width: 520px;
        background: #fff;
        top: -50px;
        right: 120px;
        border-radius: 0 72px 0 0;
      }

      .screen__background__shape2 {
        height: 220px;
        width: 220px;
        background: #18123d;

        top: -172px;
        right: 0;
        border-radius: 32px;
      }

      .screen__background__shape3 {
        height: 540px;
        width: 190px;
        background: linear-gradient(270deg, #130d45, #1f16af);
        top: -24px;
        right: 0;
        border-radius: 32px;
      }

      .screen__background__shape4 {
        height: 400px;
        width: 200px;
        background: #0b0847;
        top: 420px;
        right: 50px;
        border-radius: 60px;
      }

      .login {
        width: 320px;
        padding: 30px;
        padding-top: 156px;
      }

      .login__field {
        padding: 20px 0px;
        position: relative;
      }

      .login__icon {
        position: absolute;
        top: 30px;
        color: #7875b5;
      }

      .login__input {
        border: none;
        border-bottom: 2px solid #d1d1d4;
        background: none;
        padding: 10px;
        padding-left: 24px;
        font-weight: 700;
        width: 22rem;
        transition: 0.2s;
      }

      .login__input:active,
      .login__input:focus,
      .login__input:hover {
        outline: none;
        border-bottom-color: #6a679e;
      }

      .login__submit {
        background: #fff;
        font-size: 14px;
        margin-top: 30px;
        padding: 16px 20px;
        border-radius: 26px;
        border: 1px solid #d4d3e8;
        text-transform: uppercase;
        font-weight: 700;
        display: flex;
        align-items: center;

        color: #4c489d;
        box-shadow: 0px 2px 2px #5c5696;
        cursor: pointer;
        transition: 0.2s;
      }

      .login__submit:active,
      .login__submit:focus,
      .login__submit:hover {
        border-color: #6a679e;
        outline: none;
      }

      .button__icon {
        font-size: 24px;
        margin-left: auto;
        color: #7875b5;
      }

      .social-login {
        position: absolute;
        height: 140px;
        width: 160px;
        text-align: center;
        bottom: 0px;
        right: 0px;
        color: #fff;
      }

      .social-icons {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .social-login__icon {
        padding: 20px 10px;
        color: #fff;
        text-decoration: none;
        text-shadow: 0px 0px 8px #7875b5;
      }

      .social-login__icon:hover {
        transform: scale(1.5);
      }
    `,
  ],
})
export class AccediPage implements OnInit {
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onsignup(form: NgForm) {
    this.authSrv.signup(form.value).subscribe((res) => {
      alert('Registrazione avvenuta!');
      this.router.navigate(['/login']);
    });
  }
}
