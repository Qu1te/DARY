import Main from "./pages/Main";
import AboutUs from "./pages/About";
import HistoryPage from "./pages/History";
import { getAllByLabelText } from "@testing-library/react";
import {BrowserRouter,RouterProvider,createBrowserRouter} from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>
    },
    {
      path: "/about",
      element:<AboutUs/>
    },
    {
      path: "/History",
      element:<HistoryPage/>
    },
    
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
