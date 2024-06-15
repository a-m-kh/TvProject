import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import React, { StrictMode, useCallback, useMemo, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { createRoot } from 'react-dom/client';
import CloseIcon from '@mui/icons-material/Close';
import style from './Style.module.css'
import EditIcon from '@mui/icons-material/Edit';
import Popup from '../Popup/Popup';
import Button from '@mui/material/Button';
import { Grid, List, TextField } from "@material-ui/core";
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

var filterParams = {
    comparator: (filterLocalDateAtMidnight, cellValue) => {
        var dateAsString = cellValue;
        if (dateAsString == null) return -1;
        var dateParts = dateAsString.split('/');
        var cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
            return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
            return 1;
        }
        return 0;
    },
};

const IconModel = (props) => {
    const { see } = props.data || {};
    console.log(see)
    const [isSee, setIsSee] = useState(see);

    return (
        <>
            {isSee == true
                ? (<VisibilityIcon style={{ color: "rgb(50,31,219)" }} />)
                : (<VisibilityOffIcon style={{ color: "rgb(50,31,219)" }} />)
            }
        </>
    )
}



const ActionsModel = (props) => {

    const { Actions } = props.data || {}
    console.log(props.data);
    //console.log(props.data.Username);
    const _handleRemove = () => {
        Actions[0](props.data.Username);
    }
    const _handleEdit = () => {
        console.log("userName is " + props.data.Username);
        Actions[1](props.data.Username);
    }
    return (
        <>
            <div style={{
                display: "flex",
            }}>
                <div onClick={_handleRemove} className={style.IconDiv} style={{
                    textAlign: "center",
                    display: "flex",
                    width: 38,
                    height: 38,
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    marginLeft: "20px",
                    alignItems: "center",
                    borderRadius: "50px"
                }}>
                    <CloseIcon className={style.Icon} />
                </div>
                <div onClick={_handleEdit} className={style.IconEditDiv} style={{
                    textAlign: "center",
                    display: "flex",
                    width: 38,
                    height: 38,
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    marginLeft: "20px",
                    alignItems: "center",
                    borderRadius: "50px",
                }}>
                    <EditIcon className={style.EditIcon} />
                </div>
            </div>
        </>
    )
}





const UserTable = () => {

    const [textFirstNameAddUserFieldValue, settextFirstNameAddUserFieldValue] = useState("");
    const [textLastNameAddUserFieldValue, settextLastNameAddUserFieldValue] = useState("");
    const [textPasswordAddUserFieldValue, settextPasswordAddUserFieldValue] = useState("");
    const [textConfirmPasswordAddUserFieldValue, settextConfirmPasswordAddUserFieldValue] = useState("");
    const [textErrors, setTextErrors] = useState([]);
    const containerStyle = useMemo(() => ({ width: '98%', height: '600px' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [isOpenPopup1, setIsOpenPopup1] = useState(false);
    const [isOpenPopup2, setIsOpenPopup2] = useState(false);
    const [userName, setUserName] = useState("");
    const [columnDefs, setColumnDefs] = useState([
        { field: 'Actions', cellRenderer: ActionsModel },
        //{ field: 'Edit', cellRenderer: EditModel },
        { field: 'Name', filter: 'agTextColumnFilter' },
        { field: 'Username', filter: 'agTextColumnFilter' },
        {
            field: 'CreateDate',
            filter: 'agDateColumnFilter',
            filterParams: filterParams,
        },
        {
            field: 'EntryDate',
            filter: 'agDateColumnFilter',
            filterParams: filterParams,
        },
    ]);
    const ClosePop1 = () => {
        setIsOpenPopup1(false);
    }
    const ClosePop2 = () => {
        setIsOpenPopup2(false);
    }

    const OpenPop1 = (username) => {
        setIsOpenPopup2(false)
        setIsOpenPopup1(true);
        setUserName(username)
    }
    const OpenPop2 = (username) => {
        setIsOpenPopup1(false);
        setIsOpenPopup2(true);
        setUserName(username);
    }
    const EditUser = () => {
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

    const DeleteUser = () => {
        console.log("Delete");
    }
    const _handletextFirstNameAddUserFieldValue = (event) => {
        settextFirstNameAddUserFieldValue(event.target.value);
    }


    const _handletextLastNameAddUserFieldValue = (event) => {
        settextLastNameAddUserFieldValue(event.target.value);
    }
    const _handletextPasswordAddUserFieldValue = (event) => {
        settextPasswordAddUserFieldValue(event.target.value);
    }
    const _handletextConfirmPasswordAddUserFieldValue = (event) => {
        settextConfirmPasswordAddUserFieldValue(event.target.value);
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[700],
        '&:hover': {
            backgroundColor: purple[900],
        },
    }));
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 150,
            filter: 'agTextColumnFilter',
            menuTabs: ['filterMenuTab'],
        };
    }, []);
    const components = useMemo(() => {
        return {
            ModelRender: IconModel,
        };
    }, []);
    const onGridReady = useCallback((params) => {
        setRowData([
            {
                Actions: [OpenPop1, OpenPop2],
                Name: "Amir Mohammad",
                CreateDate: "1/1/2023",
                Username: "@User1",
                EntryDate: "7/2/2021",
            },
            {
                Actions: [OpenPop1, OpenPop2],
                Name: "Amir Mohammad",
                CreateDate: "1/2/2021",
                EntryDate: "7/2/2021",
                Username: "@User2",
            },
            {
                Actions: [OpenPop1, OpenPop2],
                Name: "Amir Mohammad",
                CreateDate: "1/2/2021",
                Username: "@User3",
                EntryDate: "7/2/2021",
            }
        ])
    }, []);


    return (
        <>
            <div style={containerStyle}>
                <div
                    style={gridStyle}
                    className={
                        "ag-theme-quartz"
                    }
                >
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        onGridReady={onGridReady}
                        components={components}
                        pagination={true}
                    />
                </div>
                <Popup style={{
                    // display: popDisplay
                }}
                    isOpen={isOpenPopup1}
                    onClose={ClosePop1}
                    title={"Delete User"}
                    content={
                        <div>
                            you sure Delete This User?
                            <Grid>
                                <ColorButton variant="contained"
                                    onClick={DeleteUser}
                                    style={{
                                        marginTop: 15
                                    }}>Submit</ColorButton>
                            </Grid>
                        </div>
                    }
                />
                <Popup style={{
                }}
                    isOpen={isOpenPopup2}
                    onClose={ClosePop2}
                    title={"Edit User"}
                    content={
                        <div>
                            <TextField className={style.textFieldAddUser} value={textFirstNameAddUserFieldValue} id="outlined-basic" label="FirstName" variant="outlined" onChange={_handletextFirstNameAddUserFieldValue} />
                            <TextField className={style.textFieldAddUser} value={textLastNameAddUserFieldValue} id="outlined-basic" label="LastName" variant="outlined" onChange={_handletextLastNameAddUserFieldValue} />
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
                                    onClick={EditUser}
                                    style={{
                                        marginTop: 15
                                    }}>Submit</ColorButton>
                            </Grid>
                        </div>
                    }
                />
            </div>
        </>
    );
}

export default UserTable;