import { useEffect } from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <>
      <Form />
    </>
  );
};

export default Home;
