import ChannelsPage from "../Pages/ChannelsPage";
import HomePage from "../Pages/HomePage";
import ConfigEventsPage from "../Pages/ConfigEventsPage";
import FilesPage from "../Pages/FilesPage"
import EventsPage from "../Pages/EventsPage"
import VoicePage from "../Pages/VoicePage";
import UploadPage from "../Pages/UploadPage";
import VoiceSubmitPage from "../Pages/VoiceSubmitPage";
import LoginPage from "../Pages/LoginPage";
import UserManagementPage from "../Pages/UserManagementPage";

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
    },
    {
      path : "/Login",
      component:LoginPage,
      Private : false
    },
    {
      path : "/UserManagement",
      component:UserManagementPage,
      Private : false
    }
  ];
    export default routes;