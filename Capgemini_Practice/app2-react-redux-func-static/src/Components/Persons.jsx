import React from "react"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { handleAddPerson, handleDeletePerson, handleUpdatePerson } from "../Store/actions";

export const Persons = () => {
    const [person, setPerson] = useState({
        id: "",
        fname: ""
    });
    const [isEdit, setIsEdit] = useState(null);

    const persons = useSelector((state) => {
        return state.persons
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const newPerson = { ...person };
        newPerson[e.target.name] = e.target.value;
        setPerson(newPerson);
    }
    const addPerson = () => {
        const lastIdValue = persons[persons.length - 1];
        person.id = lastIdValue.id + 1;
        dispatch(handleAddPerson(person));
        clearValues();
    }
    const deletePerson = (per) =>{
        dispatch(handleDeletePerson(per))
    }
    const editPerson = (per) => {
        setPerson(per);
        setIsEdit(per.id);
    }
    const updatePerson = () => {
        dispatch(handleUpdatePerson(person));
        clearValues();
        setIsEdit(null);
    }
    const clearValues = () => {
        setPerson({
            id: "",
            fname: ""
        })
    }
    return (
        <div className="main container">
            <div className="form container">
                <label htmlFor="">Name : </label>
                <input type="text" name="fname" value={person.fname} onChange={handleChange} /> <br />

                {
                    isEdit === null ? <button type="button" onClick={addPerson}>Add Person</button>
                    : <button type="button" onClick={updatePerson}>Update Person</button>
                }
            </div> <br />
            <div className="table container">
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            persons.map((per) =>
                                <tr key={per.id}>
                                    <td>{per.fname}</td>
                                    <td>
                                        <button type="button" onClick={()=>editPerson(per)}>edit</button>
                                    </td>
                                    <td>
                                        <button type="button" onClick={()=>deletePerson(per)}>delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}