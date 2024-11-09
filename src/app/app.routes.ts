import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: "employee", children: [
            {
                path:"create",loadComponent: ()=> import("./features/employee/pages/cadastro/cadastro.component").then(c => c.CadastroComponent)
            },
            {
                path:"edit",loadComponent: ()=> import("./features/employee/pages/editar/editar.component").then(c => c.EditarComponent)
            },
            {
                path: "registrations", loadComponent: ()=> import("./features/employee/pages/registrations/registrations.component").then(c=> c.RegistrationsComponent)
            }
        ]
    }
];
