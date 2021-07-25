import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Shop } from './pages/Shop'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App ">
        <Router>
          <Switch>
            <Route path="/shop">
              <Header />
              <Shop />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </QueryClientProvider>
  )
}

export default App
