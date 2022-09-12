import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useNavigate,Link} from 'react-router-dom'


const OnePet = () => {
    const [pet, setPet] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/pets/'+id)
        .then((res)=>{
            //console.log(res.data.pet[0]);
            setPet(res.data.pet[0]);
            setPet(res.data.pet[0]);
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then((res) => {
                // console.log(res)
                setPet({})
                navigate(`/pets`)
            })
            .catch((err) => console.log(err))
    }

return (
    <div className="">
        <div>
            <h1>Pet Shelter</h1>
            <div className="formdiv">
                <Link className="linkClass" to="/pets">Back To Home</Link>
                <button onClick={deleteHandler} type="submit" size="large"  variant="contained" className="btn ">Adopt {pet.petName}</button>
            </div>
        </div>
        <p className="p-purple">Details About{pet.petName}</p>
        <div className="card">
            <p >Pet Type:{pet.petType}</p>
            <p>Pet Description:{pet.description}</p>
            <span> Skills:</span>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
        </div>
        
    </div>
)
}

export default OnePet