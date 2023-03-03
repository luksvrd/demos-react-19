import CatCard from "./components/CatCard";
import Header from "./components/Header";
// Using a bundler so we dont need to put the file extension in the import statement.
import catsData from "./data/cats";
// Fragment is a specifically named component of React that doesn't render anything to the DOM. It's just a way to wrap multiple elements without having to use a div.
console.log(catsData);

function App() {
  // calling a function inside another fuction
  return (
    // <> is a short syntactic sugar for React.Fragment
    <>
      <Header text="Hello Kitty" />
      <CatCard cat={catsData[0]} />
    </>
  );
}

export default App;
