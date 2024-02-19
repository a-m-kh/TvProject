import SideBar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header";
import './index.scss';

const BasePage = (prop) => {

    return (<>
        <div className="Page">
            <SideBar />
            <div className="home">
                <Header />
                <div style={{
                    alignItems:"center",
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:"column"
                }}>
                {prop.Component}
                </div>
            </div>
        </div>
    </>)
}
export default BasePage;