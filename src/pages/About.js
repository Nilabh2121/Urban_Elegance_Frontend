import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Urban Elegance E-commerce app"}>
      <div className="container py-10">
        <h1 className="text-3xl font-semibold text-center mb-8">About Us</h1>
        <div className="row">
          <div className="col-md-8">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              className="w-full rounded-lg"
            />
          </div>
          <div className="col-md-4 mt-4 mr-10">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Urban Elegance</span> is your
              destination for premium-quality products curated with elegance
              and style. We strive to provide a seamless shopping experience,
              offering a wide range of products carefully selected for their
              quality and craftsmanship.
            </p>
            <div className="card mt-4 ml-10">
              <div className="card-body">
                <h2 className="card-title">Meet the Team</h2>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Founder</h5>
                        <p className="card-text">Nilabh Mishra</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">Co-founder</h5>
                        <p className="card-text">Ayush Anand</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Team Member</h5>
                        <p className="card-text">Abhishek Krishnan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;




