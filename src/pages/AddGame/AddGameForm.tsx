import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonList, IonSelect, IonDatetime, IonSelectOption } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import axios from 'axios';
import React, { useEffect,useState } from 'react';

import './AddGameForm.css';

//TODO: Get developers for use in dropdown
async function getAllFrom(version:number,table:string) {
	try {
		const { data, status } = await axios.get(
		`https://localhost:7241/api/v${version}/${table}`,
		{
			headers: {
			Accept: 'application/json',
			"x-api-key":import.meta.env.VITE_AZURE_KEY
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


const AddGameForm: React.FC = () => {
	const [developers, setDevelopers] = useState<any[]>([]);
	const [platforms, setPlatforms] = useState<any[]>([]);
  
  
	useEffect(() => {
		getAllFrom(1,"Developers").then(setDevelopers);
		getAllFrom(2,"Platforms").then(setPlatforms);
	  },[]);
	// IonList and IonInput were referenced from the official Ionic docs: https://ionicframework.com/docs/api/input
	// IonDatetime was referenced from: https://ionicframework.com/docs/api/datetime#wheel-style-pickers
	// IonSelect and IonSelectOption were referenced from: https://ionicframework.com/docs/api/select

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
					<p>Developer:</p>
					<IonSelect className="addGameFormInput">
						<p>{developers.map((developer => <IonSelectOption value={developer.id}>{developer.name}</IonSelectOption>))}</p>
					</IonSelect>
				</div>
				<div className="inputRow">
					<p>Platform(s):</p>
					<IonSelect className="addGameFormInput addGameFormSelect" multiple={true}>
						<p>{platforms.map((platform => <IonSelectOption value={platform.id}>{platform.name}</IonSelectOption>))}</p>
					</IonSelect>
				</div>
				
			</IonList>
		</>
  );
};

export default AddGameForm;
