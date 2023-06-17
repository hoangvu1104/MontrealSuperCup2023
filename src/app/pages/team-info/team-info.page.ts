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
              playerName: 'Alexandre Đặng Minh Nhân',
              playerNumber: 86,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Nguyễn Trần Tim',
              playerNumber: 2003,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Phan Bảo Long',
              playerNumber: 23,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Vũ Đoàn Gia Huy',
              playerNumber: 18,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Hoàng Tuấn',
              playerNumber: 96,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Văn Nhật Nguyên',
              playerNumber: 91,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đặng Anh Vũ',
              playerNumber: 47,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Xuân Bách',
              playerNumber: 24,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đặng Công Kiên',
              playerNumber: 2,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Hoàng Lân',
              playerNumber: 84,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Lâm Quốc Cường',
              playerNumber: 34,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Lê Bảo Đăng',
              playerNumber: 89,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Việt Nam',
              playerNumber: 22,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hà Tuấn Khôi',
              playerNumber: 43,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Ngọc Duy',
              playerNumber: 41,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Hoàng Thịnh',
              playerNumber: 42,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
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
              playerName: 'Lê Thanh Hùng',
              playerNumber: 30,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Lê Thành Đạt',
              playerNumber: 82,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Nguyễn Thái Sơn',
              playerNumber: 66,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hồ Lê Sơn Giang',
              playerNumber: 14,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Vũ Thắng',
              playerNumber: 60,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Hồ Trung Kiên',
              playerNumber: 97,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Lâm Tấn Phát',
              playerNumber: 69,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trần Tuấn Hào',
              playerNumber: 31,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Thái Trần Minh Phát',
              playerNumber: 93,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đặng Văn Bình',
              playerNumber: 38,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trần Trung Tín',
              playerNumber: 12,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trương Minh Lương',
              playerNumber: 82,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Công Hoan',
              playerNumber: 25,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Trần Trung An',
              playerNumber: 27,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Nguyễn Thanh Duẫn',
              playerNumber: 77,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            }, {
              playerName: 'Đặng Đông',
              playerNumber: 48,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
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
