import './index.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core/styles";
import PianoIcon from '@mui/icons-material/Piano';
import { useNavigate } from 'react-router-dom';
import TvIcon from '@mui/icons-material/Tv';
import FolderIcon from '@mui/icons-material/Folder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SettingsIcon from '@mui/icons-material/Settings';

const useStyles = makeStyles((theme) => ({
    icons: {
        color: "white",
        marginLeft: theme.spacing(1.6),
        marginRight: theme.spacing(1),
        '&:hover': {
            color: "#11101D",
        },
    },
    title: {
        marginLeft: theme.spacing(1.6),
        marginRight: theme.spacing(1),
        opacity: 0,
        '&:hover': {
            color: "#11101D",
        },
        open: {
            // color:"white",
            opacity: 1,
        }
    },
    menu: {
        color: "white",
    },
}));
function SideBar() {
    const classes = useStyles();
    const navigate = useNavigate();

    const ToSearch = (prop) => {
        navigate('/Search');
    };

    const ToHelp = (prop) => {
        navigate('/Help');
    };

    const ToAnaltics = (prop) => {
        navigate('/Chart');
    };

    const ToHome = (prop) => {
        navigate('/');
    };

    const ToAnalytics = (prop) => {
        navigate('/Analysis');
    };

    const ToAboutUs = (prop) => {
        navigate('/AboutUs');
    }

    function click2() {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("open");
    }

    return (
        <div className="sidebar open">

            <div className="logo-details">
                <PianoIcon className={classes.icon} />
                <div className="logo_name">TvProject</div>
                <MenuIcon className={classes.menu} onClick={() => { click2() }} id="btn" />
            </div>
            <ul className="nav-list">
                <li>
                    <a href="/voice">
                        <TvIcon className={classes.icons} />
                        <span className="links_name">channels</span>
                    </a>
                    <span className="tooltip">channels</span>
                </li>
                <li>
                    <a href="/filePage">
                        <FolderIcon className={classes.icons} />
                        <span className="links_name">Files</span>
                    </a>
                    <span className="tooltip">Files</span>
                </li>
                <li>
                    <a href="/events">
                        <NotificationsIcon className={classes.icons} />
                        <span className="links_name">Events</span>
                    </a>
                    <span className="tooltip">Events</span>
                </li>
                <li>
                    <a href="/Upload">
                        <DriveFolderUploadIcon className={classes.icons} />
                        <span className="links_name">Upload</span>
                    </a>
                    <span className="tooltip">Upload</span>
                </li>
                <li>
                    <a href="/configEvent">
                        <SettingsIcon className={classes.icons} />
                        <span className="links_name">Config Events</span>
                    </a>
                    <span className="tooltip">Config Events</span>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;