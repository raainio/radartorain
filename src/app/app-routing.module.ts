import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomePageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'radar',
        loadChildren: './radar/radar.module#RadarPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'rain',
        loadChildren: './rain/rain.module#RainPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'event',
        loadChildren: './event/event.module#EventPageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfilePageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginPageModule'
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
