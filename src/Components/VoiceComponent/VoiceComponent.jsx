import { Grid } from "@material-ui/core";
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { TextField } from "@material-ui/core";
import Popup from "../Popup/Popup";
import Button from '@mui/material/Button';
import style from "./style.module.css";
import { useState } from "react";
import { textFieldClasses } from "@mui/material";
import VoicePlayer from "../VoicePlayer/VoicePlayer";

const VoiceComponent = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[700],
        '&:hover': {
            backgroundColor: purple[900],
        },
    }));


    const [popupOpen, setPopupOpen] = useState();
    const [textFieldValue, textFieldValueSet] = useState();
    const [displayState, setdisplayState] = useState("none");
    const [textEdited, setTextEdited] = useState("");
    function Edit() {
        // return ()
        setPopupOpen(true);
    }

    const closePopup = () => {
        setPopupOpen(false);
    };

    const SublitEdit = () => {
        console.log(textFieldValue);
        //
        // ask from back for edit
        //
        setTextEdited(textFieldValue);
        setdisplayState("flex");
    }

    function _handleTextFieldChange(e) {
        // this.setState({
        //     textFieldValue: e.target.value
        // });
        textFieldValueSet(e.target.value);
    }

    return (
        <>
            <div style={{
                width: "100%"
            }}>
                <VoicePlayer />

            </div>
            {/* <Grid container spacing={3} style={{
                width: 1000,
                backgroundColor: "white",
                //marginLeft: 95,
                boxShadow: 10,
                borderRadius: 10,
                //borderStyle:"solid",
                borderColor: "white",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                height: "100%",
                //alignSelf:"center"
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
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default <span
                            style={{ color: "red" }}>model</span> text, and a search for 'lorem ipsum' will <spin
                                style={{ color: "orange" }}>uncover</spin> many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </Grid>
                
                <div style={{
                    display: `${displayState}`,
                    justifyContent: "center",

                }}>
                    <Grid container spacing={3} style={{
                        width: 900,
                        backgroundColor: "white",
                        boxShadow: 10,
                        borderRadius: 10,
                        borderColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                        height: "100%",
                    }}>
                        <Grid xs={12} style={{ backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                            <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                                Edited
                            </h4>
                        </Grid>
                        <Grid style={{
                            width: "95%",
                            textAlign: "start",
                            marginLeft: 20
                        }}>
                            <p>
                                {textEdited}
                            </p>
                        </Grid>
                    </Grid>
                </div>
                
                <Grid>
                    <ColorButton variant="contained" onClick={Edit} style={{
                        marginLeft: 20,
                        marginTop: 15
                    }}>Edit</ColorButton>
                    <Popup
                        isOpen={popupOpen}
                        onClose={closePopup}
                        title={"Edit"}
                        content={
                            <div>
                                <TextField
                                    id="standard-multiline-static"
                                    //label="Multiline"
                                    multiline
                                    rows={10}
                                    defaultValue=""
                                    variant="standard"
                                    onChange={_handleTextFieldChange}
                                    style={{
                                        borderStyle: "solid",
                                        borderWidth: 1.5,
                                        borderRadius: 6,
                                        borderColor: "gray",
                                        width: "100%"
                                    }}
                                />
                                <Grid>
                                    <ColorButton variant="contained"
                                        onClick={SublitEdit}
                                        style={{
                                            marginTop: 15
                                        }}>Submit</ColorButton>
                                </Grid>
                            </div>
                        }
                    />
                </Grid>


                <Grid container spacing={3} style={{
                    width: 800,
                    backgroundColor: "white",
                    marginLeft: 95,
                    boxShadow: "5px gray",
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderColor: "white",
                    height: "100%",
                    marginBottom: 20
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
                                <td>model</td>
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
                    borderStyle: "solid",
                    borderColor: "white",
                    height: "100%"

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
                                <td>uncover</td>
                                <td>20</td>
                                <td>25</td>
                            </tr>
                        </table>
                    </Grid>

                </Grid>
            </Grid> */}
        </>
    )
}
export default VoiceComponent;