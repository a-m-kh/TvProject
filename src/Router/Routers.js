import ChannelsPage from "../Pages/ChannelsPage";
import HomePage from "../Pages/HomePage";
import ConfigEventsPage from "../Pages/ConfigEventsPage";
import FilesPage from "../Pages/FilesPage"
import EventsPage from "../Pages/EventsPage"
import VoicePage from "../Pages/VoicePage";
import UploadPage from "../Pages/UploadPage";
import VoiceSubmitPage from "../Pages/VoiceSubmitPage";

const routes = [
    {
      path: "/",
      component: HomePage,
      Private: false,
    },
    {
      path : "/Channels",
      component:ChannelsPage,
      Private : false
    },
    {
      path : "/configEvent",
      component:ConfigEventsPage,
      Private : false
    },
    {
      path : "/filePage",
      component:FilesPage,
      Private : false
    },
    {
      path : "/events",
      component:EventsPage,
      Private : false
    },
    {
      path : "/voice",
      component:VoicePage,
      Private : false
    },
    {
      path : "/Upload",
      component:UploadPage,
      Private : false
    },
    {
      path : "/VoiceSubmit",
      component:VoiceSubmitPage,
      Private : false
    }
  ];
    export default routes;