import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// MMMMMIIIIMMMPPPP
// APDE J PAN ".env" FILE MA INSERT KARELU CHE TENE ACCESS KARVA MATE APDE 'process.env.' NO USE THAY CHE 
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


  // AA VAKHATE NAVI RITE APDE API MATHI DATA NE FETCH KARIYE
  //  const [gif,setGif] = useEffect(''); 

  // async function fetchdata(){
  //  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //  //apde aa vakhete API ne fetch karva "axios" no use karishu j apanane automatic ".JSON" ma convert kari ne ape che...ade bane rite API ne fetch kari shakiye chiye aek(1) aa rite and 2nd j apde j pahela use karta hata te rite
  //  const output = await axios.get(url);
  //  console.log.(output);
  // }

  // useEffect( () => {
  //  //API ne call kariyo
  //  fetchfata();
  // },[] )


  // apde useGif custome Hook no use karelo che 
  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Get Random Gif</h1>
      {/* have ahiya "gif" avshe  */}
      {/* jo loading on hoy tyare loading thashe and loading off hoy tyare gifs avshe */}

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }

      

{/* ahiya onclick=clickHandler() ne call karelo che ..tene apde tuk ma lakhiyu */}
      <button onClick={() => fetchData()}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random
