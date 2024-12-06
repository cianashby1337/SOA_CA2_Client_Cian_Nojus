import { IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

// Render the Tab1 Component
const Tab1: React.FC = () => {

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
