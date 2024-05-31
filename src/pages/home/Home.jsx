import React, { useState } from 'react';
import Task from '../../components/task/Task';
import AddItemForm from '../../components/task/addItemForm';


import "./stylesHome.css"


export default function Home(props){
    return (
        <div>
            <h1>Tu planeador</h1>
            <AddItemForm/>
            <Task/>
        </div>
    )
}