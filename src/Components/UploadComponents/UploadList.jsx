import { Grid, FormControl } from "@material-ui/core";
import style from "./style.module.css";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const UploadList = () => {
    const [age, setAge] = useState('10');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [data, setData] = useState([
        {
            name: "voice1",
            dateTime: "1/1/2023",
        },
        {
            name: "voice2",
            dateTime: "1/2/2023",
        },
        {
            name: "voice3",
            dateTime: "1/2/2023",
        },
        {
            name: "voice4",
            dateTime: "1/2/2023",
        },
        {
            name: "voice5",
            dateTime: "1/7/2023",
        },
        {
            name: "voice6",
            dateTime: "1/6/2023",
        },
        {
            name: "voice7",
            dateTime: "1/5/2023",
        },
        {
            name: "voice8",
            dateTime: "1/4/2023",
        },
        {
            name: "voice9",
            dateTime: "1/3/2023",
        },
        {
            name: "voice10",
            dateTime: "1/2/2023",
        }
    ]);
    return(
    <>
        <Grid container spacing={3} style={{
            width: 1000,
            backgroundColor: "white",
            marginLeft: 95,
            marginTop:60,
            boxShadow: 10,
            borderRadius: 10,
            //borderStyle:"solid",
            borderColor: "white"
        }}>
            <Grid xs={12} style={{ marginBottom: 30, backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                    Upload List
                </h4>
            </Grid>
            {/* <Grid xs={12} style={{ marginBottom: 30, display: "flex", flexDirection: "row" }}>
                <h4 style={{ marginTop: 15, marginLeft: 12, marginRight: 35 }}>
                    Filter:
                </h4>
                <TextField item xs={5} id="outlined-basic" label="type string ..." variant="outlined" style={{ width: 400 }} />
            </Grid> */}
            <Grid style={{ width: "100%", alignItems: "center", alignContent: "center", display: "flex", justifyContent: "center" }}>
                <table className={style.Tablec}>
                    <tr>
                        <th className={style.ThName} >Nama</th>
                        <th className={style.ThDate}>Date Time</th>
                    </tr>
                    {data.map((item2, index) => {
                        return (
                            <>
                                <tr>
                                    <td>{item2.name}</td>
                                    <td>{item2.dateTime}</td>
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
                {/* <Box sx={{ flexGrow: 1 }} /> */}

            </Grid>
        </Grid>
    </>
    )
}
export default UploadList;