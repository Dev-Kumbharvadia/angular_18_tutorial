import { Routes } from '@angular/router';
import { MaseterComponent } from './components/maseter/maseter.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'master',
        pathMatch: 'full'
    },
    {
        path: 'master',
        component: MaseterComponent
    },
    {
        path: 'employee',
        component: EmployeeComponent
    },
    {
        path: 'client',
        component: ClientComponent
    }
];
