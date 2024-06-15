import style from "./Login.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const LoginComponent = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (

        <div className={style.bodyPage}>
            <div className={style.formBox}>
                <div className={style.loginFields}>
                    <TextField style={{
                        width: "100%"
                    }} id="filled-basic" label="Username" variant="filled" />
                </div>
                <div className={style.loginFields}>
                    <TextField style={{
                        width: "100%",

                    }}
                        id="outlined-adornment-password"
                        label="Password" variant="filled"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </div>
                <button className={style.loginButton}>
                    Login
                </button>
            </div>
        </div>
    )
}
export default LoginComponent;