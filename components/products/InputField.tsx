import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

const InputField = () => {
  return (
    <div className="flex grow items-center gap-2">
      <Button variant="outline">
        <SearchIcon size="icon" />
      </Button>
      <Input type="text" placeholder="Search here..." />
    </div>
  );
};
export default InputField;
