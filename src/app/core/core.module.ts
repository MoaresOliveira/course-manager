import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/navbar/navbar.component";
import { NotFound404Component } from "./components/NotFound 404/NotFound404.component";

@NgModule({
    declarations: [
        NavBarComponent,
        NotFound404Component
    ],
    imports: [
        RouterModule.forChild([
      {
        path: '**',
        component: NotFound404Component,
      }
    ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule{

}