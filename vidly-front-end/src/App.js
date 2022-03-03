import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Costomers from "./components/costomers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import Navbar from "./components/navbar";
import LoginForm from "./components/loginForm";
import Register from "./components/registerForm";
import Logout from "./components/logout";
import auth from "./services/authService"
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoute from './components/common/protectedRoute';

class App extends Component {
  state = {};

  componentDidMount() {
   const user = auth.getCurrentUser();
   this.setState({user});
  }
  render() {
    const{ user }= this.state;
    return (
      <main className="container">
        <ToastContainer />
        <Navbar user={user}/>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/movies/:id" element={
            <ProtectedRoute >
              <MovieForm/>
            </ProtectedRoute>
          }></Route>
          <Route path="/movies" element={<Movies user={this.state.user}/>}></Route>
          <Route path="/costomers" element={<Costomers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
          <Route path="/" exact element={<Navigate replace to="/movies" />}></Route>
          <Route path="*" element={<Navigate replace to="/notFound" />}></Route>
        </Routes>
      </main>
    );
  }
}
export default App;
