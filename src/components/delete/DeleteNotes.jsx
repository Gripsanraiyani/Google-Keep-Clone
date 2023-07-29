import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles'
import { useContext } from 'react';

//componentes
import DeleteNote from './DeleteNote';

import { DataContext } from '../../context/DataProvider';


const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));


const DeleteNotes = () => {

    const { deletedNotes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex' }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Grid container style={{ marginTop: 16 }}>
                    {
                        deletedNotes.map(note => (
                            <Grid item>
                                <DeleteNote note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default DeleteNotes;