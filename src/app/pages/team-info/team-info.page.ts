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
              playerName: 'Thinh Ngo (C)',
              playerNumber: 4,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Thao Tran',
              playerNumber: 5,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Ha Nguyen',
              playerNumber: 21,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Truong Pham',
              playerNumber: 39,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Cuong Nguyen',
              playerNumber: 32,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Tung Nguyen',
              playerNumber: 19,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Tung Uong',
              playerNumber: 17,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phuoc Nguyen',
              playerNumber: 2,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Duc Loc Tran',
              playerNumber: 99,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Bao Tran',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phi Hung Phan',
              playerNumber: 29,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phu Nguyen',
              playerNumber: 9,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Trong Luat Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Hanh Van',
              playerNumber: 7,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Xuan Nhu Le',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Huu Khoi Pham',
              playerNumber: 30,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Quang Pham',
              playerNumber: 11,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Vy To',
              playerNumber: 15,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Huu Tai Tran',
              playerNumber: 10,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Bao Phan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Kiet Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Huu Tai Pham',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Van Thanh Ho',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Phuoc Pham',
              playerNumber: 1,
              goals: 0,
              assists: 0,
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
              playerName: 'Nguyen Duc Bao Toan (C)',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },
            {
              playerName: 'Le The Dai Phong',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Luu Chi Duc',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Ho Minh Truc',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tran Quoc Viet',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Van Truong An',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Xuan Dinh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Cubon Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Cong Khang',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tran Ngoc Hong Quan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Duc Anh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Kyan Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tam Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Thang Do',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Hoang Truong',
              playerNumber: 0,
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
      case Teams.Stechco1:
        this.teamInfo = {
          teamName: teamName,
          teamLogoUrl: `${StaticVariable.ImagesPath}${StaticVariable.StechcoLogo}`,
          teamMembers: [
            {
              playerName: 'Pham Hoang Bao (C)',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Le Hung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Kieu Cuong',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Ngoc Dung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Phung Minh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Do Van Trung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'huynh Hai',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nam Neo Vancouver',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Duc Vancouver',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Hoang Minh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Son Dac',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Le Nhat',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tran Tuan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tu Quach',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Cuong Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Duy',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Julien Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tristan Huynh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Huynh Thanh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
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
              playerName: 'Dao Ha (C)',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tran Binh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Thai Phuoc',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Pham Nha',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Sy Quy',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Khuong Hung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Dang Khanh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Bui Quang Hien',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Nam',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Ton Viet Hung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Truong Tien Dung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Le Huy Binh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Minh Triet',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nam Vu',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Ha Pham',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Hoang Esteban',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Huu Dung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Long Sherbrooke',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Huy Hoang',
              playerNumber: 0,
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
              playerName: 'Nguyễn Hoàng Tuấn (C)',
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
              playerName: 'Trần Trung An (C)',
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
              playerName: 'Vuong Dinh Hoan (C)',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Le An Vinh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Phan Dinh Bao Long',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Truong Nguyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tran Kevin',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Dinh Hoang Lan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Le Dinh Duc',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Pham Le Anh Tuan',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Dang Nhat Minh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Vo Hoang Khuong',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Minh Hoang',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Ngo Ba Tuyen',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Bui Phan Tung',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Ngoc Anh Huy',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Ngo Tien Dat',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Vo Duong Huy',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Duong Quang Huy',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Pham Hoang Anh',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Anthony Vu',
              playerNumber: 0,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Bui Cao Son',
              playerNumber: 0,
              goals: 0,
              assists: 0,
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
              playerName: 'Nguyen V. Tuong (C)',
              playerNumber: 12,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Bang Nguyen',
              playerNumber: 15,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Uy Nguyen',
              playerNumber: 5,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tam Vo',
              playerNumber: 8,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tam Le',
              playerNumber: 25,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nguyen Van Phuc',
              playerNumber: 26,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Duy Tran Si',
              playerNumber: 27,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Khoa Nguyen',
              playerNumber: 28,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Hoang Thai Ca',
              playerNumber: 29,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Jimmy Nguyen',
              playerNumber: 18,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Cuong Nguyen',
              playerNumber: 30,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Nhan Le',
              playerNumber: 31,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Dan Tran',
              playerNumber: 32,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Tung Do',
              playerNumber: 33,
              goals: 0,
              assists: 0,
              yellowCards: 0,
              redCards: 0
            },{
              playerName: 'Kim Le',
              playerNumber: 34,
              goals: 0,
              assists: 0,
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
