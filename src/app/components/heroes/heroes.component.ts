import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroes';
import { HeroesService } from 'src/app/service/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService: HeroesService,
              private _router: Router) { 

              }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }
  
  verHeroe(idex:number){
    this._router.navigate(['/heroe',idex])
  }

  buscarHeroes(termino: string): Heroe[]{

    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();

    for(let heroe of this.heroes){
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
         heroesArr.push(heroe)
      }
    }

    return heroesArr;
  }
 
}
