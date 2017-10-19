import { AppSecooMyComponent } from './my.component';
import { AuthGuard } from '../common/service/auth-guard.service';

export const myRoutes=[
	{
        path:'my',
        component:AppSecooMyComponent,
        canActivate: [AuthGuard]
    }
];