import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {FidjService} from 'fidj';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private fidjService: FidjService) {

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        //console.log('AuthGuard#canActivate called');

        return this.fidjService.isLoggedIn();
    }

    public testFunction(a) {
        return a + 1;
    }
}
