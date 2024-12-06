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
    
 

    <IonContent className="ion-padding">Documentation</IonContent>
  </IonMenu>
  
  <IonPage id="main-content">
  <div className = "banner" >
    .
    </div>

    <img src="images\6.jpg" alt="Banner Image" className="banner_image" />
    <div className="overlay_text_bottom">BRACE YOURSELF TO PROBABLY THE WORLDS BEST GAMING API. FREE TO USE ALL YOU NEED TO DO IS LOGIN AND PLAY</div>


    <IonContent>

    {/* <img src="images\6.jpg" alt="Banner Image" className="banner-image" />
    <div className="overlay_text_bottom">BRACE YOURSELF TO PROBABLY THE WORLDS BEST GAMING API. FREE TO USE ALL YOU NEED TO DO IS LOGIN AND PLAY</div> */}

    </IonContent>
  </IonPage>
</>
  );
};

export default Tab1;
