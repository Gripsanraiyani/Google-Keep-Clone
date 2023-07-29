import { createContext, useState } from "react";



export const DataContext = createContext(null);



const DataProvider = ({ children }) => {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArechiveNOtes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArechiveNOtes,
            deletedNotes,
            setDeletedNotes
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;