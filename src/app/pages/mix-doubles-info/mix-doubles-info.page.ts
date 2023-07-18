import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { Player } from 'src/models/Player';

@Component({
  selector: 'app-mix-doubles-info',
  templateUrl: './mix-doubles-info.page.html',
  styleUrls: ['./mix-doubles-info.page.scss'],
})
export class MixDoublesInfoPage implements OnInit {
  countdown = 10;
  teamsToShowA: string[] = []; // Teams to show for Group A
  teamsToShowB: string[] = []; // Teams to show for Group B
  WomenPlayersLevelA: any[] = [];
  WomenPlayersLevelB: any[] = [];
  MenPlayersLevelA: any[] = [];
  MenPlayersLevelB: any[] = [];
  LevelA: string[] = [];
  LevelB: string[] = [];
  WomenPlayers: any[] = [
    {
      playerName: 'Hanh Minh', level: 4.0,
    }, {
      playerName: 'Nhu Ngoc', level: 3.5
    }, {
      level: 2.5, playerName: 'Giang Vo'
    }, {
      playerName: 'Van Nguyen', level: 2
    }, {
      playerName: 'Chi Ai', level: 3.3
    }, {
      playerName: 'Co Trinh', level: 2.3
    }, {
      playerName: 'Chi Van', level: 3
    }, {
      playerName: 'Chi Diep', level: 3
    },
  ].sort((a, b) => {
    return b.level - a.level;
  });

  MenPlayers: any[] = [
    {
      playerName: 'Bao Nguyen', level: 4
    }, {
      playerName: 'Chuan Nguyen', level: 3.5
    }, {
      playerName: 'Vu Pham', level: 2.5
    }, {
      playerName: 'Vinh Nguyen', level: 4
    }, {
      playerName: 'Chau Ngoc', level: 3.5
    }, {
      playerName: 'Cuong Nguyen', level: 4
    }, {
      playerName: 'Vy Nguyen', level: 3
    }, {
      playerName: 'Huy Vo', level: 3
    },
  ].sort((a, b) => {
    return b.level - a.level;
  });
  constructor() {
   
    for (let i = 0; i < 4; i++) {
      this.WomenPlayersLevelA.push(this.WomenPlayers[i]);      
      this.MenPlayersLevelA.push(this.MenPlayers[i]);
    }   
    for (let i = 4; i < 8; i++) {
      this.WomenPlayersLevelB.push(this.WomenPlayers[i]);
      this.MenPlayersLevelB.push(this.MenPlayers[i]);
    }
    
    
    console.log('Level A');
    this.LevelA.forEach(p =>{
       console.log(p);
     });    
     console.log('Level B');
     this.LevelB.forEach(p =>{
      console.log(p);
    });
    // this.WomenPlayersLevelA.forEach(p =>{
    //   console.log(p.playerName, p.level);
    // });    
    // console.log('Women Level B');
    // this.WomenPlayersLevelB.forEach(p =>{
    //   console.log(p.playerName, p.level);
    // });
    // console.log('Men Level A');
    // this.MenPlayersLevelA.forEach(p =>{
    //   console.log(p.playerName, p.level);
    // });
    // console.log('Men Level B');
    // this.MenPlayersLevelB.forEach(p =>{
    //   console.log(p.playerName, p.level);
    // });
  }

  startGenerateTeams()
  {    
    this.shuffleArray(this.WomenPlayersLevelA);
    this.shuffleArray(this.WomenPlayersLevelB);
    this.shuffleArray(this.MenPlayersLevelA);
    this.shuffleArray(this.MenPlayersLevelB);  

    for (let i = 0; i < 4; i++) {
      this.LevelA.push(this.WomenPlayersLevelA[i].playerName + ' (' + this.WomenPlayersLevelA[i].level + ')' + ' - ' + 
      this.MenPlayersLevelA[i].playerName+ ' (' + this.MenPlayersLevelA[i].level + ')');
    }
    
    for (let i = 0; i < 4; i++) {
      this.LevelB.push(this.WomenPlayersLevelB[i].playerName + ' (' + this.WomenPlayersLevelB[i].level + ')' + ' - ' + 
      this.MenPlayersLevelB[i].playerName+ ' (' + this.MenPlayersLevelB[i].level + ')');
    }
    
    this.teamsToShowA = []; // Teams to show for Group A
    this.teamsToShowB = []; // Teams to show for Group B
    this.updateTeamsToShow(); 
  }

  updateTeamsToShow() {
    if (this.teamsToShowA.length < this.LevelA.length) {
      this.teamsToShowA.push(this.LevelA[this.teamsToShowA.length]);
    }
    if (this.teamsToShowB.length < this.LevelB.length) {
      this.teamsToShowB.push(this.LevelB[this.teamsToShowB.length]);
    }
    if (
      this.teamsToShowA.length < this.LevelA.length ||
      this.teamsToShowB.length < this.LevelB.length
    ) {
      setTimeout(() => {
        this.updateTeamsToShow();
      }, 1000);
    }
  }

  ngOnInit() {
    this.startCountdown();
  }

  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  } 

  startCountdown() {    
    const timer = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        clearInterval(timer);
        this.startGenerateTeams();
      }
    }, 1000); // Decrease the countdown every second (1000 milliseconds)
  }

}
