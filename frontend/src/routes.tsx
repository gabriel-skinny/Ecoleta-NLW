import React from "react"

import { BrowserRouter, Route} from "react-router-dom"

import Home from "./pages/Home"
import CreatPoint from "./pages/CreatePoint"

const Routes = () => {
  return(
    <BrowserRouter>]
      <Route path="/" exact component={Home}/>
			<Route path="/create-point" component={CreatPoint}/>
    </BrowserRouter>
    )
}

export default Routes