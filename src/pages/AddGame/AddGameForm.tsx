import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonList, IonSelect, IonDatetime } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';

import './AddGameForm.css';

const currentYear = Date.now.toString();
console.log(currentYear)

const AddGameForm: React.FC = () => {
	// IonList and IonInput were referenced from the official Ionic docs: https://ionicframework.com/docs/api/input
	// IonDatetime was referenced from https://ionicframework.com/docs/api/datetime#wheel-style-pickers
  return (
		<>
			<IonList id="addGameForm">
				<div className="inputRow">
					<p>Game Title:</p>
					<IonInput className="addGameFormInput"/>
				</div>
				<div className="inputRow">
					<p>Genre:</p>
					<IonInput className="addGameFormInput"/>
				</div>
				<div className="inputRow">
					<p>Release Year:</p>
					<IonDatetime presentation="year" preferWheel={true} className="addGameFormWheel"/>
				</div>
				<div className="inputRow">
					<p>Game Title:</p>
					<IonSelect className="addGameFormInput">
					</IonSelect>
				</div>
			</IonList>
		</>
  );
};

export default AddGameForm;
