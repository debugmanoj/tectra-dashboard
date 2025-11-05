import * as Yup from "yup";

export const doctorSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  specialty: Yup.string().required("Specialty is required"),
  dob: Yup.string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "DOB must be in YYYY-MM-DD format"
    )
    .required("DOB is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact: Yup.string()
    .matches(/^[0-9+\-\s]+$/, "Invalid contact number")
    .min(10, "Contact must be at least 10 digits")
    .required("Contact is required"),
  status: Yup.string()
    .oneOf(["Active", "Inactive"], "Invalid status")
    .required("Status is required"),
});
