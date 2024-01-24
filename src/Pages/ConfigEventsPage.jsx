import SensetiveWords from "../Components/SensetiveWords/SensetiveWords";
import BasePage from "./BasePage/BasePage";
import KeyWords from "../Components/KeyWords/KeyWords";
import ConfigEventsComponent from "../Components/ConfigEventsComponent/ConfigEventsComponent";
const ConfigEventsPage = () => {

    const comp = <ConfigEventsComponent/> ;

    return (
        <BasePage Component={comp}/>
    )

}
export default ConfigEventsPage;