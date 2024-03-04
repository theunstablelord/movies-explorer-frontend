import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import Header from "../Header/Header";

function App() {
  return (
    <div className="page-container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;