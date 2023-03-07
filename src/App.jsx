import CatCard from "./components/CatCard";
import Header from "./components/Header";
// Using a bundler so we dont need to put the file extension in the import statement.
import GroceryLI from "./components/groceryLI";
import UserCard from "./components/UserCard";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import userData from "./data/users";
import NavBar from "./components/NavBar";
// Fragment is a specifically named component of React that doesn't render anything to the DOM. It's just a way to wrap multiple elements without having to use a div.
console.log(catsData);

function App() {
  // calling a function inside another fuction
  return (
    // <> is a short syntactic sugar for React.Fragment, like using <div> instead of <React.Fragment>
    // The benefit of using <React.Fragment> is that it doesn't add any extra nodes to the DOM. It's just a way to wrap multiple elements without having to use a div.
    <>
      <NavBar></NavBar>
      <Header text="Hello Kitty" />
      {/* Get all 4 of the cats to appear on the screen */}
      {catsData.map((cat) => {
        return <CatCard cat={cat} key={cat.id} />;
      })}

      {/* TODO: use a 'map' to create a list for each grocery item. */}

      {/* {groceries.map((grocery) => {
        return <li key={grocery.id}>{grocery.name}</li>;
      })} */}

      {/* TODO: nexxt to each one, render a checkbox. Check it off if purchased =ture. Hint (conditional rendering) */}
      <ul>
        {groceriesData.map((grocery) => {
          return <GroceryLI grocery={grocery} key={grocery.id} />;
        })}
      </ul>
      {/* TODO: import users component */}
      <ul>
        {userData.map((user) => {
          return <UserCard user={user} key={user.id.value} />;
        })}
      </ul>
    </>
  );
}

export default App;

// the map() method is a declarative way to create a new array with the results of calling a provided function on every element in the calling array
// able to apply a function to each object in an array
// does not mutate the original array
// the filter() method creates a new array with all elements that pass the test implemented by the provided function
// the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
