import SgButton from "./sgButton";
import DynamicComp from "./dynamic_comp";
import ReusableComp from "./reusable-comp";

function App(){
  return <div>
      <h1>
        Hello World
      </h1>
      <SgButton></SgButton>
      <DynamicComp></DynamicComp>
      <ReusableComp></ReusableComp>
      <ReusableComp></ReusableComp>
      <ReusableComp></ReusableComp>
      <ReusableComp></ReusableComp>
  </div>
  }

export default App;