import React, { useState } from 'react';
import Task from '../../components/task/Task';



import "./stylesHome.css"


export default function Home(props){
    return (
        <div>
            <h1>Today</h1>
            <Task/>
        </div>
    )
}