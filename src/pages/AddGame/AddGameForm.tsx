import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonList } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';

import './AddGameForm.css';

const AddGameForm: React.FC = () => {
	// IonList and IonInput were retrieved from the official Ionic docs: https://ionicframework.com/docs/api/input
  return (
		<>
			<IonList id="addGameForm">
				<IonInput placeholder='Game Title'/>
				<IonInput placeholder='Genre'/>
				<IonInput placeholder='Release Year'/>
			</IonList>
		</>
  );
};

export default AddGameForm;
