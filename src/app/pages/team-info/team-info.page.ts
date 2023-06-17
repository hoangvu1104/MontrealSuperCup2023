import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticVariable } from 'src/shared/staticVariable';
import { Teams } from 'src/shared/teams';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.page.html',
  styleUrls: ['./team-info.page.scss'],
})
export class TeamInfoPage implements OnInit {
  teamInfo: any;
  teamName: any;

  constructor(private route: ActivatedRoute) {
    this.getTeamInfo(Teams.FC3Mien);
  }

  getTeamInfo(teamName: string) {
    switch (teamName) {
      case Teams.FC3Mien:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.FC3MienLogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.BFC:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.BFCLogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.Stechco1:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.Stechco2:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.VMU:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VMULogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.ASVMU:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.VMULogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.RBJunior:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.RBJuniorLogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
      case Teams.U45FC:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.U45FCLogo}`,
          teamMembers: [
            {
              playerName: 'Hoang Nhat',
              playerNumber: 1,
              goals: 17,
              assists: 6,
              yellowCards: 0,
              redCards: 0
            }
          ].sort((a, b) => {
            return a.playerNumber - b.playerNumber;
          })
        };
        break;
    }
  }

  ngOnInit() {
    this.teamName = this.route.snapshot.paramMap.get('teamName');
    console.log('this.teamName', this.teamName);
    this.getTeamInfo(this.teamName);
  }
}
