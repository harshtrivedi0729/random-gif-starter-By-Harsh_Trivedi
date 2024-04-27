import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// ahiya apde API ma 'random' call karelo che mate apde random gifs male che 
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
  // AA VAKHATE NAVI RITE APDE API MATHI DATA NE FETCH KARIYE
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');


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

  
    async function fetchData(tag) {
      // API data lave tya sudhi aa loading chalu rahe te mate apde setLoading ne on rakhelu che
      setLoading(true);
      //apde aa vakhete API ne fetch karva "axios" no use karishu j apanane automatic ".JSON" ma convert kari ne ape che...ade bane rite API ne fetch kari shakiye chiye aek(1) aa rite and 2nd j apde j pahela use karta hata te rite 
      // have apde "console.log.(output); ma jai ne joyu to apanane 'gifs' no path maliyo j {data -> data -> images -> downsized_large -> url } che tya thi apanane badhi 'gifs' malshe ".
      // const output = await axios.get(url); ......... have ama thi apanane API nu output malshe to...apde upar 'gifs' no path joyo to direct apanane easy thay te mate ahiya j 2 data che tema thi apde direct j main data 1st valu che tene output ni jagiyaye lai laiye chiye j thi apanane j kaam no data joiye che te mali le....API na akha output ne leva ni jarur nathi mate ape niche output ni jagiyaye OBJECT({}) data [{data}] lakhiyu che 
      // 2 'data' mathi 1st data mali gayo

      // apde specific GIFs jiye to tena mate apde API MA AEK CONDITION ADD KARI "[`${url}&tag=${tag}`]" J MA SPECIFIC GIFs MATE APDE  "[&tag=${tag}]" ADD KARELU CHE 
      // jo apde tag(custome-GIF) lakhi hoy to te mujab apde API ma custom call karishu and nahitar random j API call karti hati te karishu
      const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
      // gif ni link apde aa imageSource thi lai lidhi
      const imageSource = data.data.images.downsized_large.url;
      // have aa j gif mai tene apde aa <div></div> ni ander aa setGif thi nakhishu
      setGif(imageSource);
      setLoading(false);
    }
    
    useEffect( () => {
      // API ne fetch kari....Fetchdata function ne call kari ne API ne fetch kari
      fetchData('car');
    },[] )

    // apdo hook a gif return kare che,loading and fetch data use kare che mate apde te bane ne pan return karishu
    return {gif,loading, fetchData};
}

export default useGif
