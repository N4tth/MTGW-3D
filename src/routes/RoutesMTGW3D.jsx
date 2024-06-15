import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Statistics from "../pages/statistics/Statistics"
import Scene from "../pages/scene/Scene";
import TaskList from "../pages/taskList/List";

export default function RoutesMTGW3D (){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/list" element={<list/>}/>*/}
                <Route path="/scene" element={<Scene/>}/>
                <Route path="/stats" element={<Statistics/>}/>
                <Route path="/list" element={<TaskList/>}/>
                {/* <Route path="*" element={<NotFound/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}