import { IoMdNotifications } from "react-icons/io";

interface User {
  name: string;
  email: string;
}

interface Project {
  name: string;
}

// Before
interface NotificationProps {
  user?: User;
  project?: Project;
}

const Notification = ({ project, user }: NotificationProps) => {
  if (project) {
    // Display a project notification
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
  } else if (user) {
    // Display a user notification
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
  } else {
    return null;
  }
};

//BAD ❌
export function UserProfileBAD() {
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
      <Notification user={user} />
    </div>
  );
}
