import { useRef } from "react";
import SocialLinks from "../components/SocialLinks";
import "../styles/contactPage.css";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert('Message sent successfully')
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert('Cannot Send message! Try Again!')
        },
      );
  };

  return (
    <section id="contact" className="h-auto md:w-screen text-gray-800">
      <div className="gr flex flex-col gap-10 md:flex-row m-10 p-9 md:m-40 md:p-20 md:gap-45 rounded-[8px] ">
        <div className="flex flex-col md:text-center gap-15 md:gap-24 md:w-1/2">
          <h2 className="page-tag text-center text-[35px] md:text-6xl font-semibold">Get In Touch</h2>
          <p className=" text-[15px] md:text-2xl w-auto">
            You can give me feedbacks and appreciation for my work through this
            section it would be very helpful!!!
          </p>
          <SocialLinks text="Follow me on:" />
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col md:w-1/2 gap-2">
          <label>Name*</label>
          <input
            className="inp"
            type="text"
            placeholder="Your Name..."
            name="user_name"
            required
          />
          <label>Email*</label>
          <input
            className="inp"
            type="email"
            placeholder="Your Email..."
            name="user_email"
            required
          />
          <label>Message*</label>
          <textarea className="inp" placeholder="Your Message..." name="message" required></textarea>
          <button
            type="submit"
            value="Send"
            className="btn h-10 text-amber-50 bg-gray-950 rounded-[5px] cursor-pointer"
          >
            Send message
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;
