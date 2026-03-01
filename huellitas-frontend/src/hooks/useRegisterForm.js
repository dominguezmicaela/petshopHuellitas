import { useState } from "react";

export const useRegisterForm = (onSuccess) => {
  const [registerData, setRegisterData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    if (registerData.password !== registerData.confirmPassword) {
      setStatus("error");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setStatus("success");
      setIsLoading(false);
      setTimeout(() => {
        onSuccess?.();
      }, 1500);
    }, 1500);
  };

  return {
    registerData,
    showPassword,
    setShowPassword,
    status,
    isLoading,
    handleChange,
    handleSubmit,
  };
};