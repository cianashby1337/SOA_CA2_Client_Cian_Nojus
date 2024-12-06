import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';


import { GoogleLogin } from '@react-oauth/google';

// Function to decode the response was taken from wbq's answer at https://stackoverflow.com/questions/68524360/how-can-i-decode-a-google-oauth-2-0-jwt-credential-token
// Converts the encoded response from google login API into a JSON response we can work with
function decodeJwtResponse(token:string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

// Interface solution to setting up props retrieved from: https://forum.ionicframework.com/t/how-to-pass-props-to-components-in-ionic-react/216054
interface ScanNewProps {
  login: any;
}

// Render the Tab2 Component
const Tab2: React.FC<ScanNewProps> = ({login}) => {
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <IonTitle className='title'>NEXUS API</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <img src="images\login.webp" alt="Banner Image" className="left_banner_image_login" />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='content'>
            <div className ="intro_text">
              <h1>Welcome to the NEXUS API</h1>
              <h2>Please login to continue</h2>
            </div>
        </div>


        <GoogleLogin 
        // This GoogleLogin element was constructed from the guide of it's package: https://www.npmjs.com/package/@react-oauth/google
        // In addition, the JWT response decoding takes code from Ali Zulfikar's answer at https://stackoverflow.com/questions/68524360/how-can-i-decode-a-google-oauth-2-0-jwt-credential-token
          onSuccess={credentialResponse => {
            if(credentialResponse.credential != null) {
              const USER_CREDENTIAL = decodeJwtResponse(credentialResponse.credential);
              login(USER_CREDENTIAL.email);
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

export default Tab2;
