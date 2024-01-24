import { Grid } from "@material-ui/core";
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import BackupIcon from '@mui/icons-material/Backup';

const UploadFiles = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[700],
        '&:hover': {
            backgroundColor: purple[900],
        },
    }));

    return (
        <>
            <Grid container spacing={3} style={{
                width: 1000,
                backgroundColor: "white",
                marginLeft: 95,
                boxShadow: 10,
                borderRadius: 10,
                borderColor: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "300px  "
            }}>
                <Grid xs={12} style={{ backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                    <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                        Upload Files
                    </h4>
                </Grid>

                <div style={{
                    width:"100%",
                    alignItems:"center",
                    alignContent:"center",
                    display:"flex",
                    justifyContent:"center",
                    //marginBottom:50
                }}>
                <div style={{
                    width: "80%",
                    height: 170,
                    borderStyle: "dotted",
                    borderWidth: 2,
                    borderColor: "gray",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    >
                        <BackupIcon style={{
                            color: "black"
                        }} />
                        <h3>
                            Drog and Drop files here
                        </h3>
                    </div>
                    <h3>
                        or
                    </h3>
                    <ColorButton variant="contained" style={{
                    }}>Upload</ColorButton>
                </div>
                </div>
                <Grid>
                    <div style={{
                        display: "block",
                        marginTop:6
                    }}>
                        <ColorButton variant="contained" style={{
                        }}>Submit</ColorButton>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default UploadFiles;