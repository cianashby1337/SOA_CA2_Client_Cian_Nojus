import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonList, IonSelect } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';

import './AddGameForm.css';

const currentYear = Date.now.toString();
console.log(currentYear)

const AddGameForm: React.FC = () => {
	// IonList and IonInput were referenced from the official Ionic docs: https://ionicframework.com/docs/api/input
  return (
		<>
			<IonList id="addGameForm">
				<div className="inputRow">
					<p>Game Title:</p>
					<IonInput className="addGameFormItem"/>
				</div>
				<div className="inputRow">
					<p>Genre:</p>
					<IonInput className="addGameFormItem"/>
				</div>
				<div className="inputRow">
					<p>Release Year:</p>
					<IonInput type="number"  className="addGameFormItem"/>
				</div>
				<div className="inputRow">
					<p>Game Title:</p>
					<IonSelect className="addGameFormItem">
					</IonSelect>
				</div>
			</IonList>
		</>
  );
};

export default AddGameForm;
