
export const handleAddPerson = (person) => {
    return {
        type : "add_person",
        payload : person
    }
}

export const handleDeletePerson = (person) => {
    return {
        type : "delete_person",
        payload : person
    }
}

export const handleUpdatePerson = (person) => {
    return {
        type : "update_person",
        payload : person
    }
}