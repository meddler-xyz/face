(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7wOY":function(n,e,t){"use strict";t.r(e),t.d(e,"DomainModule",function(){return A});var a=t("mrSG"),i=t("fXoL"),o=t("ofXK"),s=t("tyNb"),d=t("c0TW"),r=t("3Pt+"),l=t("y8eJ"),c=t("ZfaG");const p=[r.n.pattern("^([A-Za-z0-9].|[A-Za-z0-9][A-Za-z0-9-]{0,61}[A-Za-z0-9].){1,3}[A-Za-z]{2,6}$"),r.n.required];let m=class{constructor(n){this.assetApiService=n,this.saving=!1,this.saving_ip_index=-1,this.ip_addresses=new r.b([new r.d("",p)]),this.tmp$=1}addNew(){this.ip_addresses.push(new r.d("",p))}ngOnInit(){}removeAt(n){this.ip_addresses.removeAt(n)}saveIp(){this.saving=!0,this.ip_addresses.controls.forEach(n=>{n.valid&&this.assetApiService.addDomain(n.value).subscribe()})}};m.ctorParameters=()=>[{type:l.a}],m=Object(a.a)([Object(i.n)({selector:"app-domain-add",template:' <nb-card size="giant">\n\n\n   <nb-card-header>\n\n     <div fxFlex fxLayoutGap="1rem" fxLayoutAlign="center center">\n\n       <nb-icon class="text-hint" icon="plus-circle">\n       </nb-icon>\n       <div fxFlex class="h6 text-hint">\n         Add Domain\n\n       </div>\n       \x3c!-- <div fxFlex fxLayoutAlign="end center">\n    \n          <nb-toggle [checked]="true" labelPosition="left" status="primary">IPv4</nb-toggle>\n        </div> --\x3e\n\n\n\n       <button status="warning" (click)="addNew()" nbButton outline size="small">\n         Add New\n\n         <nb-icon icon="plus-circle">\n         </nb-icon>\n\n       </button>\n\n\n\n\n\n     </div>\n   </nb-card-header>\n\n\n   <nb-card-body >\n\n\n\n     <div fxLayout="row wrap">\n\n       <div class="item" fxFlex="50%" @init *ngFor="let ip_address_import of ip_addresses.controls; index as index ">\n\n\n         <nb-form-field   [nbSpinner]="saving">\n           <div nbPrefix icon="at-outline" pack="eva">\n             #{{index+1}}\n           </div>\n           <input \n           fullWidth\n           [formControl]="ip_addresses.controls[index]" nbInput fieldSize="medium"\n             [status]="ip_addresses.controls[index].valid ? \'basic\' : \'danger\' " placeholder="Domain name">\n\n\n           <button [ngStyle]="{ \'visibility\': index == 0 ? \'hidden\' : \'visible\'  }" nbSuffix (click)="removeAt(index)"\n             nbButton size="small" ghost status="basic">\n             <nb-icon icon="trash-outline">\n             </nb-icon>\n           </button>\n\n\n         </nb-form-field>\n\n\n\n\n\n\n         <ng-container>\n           <div [ngStyle]="{ \'visibility\': ip_addresses.controls[index].valid ? \'hidden\' : \'visible\'  }"\n             class="error-message">\n             <span class="caption">\n               *Invalid Domain name\n\n             </span>\n           </div>\n\n         </ng-container>\n\n       </div>\n\n     </div>\n\n   </nb-card-body>\n\n   <nb-card-footer fxLayoutAlign="end center">\n\n\n\n     <button [disabled]="!ip_addresses.valid" (click)="saveIp()" outline nbButton\n       [status]="ip_addresses.valid ? \'success\': \'basic\'">\n\n       <nb-icon icon="checkmark-circle-2">\n       </nb-icon>\n       Save\n\n\n     </button>\n   </nb-card-footer>\n\n </nb-card>\n',animations:[...c.a],styles:[".marL {\n  margin-left: 10px;\n}\n\n.item {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.error-message {\n  margin-top: 0.6rem;\n  margin-bottom: 0.6rem;\n}"]})],m);let f=class{constructor(){}ngOnInit(){}};f.ctorParameters=()=>[],f=Object(a.a)([Object(i.n)({selector:"app-domain-home",template:' \n\n<nb-card size="medium">\n\n\n\n  <nb-card-header>\n\n    <div fxFlex fxLayoutGap="1rem" fxLayoutAlign="center center">\n\n      <nb-icon class="text-hint" icon="plus-circle">\n      </nb-icon>\n      <div fxFlex class="h6 text-hint">\n        List of Domains\n\n      </div>\n    </div>\n\n  </nb-card-header>\n\n  <nb-card-header >\n\n\n    <app-domain-search></app-domain-search>\n  </nb-card-header>\n  <nb-card-header class="nogap">\n\n    <div fxLayout="column">\n\n      <div fxLayout="row" fxFlex class="list-head">\n\n\n\n\n        <div appHoverColor appBorder fxFlex fxLayoutAlign="start center" class="list-item-head">\n          <span class="marL" style=" padding-left:\'2rem\'">\n            Domain\n\n          </span>\n        </div>\n\n\n        <div appHoverColor appBorder fxFlex="150px" fxLayoutAlign="center center" class="list-item-head">\n          Group\n        </div>\n\n\n        <div appHoverColor appBorder fxFlex="180px" fxLayoutAlign="center center" class="list-item-head">\n          Last Checked\n        </div>\n\n\n      </div>\n\n    </div>\n  </nb-card-header>\n\n\n  <nb-card-body class="nogap">\n\n    <app-domain-list></app-domain-list>\n  </nb-card-body>\n</nb-card>\n',styles:[".list-item-head {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: #a4b1cd !important;\n}\n\n.list-head {\n  height: 4rem;\n}\n\n:host nb-tab {\n  padding: 0rem;\n}\n\n.nogap {\n  padding: 0rem !important;\n}"]})],f);const b=[{path:"add",component:m,data:{id:d.b.DomainCreate}},{path:"**",component:f,data:{id:d.b.DomainConfigure}}];let x=class{};x=Object(a.a)([Object(i.M)({imports:[s.j.forChild(b)],exports:[s.j]})],x);var u=t("IwCi");let v=class{constructor(n,e,t){this.el=n,this.document=e,this.aseetService=t}ngOnInit(){}};v.ctorParameters=()=>[{type:i.v},{type:Document,decorators:[{type:i.D,args:[o.d]}]},{type:l.a}],v=Object(a.a)([Object(i.n)({selector:"app-domain-search",template:'<div fxFlex class="container">\n\n\n  <div   fxLayout="row" fxFlex class="list-head" fxLayoutAlign="start center" fxLayoutGap="1rem">\n\n\n\n\n    <div fxFlex="50%">\n      <nb-form-field>\n        <nb-icon icon="search-outline" nbPrefix status="basic">\n\n        </nb-icon>\n        <input nbInput fullWidth placeholder="Search Domains" status="primary">\n\n      </nb-form-field>\n    </div>\n\n\n\n    <div fxFlex="50%" fxLayoutGap="1rem">\n      <button (click)="addDomain(domainAddTemplate)" fieldSize="small" fxFlex nbButton status="primary" outline>Add New</button>\n      <button (click)="addDomain(domainAddTemplate)" fxFlex nbButton status="success" outline>Import</button>\n    </div>\n  </div>\n</div>\n\n<ng-template #domainAddTemplate>\n\n  <app-domain-add></app-domain-add>\n</ng-template>\n',styles:[".list-item-head {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: #a4b1cd !important;\n}\n\n.list-head {\n  height: 4rem;\n}"]})],v);let h=class{constructor(n,e,t){this.el=n,this.document=e,this.assetApiService=t,this.selected_host_list_item=-1,this.domains=[]}ngOnInit(){this.assetApiService.getDomains().subscribe(n=>{n.forEach(n=>{console.log("domain",n),this.domains.push(n)})})}};h.ctorParameters=()=>[{type:i.v},{type:Document,decorators:[{type:i.D,args:[o.d]}]},{type:l.a}],h.propDecorators={template:[{type:i.pb,args:["template",{static:!1}]}]},h=Object(a.a)([Object(i.n)({selector:"app-domain-list",template:'<div fxFlex class="container">\n\n\n  <div class="scsroll" fxLayout="column">\n\n    <ng-container *ngFor="let domain of domains ; index as index">\n\n      <div fxLayout="column" (click)="detailedView(index)">\n\n        <div [class.selected]="selected_domain_list_item == index " fxLayout="row" fxFlex>\n\n          <div appHoverColor appBorder fxFlex fxLayoutAlign="center center" fxLayoutGap="1rem" class="list-item">\n\n\n\n            <span class="bullet ">\n              #{{index+1}}\n\n            </span>\n\n            <div appHoverColor fxFlex fxLayoutAlign="start center" class="list-item">\n\n\n              <span class="marL list-item-head">\n                {{domain.domain}}\n\n              </span>\n            </div>\n\n          </div>\n          <div appHoverColor appBorder fxFlex="150px" fxLayoutAlign="center center" class="list-item">\n            {{domain.group || \'None\'}}\n\n          </div>\n\n\n\n          <div appHoverColor appBorder fxFlex="180px" fxLayoutAlign="center center" class="list-item">\n            {{domain.dou | date}}\n          </div>\n        </div>\n\n      </div>\n    </ng-container>\n\n  </div>\n\n</div>\n\n\n\n<ng-template #template>\n\n  <app-domain-add></app-domain-add>\n\n\n</ng-template>\n',styles:[".list-item-head {\n  font-weight: 600 !important;\n  font-size: 0.9rem;\n  color: #a4b1cd !important;\n  overflow: auto;\n}\n\n.list-item {\n  font-weight: 200;\n  font-size: 0.9rem;\n  color: #fff !important;\n  margin-left: 0.8rem;\n  overflow: auto;\n}\n\n.list-head {\n  height: 4rem;\n}\n\n.scroll {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 0;\n  overflow: auto;\n}\n\n.bullet {\n  color: #9fef00 !important;\n}\n\n:host ::ng-deep ngx-drawer {\n  width: 599px;\n}\n\n.selected {\n  background: #3366ff !important;\n}"]})],h);var g=t("rDax"),y=t("XiUz"),w=t("aceb");let A=class{};A=Object(a.a)([Object(i.M)({declarations:[f,v,h,m],imports:[o.c,x,u.a,y.a,w.n,w.k,w.m,g.f,w.o,w.C,r.f,r.m,w.x,w.k]})],A)}}]);