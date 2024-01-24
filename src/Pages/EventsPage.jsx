import BasePage from "./BasePage/BasePage";
import EventsComponent from "../Components/EventsComponent/EventsComponent";

const EventsPage = ()=>{
    return (
        <BasePage Component={<EventsComponent/>}/>
    )
}
export default EventsPage;