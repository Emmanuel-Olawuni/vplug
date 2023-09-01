import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const Invalid = () => {
  return (
    <Layout>
      <div className="text-center flex flex-col h-[60vh] place-content-center items-center gap-[20px]">
        Page Not Found
        <button className="bg-red-500 text-white rounded-[10px] text-[16px] p-[10px]  text-center">
          <Link to="/">Go To Homepage</Link>
        </button>
      </div>
    </Layout>
  );
};

export default Invalid;
