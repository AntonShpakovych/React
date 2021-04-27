import React, {
  Fragment
} from "react";
import ReactDOM from "react-dom";

// Components
import Header from "./Components/Header/Header";
import ContentList from "./Components/ContentList/contentList";
import Footer from "./Components/Footer/Footer"


const App = () => {
  return (
    <Fragment>
      <Header/>
      <ContentList/>
      <Footer/>
    </Fragment>
  )
}

ReactDOM.render( < App / > , document.getElementById("root"));