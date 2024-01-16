export const isPresent = (
  selectedDepartments: string[],
  subDepartment: string[]
) => {
  let count = 0;
  for (let i = 0; i < subDepartment.length; i++) {
    for (let j = 0; j < selectedDepartments.length; j++) {
      if (subDepartment[i] === selectedDepartments[j]) {
        count++;
      }
    }
  }

  return count === subDepartment.length;
};
