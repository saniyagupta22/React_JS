function ReusableComp(){
  let number = Math.random() *100;

  return <p>
    Random no. is : {Math.round(number)}
  </p>
}

export default ReusableComp;