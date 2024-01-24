import SideBar from "../Components/SideBar/SideBar";
import Header from "../Components/Header/Header";
const HomePage = () => {

    return (<>
        <div className="Page">
            <SideBar />
            <div className="home">
                <Header />
                <h1 style={{color : "red"}}>
                    HomePage
                </h1>
            </div>
        </div>
    </>)
}
export default HomePage;