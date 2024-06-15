import style from "./style.module.css";
import TvIcon from '@mui/icons-material/Tv';
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
//import { Color } from "ag-grid-enterprise/dist/lib/ag-charts-community/sparklines-util";
const BorderLinearProgress = styled(LinearProgress)(({ theme, pColor }) => (console.log(pColor), {
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? pColor : '#308fe8',
    },
}));
const ChannelBoxComponent = ({ Title, Number, lineColor, isBorder }) => {
    console.log("cc ===> " + lineColor);
    return (
        <>
            <div className={style.channelBox} style={{
                marginLeft: "20px",
                marginTop: "20px",
                borderStyle: "solid",
                borderRadius: "5px",
                borderColor: isBorder ? ("#f9b74c") : ("white"),
                borderWidth: "2px"
            }}>
                <div className={style.tvBox}>
                    <TvIcon />
                </div>
                <div className={style.numberBox}>
                    <h3>
                        {Number}
                    </h3>
                </div>
                <div className={style.titleBox}>
                    <p>
                        {Title}
                    </p>
                </div>
                <marquee width="100%" style={{
                    behavior: "scroll"
                }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                </marquee>
                {/* <div className={style.lineBox}>
                    <BorderLinearProgress pColor={lineColor} variant="determinate" value={70} style={{
                        width: "90%"
                    }} />
                </div> */}
            </div>
        </>
    );
}
export default ChannelBoxComponent;