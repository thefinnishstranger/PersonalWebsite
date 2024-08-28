import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Typography } from '@mui/material';
import '../main.css'

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && form.current) {
    emailjs
      .sendForm('service_09rwj9a', 'template_ptjdigb', form.current, {
        publicKey: 'ozg7ccJjhSa3woNe9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          if (form.current) {
            form.current.reset()
          }
          toast('Message sent successfully', {
            duration: 4000,
            position: 'top-right',
            icon: '✅',
            style: {
                boxShadow: '0 4px 8px black',
                padding: '10px',
                color: 'black',
                fontFamily: 'system-ui'
              },
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast('Something went wrong, try again', {
            duration: 4000,
            position: 'top-right',
            icon: '❌',
            style: {
                boxShadow: '0 4px 8px black',
                padding: '10px',
                color: 'black',
                fontFamily: 'system-ui'
              },
          })
        },
      );
  }
}

  return (
    <div id='contact'>
      <Typography variant='h4' align='center' gutterBottom>
        Let's Connect!
      </Typography>
      <form ref={form} onSubmit={sendEmail} className='contactForm'>
        <div>
          <label>Name</label>
          <input type="text" name="user_name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="user_email" required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" required style={{ resize: 'none', height: '150px' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <input type="submit" value="Send" style={{ width: '100%' }} />
        </div>
        <Toaster />
      </form>
    </div>
  );
};

export default ContactPage