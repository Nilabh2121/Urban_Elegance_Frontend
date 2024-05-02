import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf">
      <div className="col-md-7">
          <img
          
            src="/images/5224474.jpg"
            alt="contactus"
            style={{ height:"100%",width: "100%" }}
          />
        </div>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2><Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
