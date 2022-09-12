import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const AllPets = () => {
    const [pets,setPets] = useState([])
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const {id} = useParams();


useEffect(()=>{
    axios.get('http://localhost:8000/api/pets')
    .then((res)=>{
        setPets(res.data.pets)
    })
    .catch((err)=>{
        console.log(err.response.data.error.errors)
        setErrors(err.response.data.error.errors)
    })
},[pets])

return (
    <div className="container">
        <div className="">
            <h1>Pet Shelter</h1>
            <Link className="linkClass" to="/pets/add">Add A Pet To The Shelter</Link>
            <p className="p-purple">These Pets are Looking For A Good Home</p>
        </div>
        <div className="tableDiv">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pets.map((item,idx)=>(  
                            <tr key={idx}>
                                <td>{item.petName}</td>
                                <td>{item.petType}</td>
                                    <td >
                                        <div>
                                            <button className="btn" onClick={()=>navigate(`/pets/${item._id}`) }>Details</button>
                                            <button className="btn" onClick={()=>navigate(`/pets/edit/${item._id}`)}>Edit</button>
                                        </div>
                                    </td>
                            </tr>
                                    ))
                    }
                </tbody>  
            </table>
        </div> 
    </div>
)
}

export default AllPets