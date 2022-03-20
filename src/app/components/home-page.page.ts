import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <main>
        <div class="container mt-5 p-5 px-4 px-lg-5">
            <!-- Messaggio principale -->
            <div class="row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-7"><img class="img-fluid rounded mb-4" src="../../assets/sfondo2.jpg" alt="..." /></div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light text-white">Con passione creiamo valore!</h1>
                    <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni
                        quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                    <a class="btn btn-primary" href="#">I nostri risultati</a>
                </div>
            </div>
            <!-- Barra in evidenza -->
            <div class="card text-white bg-dark my-5 py-4 text-center fs-4">
                <div class="card-body">
                    <p class="text-white m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni
                        quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                </div>
            </div>
            <!-- Riga contenuto -->
            <div class="row gx-4 gx-lg-5">
                <div class="col-md-4 mb-5">
                    <div class="card h-100  bg-secondary">
                        <div class="card-body">
                            <h2 class="card-title">Primo servizio</h2>
                            <p class="card-text text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni
                                quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="#">Leggi di più...</a></div>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="card h-100  bg-secondary">
                        <div class="card-body">
                            <h2 class="card-title ">Secondo servizio</h2>
                            <p class="card-text text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur
                                ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id
                                dolore voluptates quos eligendi labore.</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="#">Leggi di più...</a></div>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="card h-100   bg-secondary">
                        <div class="card-body">
                            <h2 class="card-title">Terzo servizio</h2>
                            <p class="card-text text-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni
                                quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                        </div>
                        <div class="card-footer"><a class="btn btn-primary btn-sm" href="#">Leggi di più...</a></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <!-- Footer-->
    <footer class="py-5 bg-dark">
        <div class="container px-4 px-lg-5">
            <p class="m-0 text-center text-white">&copy; I - pay 2021 P.IVA: 123242353461 REA: </p>
        </div>
    </footer>


  `,
  styles: [ `

.container{
        background-color:#00000070;
        padding:3rem;
      }
 `  ]
})
export class HomePagePage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
