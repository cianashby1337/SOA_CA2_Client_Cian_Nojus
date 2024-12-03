import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './AddGame.css';
import AddGameForm from './AddGameForm';

interface AddGameProps {
	isAdministrator: boolean;
  }

const AddGame: React.FC<AddGameProps> = ({isAdministrator}) => {
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
        <AddGameForm isAdministrator={isAdministrator}/>
      </IonContent>
    </IonPage>
  );
};

export default AddGame;
