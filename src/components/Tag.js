import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');

  // MMMMMIIIIMMMPPP 
  // APDE CUSTOME-HOOK BANAVIYO....AND HOOK GENERALLY "use" NAAM THI SARU THAY CHE MATE APDE PAN CUSTOME HOOK NE "use" NAAM THI START KRISHU...........
  // CUSTOME HOOK ATLE BANAVIYO J THI APDE AA CUSTOME HOOK MA CODE LAKHIYE AND TE MULTIPLE JAGIYAYE USE THYA...ATLE CODE NI RE-USEABLITY VADHARISHU...CODE NI READ-ABLITY VADHARISHU

  const {gif, loading, fetchData} = useGif(tag);

  // function changeHandler(event){
  //   setTag(event.target.value);
  // }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

{/* ahiya {tag} vache lakhiyu mate apde jyare pan custome GIFs sodhiye tyare "Random {Custome-GIFs} Gif" avuu lakhelu avshe */}
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif} width="450" />)
    }


      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        // onChange={changeHandler}
        // apde changeHandler function ne direct ahiya j lakhi didhu
        onChange={(event) =>  setTag(event.target.value)}
        value={tag}
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Tag
