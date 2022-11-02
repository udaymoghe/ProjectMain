import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { MdAddCircleOutline } from "react-icons/md";

export default function Todo() {
  const [thisNum, setNum] = React.useState({
    id: 1,
    tasks: ["Default Task"],
    input: ""
  });

  const handleAdditem = () => {
    setNum((prevState) => ({
      ...prevState,
      tasks: [...prevState.tasks, prevState.input]
    }));
  };

  const handleRemoveitem = (index) => {
    setNum((prevState) => {
      return {
        ...prevState,
        tasks:  prevState.tasks.slice(index, -1)
      };
    });
  };

  const handleInput = (event) => {
    setNum((prevState) => ({
      ...prevState,
      input: event.target.value,
    }));
  };

  return (
    <>
      <title>To Do List</title>
      <section style={{background:"#F1D8DD", padding:"30px"}}>
        <div className="container">
            <h1 style={{textAlign:"center", fontWeight:"800"}}>Enter the Task to Execute</h1>
        
        <div className="row mb-4 text-center"  style={{background:"#ffcdd2", color:"#e31d24", borderColor:"1px solid #e31d24", borderRadius:"8px", padding:"28px"}}>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <input
                  type="text"
                  placeholder="Enter the Task..."
                  onChange={handleInput}/>
                  <MdAddCircleOutline onClick={handleAdditem} style={{height:"40px"}}/>
              </div>
        </div>

        <div className="row mt-4 mb-4" style={{background:"#ffcdd2", color:"#e31d24", borderRadius:"8px", padding:"28px"}}>
                {
                thisNum.tasks.map((item) => (
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-2" style={{background:"#e31d24", color:"#ffcdd2", borderRadius:"8px", padding:"10px"}}>
                        <h3>Task is: &nbsp;   
                          {item}
                            <FcFullTrash onClick={handleRemoveitem} style={{height:"40px", float:"right"}}/>                          
                        </h3>
                        </div>
                ))}
        </div>     
        
        </div>
      </section>
    </>
  );
}
