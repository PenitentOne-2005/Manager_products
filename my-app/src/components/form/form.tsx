import type { FC } from "react";
import { useForm } from "react-hook-form";
import type { Form, ProductFormData } from "../../types";
import classes from "./form.module.css";

const CustomForm: FC<Form> = ({
  createProduct,
  setSuccess,
  setError,
  loading,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>();

  const onSubmit = async (formData: ProductFormData) => {
    await createProduct(formData);
    reset();

    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <input
        type="text"
        placeholder="Title"
        {...register("title", { required: "Назва обов’язкова" })}
      />
      {errors.title && (
        <p className={classes.errorMessage}>{errors.title.message}</p>
      )}

      <input
        type="number"
        placeholder="Price"
        {...register("price", { required: "Ціна обов’язкова" })}
      />
      {errors.price && (
        <p className={classes.errorMessage}>{errors.price.message}</p>
      )}

      <input
        type="text"
        placeholder="Category"
        {...register("category", { required: "Категорія обов’язкова" })}
      />
      {errors.category && (
        <p className={classes.errorMessage}>{errors.category.message}</p>
      )}

      <button type="submit" disabled={loading}>
        {loading ? "Завантаження..." : "Create"}
      </button>
    </form>
  );
};

export default CustomForm;
