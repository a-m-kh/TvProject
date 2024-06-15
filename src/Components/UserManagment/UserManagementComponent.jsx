import { Grid, List, TextField } from "@material-ui/core";
import UserTable from "../UserTable/UserTableComponent";
import { purple } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import SensetiveForm from "../SensetiveForm/SensetiveForm";
import AddIcon from '@mui/icons-material/Add';
import Popup from '../Popup/Popup';
import Button from '@mui/material/Button';
//import style from './style.module.css'
import { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Pagination from '@mui/material/Pagination';
import style from "./Style.module.css"

const UserManagementComponent = () => {

    const [isOpenPopup, setIsOpenPopup] = useState(false)
    const [popDisplay, setPopDisplay] = useState("none");
    const [textFirstNameAddUserFieldValue, settextFirstNameAddUserFieldValue] = useState("");
    const [textLastNameAddUserFieldValue, settextLastNameAddUserFieldValue] = useState("");
    const [textUserNameAddUserFieldValue, settextUserNameAddUserFieldValue] = useState("");
    const [textPasswordAddUserFieldValue, settextPasswordAddUserFieldValue] = useState("");
    const [textConfirmPasswordAddUserFieldValue, settextConfirmPasswordAddUserFieldValue] = useState("");
    const [textErrors, setTextErrors] = useState([]);

    const AddUser = () => {
        let emptyList = textErrors;
        //setTextErrors([]);
        for (let i = 0; i < textErrors.length; i++) {
            emptyList.pop();
        }
        setTextErrors(emptyList);
        console.log("add");
        console.log(textErrors);
        if (textPasswordAddUserFieldValue.length < 12) {
            console.log("First : " + textErrors)
            let errors = textErrors.concat("The length of the password must be greater than 12");
            setTextErrors(errors)
            console.log("Second : " + textErrors);
        }
        if (textConfirmPasswordAddUserFieldValue != textPasswordAddUserFieldValue) {
            let errors = textErrors.concat("Password and confirm password must be equal");
            setTextErrors(errors);
        }
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[700],
        '&:hover': {
            backgroundColor: purple[900],
        },
    }));

    const _handletextFirstNameAddUserFieldValue = (event) => {
        settextFirstNameAddUserFieldValue(event.target.value);
    }


    const _handletextLastNameAddUserFieldValue = (event) => {
        settextLastNameAddUserFieldValue(event.target.value);
    }
    const _handletextUserNameAddUserFieldValue = (event) => {
        settextUserNameAddUserFieldValue(event.target.value);
    }
    const _handletextPasswordAddUserFieldValue = (event) => {
        settextPasswordAddUserFieldValue(event.target.value);
    }
    const _handletextConfirmPasswordAddUserFieldValue = (event) => {
        settextConfirmPasswordAddUserFieldValue(event.target.value);
    }

    const closePopup = () => {
        setIsOpenPopup(false);
        settextFirstNameAddUserFieldValue("")
        settextLastNameAddUserFieldValue("")
        settextUserNameAddUserFieldValue("");
        settextPasswordAddUserFieldValue("");
        settextConfirmPasswordAddUserFieldValue("");
        setTextErrors([]);
        // setColor()
        // textFieldValueSet('')
        // setSound()
        setPopDisplay("none")
    }
    const openPopup = () => {
        setPopDisplay("");
        setIsOpenPopup(true);
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
                        User Management
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
                        title={"Add User"}
                        content={
                            <div>
                                <TextField className={style.textFieldAddUser} value={textFirstNameAddUserFieldValue} id="outlined-basic" label="FirstName" variant="outlined" onChange={_handletextFirstNameAddUserFieldValue} />
                                <TextField className={style.textFieldAddUser} value={textLastNameAddUserFieldValue} id="outlined-basic" label="LastName" variant="outlined" onChange={_handletextLastNameAddUserFieldValue} />
                                <TextField className={style.textFieldAddUser} value={textUserNameAddUserFieldValue} id="outlined-basic" label="UserName" variant="outlined" onChange={_handletextUserNameAddUserFieldValue} />
                                <TextField className={style.textFieldAddUser} value={textPasswordAddUserFieldValue} id="outlined-basic" label="Password" type="Password" variant="outlined" onChange={_handletextPasswordAddUserFieldValue} />
                                <TextField className={style.textFieldAddUser} value={textConfirmPasswordAddUserFieldValue} id="outlined-basic" label="Confirm Password" type="Password" variant="outlined" onChange={_handletextConfirmPasswordAddUserFieldValue} />
                                {textErrors.map((item, index) => {
                                    return (
                                        <h4 key={index} style={{
                                            color: "red",
                                            marginLeft: "6px"
                                        }}>
                                            {item}
                                        </h4>)
                                }
                                )}
                                <Grid>
                                    <ColorButton variant="contained"
                                        onClick={AddUser}
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
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <UserTable style={{
                        width: "100%"
                    }} />
                </Grid>
            </Grid>
        </>
    )
}

export default UserManagementComponent;