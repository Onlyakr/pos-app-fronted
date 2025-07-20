import { users } from "@/utils/data";

const user = users[1];

const Role = () => {
  return (
    <span className="text-muted-foreground text-sm">
      {user.name} - {user.role}
    </span>
  );
};
export default Role;
