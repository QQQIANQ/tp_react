import React, { useState } from 'react';
import AddBeerForm from './AddBeerForm';
import BeerList from './BeerList';


const initialBeers : Array<Beer> = [
  {text:"Corona  ", like : true},
  {text:"QingDao  ", like : false}
]

const App : React.FC = ()=>{

  const [beers,setBeers] = useState(initialBeers);

  const toggleBeer:ToggleBeer = selectedBeer =>{ 
    const newBeers = beers.map(beer =>{
      if(beer === selectedBeer){
        return {
          ...beer,
          like: !beer.like
        };
      }
      return beer;
    });
    setBeers(newBeers);
  };

 const addBeer : AddBeer = newBeer =>{
   newBeer.trim()!=""&& 
   setBeers([...beers,{text : newBeer, like : false}]);
 }
  

  return<div>
            <h1>Want some beers?</h1>
           < React.Fragment>
           <AddBeerForm addBeer={addBeer}/>
           <BeerList beers = {beers} toggleBeer={toggleBeer}/>
           </React.Fragment>
          </div>;   
};

export default App;
