import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { initFlowbite } from 'flowbite';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideEnvironmentNgxMask(),
    {
      provide: APP_INITIALIZER,
      useFactory: () => initFlowbite,
      multi: true
    }
  ]
};
