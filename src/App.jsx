import Header from "./components/Header";
// Using a bundler so we dont need to put the file extension in the import statement.
import catsData from "./data/cats";
console.log(catsData);

function App() {
  // calling a function inside another fuction
  return <Header text="Hello World!" />;
}

export default App;
