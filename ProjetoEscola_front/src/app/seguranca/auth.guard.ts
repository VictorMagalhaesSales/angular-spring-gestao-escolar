import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private rota: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


      if (this.auth.isAcessTokenInvalid()) {
        console.log('Navegação com access token inválido. Obtendo novo token...');
  
        return this.auth.obterNovoAcessToken()
          .then(() => {
            if (this.auth.isAcessTokenInvalid()) {
              localStorage.removeItem('imagemPerfil');
              this.rota.navigate(['/login']);
              return false;
            }
            return true;
          });
      }else if(next.data.roles && !this.auth.temQualquerPermissao(next.data.roles) ){
      this.rota.navigate(['../../acessonegado']);
      return false;
    }
    return true;
  }
}
