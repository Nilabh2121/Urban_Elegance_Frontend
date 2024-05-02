import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Privacy Policy</h1>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          <div className="md:w-1/2">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-xl font-semibold mb-4">Our Privacy Policy</h2>
              <p className="mb-4">
                At Urban Elegance, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.
              </p>
              <h3 className="text-lg font-semibold mb-2">Information We Collect</h3>
              <p className="mb-4">
                We collect personal information you provide to us, such as your name, email address, shipping address, and payment information, when you create an account, make a purchase, or contact us.
              </p>
              <h3 className="text-lg font-semibold mb-2">How We Use Your Information</h3>
              <p className="mb-4">
                We use your personal information to process your orders, communicate with you, improve our products and services, and personalize your shopping experience.
              </p>
              <h3 className="text-lg font-semibold mb-2">Information Sharing</h3>
              <p className="mb-4">
                We may share your personal information with third-party service providers who assist us in providing services such as shipping, payment processing, and marketing. We do not sell your personal information to third parties.
              </p>
              <h3 className="text-lg font-semibold mb-2">Data Security</h3>
              <p className="mb-4">
                We implement security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="mb-4">
                If you have any questions or concerns about our Privacy Policy, please contact us at privacy@urbanelegance.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
