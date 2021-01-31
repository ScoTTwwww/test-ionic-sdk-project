import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {ServiceWorkerModule} from '@angular/service-worker';

if (environment.production) {
  enableProdMode();
 
}

ServiceWorkerModule.register("ngsw-worker.js", {
  enabled: environment.production,
  registrationStrategy: "registerImmediately"
})

ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, registrationStrategy: 'registerImmediately' }),
 
platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    console.log("???????????????",navigator)
    navigator.serviceWorker.register('/ngsw-worker.js');
  }
}).catch(err => console.log(err)); 
/* 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
 */