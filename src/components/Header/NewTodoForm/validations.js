import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  text: Yup.string(),
});

export default validationSchema;
