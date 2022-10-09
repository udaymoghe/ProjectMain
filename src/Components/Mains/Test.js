import React from "react"

const data = [
  {name:"piyush", id:1, age:23},
  {name:"Uday", id:2, age:24},
  {name:"Pooja", id:3, age:25},
]

const Test = () => {
  const [thisPerson, setPerson] = React.useState(data);
  const [thiscomponentArray, setComponentaArray] = React.useState([]);
  var newdata;

  const handleChange= (name , id) => {
    console.log("handleChange Was Called");
    newdata = thisPerson.map(item => {
      if(item.id === id) {return ({...item, name:name})}
      else {return ({...item})}
    });

    console.log("newData",newdata);
    setPerson(newdata);
  }
  const handleClick = () => {
    const componentArray = thisPerson.map(item=>{
      return(
        <div>
          {item.name}
        </div>
      );
    })
    setComponentaArray(componentArray);
  }

  
 
  return(
    <div>
      {thisPerson.map(item=> {
        return( <Input {...item} handleChange={handleChange}/>);
      })}
      <button className="btn btn-primary" onClick={handleClick}>Get Data</button>      
      {thiscomponentArray}
    </div>
  );

}

const Input = ({id, name, age, handleChange}) => {
  return(
    <input 
      type="text"
      onChange={(event)=> {
        handleChange(event.target.value, id)
      }}
    />
  );
}

export default Test;