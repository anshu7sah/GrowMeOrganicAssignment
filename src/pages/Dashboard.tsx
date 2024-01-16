import { useEffect } from "react";
import Datagrid from "../components/DataGrid";
import DepartmentList from "../components/DepartmentList";
import { data } from "../data/data";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (!storedUserData) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Datagrid />
      <DepartmentList data={data} />
    </>
  );
};

export default Dashboard;
