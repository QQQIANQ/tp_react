import React, { ChangeEvent, FormEvent, useState } from 'react';

interface AddBeerFormProps{
    addBeer:AddBeer;
}



const AddBeerForm: React.FC <AddBeerFormProps> = ({addBeer}) =>{

    const [newBeer,setNewBeer] = useState<string>("");

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setNewBeer(e.target.value);
    };

    const handleSubmit = (e:FormEvent<HTMLButtonElement>) =>{
        e.preventDefault();
        addBeer(newBeer);
        setNewBeer("");
    }

    return <form>
        <input type="text" value={newBeer} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit }> Add Beer </button>
    </form>
}

export default AddBeerForm
