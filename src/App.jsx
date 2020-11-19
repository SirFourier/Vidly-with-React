import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Redirect from="/" exact to="/movies" component={Movies} />
          <Redirect to="/not-found" component={NotFound} />
        </Switch>
      </main>
    </>
  );
}

export default App;
