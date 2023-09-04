import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.scss";

const Forms = () => {
  const {
    register,
    handleSubmit, 
    formState:{errors},
  } = useForm();

  const onSubmit = (data) => {
    send("service_p646iyb", "template_7u1ejbf", data, "cIlIVEvKgYJdBamBf")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        formSuccess();
      }) 
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submitting your query!");
    document.getElementById("queryForm").reset();
  };

  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input type="text" name="from_name" placeholder="Name" 
          {...register("from_name",{
            required:"Name is required"
          })

          }
          
          />
          {errors.from_name?.message && (
                        <p className="error">{errors.from_name?.message}</p>
                    )}
        </div>
        <div className="input-field">
          <input type="text" name="replay_to" placeholder="Email"  {...register("replay_to",{
            required:"Email is required",
            pattern:{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
            }
          })

          } />
           {errors.replay_to?.message && (
                        <p className="error">{errors.replay_to?.message}</p>
                    )}
        </div>
        <div className="input-field">
          <input type="text" name="Phone_number" placeholder="Phone"{...register("Phone_number",{
            required:"Number is required",
            minLength:{
                value:11,
                message:"Phone number is not valid"
            }
          })

          } />
          {errors.Phone_number?.message && (
                        <p className="error">{errors.Phone_number?.message}</p>
                    )}
        </div>
        <div className="input-field">
          <input type="text" name="subject" placeholder="Subject" {...register("subject",{
            required:"Subject is required",
            minLength:{
                value:10,
                message:"Subject 10 line must require"
            }
          })

          } />
           {errors.subject?.message && (
                        <p className="error">{errors.subject?.message}</p>
                    )}
        </div>
        <div className="input-field full-width">
          <textarea
            className="textarea"
            type="text"
            name="message"
            placeholder="Your message"
            {...register("message",{
                required:" Message is required",
                minLength:{
                    value:20,
                    message:"Minumum 10 word  require"
                },
                maxLength:{
                    value:500,
                    message:"Maximum 500 word  allow"
                }
              })
    
              }
          />
           {errors.message?.message && (
                        <p className="error">{errors.message?.message}</p>
                    )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;
