import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { Page1Component } from 'src/app/page1/page1.component';
import { Page2Component } from 'src/app/page2/page2.component';

const appRoutes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRouting {

}