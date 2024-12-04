import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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

  const [currentPageGames, setCurrentGames] = useState<number>(1);
  const [currentPageDevelopers, setCurrentDevelopers] = useState<number>(1);
  const [currentPagePlatforms, setCurrentPlatforms] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getGames().then(setGames);
    getDevelopers().then(setDevelopers);
    getPlatforms().then(setPlatforms);
    },[]);

    const paginate = (data:any[], currentPage: number) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return data.slice(startIndex, endIndex);
    };

    const totalPagesGames = Math.ceil(games.length / itemsPerPage);
    const totalPagesDevelopers = Math.ceil(developers.length / itemsPerPage);
    const totalPagesPlatforms = Math.ceil(platforms.length / itemsPerPage);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Smoking Barrel API</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Smoking Barrel API</IonTitle>
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
            {paginate(games, currentPageGames).map((game) => (
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

            <div>
              <div className='pagination_container'>
              <IonButton
               className='pagination_button'
                onClick={() => setCurrentGames((prev) => prev - 1)}
                disabled={currentPageGames === 1}>
                Previous
                </IonButton>

            <div>
            <IonButton
             className='pagination_button'
              onClick={() => setCurrentGames((prev) => prev + 1)}
              disabled={currentPageGames === totalPagesGames}>
              Next
              </IonButton>
            </div>
            </div>

        </div>
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
            {paginate(developers, currentPageDevelopers).map((developer) => (
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
            <div>
            <div className='pagination_container'>
              <IonButton
               className='pagination_button'
                onClick={() => setCurrentDevelopers((prev) => prev - 1)}
                disabled={currentPageDevelopers === 1}>
                Previous
                </IonButton>
            <div>
              <IonButton 
               className='pagination_button'
                onClick={() => setCurrentDevelopers((prev) => prev + 1)}
                disabled={currentPageDevelopers === totalPagesDevelopers}>
                Next
                </IonButton>
            </div>
            </div>
            </div>
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
            {paginate(platforms, currentPagePlatforms).map((platform) => (
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
            <div>
            <div className='pagination_container'>
              <IonButton
               className='pagination_button'
                onClick={() => setCurrentPlatforms((prev) => prev - 1)}
                disabled={currentPagePlatforms === 1}>
                Previous
                </IonButton>
            <div>
              <IonButton 
              className='pagination_button'
                onClick={() => setCurrentPlatforms((prev) => prev + 1)}
                disabled={currentPagePlatforms === totalPagesPlatforms}>
                Next
                </IonButton>
            </div>
            </div>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;