import Main from "./pages/Main";
import AboutUs from "./components/About";
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
    
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
