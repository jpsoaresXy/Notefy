import { useState } from "react";
import { Input } from "./ui/input";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface Props {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
}

const PasswordInput = ({ value, onChange, placeholder }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center bg-gray-200 border-[1.5px] pr-5 rounded mb-3">
      <Input
        autoComplete="current-password"
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm py-3 mr-3 rounded outline-none"
      />

      {!showPassword ? (
        <FaRegEye
          size={22}
          className="text-blue-600 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-blue-900 cursor-pointer"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
