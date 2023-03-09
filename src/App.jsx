// Using a bundler so we dont need to put the file extension in the import statement.
import React from "react";
import Counter from "./components/Counter";
import GroceryLI from "./components/GroceryLI";
import Header from "./components/Header";
import NavBar from "./components/NavBar/NavBar";
import UserCard from "./components/UserCard";
import catsData from "./data/cats";
import groceriesData from "./data/groceries";
import links from "./data/links";
import userData from "./data/users";
import Cats from "./routes/Cats";

function App() {
  // setting up use state
  const [currentPath, setCurrentPath] = React.useState("/");
  // Starting off with a default value of "/" for currentPath (home page)
  // Navebar is a child component of App
  // App is the parent component of NavBar
  const handleNavClick = (event) => {
    event.preventDefault();
    setCurrentPath("/" + event.target.textContent.toLowerCase());
  };
  // preventDefault() prevents the default action of an element from happening (preventing anchor tag here)
  // anchor tag default action is to go to the href
  // we don't want that to happen because we want to use React Router to handle the navigation
  // we want to use React Router to handle the navigation because we want to use the browser's back and forward buttons
  // we want to use the browser's back and forward buttons because we want to use the browser's history API
  // TODO: Render the correct component based on the current path
  switch (currentPath) {
    case "/cats":
      return <Cats catsData={catsData} />;
  }
  // <> is a short syntactic sugar for React.Fragment, like using <div> instead of <React.Fragment>
  // The benefit of using <React.Fragment> is that it doesn't add any extra nodes to the DOM. It's just a way to wrap multiple elements without having to use a div.
  // TODO: Move stuff to 'routes' folder
  return (
    <>
      <NavBar links={links} handleClick={handleNavClick} />
      <Header text="Hello 🐱" />

      <main className="container mx-auto space-y-8">
        <section>
          <h2>🛒</h2>
          <ul className="flex list-none justify-around">
            {groceriesData.map((grocery) => {
              return <GroceryLI grocery={grocery} key={grocery.id} />;
            })}
          </ul>
        </section>

        <section>
          <h2>👩‍💻</h2>
          <div className="cards-container grid-cols-5">
            {userData.map((user) => {
              return <UserCard user={user} key={user.email} />;
            })}
          </div>
        </section>

        <Counter />
      </main>
    </>
  );
}

export default App;
// the map() method is a declarative way to create a new array with the results of calling a provided function on every element in the calling array
// able to apply a function to each object in an array
// does not mutate the original array

// the filter() method creates a new array with all elements that pass the test implemented by the provided function

// the reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value
