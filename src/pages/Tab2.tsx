import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';


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


const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />


        <GoogleLogin
        // This GoogleLogin element was constructed from the guide of it's package: https://www.npmjs.com/package/@react-oauth/google
        // In addition, the JWT response decoding takes code from Ali Zulfikar's answer at https://stackoverflow.com/questions/68524360/how-can-i-decode-a-google-oauth-2-0-jwt-credential-token
          onSuccess={credentialResponse => {
            if(credentialResponse.credential != null) {
              const USER_CREDENTIAL = decodeJwtResponse(credentialResponse.credential);
              console.log(USER_CREDENTIAL);
             }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
