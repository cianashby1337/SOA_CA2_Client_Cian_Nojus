import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { GoogleLogin } from '@react-oauth/google';

// Function to decode the response was taken from wbq's answer at https://stackoverflow.com/questions/68524360/how-can-i-decode-a-google-oauth-2-0-jwt-credential-token
function decodeJwtResponse(token:string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <GoogleLogin
        // This GoogleLogin element was taken from the guide of it's package: https://www.npmjs.com/package/@react-oauth/google
          onSuccess={credentialResponse => {
            if (credentialResponse.credential != null) {
              console.log(decodeJwtResponse(credentialResponse.credential));
             }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
