import {useState} from "react";
import DarkMode from "./DarkMode";
import DropdownAvatar from "./DropdownAvatar";
import LoginBtn from "./Login";

export default function Config() {
  const [isLoggedIn, setLogin] = useState<boolean>(false);
  return (
    <div className="flex items-center space-x-2 pr-4 flex-wrap">
      <DarkMode />
      {isLoggedIn ? <DropdownAvatar /> : <LoginBtn onLogin={setLogin} />}
    </div>
  );
}
