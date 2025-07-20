import { users } from "@/utils/data";

const user = users[1];

const Role = ({ cashier }: { cashier: boolean }) => {
  return (
    <span className="text-muted-foreground text-sm">
      {user.name} - {cashier === true ? user.role : "manager"}
    </span>
  );
};
export default Role;
