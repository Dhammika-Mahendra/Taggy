import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo} from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { inject } from '@angular/core';
import { environment } from './environment/environment';
import { setContext } from '@apollo/client/link/context';

function getAuthToken(): string | null {
  return localStorage.getItem('taggy_token'); // Example: store token in localStorage
}

bootstrapApplication(AppComponent, 
  {
  providers:[
    provideHttpClient(),
    provideRouter(routes),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      // Create an Apollo middleware to attach JWT token
      const authLink = setContext((_, { headers }) => {
        const token = getAuthToken();
        return {
          headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
          },
        };
      });
      return {
        link: authLink.concat(httpLink.create({ uri: environment.graphqlAPI })),
        cache: new InMemoryCache(),
      };
    })
  ]
  })
  .catch((err) => console.error(err));


  
