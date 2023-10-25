import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {SessionService} from "../services/auth/session.service";

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
    },
    {
        url: '/asignar-candidato-equipo',
        scope: ['register:candidate']
    }]

    constructor(private router: Router, private sessionService:SessionService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.sessionService.isAuthenticated()) {
            // ususario logueado
            const permissions = this.sessionService.getScopes();
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