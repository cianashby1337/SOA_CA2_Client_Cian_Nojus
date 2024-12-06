import { IonInput, IonList, IonSelect, IonDatetime, IonSelectOption, IonButton } from '@ionic/react';
import axios from 'axios';
import React, { useEffect,useState } from 'react';

import './AddGameForm.css';

// Takes the target table and it's version as inputs, performing a GET for all records
async function getAllFrom(version:number,table:string) {
	try {
		const { data, status } = await axios.get(
		`https://soaca2-bzfygkfvccdgdbcw.ukwest-01.azurewebsites.net/api/v${version}/${table}`,
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

// Ensures all form items are filled, sending a POST to the games of the API if suitable
async function handleSubmit(formTitle:string,formGenre:string,formRelease:Date,formDeveloper:number,formPlatforms:string[]) {
	console.log("Title: " + formTitle);
	console.log("Genre: " + formGenre);
	console.log("Release: " + formRelease);
	console.log("Developer: " + formDeveloper);
	console.log("Platform(s): " + formPlatforms);

	var isValidPost:boolean = true;

	if (formTitle == undefined) {
		console.log("Error, title is undefined!");
		isValidPost = false;
	}
	if (formGenre == undefined) {
		console.log("Error, genre is undefined!");
		isValidPost = false;
	}
	if (formRelease == undefined) {
		console.log("Error, release date is undefined!");
		isValidPost = false;
	}
	if (formDeveloper == undefined) {
		console.log("Error, developer is undefined!");
		isValidPost = false;
	}
	if (formPlatforms.length == 0) {
		console.log("Error, platform(s) are undefined!");
		isValidPost = false;
	}

	if(isValidPost) {
		let date = new Date(formRelease)
		let url = `https://soaca2-bzfygkfvccdgdbcw.ukwest-01.azurewebsites.net/api/v2/games?id=0&title=${formTitle}&genre=${formGenre}&release_year=${date.getFullYear()}&developer_id=${formDeveloper}`
		// for each platform, append "&platforms=${i}"
		formPlatforms.forEach(platform => {
			url = url.concat(`&platforms=${platform}`);
		});

		try {
			// The fix for the axios.post() issue, where we got a 401 error even with the key being sent, was found here, revealing a formatting error in the post method:
			// https://axios-http.com/docs/post_example
			const { data, status } = await axios.post(
				url ,
				{
					"Id":0,
					"title": formTitle,
					"genre": formGenre,
					"release_year": date.getFullYear(),
					"developerId": formDeveloper,
					"Platforms": formPlatforms,
				},
				{
					headers: {
						Accept: 'application/json',
						"x-api-key":import.meta.env.VITE_AZURE_KEY,
					},
				}
				
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
}
	
// Interface defining the properties to be passed into AddGameForm
interface AddGameFormProps {
	isAdministrator: boolean;
  }

// Render the AddGameForm Component
const AddGameForm: React.FC<AddGameFormProps> = ({isAdministrator}) => {
	const [developers, setDevelopers] = useState<any[]>([]);
	const [platforms, setPlatforms] = useState<any[]>([]);

	
	const [formTitle, setFormTitle] = useState<any>();
	const [formGenre, setFormGenre] = useState<any>();
	const [formRelease, setFormRelease] = useState<any>();
	const [formDevelopers, setFormDevelopers] = useState<any>();
	const [formPlatforms, setFormPlatforms] = useState<any[]>([]);
  
  
	useEffect(() => {
		getAllFrom(1,"developers").then(setDevelopers);
		getAllFrom(2,"platforms").then(setPlatforms);
	  },[]);
	// IonList and IonInput were referenced from the official Ionic docs: https://ionicframework.com/docs/api/input
	// IonDatetime was referenced from: https://ionicframework.com/docs/api/datetime#wheel-style-pickers
	// IonSelect and IonSelectOption were referenced from: https://ionicframework.com/docs/api/select

  // Renders the form for administrators, but renders an error message for users
  return isAdministrator? (
		<>
		     <div className = "banner_add_games" >
   ADD GAME FORM
    </div>
    <img src="images\right.webp" alt="Banner Image" className="left_banner_image_add_game" />
    <img src="images\left2.png" alt="Banner Image" className="right_banner_image_add_game" />

			<IonList id="addGameForm">
				<div className="inputRow">
					<p>Game Title:</p>
					<IonInput onIonChange={(e: any) => setFormTitle(e.target.value)} className="addGameFormInput" id="titleInput"/>
				</div>
				<div className="inputRow">
					<p>Genre:</p>
					<IonInput onIonChange={(e: any) => setFormGenre(e.target.value)} className="addGameFormInput"/>
				</div>
				<div className="inputRow">
					<p>Release Year:</p>
					<IonDatetime onIonChange={(e: any) => setFormRelease(e.target.value)} presentation="year" preferWheel={true} className="addGameFormWheel"/>
				</div>
				<div className="inputRow">
					<p>Developer:</p>
					<IonSelect onIonChange={(e: any) => setFormDevelopers(e.target.value)} className="addGameFormInput">
						<p>{developers.map((developer => <IonSelectOption value={developer.id}>{developer.name}</IonSelectOption>))}</p>
					</IonSelect>
				</div>
				<div className="inputRow">
					<p>Platform(s):</p>
					<IonSelect onIonChange={(e: any) => setFormPlatforms(e.target.value)} className="addGameFormInput addGameFormSelect" multiple={true}>
						<p>{platforms.map((platform => <IonSelectOption value={platform.id}>{platform.name}</IonSelectOption>))}</p>
					</IonSelect>
				</div>
				<IonButton className="submit_button" onClick={e => handleSubmit(formTitle, formGenre, formRelease, formDevelopers, formPlatforms)}>Submit</IonButton>
			</IonList>
		</>
		)
		:
		<p>We're sorry, but you do not have the correct permissions to add a game to our database. Please contact an administrator if you believe you should be allowed to add games.</p>
};

export default AddGameForm;
