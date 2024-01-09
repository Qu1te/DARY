import Main from "./pages/Main";
import {BrowserRouter,RouterProvider,createBrowserRouter} from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>
    },
    
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
