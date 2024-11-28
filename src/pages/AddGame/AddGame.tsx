import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './AddGame.css';

const AddGame: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add Game</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Add Game page" />
      </IonContent>
    </IonPage>
  );
};

export default AddGame;
