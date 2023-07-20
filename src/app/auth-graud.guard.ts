import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor( public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (localStorage.getItem('isLogin') === null) {
      // 
      this.router.navigate(['/login']);
      alert("Please Login First");
      return false
    }
    return true;
  }
}