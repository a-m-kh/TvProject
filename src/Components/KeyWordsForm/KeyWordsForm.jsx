import { FormControl, Box, TextField, Grid } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const KeyWordsForm = () => {
    return (
        <>
            <FormControl xs={2} style={{ marginBottom: 30 ,marginLeft:30}} >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} style={{display:"flex", gap:10}}>
                        <TextField item xs={5} id="outlined-basic" label="Outlined" variant="outlined" style={{ width: 400 }} />
                        <TextField item xs={5} id="outlined-basic" label="Outlined" variant="outlined" style={{ width: 400 }} />
                        <Grid style={{ marginLeft: 30 }}>
                            <CloseIcon style={{ color: "red" }} />
                            <EditIcon style={{ color: "red" }} />
                        </Grid>
                    </Grid>
                </Box>
            </FormControl>
        </>
    )
}
export default KeyWordsForm;