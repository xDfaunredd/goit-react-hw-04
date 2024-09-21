import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ resetGallery }) => {
  const initialValues = {
    searchRequest: "",
  };

  function handleSubmit(values, actions) {
    if (values.searchRequest === "") {
      toast.error(`The field is empty. Please enter a request.  `);
      return;
    }
    console.log(values);
    resetGallery(values.searchRequest);
    console.log(values.searchRequest);

    actions.resetForm();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <Field name="searchRequest" className={s.input} />
        <button type="submit" className={s.button}>
          search
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
