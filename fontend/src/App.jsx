import { useState , useEffect} from "react";
import axios from axios;

function App() {
  let [task, setTask] = useState("");
  let [priority, setPriority] = useState("");
  let [info, setInfo] = useState({});
  let [data,setData] = useState([])

  let handelClick = async () => {
  let response = await axios.post("http://localhost:3000/create/todo", {
    task: task,
    priority: priority,
  });

  setInfo(response.data);

  let todosData = await axios.get("http://localhost:3000/allTodos");
  setData(todosData.data.data);
};

  let handelTaskChange = (e) => {
    setTask(e.target.value);
  };

  let handelOptionSelect = (e) => {
    setPriority(e.target.value);
  };

  useEffect(()=>{

   async function todos(){
    let todosData = await axios.get('http://localhost:3000/allTodos')
    setData(todosData.data.data);
    
   } 
   todos()
  },[])

  return (
    <>
      <h1>Todo</h1>
      {info.success ? 
        <p>{info.message}</p>
       :  
        <p style={{ background: "red" }}>{info.message}</p>
      }
      <input onChange={handelTaskChange} type="text" />
      <select onChange={handelOptionSelect}>
        <option value="low">low</option>
        <option value="medium">Meidum</option>
        <option value="high">High</option>
      </select>
      <button onClick={handelClick}>Submit</button> 

      <ul>
      {data.map(item=>(
       <li>{item.task }  ....... {item.priority} ...... {item.status} </li>  
      ))}
      </ul>
    </>
  );
}

export default App;
