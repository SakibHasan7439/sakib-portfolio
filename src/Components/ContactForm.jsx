import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./skills.css"
import toast from 'react-hot-toast';

const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            'service_llh84r8',
            'template_owviag6', form.current, {
            publicKey: 'pXqDxRSv-4s2nb04G',
          })
          .then(
            () => {
              toast.success('Email Sent Successfully!');
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <form ref={form} onSubmit={sendEmail} className='p-4'>
        <div className='w-full mb-2'>
            <label>Name</label>
            <input type="text" className='text-white outline-none border-b-2 bg-transparent w-full mb-2' name="user_name" />
        </div>
        <div className='w-full mb-2'>
            <label>Email</label>
            <input type="email" className='text-white outline-none border-b-2 bg-transparent w-full mb-2' name="user_email" />
        </div>
        <label>Message</label>
        <textarea className='text-white w-full outline-none rounded-md border-2 bg-transparent mb-2' name="message" />
        <input type="submit" className='px-4 md:px-6 md:py-3 cursor-pointer py-2 rounded-md border-2 shadow-md shadow-[#3944bc] border-[#3944bc] hover:bg-[#3944bc] onHover text-white hover:text-black' value="Send" />
      </form>
    );
};

export default ContactForm;