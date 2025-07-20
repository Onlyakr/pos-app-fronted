import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { users } from "@/utils/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

const user = users[1];

const name = user?.name.split(" ");

const UserProfile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-24 gap-3">
          <Avatar className="size-7">
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>{name[0].charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{name[0]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent asChild>
        <DropdownMenuItem>
          <Button className="mt-2">
            <LogOutIcon className="h-4 w-4" />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    // <div className="flex items-center gap-2 cursor-pointer">
    //   <Avatar className="size-8">
    //     <AvatarImage src={user?.imageUrl} />
    //     <AvatarFallback>{name[0].charAt(0)}</AvatarFallback>
    //   </Avatar>
    //   <span className="text-sm font-medium">{user?.name}</span>
    // </div>
  );
};
export default UserProfile;
