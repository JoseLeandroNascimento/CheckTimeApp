import { RouterLink } from "@angular/router";

export interface IMenuOption {
    label: string,
    icon?: any,
    options?: IMenuOption[],
    routerLink:any[] | string | null | undefined
}