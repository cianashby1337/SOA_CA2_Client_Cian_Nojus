import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

import axios from 'axios';

// The function below, which gets data from our web api, was constructed with assistance 
// from https://bobbyhadz.com/blog/typescript-http-request-axios#making-http-get-requests-with-axios-in-typescript

async function getWeather() {
  try {
    const { data, status } = await axios.get(
      'https://soaca2-bzfygkfvccdgdbcw.ukwest-01.azurewebsites.net/WeatherForecast',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    return data;

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

let data = "Weather data has not been retrieved";
getWeather().then(response => data = JSON.stringify(response));
const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
        <p>{data}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
