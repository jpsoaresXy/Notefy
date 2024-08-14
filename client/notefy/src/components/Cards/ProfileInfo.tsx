import { getInitials } from "@/utils/helper";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

interface Props {
  onLogout: () => void;
}

const ProfileInfo = ({ onLogout }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/jpsoaresxy.png" />
        <AvatarFallback>{getInitials("Jhon Doe")}</AvatarFallback>
      </Avatar>

      <div>
        <p className="text-sm font-bold pl-4">Jhon</p>
        <Button
          variant={"link"}
          className="text-sm text-slate-700 "
          onClick={() => {
            onLogout();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
