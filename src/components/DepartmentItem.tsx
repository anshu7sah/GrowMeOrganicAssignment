import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography } from "@mui/material";
import { DepartmentItemProps } from "../utils/types";
import { isPresent } from "../utils/helper";

const DepartmentItem: React.FC<DepartmentItemProps> = ({
  department,
  onSelect,
  selectedDepartments,
  subDepartments,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box style={{ display: "flex", alignItems: "center" }}>
        {subDepartments.length > 0 && (
          <Box
            onClick={handleToggle}
            sx={{ cursor: "pointer", marginRight: "8px" }}
          >
            {expanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
          </Box>
        )}
        <Checkbox
          checked={isPresent(selectedDepartments, subDepartments)}
          onChange={() => onSelect(subDepartments)}
        />
        <Typography>
          {department}
          <span style={{ color: "#999" }}>{` (${subDepartments.length})`}</span>
        </Typography>
      </Box>
      {expanded && (
        <Box sx={{ marginLeft: "60px" }}>
          {subDepartments.map((subDepartment) => (
            <Box
              key={subDepartment}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox
                checked={selectedDepartments.includes(subDepartment)}
                onChange={() => onSelect([subDepartment])}
              />
              <Typography>{subDepartment}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default DepartmentItem;
