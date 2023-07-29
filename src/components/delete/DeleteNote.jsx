import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { DeleteForever } from "@mui/icons-material";
import { RestoreFromTrashOutlined } from "@mui/icons-material";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider"



const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`



const DeleteNote = ({ note }) => {

    const { notes, setNotes, setArechiveNOtes, deletedNotes, setDeletedNotes } = useContext(DataContext);

    const restoreNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <DeleteForever
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => deleteNote()}
                />

                <RestoreFromTrashOutlined
                    fontSize="small"
                    onClick={() => restoreNote()}
                />

            </CardActions>
        </StyledCard>

    )
}

export default DeleteNote;