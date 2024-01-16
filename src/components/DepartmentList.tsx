import { useState } from "react";
import DepartmentItem from "./DepartmentItem";
import { Box } from "@mui/material";
import { DepartmentListProps } from "../utils/types";

const DepartmentList: React.FC<DepartmentListProps> = ({ data }) => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  const handleSelect = (selected: string[]) => {
    let item: string[] = [...selectedDepartments];
    for (let i = 0; i < selected.length; i++) {
      if (selectedDepartments.includes(selected[i])) {
        item = item.filter((e) => e !== selected[i]);
      } else {
        item.push(selected[i]);
      }
    }

    setSelectedDepartments(item);
  };

  return (
    <Box>
      {data.map((department) => (
        <DepartmentItem
          key={department.department}
          department={department.department}
          subDepartments={department.sub_departments}
          onSelect={handleSelect}
          selectedDepartments={selectedDepartments}
        />
      ))}
    </Box>
  );
};

export default DepartmentList;
