import { Redirect, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, star, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import AddGame from './pages/AddGame/AddGame';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

/* Google login service https://www.npmjs.com/package/@react-oauth/google */
import { GoogleOAuthProvider } from '@react-oauth/google';

setupIonicReact();

interface responseContainer {
  data:any,
  status:number
}

async function tryLogin(email:string) {
  try {
    const { data, status } = await axios.get(
    `https://localhost:7241/api/v1/users/login/${email}`,
    {
      headers: {
      Accept: 'application/json',
      "x-api-key":import.meta.env.VITE_AZURE_KEY
      },
    },
    );
  
    return {data:data, status:status};
  
  } catch (error) {
    if (axios.isAxiosError(error)) {
    console.log('error message: ', error.message);
    return error.message;
    } else {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
    }
  }
}


const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isAdministrator, setIsAdministrator] = useState<boolean>(false);

  function googleLogin(emailAddress:string) {
    tryLogin(emailAddress)
    .then(response => {
      if (typeof response != "string" && response?.status != undefined) response.status == 200 ? 
      handleSuccessfulLogin(response) : console.log("User not registered");
      else console.log("Invalid response format:", response);
    })
  }

  function handleSuccessfulLogin(response:{data:any,status:number}) {
    setLoggedIn(true);
    response.data.isAdministrator ? setIsAdministrator(true) : null;
  }

 
  const homeScreen = <Tab1 />
  const loginScreen = <Tab2 login={googleLogin}/>
  const tableScreen = <Tab3 />
  const addGameScreen = <AddGame isAdministrator={isAdministrator}/>

  return (
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_LOGIN}>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              {loggedIn ? homeScreen : loginScreen}
            </Route>
            <Route exact path="/login">
              {loginScreen}
            </Route>
            <Route path="/gameTable">
              {loggedIn ? tableScreen : loginScreen}
            </Route>
            <Route path="/addGame">
              {loggedIn ? addGameScreen : loginScreen}
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          
          {loggedIn ? <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/home">
              <IonIcon aria-hidden="true" icon={triangle} />
              <IonLabel>Tab 1</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/gameTable">
              <IonIcon aria-hidden="true" icon={square} />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
            <IonTabButton tab="AddGame" href="/AddGame">
              <IonIcon aria-hidden="true" icon={star} />
              <IonLabel>AddGame</IonLabel>
            </IonTabButton>
          </IonTabBar> : null}
          
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </GoogleOAuthProvider>
);
};

export default App;