import { FormControl, Box, TextField, Grid, rgbToHex } from "@material-ui/core";
import { Margin } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import SensetiveForm from "../SensetiveForm/SensetiveForm";
import AddIcon from '@mui/icons-material/Add';

const SensetiveWords = () => {
    return (
        <>
            <Grid container spacing={3} style={{
                width: 1000,
                backgroundColor: "white",
                marginLeft: 95,
                marginBottom: 50,
                boxShadow: 10,
                borderRadius: 10,
                //borderStyle:"solid",
                borderColor: "white"
            }}>
                <Grid xs={12} style={{ marginBottom: 30, backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                    <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                        Sensetive Words
                    </h4>
                </Grid>
                <Grid xs={12} container style={{ height: 50, display: "flex", justifyContent: "center", marginBottom: 10 }}>
                    <Grid style={{
                        borderWidth: 1,
                        borderStyle: "solid",
                        width: 280,
                        height: 30,
                        borderRadius: 7,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderColor: "rgb(50,31,219)"
                    }}>
                        <AddIcon style={{
                            color: "rgb(50,31,219)",
                            fontSize: 20,
                            //borderColor:"rgb(50,31,219)"
                        }} />
                    </Grid>
                </Grid>
                <Grid style={{ borderRadius: 10, borderStyle: "solid", borderColor: "white" }}>
                    <SensetiveForm />
                    <SensetiveForm />
                    <SensetiveForm />
                </Grid>

            </Grid>
        </>
    )


}
export default SensetiveWords;