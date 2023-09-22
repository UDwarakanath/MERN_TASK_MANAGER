import {FaCheckDouble,FaEdit,FaTrash} from "react-icons/fa"

function Task() {
  return (
    <div className="task">
        <p>
            <b>Task 1 asefqw4efq334</b>
        </p>
        <p className="icons">
            <FaCheckDouble color="green" style={{cursor:"pointer"}} />
            <FaEdit color="brown" style={{cursor:"pointer"}} />
            <FaTrash color="red" style={{cursor:"pointer"}} />
        </p>
    </div>
  )
}

export default Task