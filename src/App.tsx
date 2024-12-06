import { Redirect, Route } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { add, book, code, ellipse, folder, mail, person, square, star, triangle } from 'ionicons/icons';
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
    `https://soaca2-bzfygkfvccdgdbcw.ukwest-01.azurewebsites.net/api/v1/users/login/${email}`,
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
  const [isAdministrator, setIsAdministrator] = useState<boolean>(false
  );

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
          
              {/* <IonHeader>
      <IonToolbar>
        <IonTitle className="doc_Title" >Documentation</IonTitle>
      </IonToolbar>
    </IonHeader> */}
     
     <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle className="doc_Title" >Documentation</IonTitle>
      </IonToolbar>
    </IonHeader>

<div className="doc">
  <div className ="doc1">
  <p>Use Case 1: Create a game: Add a new game to the database Acceptance Criteria: When a POST request is sent to games with valid details a new game record will be created, and a 201 Created response is returned. The game details required are Title, Genre, Release year, Developer ID, if you are missing one of the fields is missing a 400 Bad request response will be returned </p>
<p>Use Case 2: Retrieve all games:Get all the games from the database Acceptance Criteria: When a GET request is sent to games all the game’s details will be returned along with a 200 OK response. If there are no games then a 204 No Content response will be returned. </p>
<p>Use Case 3: Update a developer:Updating an existing developer’s details Acceptance Criteria: When a PUT request is sent to developer’s id with the update details the targeted record will update and a 200 OK response will be returned. if the developer id who is targeted does not exist a 404 Not Found response will be returned, if the data is invalid it will return a 400 Bad Request response  </p>
<p>Use Case 4: Delete a platform: Deletes a platform from the database Acceptance Criteria: When a DELETE request is sent the platform with the matching id will be deleted and a 204 No Content response is returned if ID does not exist a 404 Not Found response will be sent. </p>
</div>

<div className ="doc1">
<p>POST Adds a new game to the database. Get all the games /games </p>
<p>GET Gets all the games from the database Get single game /games id/</p>
<p>GET Gets a specific game from database by id Update a developer /developers id/PUT </p>
<p>Update a specific developer by id Delete a platform /platforms id/</p>
<p>DELETE Removes platform from database by id </p>
</div>
</div>

    <IonContent className="ion-padding">Documentation</IonContent>
  </IonMenu>
  <IonPage id="main-content">
    <IonHeader>

      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton> API-DOC
          <IonSearchbar showClearButton="focus" value="Search.."></IonSearchbar>
        </IonButtons>
            <div className="logo">NEXUSAPI</div>
            <IonButtons slot="end">

              <IonButton className="header_button" >API 
              <IonIcon aria-hidden="true" icon={code} />
              </IonButton>
              <IonButton className="header_button" >Contact 
              <IonIcon aria-hidden="true" icon={mail} />
              </IonButton>
              <IonButton className="header_button" >Logout
              <IonIcon aria-hidden="true" icon={person} />
              </IonButton>
            </IonButtons>
          </IonToolbar>

    </IonHeader>
      <IonHeader collapse="condense">
   
        <IonToolbar>
          
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
  </IonPage>

          {loggedIn ? <IonTabBar slot="bottom">
            <IonTabButton tab="Documentation" href="/home">
              <IonIcon aria-hidden="true" icon={book} />
              <IonLabel>Documentation</IonLabel>
            </IonTabButton>
            <IonTabButton tab="View Data" href="/gameTable">
              <IonIcon aria-hidden="true" icon={folder} />
              <IonLabel>View Data</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Add Game" href="/AddGame">
              <IonIcon aria-hidden="true" icon={add} />
              <IonLabel>Add Game</IonLabel>
            </IonTabButton>
          </IonTabBar> : null}
          
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </GoogleOAuthProvider>
);
};

export default App;