import { Grid } from "@material-ui/core";
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import style from "./style.module.css";

const VoiceComponent = () => {
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
                //borderStyle:"solid",
                borderColor: "white",
                display: "flex",
                flexDirection: "column",
                gap:20,
                height:"100%"
            }}>
                <Grid xs={12} style={{ marginBottom: 30, backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                    <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                        Voice
                    </h4>
                </Grid>
                <Grid style={{
                    width: "95%",
                    textAlign: "start",
                    marginLeft: 20
                }}>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </Grid>
                <Grid>
                    <ColorButton variant="contained" style={{
                        marginLeft: 20,
                        marginTop: 15
                    }}>Edit</ColorButton>
                </Grid>


                <Grid container spacing={3} style={{
                    width: 800,
                    backgroundColor: "white",
                    marginLeft: 95,
                    boxShadow: "5px gray",
                    borderRadius: 10,
                    borderStyle:"solid",
                    borderColor: "white",
                    height:"100%",
                    marginBottom:20
                }}>
                    <Grid xs={12} style={{ backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                        <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                            Sensetive Words
                        </h4>
                    </Grid>
                    <Grid style={{
                        width: "100%",
                        alignItems: "center",
                        alignContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <table className={style.Tablec} style={{
                            marginTop: 15
                        }}>
                            <tr className={style.trStyle}>
                                <th className={style.ThWords} >Words</th>
                                <th className={style.ThStart} >start</th>
                                <th className={style.ThEnd}>End</th>
                            </tr>
                            <tr>
                                <td>Caption</td>
                                <td>20</td>
                                <td>25</td>
                            </tr>
                        </table>
                    </Grid>

                </Grid>

                <Grid container spacing={3} style={{
                    width: 800,
                    backgroundColor: "white",
                    marginLeft: 95,
                    borderRadius: 10,
                    boxShadow: "1px gray",
                    borderStyle:"solid",
                    borderColor: "white",
                    height:"100%"

                }}>
                    <Grid xs={12} style={{ backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                        <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                            Key Words
                        </h4>
                    </Grid>
                    <Grid style={{
                        width: "100%",
                        alignItems: "center",
                        alignContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <table className={style.Tablec} style={{
                            marginTop: 15
                        }}>
                            <tr className={style.trStyle}>
                                <th className={style.ThWords} >Words</th>
                                <th className={style.ThStart} >start</th>
                                <th className={style.ThEnd}>End</th>
                            </tr>
                            <tr>
                                <td>Caption</td>
                                <td>20</td>
                                <td>25</td>
                            </tr>
                        </table>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
export default VoiceComponent;