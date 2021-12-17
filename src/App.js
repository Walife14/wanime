import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'
import { useAuthContext } from './hooks/useAuthContext'

// page components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThemeSelector from './components/ThemeSelector'

// pages
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import ThisWeek from './pages/this-week/Thisweek'
import Theories from './pages/theories/Theories'
import MyProfile from './pages/my-profile/MyProfile'
import AddAnime from './pages/add-anime/AddAnime'
import AnimeDirectory from './pages/anime-directory/AnimeDirectory'
import Anime from './pages/anime/Anime'

// styles
import './App.css'


function App() {
  const { mode } = useTheme()
  const { user, authIsReady } = useAuthContext()

  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <ThemeSelector />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/my-profile">
              {user && <MyProfile />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!user && <Signup />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/login">
              {!user && <Login />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/this-week">
              <ThisWeek />
            </Route>
            <Route path="/anime/:id">
              <Anime />
            </Route>
            <Route path="/add-anime">
              <AddAnime />
            </Route>
            <Route path="/anime-directory">
              <AnimeDirectory />
            </Route>
            <Route path="/theories">
              {user && <Theories />}
              {!user && <Redirect to="/" />}
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
