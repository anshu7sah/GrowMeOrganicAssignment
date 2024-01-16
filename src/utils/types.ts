export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface DepartmentItemProps {
  department: string;
  onSelect: (selected: string[]) => void;
  selectedDepartments: string[];
  subDepartments: string[];
}

export interface DepartmentListProps {
  data: Department[];
}
export interface Department {
  department: string;
  sub_departments: string[];
}

export interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
}
