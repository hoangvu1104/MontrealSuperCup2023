"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2080],{2080:(H,h,a)=>{a.r(h),a.d(h,{HomePageModule:()=>y});var g=a(6895),r=a(8058),l=a(433),p=a(9430),d=a(5463),u=a(4973),t=a(1571),f=a(5054),T=a(1085);function x(e,i){1&e&&(t.TgZ(0,"div",3)(1,"span",4),t._uU(2,"Ti\xeau ch\xed b\u1ed1c th\u0103m chia b\u1ea3ng"),t.qZA()())}function v(e,i){1&e&&(t.TgZ(0,"div",3)(1,"span",4),t._uU(2," 1. Hai \u0111\u1ed9i c\xf9ng CLB kh\xf4ng v\xe0o chung 1 b\u1ea3ng "),t.TgZ(3,"ul")(4,"li"),t._uU(5,"Stechco (Stechco1 v\xe0 Stechco2)"),t.qZA(),t.TgZ(6,"li"),t._uU(7,"VMU (AS-VMU v\xe0 VMU)"),t.qZA()()()())}function A(e,i){1&e&&(t.TgZ(0,"div",3)(1,"span",4),t._uU(2,"2. Ba \u0111\u1ed9i h\u1ea1t gi\u1ed1ng kh\xf4ng \u0111\u01b0\u1ee3c x\u1ebfp chung v\xe0o 1 b\u1ea3ng (d\u1ef1a tr\xean th\xe0nh t\xedch c\u1ee7a 3 m\xf9a gi\u1ea3i v\u1eeba qua (2020-2022)) "),t.TgZ(3,"ul")(4,"li"),t._uU(5,"RB Junior: \u0110\u01b0\u01a1ng kim v\xf4 \u0111\u1ecbch v\xe0 \xe1 qu\xe2n 2020"),t.qZA(),t.TgZ(6,"li"),t._uU(7,"3 Mien FC: \xc1 qu\xe2n 2 gi\u1ea3i g\u1ea7n nh\u1ea5t (2021, 2022)"),t.qZA(),t.TgZ(8,"li"),t._uU(9,"Stechco1: V\xf4 \u0111\u1ecbch n\u0103m 2020, 2021"),t.qZA()()()())}function _(e,i){if(1&e&&(t.TgZ(0,"div",3)(1,"span",4),t._uU(2),t.qZA()()),2&e){const n=t.oxw();t.xp6(2),t.Oqu(n.content)}}function F(e,i){if(1&e&&(t.TgZ(0,"ion-item",9),t._UZ(1,"div",10),t.TgZ(2,"div",11),t._uU(3),t.qZA()()),2&e){const n=i.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",o.getTeamImageStyle(n)),t.xp6(2),t.Oqu(n)}}function w(e,i){if(1&e&&(t.TgZ(0,"ion-item",9),t._UZ(1,"div",10),t.TgZ(2,"div",11),t._uU(3),t.qZA()()),2&e){const n=i.$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",o.getTeamImageStyle(n)),t.xp6(2),t.Oqu(n)}}function E(e,i){if(1&e&&(t.TgZ(0,"ion-row")(1,"ion-col",5)(2,"div",6)(3,"h2",7),t._uU(4,"B\u1ea3ng A"),t.qZA(),t.TgZ(5,"ion-list"),t.YNc(6,F,4,2,"ion-item",8),t.qZA()()(),t.TgZ(7,"ion-col",5)(8,"div",6)(9,"h2",7),t._uU(10,"B\u1ea3ng B"),t.qZA(),t.TgZ(11,"ion-list"),t.YNc(12,w,4,2,"ion-item",8),t.qZA()()()()),2&e){const n=t.oxw();t.xp6(6),t.Q6J("ngForOf",n.teamsToShowA),t.xp6(6),t.Q6J("ngForOf",n.teamsToShowB)}}function P(e,i){1&e&&(t.TgZ(0,"div",3)(1,"span",4),t._uU(2,"Ch\xfac c\xe1c \u0111\u1ed9i tham gia thi \u0111\u1ea5u t\u1ed1t!"),t.qZA()())}function C(e,i){1&e&&(t.TgZ(0,"div",3)(1,"span",4),t._uU(2,"Ch\xfac gi\u1ea3i \u0111\u1ea5u th\xe0nh c\xf4ng!"),t.qZA()())}function Z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",3)(1,"span",12),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.startCountdown())}),t._uU(2),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.hij("Chu\u1ea9n b\u1ecb b\u1ed1c th\u0103m trong ",n.countdown," gi\xe2y")}}function B(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",3)(1,"span",12),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return t.KtG(s.scheduleDetail())}),t._uU(2,"Xem l\u1ecbch thi \u0111\u1ea5u chi ti\u1ebft"),t.qZA()()}}const S=function(e){return{"fireworks-container":e}},M=[{path:"",component:(()=>{class e{constructor(n,o){this.navCtrl=n,this.commonFunctions=o,this.showCongratulations=!1,this.repetitions=0,this.repeatTimes=5,this.groupA=[],this.groupB=[],this.displayLogo=!1,this.message="Hi\u1ec3n th\u1ecb logo",this.teamsToShowA=[],this.teamsToShowB=[],this.countdown=15}ngOnInit(){this.startCountdown()}startCountdown(){const n=setInterval(()=>{this.countdown--,this.countdown<=0&&(clearInterval(n),this.startGenerateTeams())},1e3)}startGenerateTeams(){this.showCongratulations=!1,this.repetitions=0,this.generateTeams(),this.regenerateInterval=setInterval(()=>{this.generateTeams(),console.log("startRegeneration",this.repetitions)},1e4)}generateTeams(){this.repetitions++,this.content=this.repetitions!=this.repeatTimes?"B\u1ed1c th\u0103m th\u1eed l\u1ea7n th\u1ee9 "+this.repetitions:"K\u1ebft qu\u1ea3 b\u1ed1c th\u0103m ch\xednh th\u1ee9c",this.showCongratulations=this.repetitions==this.repeatTimes,this.repetitions==this.repeatTimes&&clearInterval(this.regenerateInterval),this.teamsToShowA=[],this.teamsToShowB=[];const n=this.generateTeamAssignments();this.groupA=n[0],this.groupB=n[1],this.updateTeamsToShow()}updateTeamsToShow(){this.teamsToShowA.length<this.groupA.length&&this.teamsToShowA.push(this.groupA[this.teamsToShowA.length]),this.teamsToShowB.length<this.groupB.length&&this.teamsToShowB.push(this.groupB[this.teamsToShowB.length]),(this.teamsToShowA.length<this.groupA.length||this.teamsToShowB.length<this.groupB.length)&&setTimeout(()=>{this.updateTeamsToShow()},1e3)}generateTeamAssignments(){const n={Group1:[u.p.Stechco1,u.p.Stechco2],Group2:[u.p.VMU,u.p.ASVMU],Group3:[u.p.FC3Mien,u.p.RBJunior],Group4:[u.p.U45FC,u.p.BFC]},o=[],s=[];for(const m in n)if(n.hasOwnProperty(m)){const c=n[m];this.shuffleArray(c),o.push(c[0]),s.push(c[1])}return this.shuffleArray(o),this.shuffleArray(s),[o,s]}shuffleArray(n){for(let o=n.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[n[o],n[s]]=[n[s],n[o]]}}getTeamImageStyle(n){return{"background-image":`url(${this.commonFunctions.getTeamImageStyle(n)})`}}scheduleDetail(){this.navCtrl.navigateRoot(d.F.RoundRobin,this.getGroupData())}getGroupData(){return{queryParams:{groupA:JSON.stringify(this.groupA),groupB:JSON.stringify(this.groupB)}}}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(r.SH),t.Y36(f.y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:13,vars:12,consts:[[3,"ngClass"],["class","happy-tournament",4,"ngIf"],[4,"ngIf"],[1,"happy-tournament"],[1,"happy-tournament-text"],["size","6"],[1,"group-container"],[1,"group-heading"],["class","team-item",4,"ngFor","ngForOf"],[1,"team-item"],[1,"team-image",3,"ngStyle"],[1,"team-name"],[1,"btn",3,"click"]],template:function(n,o){1&n&&(t._UZ(0,"app-toolbar-header"),t.TgZ(1,"ion-content")(2,"div",0),t.YNc(3,x,3,0,"div",1),t.YNc(4,v,8,0,"div",1),t.YNc(5,A,10,0,"div",1),t.YNc(6,_,3,1,"div",1),t.TgZ(7,"ion-grid"),t.YNc(8,E,13,2,"ion-row",2),t.qZA(),t.YNc(9,P,3,0,"div",1),t.YNc(10,C,3,0,"div",1),t.YNc(11,Z,3,1,"div",1),t.YNc(12,B,3,0,"div",1),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngClass",t.VKq(10,S,o.repetitions==o.repeatTimes)),t.xp6(1),t.Q6J("ngIf",0==o.repetitions),t.xp6(1),t.Q6J("ngIf",0==o.repetitions),t.xp6(1),t.Q6J("ngIf",0==o.repetitions),t.xp6(1),t.Q6J("ngIf",0!=o.repetitions),t.xp6(2),t.Q6J("ngIf",0!=o.repetitions),t.xp6(1),t.Q6J("ngIf",o.repetitions==o.repeatTimes),t.xp6(1),t.Q6J("ngIf",o.repetitions==o.repeatTimes),t.xp6(1),t.Q6J("ngIf",0!=o.countdown),t.xp6(1),t.Q6J("ngIf",o.repetitions==o.repeatTimes))},dependencies:[g.mk,g.sg,g.O5,g.PC,r.wI,r.W2,r.jY,r.Ie,r.q_,r.Nd,T.H],styles:['.group-container[_ngcontent-%COMP%]{background-color:#f2f2f2;border-radius:8px;padding:5px;margin-bottom:16px;text-align:center}.group-heading[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-bottom:8px}.team-item[_ngcontent-%COMP%]{display:flex;align-items:center}.team-image[_ngcontent-%COMP%]{width:50px;height:50px;background-size:cover;background-position:center;margin-right:10px}.team-item[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:small}.team-image[_ngcontent-%COMP%]{width:40px;height:40px;background-size:cover;background-position:center;margin-right:5px}.team-name[_ngcontent-%COMP%]{flex-grow:1}.team-item[_ngcontent-%COMP%]:last-child{border-bottom:none}ion-title[_ngcontent-%COMP%]{text-align:center}.happy-tournament[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-left:10px;margin-right:10px}.happy-tournament-text[_ngcontent-%COMP%]{font-size:18px;color:#8a2be2;padding:10px 5px;border-radius:8px;background-color:#f2f2f2;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-top:15px}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;background-color:#0ff;padding:20px;border-radius:50px;font-size:large;font-weight:600;color:#8b008b;margin-top:20px;box-shadow:2px 2px 2px 1px rgba(0,0,0,.2)}.fireworks-container[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:#fff;overflow:hidden}.fireworks-container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden;z-index:0}.fireworks-container[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;animation:_ngcontent-%COMP%_fireworks 4s infinite}@keyframes _ngcontent-%COMP%_fireworks{0%{background:radial-gradient(#FF0000,#FFA500)}25%{background:radial-gradient(#FFFF00,#FF00FF)}50%{background:radial-gradient(#00FF00,#00FFFF)}75%{background:radial-gradient(#0000FF,#FFFFFF)}to{background:radial-gradient(#FF0000,#FFA500)}}']}),e})()}];let b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.Bz.forChild(M),p.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,l.u5,r.Pc,b]}),e})()}}]);