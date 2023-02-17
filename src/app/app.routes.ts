import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: 'sign-up', component: SignUpComponent},
  { path: 'menu', component: MenuComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

export { ROUTES };