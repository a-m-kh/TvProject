import { FormControl, Box, TextField, Grid, rgbToHex } from "@material-ui/core";
import { purple } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import SensetiveForm from "../SensetiveForm/SensetiveForm";
import AddIcon from '@mui/icons-material/Add';
import Popup from '../Popup/Popup';
import Button from '@mui/material/Button';
import style from './style.module.css'
import { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';



const ContentColorMenuItem = ({ color }) => {
    console.log("color ==>" + color)
    return (
        <div style={{
            display: "flex",
            flexDirection: "Row",
            width: "100%",
            justifyContent: "space-between"

        }}>
            <p>
                {`${color}`}
            </p>
            <div style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: `${color}`
            }}>
            </div>
        </div>
    )
}
const InputSelectColore = ({ color, handleChange, colorOptions }) => {
    return (<TextField style={{
        width: "150px"
    }}
        id="outlined-basic"
        value={color}
        onChange={handleChange}
        select // tell TextField to render select
        label="Color"
        variant="outlined"
        focused={false}
    >
        {colorOptions.map((item, index) => {
            console.log("item ==> " + item.color);
            //console.log(colorOptions[index])
            return (
                <MenuItem key={index} value={item.color}>
                    <ContentColorMenuItem color={item.color} />
                </MenuItem>
            )
        }
        )}
    </TextField>)
}
const InputSelectSound = ({ sound, handleChange, soundOptions }) => {
    return (<TextField style={{
        width: "150px"
    }}
        id="outlined-basic"
        value={sound}
        onChange={handleChange}
        select // tell TextField to render select
        label="Sound"
        variant="outlined"
        focused={false}
    >
        {soundOptions.map((item, index) => {
            console.log("item ==> " + item.sound);
            //console.log(colorOptions[index])
            return (
                <MenuItem key={index} value={item.sound}>
                    {item.sound}
                </MenuItem>
            )
        }
        )}
    </TextField>)
}
const SensetiveWords = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[700],
        '&:hover': {
            backgroundColor: purple[900],
        },
    }));
    const [fields, setFields] = useState([
        {
            id: 1,
            text: "text1",
            color: "Red",
            sound: "sound1"
        },
        {
            id: 2,
            text: "text2",
            color: "Orange",
            sound: "sound2"
        },
        {
            id: 3,
            text: "text3",
            color: "Red",
            sound: "sound3"
        },
        {
            id: 4,
            text: "text4",
            color: "Orange",
            sound: "sound4"
        },
        {
            id: 5,
            text: "text5",
            color: "Red",
            sound: "sound5"
        }
    ])
    const [colorOptions, setColorOptions] = useState([
        {
            color: "Red"
        },
        {
            color: "Orange"
        }
    ])
    const [soundOptions, setSoundOptions] = useState([
        {
            sound: "sound1"
        },
        {
            sound: "sound2"
        },
        {
            sound: "sound3"
        },
        {
            sound: "sound4"
        }
    ])
    const [color, setColor] = useState('');
    const [sound, setSound] = useState('');
    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [textFieldValue, textFieldValueSet] = useState();
    const [popDisplay, setPopDisplay] = useState("none");
    const [search, setSearch] = useState();
    const _handleChangeColor = (event) => {
        setColor(event.target.value);
    };
    const closePopup = () => {
        setIsOpenPopup(false);
        setColor()
        textFieldValueSet('')
        setSound()
        setPopDisplay("none")
    }
    const openPopup = () => {
        setPopDisplay("");
        setIsOpenPopup(true);
    }
    const _handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }
    const _handleSoundChange = (e) => {
        setSound(e.target.value);
    }
    const HandleSearch = (e) => {
        console.log(search);
    }
    const deleteSensetiveWord = (id) => {
        const filter = fields.filter(sen => sen.id !== id)
        setFields(filter)
    }
    const addSensetiveWord = () => {
        const x = fields.concat({
            text: textFieldValue,
            color: color,
            sound: sound,
            id: Math.random()
        });
        setFields(x);
        closePopup();
    }
    function _handleTextFieldChange(e) {
        textFieldValueSet(e.target.value);
    }
    return (
        <>
            <Grid container spacing={3} style={{
                width: 1000,
                backgroundColor: "white",
                //marginLeft: 95,
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
                    <Grid onClick={openPopup} className={style.plusDiv} style={{
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
                        <AddIcon
                        />
                    </Grid>
                    <Popup style={{
                        display: popDisplay
                    }}
                        isOpen={isOpenPopup}
                        onClose={closePopup}
                        title={"Add Sensetive Word"}
                        content={
                            <div>
                                <TextField id="outlined-basic" label="Sensetive Word" variant="outlined" value={textFieldValue} onChange={_handleTextFieldChange} />
                                <InputSelectColore color={color} handleChange={_handleChangeColor} colorOptions={colorOptions} />
                                <InputSelectSound sound={sound} handleChange={_handleSoundChange} soundOptions={soundOptions} />
                                <Grid>
                                    <ColorButton variant="contained"
                                        onClick={addSensetiveWord}
                                        style={{
                                            marginTop: 15
                                        }}>Submit</ColorButton>
                                </Grid>
                            </div>
                        }
                    />
                </Grid>
                <Grid style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "40px"
                }}>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%" }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Sensetive Words"
                            inputProps={{ 'aria-label': 'Search Sensetive Words' }}
                            onChange={_handleChangeSearch}
                        />
                        <IconButton onClick={HandleSearch} type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid style={{
                    borderRadius: 10,
                    borderStyle: "solid",
                    borderColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    alignContent: "center",
                }}>
                    {fields.map((item, index) => {
                        return (
                            <SensetiveForm
                                key={index}
                                text={item.text}
                                sound={item.sound}
                                color={item.color}
                                id={item.id}
                                deleteHandle={deleteSensetiveWord}
                            />
                        )
                    })}
                </Grid>
                <Grid style={{
                    marginTop: 20,
                    marginLeft: 48,
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "space-between",
                    width: "100%"
                }}>
                    <Pagination count={10} variant="outlined" shape="rounded" style={{
                        marginBottom: 20
                    }} />
                </Grid>
            </Grid>
        </>
    )


}
export default SensetiveWords;