
import CounterClassWithStateExample from "./assets/components/CounterClassWithStateExample.jsx";
import Greeting from "./assets/components/GreetProps.jsx";
import GreetProps from "./assets/components/GreetProps.jsx";
import HobbyListProps from "./assets/components/HobbyListProps.jsx";
import WelcomeStyle from "./assets/components/WelcomeStyle.jsx";
import CounterFunctionWithHooks from "./assets/components/CounterFunctionWithHooks.jsx";
import FunctionEventHandler from "./assets/components/FunctionWithEventHandler.jsx";
import ClassEventHandler from "./assets/components/ClassEventHandler.jsx";
import ClassWithoutBinding from "./assets/components/ClassWithoutBinding.jsx";

export default function App() {
  return (
    <>
      <WelcomeStyle/>
        <Greeting name="Shalini" timeOfDay="Morning" />
      <Greeting name="John" timeOfDay="Afternoon" />
      <GreetProps name="Alice" timeOfDay="Evening" />
      <HobbyListProps name="Shalini" hobbies={["Reading", "Traveling", "Cooking"]}/>
      <HobbyListProps name="test" hobbies={["Swimming", "Cycling", "Running"]}/>
      <HobbyListProps name="TW" hobbies={["Painting", "Drawing", "Sculpting"]}/>
      <CounterClassWithStateExample />
      <CounterFunctionWithHooks />
      <FunctionEventHandler />
      <ClassEventHandler />
      <ClassWithoutBinding />
    </>
  );
}