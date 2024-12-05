import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonMenu, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { apps, book, code, grid, home, mail, person } from 'ionicons/icons';

const Tab1: React.FC = () => {
const handleSectionClick = (section:string) => { };

// Side menu code taken from https://ionicframework.com/docs/api/menu
  return (
    <>
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
          <IonMenuButton></IonMenuButton> Api Doc
          <IonSearchbar showClearButton="focus" value="Search.."></IonSearchbar>
        </IonButtons>
          <IonToolbar>
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
      </IonToolbar>
    </IonHeader>

    <div className = "banner" >
     BING BONG API
    </div>
    <img src="images\6.jpg" alt="Banner Image" className="banner-image" />
    <div className="overlay_text_bottom">BRACE YOURSELF TO PROBABLY THE WORLDS BEST GAMING API. FREE TO USE ALL YOU NEED TO DO IS LOGIN AND PLAY</div>

    <IonContent></IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div>
      </div>
    <IonFooter className='footer_border'>
        <IonToolbar>
          <IonTitle>
          <div>
        <h5>© 2024 Bing Bong</h5>
      </div>
          </IonTitle>
        </IonToolbar>
      </IonFooter>
  </IonPage>
</>
  );
};

export default Tab1;
