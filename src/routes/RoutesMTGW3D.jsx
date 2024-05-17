import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Statistics from "../pages/statistics/Statistics"
import Scene from "../pages/scene/Scene";

export default function RoutesMTGW3D (){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/scene" element={<Scene/>}/>
                <Route path="/statistics" element={<Statistics/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}