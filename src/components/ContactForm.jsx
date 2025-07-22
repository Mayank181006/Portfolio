import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AnimatedButton } from "./AnimatedButton";

const ContactForm = () => {
  const [selected, setSelected] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4zqjqhy",
        "template_0lih95u",
        form.current,
        "T-E1rodfNgpBVfG-t"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Your message has been sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Failed to send, try again!");
        }
      );
  };

  const inputClasses =
    "bg-transparent border-b border-gray-500 focus:outline-none hover:border-b-black lg:hover:border-b-2 lg:hover:placeholder-black cursor-pointer placeholder-gray-400 placeholder:text-center placeholder:text-sm lg:placeholder:text-lg ";

  return (
    <section id="contact" className="text-white py-12 px-6 md:px-8 overflow-hidden">
      <div>
        <h3 className="text-zinc-400 mb-2 px-6.5 lg:text-2xl">
          Have a Query or Project !!
        </h3>

        <div className='skills-title flex gap-2.5 w-full mt-[10vw] lg:mt-[8vw] items-center uppercase font-["bebas"] px-5 text-[18vw] text-transparent leading-10 md:mb-10'>
          <span className="bg-green-500 w-3 h-3 rounded-3xl"></span>
          <span>Contact Me</span>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
          className="space-y-4 bg-white text-black p-6 rounded-xl text-xl md:text-2xl lg:text-5xl flex flex-col lg:space-y-0 lg:whitespace-nowrap"
        >
          <p className="text-zinc-800 mb-8 font-semibold text-sm md:text-xl block">
            Fill In the Form Below
          </p>

          <p className="block lg:inline">
            Hi! My name is{" "}
            <input
              type="text"
              name="name"
              placeholder="Enter your name *"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Enter your name *")}
              className={`${inputClasses} w-48 lg:w-72`}
            />{" "}
          </p>

          <p className="block lg:inline">
            and I work with{" "}
            <input
              type="text"
              name="company"
              placeholder="Company name *"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Company name *")}
              className={`${inputClasses} w-56 lg:w-80`}
            />
            .{" "}
          </p>

          <p className="block lg:inline">
            I'm looking for a partner to help me with{" "}
            <input
              type="text"
              name="goal"
              placeholder="Your goal *"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Your goal *")}
              className={`${inputClasses} w-56 lg:w-80`}
            />
            .{" "}
          </p>

          <p className="block lg:inline">
            With an idea of having that completed{" "}
            <input
              type="text"
              name="date"
              placeholder="Date *"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Date *")}
              className={`${inputClasses} w-32 lg:w-56`}
            />
            .{" "}
          </p>

          <p className="block lg:inline lg:pt-3 lg:pb-2">
            I am hoping to stay around a budget range of{" "}
            <select
              name="budget"
              required
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className={`bg-transparent border-b border-gray-500 focus:outline-none hover:border-black focus:border-black cursor-pointer w-40 lg:w-64 text-sm lg:text-lg ${!selected ? "text-gray-400" : "text-black"}`}>
              <option value="" disabled hidden className="text-gray-400 ">
                Select *
              </option>
              <option value="Below 2000rs" className="text-black lg:text-lg">
                Below 2000rs
              </option>
              <option value="2000rs - 10000rs" className="text-black lg:text-lg">
                2000rs - 10000rs
              </option>
              <option value="10000rs+" className="text-black lg:text-lg">
                10000rs+
              </option>
            </select>
            .{" "}
          </p>

          <p className="block lg:inline">
            You can reach me at{" "}
            <input
              type="email"
              name="email"
              placeholder="your@email.com *"
              required
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "your@email.com *")}
              className={`${inputClasses} w-64 lg:w-96`}
            />{" "}
            to start <br className="hidden lg:block" />the conversation.{" "}
          </p>

          <p className="block lg:inline lg:pt-4">
            Optionally, I'm sharing more:{" "}
            <br className="hidden lg:inline" />
            <input
              type="text"
              name="more"
              placeholder="Any extra details..."
              className={`${inputClasses} w-full lg:w-[60%]`}
            />
          </p>

          <div className="mt-6">
            <AnimatedButton
              type="submit"
              label="Send Email"
              className="px-6 py-2 rounded-full w-fit h-fit"
              bgClass="bg-black"
              defaultText="black"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
