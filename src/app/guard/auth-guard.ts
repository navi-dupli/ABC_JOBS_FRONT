import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable()
export class AuthGuard implements CanActivate {

    routes = [{
        url: '/',
        scope: ['read:users', 'register:project', 'register:company', 'search:candidate']
    },
    {
        url: '/crear-proyecto',
        scope: ['register:project']
    },
    {
        url: '/registrar-empresa',
        scope: ['register:company']
    },
    {
        url: '/buscar-candidato',
        scope: ['search:candidate']
    }]

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // ususario logueado
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            const decodeToken = jwt_decode(currentUser.access_token);
            const permissions = decodeToken["permissions"] as string[];

            const routeFound = this.routes.find((item) => {
                const scopes = item.scope.find(scope => permissions.includes(scope));
                return item.url === state.url && scopes
            });

            if (routeFound) {
                return true;
            } else {
                this.router.navigate(['/notfound']);
                return false;
            }
        }

        // usuario no logueado
        this.router.navigate(['/iniciar-sesion']);
        return false;
    }
}