import { Grid, FormControl } from "@material-ui/core";
import style from "./style.module.css";
import { TextField } from "@material-ui/core";
import { useState } from "react";
//import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';
import ProTable from "../ProTable/ProTable";
'use strict';


//import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
//import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FilesTable = () => {
    const [age, setAge] = useState('10');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [data, setData] = useState([
        {
            name: "voice1",
            channel: 3,
            dateTime: "1/1/2023",
            sensetiveWord: "",
            keyWord: "Plane",
            isOnline: true
        },
        {
            name: "voice2",
            channel: 4,
            dateTime: "1/2/2023",
            sensetiveWord: "fall",
            keyWord: "tree",
            isOnline: false
        }
    ]);
    // setData()
    const [hover, setHover] = useState(false);
    const [tdDisplay, setTdDisplay] = useState("none");
    //const [nameDisplay, setNameDisplay] = 
    const [backgroundInHover, setbackgroundInHover] = useState("white")


    const submitFilter = (event) => {
        if (tdDisplay == "none") {
            setTdDisplay("");
        } else {
            setTdDisplay("none");
        }
    }
    const toggleHandle = (event) => {
        if (backgroundInHover == "white") {
            setbackgroundInHover("lightgray")
        } else {
            setbackgroundInHover("white")
        }
    }

    return (
        <>
            {/* <Grid container spacing={3} style={{
                width: 1000,
                backgroundColor: "white",
                boxShadow: 10,
                borderRadius: 10,
                borderColor: "white"
            }}>
                <Grid xs={12} style={{ marginBottom: 30, backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                    <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                        Files
                    </h4>
                </Grid>
                <Grid xs={12} style={{
                    marginBottom: 30,
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <h4 style={{ marginTop: 15, marginLeft: 12, marginRight: 5 }}>
                        Filter:
                    </h4>
                    <FilterAltIcon className={style.TIcon} style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "8px",
                        verticalAlign: "center",
                        fontSize: 40,
                        cursor: "pointer",
                        borderRadius: "40%",
                        padding: "6px",
                        animationDelay: 2,
                        transitionDelay: "4s background-color",
                    }}
                        onMouseEnter={toggleHandle} onMouseLeave={toggleHandle} onClick={submitFilter} />
                </Grid>
                <Grid style={{ width: "100%", alignItems: "center", alignContent: "center", display: "flex", justifyContent: "center" }}>
                    <table className={style.Tablec}>
                        <tr>
                            <th className={style.Hid}></th>
                            <th className={style.ThName} >
                                <div style={{ display: "flex" }}>
                                    Nama
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <ArrowDropUpIcon style={{ padding: "0px", display: "none" }} />
                                        <ArrowDropDownIcon />
                                    </div>
                                </div></th>
                            <th className={style.ThDate}>Date Time</th>
                            <th className={style.ThSensetive}>Sensetive Word</th>
                            <th className={style.ThKey}>Key Word</th>
                        </tr>
                        <tr style={{
                            display: `${tdDisplay}`
                        }}>
                            <td></td>
                            <td><TextField item xs={3} id="outlined-basic" label="" variant="outlined" style={{ width: 100, alignItems: "center" }}
                                inputProps={{
                                    style: {
                                        height: "0px",
                                        alignItems: "center"
                                    },
                                }} /></td>
                            <td style={{
                                display: "flex",
                                gap: 5,
                                alignItems: "center",
                                width: "350px"
                            }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker />
                                </LocalizationProvider>
                                to
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker />
                                </LocalizationProvider>
                            </td>
                            <td><TextField item xs={3} id="outlined-basic" label="" variant="outlined" style={{ width: 100 }}
                                inputProps={{
                                    style: {
                                        height: "0px",
                                        alignItems: "center"
                                    },
                                }} /></td>
                            <td><TextField item xs={3} id="outlined-basic" label="" variant="outlined" style={{ width: 100 }}
                                inputProps={{
                                    style: {
                                        height: "0px",
                                        alignItems: "center"
                                    },
                                }} /></td>
                        </tr>
                        {data.map((item2, index) => {
                            return (
                                <>
                                    <tr>
                                        <td><VisibilityOffIcon style={{ color: "rgb(50,31,219)" }} /></td>
                                        <td>{item2.name}</td>
                                        <td>{item2.dateTime}</td>
                                        <td>{item2.sensetiveWord}</td>
                                        <td>{item2.keyWord}</td>
                                    </tr>
                                </>
                            )
                        })
                        }
                    </table>
                </Grid>
                <Grid style={{
                    marginTop: 20,
                    marginLeft: 47,
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    alignItems: "space-between",
                    width: "100%"
                }}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "300px"
                    }}>
                        <p style={{ marginRight: 20 }}>
                            Items Per Page:
                        </p>
                        <FormControl sx={{ m: 1, Width: 120 }}>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={age}
                                label="10"
                                onChange={handleChange}
                                width="80px !important"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
            </Grid> */}
            <ProTable />
        </>
    )
}

export default FilesTable;