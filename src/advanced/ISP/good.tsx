import { IoMdNotifications } from "react-icons/io";

interface User {
  name: string;
  email: string;
}

interface Project {
  name: string;
}

interface ProjectNotificationProps {
  project: Project;
}
const ProjectNotification = ({
  project,
}: ProjectNotificationProps) => {
  return (
    <div
      className="flex flex-col items-center rounded-md fixed bottom-4 left-2 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-5 py-2"
      role="alert"
    >
      <span className="">
        <IoMdNotifications />
      </span>
      <p className="font-bold">Project Export Finished</p>
      <p className="text-sm">{project?.name}</p>
    </div>
  );
};

interface UserNotificationProps {
  user: User;
}

const UserNotification = ({ user }: UserNotificationProps) => {
  return (
    <div
      className="flex flex-col items-center rounded-md fixed bottom-4 left-2 bg-green-100 border-t border-b border-green-500 text-green-700 px-5 py-2"
      role="alert"
    >
      <span className="">
        <IoMdNotifications />
      </span>
      <p className="font-bold">Project Export Finished</p>
      <p className="text-sm">{user?.email}</p>
    </div>
  );
};

// Usage
export function UserProfileGOOD() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const project = {
    name: "Landing Page",
  };

  return (
    <div>
      <h2 className="font-bold">User Dashboard</h2>
      <UserNotification user={user} />
      {/* <ProjectNotification project={project} /> */}
    </div>
  );
}
