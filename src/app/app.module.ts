
import { FatturePage } from './components/fatture.page';
import { InfoClientiPage } from './components/info-clienti.page';
import { AccediPage } from './components/accedi.page';
import { LoginPagePage } from './components/login-page.page';
import { HomePagePage } from './components/home-page.page';
import { NavbarComponent } from './components/navbar.component'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { UsersPage } from './components/users.page';
import { MyHttpInterceptorInterceptor } from './_interceptors/my-http-interceptor.interceptor';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DettaglifatturaPage } from './components/dettaglifattura.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DettagliclientePage } from './components/dettaglicliente.page';
import { CreaClientePage } from './components/crea-cliente.page';
import { PaginationComponent } from './components/pagination.component';
import { AuthGuardGuard } from './_guard/auth-guard.guard';
import { AuthService } from './services/auth.service';
import { ModificaClientePage } from './components/modifica-cliente.page';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePagePage,
    LoginPagePage,
    AccediPage,
    InfoClientiPage,
    FatturePage,
    UsersPage,
    DettaglifatturaPage,
    DettagliclientePage,
    CreaClientePage,
    PaginationComponent,
    ModificaClientePage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyHttpInterceptorInterceptor,
      multi:true
    }, AuthGuardGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


