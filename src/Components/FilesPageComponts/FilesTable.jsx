import { Grid, FormControl } from "@material-ui/core";
import style from "./style.module.css";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Pagination from '@mui/material/Pagination';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


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

    console.log(data)

    return (
        <>
            <Grid container spacing={3} style={{
                width: 1000,
                backgroundColor: "white",
                marginLeft: 95,
                boxShadow: 10,
                borderRadius: 10,
                //borderStyle:"solid",
                borderColor: "white"
            }}>
                <Grid xs={12} style={{ marginBottom: 30, backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                    <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                        Files
                    </h4>
                </Grid>
                <Grid xs={12} style={{ marginBottom: 30, display: "flex", flexDirection: "row" }}>
                    <h4 style={{ marginTop: 15, marginLeft: 12, marginRight: 35 }}>
                        Filter:
                    </h4>
                    <TextField item xs={5} id="outlined-basic" label="type string ..." variant="outlined" style={{ width: 400 }} />
                </Grid>
                <Grid style={{ width: "100%", alignItems: "center", alignContent: "center", display: "flex", justifyContent: "center" }}>
                    <table className={style.Tablec}>
                        <tr>
                            <th className={style.Hid}></th>
                            <th className={style.ThName} >Nama</th>
                            <th className={style.ThChannel} >Channel</th>
                            <th className={style.ThDate}>Date Time</th>
                            <th className={style.ThSensetive}>Sensetive Word</th>
                            <th className={style.ThKey}>Key Word</th>
                            <th className={style.ThOnline}>Is Online</th>
                        </tr>
                        {data.map((item2, index) => {
                            return (
                                <>
                                    <tr>
                                        <td><VisibilityOffIcon style={{ color: "rgb(50,31,219)" }} /></td>
                                        <td>{item2.name}</td>
                                        <td>{item2.channel}</td>
                                        <td>{item2.dateTime}</td>
                                        <td>{item2.sensetiveWord}</td>
                                        <td>{item2.keyWord}</td>
                                        <td>{item2.isOnline ?
                                            (
                                                <h6 style={{ backgroundColor: "green", color: "white", borderRadius: 7 }}>
                                                    online
                                                </h6>
                                            )
                                            :
                                            (
                                                <h6 style={{ backgroundColor: "red", color: "white", borderRadius: 7 }}>
                                                    ofline
                                                </h6>
                                            )
                                        }
                                        </td>
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

export default FilesTable;