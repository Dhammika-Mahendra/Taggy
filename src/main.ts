import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideApollo} from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { inject } from '@angular/core';
import { environment } from './environment/environment';

bootstrapApplication(AppComponent, 
  {
  providers:[
    provideHttpClient(),
    provideRouter(routes),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      return {
        link: httpLink.create({ uri: environment.graphqlAPI }),
        cache: new InMemoryCache()
      };
    })
  ]
  })
  .catch((err) => console.error(err));


  
