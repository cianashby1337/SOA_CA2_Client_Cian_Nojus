import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './AddGame.css';
import AddGameForm from './AddGameForm';

// Interface defining the properties to be passed into AddGame
interface AddGameProps {
	isAdministrator: boolean;
}

// Render the AddGame Component
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
