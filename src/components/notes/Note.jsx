import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider"



const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`



const Note = ({ note }) => {

    const { notes, setNotes, archiveNotes, setArechiveNOtes, setDeletedNotes } = useContext(DataContext);

    const UnarchiveNote = (note) => {
       const updatedNotes = notes.filter(data => data.id !== note.id);
       setNotes(updatedNotes);
       setArechiveNOtes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
       setNotes(updatedNotes);
       setDeletedNotes(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <ArchiveOutlinedIcon
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => UnarchiveNote(note)}
                />
                <DeleteOutlineOutlinedIcon
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>

    )
}

export default Note;