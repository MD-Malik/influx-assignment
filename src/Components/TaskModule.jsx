import React, { useCallback, useState } from 'react'
import styles from "./TaskModule.module.css"

const TASKS = [
    {
        title : "Wash the car",
        by : "written by bob",
        type : "REJECTED",
        id : 1
    },
    {
        title : "Task with dropdown menu",
        by : "By Johnny",
        type : "NEW",
        id : 2
    },
    {
        title : "Badge on right task",
        by : "This task has show on hover actions!",
        type : "LATEST TASK",
        id : 3
    },
    {
        title : "Go grocery shopping",
        by : "A short description for this todo item",
        type : "",
        id : 4
    },
    {
        title : "Wash the car",
        by : "Written by Bob",
        type : "REJECTED",
        id : 5
    },
    {
        title : "Serive the car",
        by : "Written by Bob",
        type : "PLANNED",
        id : 6
    }
]

export const TaskModule = () => {
    const[tasks, setTasks] = useState(TASKS);
   
  return (
    <div className={styles.taskModule}>
        <div className={styles.taskModuleTopDiv}>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
</svg></div>
            <div>Tasks List</div>
        </div>
        <div className={styles.taskModuleMiddleDiv}>
            {tasks.map((item, index)=>(
                <div key={item.id} className={styles.eachTaskDiv}>
                    <div>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className={styles.taskContent}>
                        <div>
                            <div>{item.title}</div>
                            <div className={styles.taskType} style={item.type=="LATEST TASK"?{background: "Green"}:item.type=="NEW"?{background:"Blue"}:{background : "Red"}}>{item.type}</div>
                        </div>
                        <div>{item.by}</div>
                    </div>
                </div>
            ))}
        </div>
        <div className={styles.taskModuleBottomDiv}>
            <button>Cancel</button>
            <button>Save</button>
        </div>
    </div>
  )
}
