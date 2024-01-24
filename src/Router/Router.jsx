import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './Routers';

const AppRouter = ()=>{
    // function routeToRender(route) {
    //     let componentToRender;
    //     if (route.Private) {
    //       componentToRender = isAuth ? 
    //         route.path == '/dashboard/:*' ?         
    //         <Dashboard itemPath ={window.location.pathname.split('/dashboard/')[1]}/> :
    //         <route.component /> : <></>;
    //     } else {
    //       route.path == '/dashboard/:*' ?         
    //       <Dashboard itemPath ={window.location.pathname.split('/dashboard/')[1]}/> :
    //       componentToRender = <route.component />;
    //     }
    
    //     return componentToRender;
    //   }
      return (
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component/>} />
            ))}
            {/* Add a route for paymentStatus with the desired component */}
            {/* <Route path="/paymentStatus" element={paymentStatusComponent} /> */}
            {/* Integrate Dashboard directly into the route configuration */}
            {/* <Route path="/dashboard/*" element={dashboardComponent} /> */}
          </Routes>
        </BrowserRouter>
      );
}

export default AppRouter;