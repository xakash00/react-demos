import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Select from "react-select";
import { customStyles } from "./selectStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactForm() {
  const [formData, setFormData] = useState({});
  const renderCounter = useRef(0);

  renderCounter.current = renderCounter.current + 1;
  const schema = Yup.object({
    email: Yup.string()
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter Valid Email Address")
      .required("Email is Required"),
    category: Yup.string().required("Category is Required"),
    date: Yup.string().required("Date is Required"),
    months: Yup.array().min(2).of(Yup.string().required("Check atleast two")),
    password: Yup.string().required("Password is required"),
  }).required();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      category: "",
      months: [],
      password: "",
      date: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <Container>
      <h3>Renders: {renderCounter.current}</h3>
      <div>
        <Box>
          <h2 className="text-center mb-4 text-primary">Signup Form</h2>
          <CustomHtml element={"p"}>hello</CustomHtml>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <Label htmlFor="email" className="form-label">
                Email
              </Label>
              <Input
                {...register("email")}
                type="text"
                id="email"
                placeholder="Enter Email"
                name="email"
                borderColor={errors.email && "#b02a37"}
              />
              {errors.email && (
                <Error className="text-danger">{errors.email?.message}</Error>
              )}
              {errors.email && errors.email.types && (
                <Error className="text-danger">
                  {errors.email.types.required}
                </Error>
              )}
            </div>
            <div className="mb-3">
              <Label htmlFor="password" className="form-label">
                Password
              </Label>
              <Input
                {...register("password")}
                type="password"
                placeholder="Enter Password"
                name="password"
                id="password"
                borderColor={errors.password && "#b02a37"}
              />
              {errors.password && (
                <Error className="text-danger">
                  {errors.password?.message}
                </Error>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="select" className="form-label">
                Select
              </label>
              <Controller
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                  <Select
                    inputRef={ref}
                    value={options.find((c) => c.value === value)}
                    name={name}
                    styles={customStyles}
                    options={options}
                    onChange={(selectedOption) => {
                      onChange(selectedOption.value);
                    }}
                    components={{ IndicatorSeparator: null }}
                  />
                )}
                name={"category"}
              />
              {errors.category && (
                <Error className="text-danger">
                  {errors.category?.message}
                </Error>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <br />
              <Controller
                control={control}
                name="date"
                id="date"
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
              {errors.date && (
                <Error className="text-danger">{errors.date?.message}</Error>
              )}
            </div>
            <Label className="form-label">Select Months</Label>
            <div className="d-flex">
              <div className="p-2">
                <CheckBoxText className="form-label" htmlFor="January">
                  January
                </CheckBoxText>
                <input
                  type="checkbox"
                  name="January"
                  value="January"
                  id="January"
                  placeholder="January"
                  {...register("months")}
                  className="mx-3"
                />
              </div>
              <div className="p-2">
                <CheckBoxText className="form-label" htmlFor="February">
                  February
                </CheckBoxText>
                <input
                  type="checkbox"
                  name="February"
                  value="February"
                  id="February"
                  placeholder="February"
                  {...register("months")}
                  className="mx-3"
                />
              </div>
              <div className="p-2">
                <CheckBoxText className="form-label" htmlFor="March">
                  March
                </CheckBoxText>
                <input
                  type="checkbox"
                  name="March"
                  value="March"
                  id="March"
                  placeholder="March"
                  {...register("months")}
                  className="mx-3"
                />
              </div>
            </div>
            {errors.months && (
              <Error className="text-danger">{errors.months?.message}</Error>
            )}
            <div className=" mt-4">
              <button className="btn btn-primary w-100 me-3" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Box>
        <br />
        {Object.keys(formData).length > 0 && (
          <pre
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(formData, null, 2),
            }}
          />
        )}
      </div>
    </Container>
  );
}
export default ReactForm;

const Input = styled.input`
  transition: border 0.2s ease;
  box-shadow: 0px 0px 7px #ccc;
  border: 0.3px solid #fff;
  font-size: 16.5px;
  border-radius: 5px;
  padding: 6px;
  display: block;
  outline: none;
  width: 100%;
  background-color: none;
  ::placeholder {
    font-size: 15px;
    color: #ccc;
  }
  &&:hover {
    border: 0.3px solid #47ccde;
  }
`;
const Error = styled.div`
  font-size: 15px;
`;
const Label = styled.label`
  font-size: 15px;
`;
const CheckBoxText = styled.label`
  font-size: 16.5px;
`;
const Box = styled.div`
  box-shadow: 0px 0px 7px #ccc;
  padding: 2rem;
  border-radius: 10px;
  width: 50%;
  margin: auto;
  @media only screen and (max-width: 320px) {
    margin: auto;
    box-shadow: none;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    margin: auto;
    box-shadow: none;
    width: 100%;
  }
`;

const CustomHtml = (props) => {
  return <props.element>{props.children}</props.element>;
};
