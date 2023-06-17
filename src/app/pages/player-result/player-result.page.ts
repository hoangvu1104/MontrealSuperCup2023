import { Component, OnInit } from '@angular/core';
import { PlayerResult } from 'src/models/PlayerResult';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-player-result',
  templateUrl: './player-result.page.html',
  styleUrls: ['./player-result.page.scss'],
})
export class PlayerResultPage implements OnInit {
  playerResults: PlayerResult[] = [];
  showGoalsStatic = true;
  displayTitle = '';
  constructor() {
    this.showPlayersResult();
  }

  changValue(event: any) {
    this.showGoalsStatic = event.detail.value === 'goals';
    this.showPlayersResult();
  }

  ngOnInit() { }

  showPlayersResult() {
    if (this.showGoalsStatic) {
      this.displayTitle = 'Danh sách cầu thủ ghi bàn';
    } else {
      this.displayTitle = 'Danh sách cầu thủ kiến tạo';
    }

    this.playerResults = [
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 5,
        assists: 15,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thao Tran',
        playerNumber: 2,
        goals: 3,
        assists: 6,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Ha Nguyen',
        playerNumber: 3,
        goals: 4,
        assists: 1,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Truong Pham',
        playerNumber: 4,
        goals: 8,
        assists: 10,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 13,
        assists: 5,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 14,
        assists: 25,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 17,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 1,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 0,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 0,
        assists: 3,
        yellowCards: 0,
        redCards: 0,
      },
      {
        teamName: Teams.ASVMU,
        playerName: 'Thinh Ngo (C)',
        playerNumber: 1,
        goals: 5,
        assists: 5,
        yellowCards: 0,
        redCards: 0,
      },
    ].sort((a, b) => {
      if (this.showGoalsStatic) {
        return b.goals - a.goals;
      } else {
        return b.assists - a.assists;
      }
    });
  }
}
