(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{YX7k:function(n,e,t){"use strict";t.r(e),t.d(e,"IosModule",function(){return k});var i=t("mrSG"),a=t("fXoL"),s=t("ofXK"),o=t("tyNb");let l=class{constructor(){}ngOnInit(){}};l.ctorParameters=()=>[],l=Object(i.a)([Object(a.n)({selector:"app-ios-home",template:'<nb-card size="giant">\n\n\n  <nb-card-header>\n\n    <div fxFlex fxLayoutGap="1rem" fxLayoutAlign="center center">\n\n      <nb-icon class="text-hint" icon="plus-circle">\n      </nb-icon>\n      <div fxFlex class="h6 text-hint">\n        List of Apps\n\n      </div>\n    </div>\n\n  </nb-card-header>\n\n  <nb-card-header>\n    <app-ios-add></app-ios-add>\n\n\n  </nb-card-header>\n\n \n\n  <nb-card-body fxLayoutGap="1rem" class="nogap">\n\n    <app-ios-list>\n\n    </app-ios-list>\n\n  </nb-card-body>\n\n</nb-card>\n\n\x3c!-- </nb-card-body>\n </nb-card> --\x3e\n',styles:[".nogap {\n  padding: 0px !important;\n}"]})],l);const c=[{path:"",children:[{path:"**",component:l}]}];let p=class{};p=Object(i.a)([Object(a.M)({imports:[o.j.forChild(c)],exports:[o.j]})],p);var r=t("y8eJ");let d=class{constructor(n){this.assetApiService=n,this.apps=[]}ngOnInit(){this.assetApiService.getIosApps().subscribe(n=>{console.log("ios_apps",n),this.apps=n})}};d.ctorParameters=()=>[{type:r.a}],d.propDecorators={editNewAppTemplate:[{type:a.pb,args:["editNewAppTemplate"]}]},d=Object(i.a)([Object(a.n)({selector:"app-ios-list",template:'<div fxFlex   fxLayout="column">\n\n  <app-ios-list-item [app]="app" fxFlex="50%" *ngFor="let app of apps">\n\n  </app-ios-list-item>\n\n</div>\n',styles:[""]})],d);let u=class{constructor(n,e,t){this.el=n,this.document=e,this.assetApiService=t,this.selected_file=void 0}ngOnInit(){}onFilesAdded(){this.selected_file=this.file.nativeElement.files[0],console.log(this.selected_file)}selectFile(){this.file.nativeElement.click()}removeFile(){this.file.nativeElement.value="",this.selected_file=void 0}upload(){this.assetApiService.upload(this.selected_file,"").subscribe()}edit(){}};u.ctorParameters=()=>[{type:a.v},{type:Document,decorators:[{type:a.D,args:[s.d]}]},{type:r.a}],u.propDecorators={file:[{type:a.pb,args:["file"]}],app:[{type:a.H,args:["app"]}],editNewAppTemplate:[{type:a.pb,args:["editNewAppTemplate"]}]},u=Object(i.a)([Object(a.n)({selector:"app-ios-list-item",template:'\n\n<div appBorder class="container" fxLayoutGap="1rem" fxLayout="column" >\n\n  <div fxLayout="row">\n\n    <div fxFlex="50%"  >\n      <input fullWidth  disabled  nbInput [value]="app?.app_name" placeholder="App name">\n\n    </div>\n\n\n  </div>\n\n  <div fxLayout="row">\n\n    <div fxFlex="50%"  >\n      <input fullWidth   disabled nbInput [value]="app?.package_name" placeholder="Package Name">\n\n    </div>\n\n\n  </div>\n\n\n \n\n\n\n\n\n  <div fxLayout="row" fxLayoutAlign="end" fxLayoutGap="1rem">\n\n\n\n\n\n    <button (click)="edit()" size="small" nbButton outline status="primary">\n      Update\n    </button>\n\n    <button (click)="edit()" size="small" nbButton outline status="success">\n      Download\n    </button>\n\n  </div>\n\n\n\n\n</div>\n\n\n<ng-template #editNewAppTemplate>\n\n\n  <app-ios-create-new [app]="app">\n\n  </app-ios-create-new>\n\n\n</ng-template>\n',styles:[".container {\n  margin: 1rem;\n}\n\ninput:disabled {\n  color: #ffffff !important;\n}"]})],u);var f=t("3Pt+"),b=t("lJxs"),m=t("5+tZ"),v=t("vkgz"),h=t("pLZG"),x=t("ZfaG");let g=class{constructor(n){this.assetApiService=n,this.selected_file=void 0,this.ios_data_form=new f.e({app_name:new f.d(""),package_name:new f.d("")}),this.progressStatus={progress:0,completed:!0,started:!1}}ngOnInit(){console.log("edit",this.app)}onFilesAdded(){this.selected_file=this.file.nativeElement.files[0],console.log(this.selected_file)}selectFile(){this.file.nativeElement.click()}removeFile(){this.file.nativeElement.value="",this.selected_file=void 0}upload(){this.progressStatus.started=!0,this.assetApiService.createFile(this.selected_file.name).pipe(Object(b.a)(n=>this.assetApiService.upload(this.selected_file,n.token)),Object(m.a)(n=>n),Object(v.a)(n=>{this.progressStatus.completed=n.status,this.progressStatus.progress=n.progress}),Object(h.a)(n=>n.status),Object(b.a)(n=>this.assetApiService.addIosApp(this.ios_data_form.value.app_name,this.ios_data_form.value.package_name,n.fileData.fileid)),Object(m.a)(n=>n)).subscribe(n=>{console.log("got value ",n)})}};g.ctorParameters=()=>[{type:r.a}],g.propDecorators={app:[{type:a.H,args:["app"]}],file:[{type:a.pb,args:["file"]}]},g=Object(i.a)([Object(a.n)({selector:"app-ios-create-new",template:'<nb-layout center [restoreScrollTop]="false">\n    <nb-layout-header fixed>\n  \n      <div fxFlex fxLayoutGap="1rem" fxLayoutAlign="center center">\n  \n        <nb-icon icon="plus-circle">\n        </nb-icon>\n        <div fxFlex class="h6">\n          iOS App\n  \n        </div>\n  \n  \n        <button outline nbButton status="success" size="small">\n  \n          <nb-icon icon="checkmark-circle-2">\n          </nb-icon>\n          Save\n  \n        </button>\n  \n  \n  \n  \n      </div>\n    </nb-layout-header>\n  \n    <nb-layout-column @init>\n  \n  \n      <form [formGroup]="ios_data_form">\n  \n        <div appBorder fxLayout="column" fxLayoutGap="1rem">\n  \n  \n          <div fxFlex>\n  \n  \n            <nb-form-field [nbSpinner]="saving">\n              <div nbPrefix icon="at-outline" pack="eva">\n                <nb-icon icon="hash-outline"></nb-icon>\n              </div>\n              <input formControlName="app_name" fullWidth nbInput fieldSize="medium" status="primary" placeholder="App name">\n  \n            </nb-form-field>\n  \n  \n  \n          </div>\n  \n  \n          <div fxFlex>\n  \n  \n            <nb-form-field [nbSpinner]="saving">\n              <div nbPrefix icon="at-outline" pack="eva">\n                <nb-icon icon="hash-outline"></nb-icon>\n              </div>\n              <input formControlName="package_name" fullWidth nbInput fieldSize="medium" status="primary" placeholder="Package Name">\n  \n  \n  \n  \n            </nb-form-field>\n  \n  \n  \n          </div>\n  \n          <div fxFlex fxLayout="row">\n            <input type="file" #file style="display: none" (change)="onFilesAdded()" />\n  \n            <nb-form-field [nbSpinner]="saving" fxFlex>\n  \n              <div nbPrefix icon="at-outline" pack="eva">\n                <nb-icon icon="hash-outline"></nb-icon>\n              </div>\n              <input fxLayoutAlign="start start" (click)="selectFile()" fieldSize="medium" fullWidth\n                [value]="selected_file?.name || \'No File Selected\' " status="primary" type="button" nbInput outline>\n  \n              <div nbSuffix icon="at-outline" pack="eva">\n                \x3c!-- #1 --\x3e\n                \x3c!-- <nb-icon icon="arrow-circle-up-outline"></nb-icon> --\x3e\n                <button *ngIf="!selected_file" (click)="selectFile()" size="small" nbButton ghost status="primary">\n                  <nb-icon icon="arrow-circle-up-outline"></nb-icon>\n  \n                </button>\n                <button *ngIf="selected_file" (click)="removeFile()" size="small" nbButton ghost status="danger">\n                  <nb-icon icon="close-circle"></nb-icon>\n  \n                </button>\n  \n              </div>\n            </nb-form-field>\n            <div *ngIf="false" fxLayoutAlign="end center">\n              <button *ngIf="!selected_file" (click)="selectFile()" size="tiny" nbButton ghost status="success">\n                Select File\n              </button>\n              <button *ngIf="selected_file" (click)="removeFile()" size="tiny" nbButton ghost status="danger">\n                Remove File\n              </button>\n  \n  \n            </div>\n  \n          </div>\n  \n  \n  \n  \n          <div fxFlex fxLayoutAlign="end">\n  \n            <button (click)="upload()" [disabled]="!selected_file" size="small" nbButton outline status="basic">\n              Upload\n            </button>\n          </div>\n  \n  \n          <div fxFlex>\n  \n            <nb-progress-bar size="tiny" [value]="progressStatus.progress" status="primary" [displayValue]="true">\n            </nb-progress-bar>\n  \n          </div>\n  \n        </div>\n  \n      </form>\n  \n  \n  \n  \n  \n    </nb-layout-column>\n  \n  \n  </nb-layout>\n  ',animations:[...x.a],styles:[""]})],g);var y=t("rDax"),A=t("XiUz"),F=t("aceb"),_=t("IwCi");let w=class{constructor(n,e,t){this.el=n,this.document=e,this.aseetService=t}ngAfterViewInit(){}ngOnInit(){}};w.ctorParameters=()=>[{type:a.v},{type:Document,decorators:[{type:a.D,args:[s.d]}]},{type:r.a}],w.propDecorators={createNewAppTemplate:[{type:a.pb,args:["createNewAppTemplate"]}]},w=Object(i.a)([Object(a.n)({selector:"app-ios-add",template:'<div fxFlex class="container">\n\n\n  <div   fxLayout="row" fxFlex="50%" class="list-head" fxLayoutAlign="start center" >\n\n\n    <div fxFlex>\n      <nb-form-field>\n        <nb-icon icon="search-outline" nbPrefix status="basic">\n\n        </nb-icon>\n        <input nbInput fullWidth placeholder="Search App" status="primary">\n\n      </nb-form-field>\n    </div>\n\n\n \n  </div>\n\n</div>\n\n<ng-template #createNewAppTemplate>\n\n\n\n  <app-ios-create-new>\n\n  </app-ios-create-new>\n\n\n</ng-template>\n',styles:[".list-item-head {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: #a4b1cd !important;\n}"]})],w);let k=class{};k=Object(i.a)([Object(a.M)({declarations:[l,d,u,g,w],imports:[s.c,p,_.a,A.a,F.n,F.k,F.m,y.f,F.o,F.C,f.f,f.m,F.x,F.t]})],k)}}]);