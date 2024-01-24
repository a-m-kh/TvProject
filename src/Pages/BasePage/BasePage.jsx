import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header";
import './index.scss';

const BasePage = (prop) => {

    return (<>
        <div className="Page">
            <SideBar />
            <div className="home">
                <Header />
                {prop.Component}
            </div>
        </div>
    </>)
}
export default BasePage;