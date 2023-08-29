import "./spinner.css";
import Layout from "../../components/Layout";
import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <Layout>
      <div className=" flex h-[50vh]  justify-center items-center flex-col gap-[30px]">
        <FaSpinner /> Loading..
      </div>
    </Layout>
  );
};

export default Spinner;
