import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/service/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(private myservice:GamesService){}

  ngOnInit(){
    console.log("Inicio de mi componente Games")
    this.getGames();
  }

  getGames(){
    console.log(this.myservice.getData())
  }

}
