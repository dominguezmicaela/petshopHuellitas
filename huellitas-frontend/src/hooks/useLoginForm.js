import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");
    setTimeout(() => {
      if (
        loginData.email === "admin@huellitas.com" &&
        loginData.password === "admin"
      ) {
        setStatus("success");
        setIsLoading(false);
        setTimeout(() => navigate("/admin"), 1000);
      } else {
        setStatus("error");
        setIsLoading(false);
      }
    }, 1500);
  };

  return {
    loginData,
    showPassword,
    setShowPassword,
    remember,
    setRemember,
    status,
    isLoading,
    handleChange,
    handleSubmit,
  };
};