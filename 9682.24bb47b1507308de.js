"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9682],{9682:(b,c,a)=>{a.r(c),a.d(c,{ResultPageModule:()=>y});var r=a(6895),g=a(433),m=a(8058),d=a(9430),o=a(6354),s=a(4973),e=a(1571),p=a(5054),f=a(1083),u=a(1085);const x=[{path:"",component:(()=>{class i{constructor(t,n,h){this.route=t,this.commonFunctions=n,this.navCtrl=h,this.groupA=[],this.groupB=[],this.divisions=[],this.playoffs=[],this.time1="8h30-9h30",this.time2="9h45-10h45",this.time3="11h-12h",this.time4="13h-14h",this.displayLogo=!1,this.message="Hi\u1ec3n th\u1ecb logo",this.commonFunctions.enableMenuSwipe(),this.groupA=[s.p.VMU,s.p.Stechco2,s.p.U45FC,s.p.RBJunior],this.groupB=[s.p.FC3Mien,s.p.BFC,s.p.Stechco1,s.p.ASVMU]}generateDivisions(t,n){this.divisions=[{time:this.time1,field:o.I.Field1,teamA:t[0],teamB:t[1]},{time:this.time1,field:o.I.Field2,teamA:t[2],teamB:t[3]},{time:this.time1,field:o.I.Field3,teamA:n[0],teamB:n[1]},{time:this.time1,field:o.I.Field4,teamA:n[2],teamB:n[3]},{time:this.time2,field:o.I.Field1,teamA:t[0],teamB:t[2]},{time:this.time2,field:o.I.Field2,teamA:t[1],teamB:t[3]},{time:this.time2,field:o.I.Field3,teamA:n[0],teamB:n[2]},{time:this.time2,field:o.I.Field4,teamA:n[1],teamB:n[3]},{time:this.time3,field:o.I.Field1,teamA:t[0],teamB:t[3]},{time:this.time3,field:o.I.Field2,teamA:t[1],teamB:t[2]},{time:this.time3,field:o.I.Field3,teamA:n[0],teamB:n[3]},{time:this.time3,field:o.I.Field4,teamA:n[1],teamB:n[2]}],this.playoffs=[{time:this.time4,field:o.I.Field1,teamA:"1st A",teamB:"2nd B"},{time:this.time4,field:o.I.Field2,teamA:"2nd A",teamB:"1st B"},{time:this.time4,field:o.I.Field3,teamA:"3rd A",teamB:"4th B"},{time:this.time4,field:o.I.Field4,teamA:"4th A",teamB:"3rd B"}]}ngOnInit(){this.generateDivisions(this.groupA,this.groupB)}generateTeams(){this.navCtrl.navigateRoot("home")}changeDisplayImages(){this.displayLogo=!this.displayLogo,this.message=this.displayLogo?"Hi\u1ec3n th\u1ecb logo":"Hi\u1ec3n th\u1ecb m\xe0u \xe1o"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(p.y),e.Y36(m.SH))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-result"]],decls:9,vars:3,consts:[[1,"happy-tournament"],[1,"happy-tournament-text"],[3,"divisions","displayLogo"],[1,"btn",3,"click"]],template:function(t,n){1&t&&(e._UZ(0,"app-toolbar-header"),e.TgZ(1,"ion-content")(2,"div",0)(3,"span",1),e._uU(4,"L\u1ecbch thi \u0111\u1ea5u v\xf2ng b\u1ea3ng"),e.qZA()(),e._UZ(5,"app-round-robin",2),e.TgZ(6,"div",0)(7,"span",3),e.NdJ("click",function(){return n.changeDisplayImages()}),e._uU(8),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("divisions",n.divisions)("displayLogo",n.displayLogo),e.xp6(3),e.Oqu(n.message))},dependencies:[m.W2,f.T,u.H],styles:[".title[_ngcontent-%COMP%]{text-align:center;font-size:small;font-weight:700}.happy-tournament[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:-10px;margin-left:10px;margin-right:10px}.happy-tournament-text[_ngcontent-%COMP%]{font-size:18px;color:#8a2be2;font-weight:700;padding:10px 5px;border-radius:8px;background-color:#f2f2f2;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-top:15px}.btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;background-color:#0ff;padding:20px;border-radius:50px;font-size:large;font-weight:600;color:#8b008b;margin-top:20px;box-shadow:2px 2px 2px 1px rgba(0,0,0,.2)}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:5px;text-align:center;font-size:13px;border-bottom:1px solid #ccc}th[_ngcontent-%COMP%]{background-color:#f2f2f2}td[_ngcontent-%COMP%]{background-color:#fff}input[type=number][_ngcontent-%COMP%]{width:50px;text-align:center;border:none;background-color:#f2f2f2}input[type=number][_ngcontent-%COMP%]:focus{outline:none;background-color:#eaeaea}.spacer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:none;background-color:#adff2f;height:20px;font-weight:700}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}.team-info[_ngcontent-%COMP%]{display:flex;align-items:center}.team-image[_ngcontent-%COMP%]{width:30px;height:30px;margin-right:5px}.team-name[_ngcontent-%COMP%]{font-weight:700;margin-left:5px}"]}),i})()}];let P=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(x),d.Bz]}),i})(),y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[r.ez,g.u5,m.Pc,P]}),i})()}}]);