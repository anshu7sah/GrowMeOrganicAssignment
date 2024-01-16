import Datagrid from "../components/DataGrid";
import DepartmentList from "../components/DepartmentList";
import { data } from "../data/data";

const Dashboard = () => {
  return (
    <>
      <Datagrid />
      <DepartmentList data={data} />
    </>
  );
};

export default Dashboard;
