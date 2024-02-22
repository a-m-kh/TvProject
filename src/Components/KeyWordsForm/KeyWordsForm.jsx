import { FormControl, Box, TextField, Grid } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import style from "./style.module.css";

const KeyWordsForm = ({ text, color, sound, id, deleteHandle }) => {
    const _handleRemove = () => {
        deleteHandle(id)
    }
    return (
        <>
            <div style={{
                display: "flex",
                width: "100%",
                marginBottom: "20px",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div className={style.input} style={{
                    width: "400px"
                }}> {text}</div>
                <div className={style.input} style={{
                    width: "200px"
                }}> {color} </div>
                <div className={style.input} style={{
                    width: "200px"
                }}> {sound} </div>
                <div onClick={_handleRemove} className={style.IconDiv} style={{
                    textAlign: "center",
                    display: "flex",
                    width: 50,
                    height: 50,
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    marginLeft: "20px",
                    alignItems: "center",
                    borderRadius: "50px"
                }}>
                    <CloseIcon className={style.Icon} />
                </div>
            </div>
        </>
    )
}
export default KeyWordsForm;