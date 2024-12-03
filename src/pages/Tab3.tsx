import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import React, { useEffect,useState } from 'react';

import axios from 'axios';

// The function below, which gets data from our web api, was constructed with assistance 
// from https://bobbyhadz.com/blog/typescript-http-request-axios#making-http-get-requests-with-axios-in-typescript

async function getPlatforms() {
  try {
    const { data, status } = await axios.get(
      'https://soaca2-bzfygkfvccdgdbcw.ukwest-01.azurewebsites.net/api/v2/platforms',
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

async function getDevelopers() {
  try {
    const { data, status } = await axios.get(
      'https://soaca2-bzfygkfvccdgdbcw.ukwest-01.azurewebsites.net/api/v1/developers',
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


async function getGames() {
  try {
    const { data, status } = await axios.get(
      'https://soaca2-bzfygkfvccdgdbcw.ukwest-01.azurewebsites.net/api/v2/games',
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


const Tab3: React.FC = () => {
  const [games, setGames] = useState<any[]>([]);
  const [developers, setDevelopers] = useState<any[]>([]);
  const [platforms, setPlatforms] = useState<any[]>([]);


  useEffect(() => {
    getGames().then(setGames);
    getDevelopers().then(setDevelopers);
    getPlatforms().then(setPlatforms);
    },[]);

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
        <h1>GAMES</h1>
        <table>
          <thead>
            <tr>
              <th>Game Title</th>
              <th>Game Genre</th>
              <th>Game Release Year</th>
              <th>Platforms</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key = {game.id}> 
                <td>{game.title}</td>
                <td>{game.genre}</td>
                <td>{game.release_year}</td>
                <td>
                  {game.platforms && game.platforms.length > 0 ? (
                 <ul>
                 {game.platforms.map((platforms:string, index:number) => (
                   <li key={index}>{platforms}</li>
                 ))}
               </ul>
             ) : (
                    <span>No Platforms</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
            </table>

            <br></br>
            <h1>DEVELOPERS</h1>
            <table>
          <thead>
            <tr>
              <th>Developer Name</th>
              <th>Developer Country</th>
              <th>Developer Games</th>
            </tr>
          </thead>
          <tbody>
            {developers.map((developer) => (
              <tr key = {developer.id}> 
                <td>{developer.name}</td>
                <td>{developer.country}</td>
                <td>
                  {developer.games && developer.games.length > 0 ? (
                 <ul>
                 {developer.games.map((game:string, index:number) => (
                   <li key={index}>{game}</li>
                 ))}
               </ul>
             ) : (
                    <span>No games</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
            </table>

            <br></br>
            <h1>PLATFORMS</h1>
            <table>
          <thead>
            <tr>
              <th>Platform Name</th>
              <th>Platform Manufacturer</th>
              <th>Platform Games</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform) => (
              <tr key = {platform.id}> 
                <td>{platform.name}</td>
                <td>{platform.manufacturer}</td>
                <td>
                  {platform.games && platform.games.length > 0 ? (
                 <ul>
                 {platform.games.map((game:string, index:number) => (
                   <li key={index}>{game}</li>
                 ))}
               </ul>
             ) : (
                    <span>No games</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
            </table>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;