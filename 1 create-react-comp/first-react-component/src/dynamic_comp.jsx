function DynamicComp(){
  let myName = "Jagat";
  const surName = () =>{
    return "Kumar";
  }

  return <p>My name is {myName} {surName()} </p>
}

export default DynamicComp;