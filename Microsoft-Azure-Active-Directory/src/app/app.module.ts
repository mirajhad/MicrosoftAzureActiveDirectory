import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE ,   } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';

// Add MSAL configuration here
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '53628598-92fc-4c05-ab58-e041dbcaf718',
      // authority: 'https://login.microsoftonline.com/your-tenant-id',
      redirectUri: 'http://localhost:4200'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [{
    provide: MSAL_INSTANCE,
    useFactory: MSALInstanceFactory
  },
  MsalService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
