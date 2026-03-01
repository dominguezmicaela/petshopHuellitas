import { useState } from "react";

const INITIAL_STATE = { nombre: "", apellido: "", email: "", mensaje: "" };

export const useContacto = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus]     = useState(""); // "" | "success" | "error"
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    setTimeout(() => {
      setStatus("success");
      setIsLoading(false);
      setFormData(INITIAL_STATE);
    }, 1500);
  };

  return { formData, status, isLoading, handleChange, handleSubmit };
};