import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../contexts/TodoContext";
import ContentFooter from "../../ContentFooter";

function NewTodoForm() {
  const { addTodo } = useTodo();

  return (
    <>
      <ContentFooter />
      <hr />
      <Formik
        initialValues={{ text: "" }}
        onSubmit={(values, { resetForm }) => {
          addTodo(values.text);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              id="text"
              name="text"
            />
            <ErrorMessage name="text" component="div" className="error" />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default NewTodoForm;
