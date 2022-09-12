import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'

const AddPet = (props) => {
    const {pets, setPets} = props;
    const [petName, setPetName] = useState(" ")
    const [petType, setPetType] = useState(" ")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

const submitHandler=(e)=>{
    e.preventDefault();
        axios.post('http://localhost:8000/api/pets',{
        petName,
        petType,
        description,
        skill1,
        skill2,
        skill3
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setPetName("");
            setPetType("");
            setDescription("");
            setSkill1("");
            setSkill2("");
            setSkill3("");
            setPets([...pets,res.data]);
            navigate('/pets');
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors)
            setErrors(err.response.data.error.errors)
        })
        }

const nameHandler=(e)=>{
    setErrors("")
    setPetName(e.target.value)
}
const typeHandler=(e)=>{
    setErrors("")
    setPetType(e.target.value)
}
const skill1Handler=(e)=>{
    setErrors("")
    setSkill1(e.target.value)
}
const skill2Handler=(e)=>{
    setErrors("")
    setSkill2(e.target.value)
}
const skill3Handler=(e)=>{
    setErrors("")
    setSkill3(e.target.value)
}
const descHandler=(e)=>{
    setErrors("")
    setDescription(e.target.value)
}


return (
    <div>
        <div className="container">
            <div className="">
                <h1>Pet Shelter</h1>
                <Link className="linkClass" to="/pets">Back To Home</Link> 
            </div>
            <div className="container">
            <p className="input-label">Know A Pet Need A Home?</p><br/>
                <form onSubmit={submitHandler} className="formInputDiv">
                <div className="formdiv">
                        <div className="formInputDiv">
                            <label className="input-label">Pet Name:<br/>
                                {errors.petName ? <p>{errors.petName.message}</p>:null}
                                <input className="inputbox" type="text" label="Name" onChange={nameHandler} value={petName} />
                            </label>
                            <label className="input-label">Pet Type:<br/>
                                {errors.petType ? <p>{errors.petType.message}</p>:null}
                                <input className="inputbox" type="text" label="Type" onChange={typeHandler} value={petType} />
                            </label>
                            <label className="input-label">Pet Description:<br/>
                                {errors.description ? <p>{errors.description.message}</p>:null}
                                <input className="inputbox" type="text" label="Type" onChange={descHandler} value={description} />
                            </label>
                        </div> 
                        <p className="input-label"> Skills (optional):</p>
                        <div className="formInputDiv">
                                <label className="input-label">Skill 1:<br/>
                                    {errors.skill1 ? <p>{errors.skill1.message}</p>:null}
                                    <input className="inputbox" type="text" label="Type" onChange={skill1Handler} value={skill1} />
                                </label>
                                <label className="input-label">Skill 2:<br/>
                                    {errors.skill2 ? <p>{errors.skill2.message}</p>:null}
                                    <input className="inputbox" type="text" label="Type" onChange={skill2Handler} value={skill2} />
                                </label>
                                <label className="input-label">Skill 3:<br/>
                                    {errors.skill3 ? <p>{errors.skill3.message}</p>:null}
                                    <input className="inputbox" type="text" label="Type" onChange={skill3Handler} value={skill3} />
                                </label>
                        </div>
                    </div>    
                    <br/>
                    <div className="btndiv">
                        <button onClick={submitHandler} type="submit" className = "btn hover">Add Pet</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}

export default AddPet