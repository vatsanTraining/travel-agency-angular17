import { CanActivateFn } from '@angular/router';

export const universalGuard: CanActivateFn = (route, state) => {
  return sessionStorage.getItem("islogged")==="true"?true:false;
};
