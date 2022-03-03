import React, { Component } from "react";
import "../../../allcss.css";
import Trialcompo from "./Trialcompo";
import Privacy from "../../../assets/Body/Trialitems/privacy.png";
import Terms from "../../../assets/Body/Trialitems/terms.png";
import Domain from "../../../assets/Body/Trialitems/domain.png";
import Invioce from "../../../assets/Body/Trialitems/invoice.png";

class Trialitems extends Component{
  render() {
  return (
    <div className="Trialitems-outer">
      <div className="Trialitems-heading">
        <h1>Try our other free products</h1>
      </div>
      <div className="Trialitems-wrapper">
        <div className="Trialitems-card-wrap">
          <Trialcompo
            img={Privacy}
            head="Privacy Policy Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
        <div className="Trialitems-card-wrap">
          <Trialcompo
            img={Terms}
            head="Terms & Conditions Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
        <div className="Trialitems-card-wrap">
          <Trialcompo
            img={Domain}
            head="Domain Name Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
        <div className="Trialitems-card-wrap">
          <Trialcompo
            img={Invioce}
            head="Invoice Generator"
            para="Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging."
          />
        </div>
      </div>
    </div>
  );
  }
};

export default Trialitems;
