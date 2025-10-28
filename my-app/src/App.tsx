import type { FC } from "react";
import { useProducts } from "./hooks";
import { ListItems, CustomForm } from "./components";
import classes from "./styles/main.module.css";

const App: FC = () => {
  const { data, loading, error, success, createProduct, setSuccess, setError } =
    useProducts();

  return (
    <div>
      <h2 className={classes.title}>Додати продукт</h2>

      <CustomForm
        createProduct={createProduct}
        setSuccess={setSuccess}
        setError={setError}
        loading={loading}
      />

      {success && <p className={classes.successMessage}>{success}</p>}
      {error && <p className={classes.errorMessage}>{error}</p>}

      <h3 className={classes.title}>Список продуктів</h3>

      {loading && <p className={classes.loading}>Завантаження...</p>}
      {!loading && !error && <ListItems data={data} />}
    </div>
  );
};

export default App;
