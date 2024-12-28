import React from "react";
import Heading from "./components/heading"; // Adjust import path as needed
import RandomImage from "./components/random-img"; // Adjust import path as needed
import RandomNum from "./components/num"; // Adjust path if necessary
import Fabfood from "./components/favouritefood";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <div className="main-content">
        <div>
          <Heading />
        </div>

        <div style={{ textAlign: "center" }}>
          <RandomNum />
        </div>

        <div>
          <RandomImage />
        </div>

        <div>
          <Fabfood />
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
