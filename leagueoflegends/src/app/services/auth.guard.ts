import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    private admin = false;

    canActivate(route: ActivatedRouteSnapshot, state: any) {
        if (this.admin) {
            return true;
        } else {
            return false;
        }
    }

}