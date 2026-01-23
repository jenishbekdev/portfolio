export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface UserData {
  name: string;
  role: string;
  projects: Project[];
}
