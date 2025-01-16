"use client";
import React, { useState } from "react";

import { Button } from "@nextui-org/react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required!";
    }
    if (!values.country) {
      errors.country = "Country is required!";
    }
    if (!values.message) {
      errors.message = "Question is required!";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Validate the form and set errors
    const errors = validate(emailForm);
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      send(
        "service_3oe54re", // Replace with your EmailJS service ID
        "template_llfcchh", // Replace with your EmailJS template ID
        emailForm,
        "-DxzfYK1cMR1OleO2" // Replace with your EmailJS public key (user ID)
      )
        .then((response) => {
          setLoading(false); // Stop loading
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond to your inquiry shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              country: "",
              message: "",
            });
          });
        })
        .catch((err) => {
          console.error("Error:", err);
          Swal.fire({
            icon: "error",
            text: "Something went wrong!",
          }).then(() => {
            setEmailForm({
              name: "",
              phone: "",
              email: "",
              country: "",
              message: "",
            });
            setLoading(false); // Stop loading
          });
        });
    } else {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center w-full gap-4 mb-6 md:flex-row">
          <div className="w-full md:flex-1">
            <p className="text-white">Enter Name</p>
            <input
              className="bg-[#181818] border border-[#181818] text-white text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
              placeholder="Abu Kawsar"
              required
              autoComplete="off"
              type="text"
              name="name"
              value={emailForm.name}
              onChange={(event) =>
                setEmailForm({
                  ...emailForm,
                  name: event.target.value,
                })
              }
            />
            <span className="text-red-600">{formErrors.name}</span>
          </div>
          <div className="w-full md:flex-1">
            <p className="text-white">Phone</p>
            <input
              className="bg-[#181818] border border-[#181818] text-white text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
              placeholder="+1 408 XXX XXXX"
              required
              type="text"
              autoComplete="off"
              name="phone"
              value={emailForm.phone}
              onChange={(event) =>
                setEmailForm({
                  ...emailForm,
                  phone: event.target.value,
                })
              }
            />
            <span className="text-red-600">{formErrors.phone}</span>
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-4 mb-6 md:flex-row">
          <div className="w-full md:flex-1">
            <p className="text-white">Enter Email</p>
            <input
              className="bg-[#181818] border border-[#181818] text-white text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
              placeholder="example@gmail.com"
              required
              autoComplete="off"
              type="email"
              name="email"
              value={emailForm.email}
              onChange={(event) =>
                setEmailForm({
                  ...emailForm,
                  email: event.target.value,
                })
              }
            />
            <span className="text-red-600">{formErrors.email}</span>
          </div>
          <div className="w-full md:flex-1">
            <p className="text-white">Country</p>
            <input
              className="bg-[#181818] border border-[#181818] text-white text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-3 placeholder:text-lg pl-5 mt-3"
              placeholder="USA"
              required
              autoComplete="off"
              type="text"
              name="country"
              value={emailForm.country}
              onChange={(event) =>
                setEmailForm({
                  ...emailForm,
                  country: event.target.value,
                })
              }
            />
            <span className="text-red-600">{formErrors.country}</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-white">Brief Description of Your Project</p>
          <textarea
            rows={6}
            id="message"
            className="bg-[#181818] text-white border border-[#181818] text-lg rounded-lg focus:ring-black focus:border-black block w-full p-2.5 py-4 placeholder:text-lg pl-5 mt-3"
            placeholder="Write here..."
            required
            name="message"
            value={emailForm.message}
            onChange={(event) =>
              setEmailForm({
                ...emailForm,
                message: event.target.value,
              })
            }
          />
          <span className="text-red-600">{formErrors.message}</span>
        </div>
        {loading ? (
          <Button
            isLoading
            className="flex items-center justify-center px-2 py-2.5 mb-2 text-sm font-medium text-white border border-white bg-none hover:bg-primary hover:border-primary hover:text-black md:text-lg md:px-8 me-0 md:me-6 rounded-md bg-transparent"
            radius="sm"
            size="lg"
          >
            Sending...
          </Button>
        ) : (
          <Button
            className="group flex items-center justify-center px-2 py-2.5 mb-2 text-sm font-medium text-white border border-white bg-none hover:bg-primary hover:border-primary hover:text-black md:text-lg md:px-8 me-0 md:me-6 rounded-md bg-transparent"
            radius="sm"
            size="lg"
            type="submit"
          >
            Send Message{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-2 text-white group-hover:text-black gr duration-300 size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
