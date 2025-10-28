import { useEffect, useState } from "react";
import axios from "axios";
import type { Data, ProductFormData } from "../types";
import API_URL from "../apiUrl";

export const useProducts = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");

      const { data } = await axios.get(API_URL);
      setData(data);
    } catch {
      setError("Помилка при завантаженні даних");
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (formData: ProductFormData) => {
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await axios.post(API_URL, formData);

      setSuccess("Продукт успішно додано!");

      await fetchData();
    } catch {
      setError("Не вдалося додати продукт");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    success,
    fetchData,
    createProduct,
    setSuccess,
    setError,
  };
};
