import React,{useState} from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function InputFields() {

    const [inputName, setInputName ] = useState("");
    const [inputAge, setInputAge ] = useState("");
    const [inputStatus, setInputStatus ] = useState();

    const [refreshCount, setRefreshCount] = useState(0);

    const refresh = () => setRefreshCount(refreshCount + 1);

    const POST_PEOPLE_URL = `https://o91snh.herokuapp.com/api/Persons`;

    function handleChangeName (event) {
        setInputName(event.target.value);
    }

    function handleChangeAge (event) {
        setInputAge(event.target.value);
    }

    function handleChangeStatus (event) {
        console.log(event.target.value)
        setInputStatus(event.target.value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        const objectToSend = {
            "id":uuidv4(),
            "name":inputName,
            "age":parseInt(inputAge),
            "relationshipStatus":inputStatus

        }

        console.log(objectToSend)
        axios.post(POST_PEOPLE_URL, objectToSend)
        .then(response => console.log(response));
        refresh()
    }


    return (
        <div className="input-fields">
            <form enctype="multipart/form-data" onSubmit={handleSubmit}>        
               <div>
                   <label for="name">Enter name: </label>
                   <input type="text" id="name" name="name"  value={inputName} onChange={handleChangeName}/>
                </div>
                <div>
                    <label for="age">Enter age: </label>
                    <input type="age" id="age" name="age" value={inputAge} onChange={handleChangeAge}/>
                </div>
                <div>
                    <label for="status">Enter status: </label>
                    <select id="status" name="status" value={inputStatus} onChange={handleChangeStatus}>
                        <option value="InRelationship">In a relationship</option>
                        <option value="Single">Single</option>
                        <option value="ItsComplicated">Complicated</option>
                        <option value="Married">Married</option>
                    </select>
                </div>
                <p>All inputs are mandatory</p>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
