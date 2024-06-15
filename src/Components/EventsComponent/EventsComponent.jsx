import { Grid } from "@material-ui/core";
import Pagination from '@mui/material/Pagination';
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventsComponent = () => {
    useEffect(() => {
        toast.info("a new event has happend !", {
        })
        toast.info("a new event has happend !", {
        })
        toast.info("a new event has happend !", {
        })
        toast.info("a new event has happend !", {
        })
    }, [])
    return (
        <>
            <div>
                <ToastContainer />
            </div>
            <Grid container spacing={3} style={{
                width: 1000,
                backgroundColor: "white",
                //marginLeft: 95,
                boxShadow: 10,
                borderRadius: 10,
                //borderStyle:"solid",
                borderColor: "white"
            }}>
                <Grid xs={12} style={{ marginBottom: 30, backgroundColor: "rgb(247, 247, 248)", height: 40, verticalAlign: "middle" }}>
                    <h4 style={{ marginTop: 6, marginLeft: 12 }}>
                        Events
                    </h4>
                </Grid>
                <Grid style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <div style={{
                        height: 60,
                        width: "95%",
                        backgroundColor: "rgb(235,237,239)",
                        borderRadius: 4,
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "green"

                    }}>
                        <p style={{
                            marginLeft: 8,
                            marginTop: 14
                        }}>
                            1. Detect Word <span> </span>
                            <span style={{
                                color: "red"
                            }}>
                                fire
                            </span>
                            <span> </span>
                            in
                            <span> </span>
                            <span>
                                <a href="#" style={{
                                    color: "black"
                                }}>
                                    voice1
                                </a>
                            </span>
                            <span> </span>
                            at
                            <span> </span>
                            <span style={{
                                fontWeight: "bold"
                            }}>
                                2023.1.1
                            </span>
                        </p>
                    </div>


                    <div style={{
                        height: 60,
                        width: "95%",
                        backgroundColor: "rgb(213,241,222)",
                        borderRadius: 4,
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "green"
                    }}>
                        <p style={{
                            marginLeft: 8,
                            marginTop: 14
                        }}>
                            1. Detect Word <span> </span>
                            <span style={{
                                color: "red"
                            }}>
                                fire
                            </span>
                            <span> </span>
                            in
                            <span> </span>
                            <span>
                                <a href="#" style={{
                                    color: "black"
                                }}>
                                    voice1
                                </a>
                            </span>
                            <span> </span>
                            at
                            <span> </span>
                            <span style={{
                                fontWeight: "bold"
                            }}>
                                2023.1.1
                            </span>
                        </p>
                    </div>

                    <div style={{
                        height: 60,
                        width: "95%",
                        backgroundColor: "rgb(250,221,221)",
                        borderRadius: 4,
                        borderStyle: "solid",
                        borderWidth: 2,
                        borderColor: "green"
                    }}>
                        <p style={{
                            marginLeft: 8,
                            marginTop: 14
                        }}>
                            1. Detect Word <span> </span>
                            <span style={{
                                color: "red"
                            }}>
                                fall
                            </span>
                            <span> </span>
                            in
                            <span> </span>
                            <span>
                                <a href="#" style={{
                                    color: "black"
                                }}>
                                    voice3
                                </a>
                            </span>
                            <span> </span>
                            at
                            <span> </span>
                            <span style={{
                                fontWeight: "bold"
                            }}>
                                2023.1.1
                            </span>
                        </p>
                    </div>


                    <div style={{
                        height: 60,
                        width: "95%",
                        backgroundColor: "rgb(254,239,208)",
                        borderRadius: 4,
                    }}>
                        <p style={{
                            marginLeft: 8,
                            marginTop: 14
                        }}>
                            1. Detect Word <span> </span>
                            <span style={{
                                color: "red"
                            }}>
                                fire
                            </span>
                            <span> </span>
                            in
                            <span> </span>
                            <span>
                                <a href="#" style={{
                                    color: "black"
                                }}>
                                    voice4
                                </a>
                            </span>
                            <span> </span>
                            at
                            <span> </span>
                            <span style={{
                                fontWeight: "bold"
                            }}>
                                2023.1.1
                            </span>
                        </p>
                    </div>
                </Grid>

                <Grid style={{
                    marginTop: 20,
                    marginLeft: 24,
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
export default EventsComponent;