'use client';
import { useState, useEffect } from 'react';
import { messageSender } from '../firebase';
import Image from 'next/image';


export default function Contact() {
    const [messageSent, setMessageSent] = useState(false);
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        messageSender(state)
            .then(() => {
                setMessageSent(true);
            })
            .catch((error) => {
                console.error('Error sending message:', error);
                alert('Failed to send message');
            });
    };

    useEffect(() => {
        if (state) {
            console.log(state);
        }
    }, [state]);

    return (
        <div className="h-[140vh] md:h-[800px] bg-blue-500 contact-container p-10">
            <Image src='/humo.gif' alt="Humo" width={300} height={300} className="w-[300px] h-[300px]  absolute top-0" />
            <h3 className="text-6xl" id="contact">Contact Form</h3>
            <div className='flex flex-col md:flex-row gap-[15%]  mt-10 mx-2 md:p-10  '>
                <form
                    className="h-[500px] w-[400px] mr-10 md:ml-10 -rotate-6 shadow-yourdear border-l-4 border-b-4 border-white flex flex-col items-center justify-center h-fit bg-blue-600 rounded-lg p-6 space-y-4 "
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-3xl text-white font-semibold relative -mt-10 relative text-left mr-auto ">Get in touch</h3>
                    <label htmlFor="name" className="text-white text-lg font-semibold text-right">Name:</label>
                    <input
                        className="w-full text-white text-xl bg-blue-900 rounded-lg p-3 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 border-l-4 border-b-4 border-white"
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={state.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="text-white text-lg font-semibold">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full text-white text-xl bg-blue-900 rounded-lg p-3 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 border-l-4 border-b-4 border-white"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="message" className="text-white text-lg font-semibold ">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        className="w-full text-white text-xl bg-blue-900 rounded-lg p-3 border border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32 resize-none border-l-4 border-b-4 border-white"
                        value={state.message}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white font-bold py-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-40 border-l-4 border-b-4 border-white border-blue-800"
                    >
                        Send
                    </button>
                </form>
                <section className="-top-5 border-b-2 border-white shadow-yourdear relative  rotate-6 border-l-2 flex flex-col top-52 relative h-fit bg-blue-600 rounded-lg w-full md:w-2/5 p-6 space-y-4 -mt-36">
                    <h3 className="text-3xl text-white  font-semibold relative -mt-10">Contact Info</h3>
                    <Image src='/humo.gif' alt="Humo"  width={300} height={300} className="w-[300px] h-[300px]  absolute -top-4 ml-28   z-[900]" />
                    <p className="text-white text-lg font-semibold z-[910]">Email: 6hY9h@example.com</p>
                    <p className="text-white text-lg z-[920]">
                        Please provide detailed information in your message, including any specific questions or concerns you may have. 
                        After submitting your message, you can expect a response from our team within 24-48 hours. Thank you for reaching out to us.
                    </p>
                <Image src="/mensaje.jpeg" width={100} height={100} alt="Contact" className="w-full h-fit rounded-lg  -rotate-12 border-b-2 border-l-2 border-white z-[930]" />
                </section>
            </div>

            {messageSent ?
                <div className="fixed inset-0 flex items-center justify-center bg-blue-900 md:bg-opacity-50">
                    <div className="bg-blue-600 rounded-3xl p-10 w-2/3 h-2/3 flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center space-x-4">
                            <Image  src="/logoWebnite.png" width={100} height={100} alt="Logo" />
                            <h3 className="text-3xl text-white font-semibold text-yellow-500">Webnite.</h3>
                        </div>
                        <p className="text-white text-3xl text-center">Thank you for contacting us!</p>
                        <p className="text-white text-2xl text-center">We'll get back to you as soon as possible.</p>
                        <button onClick={() => setMessageSent(false)} className="bg-blue-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400">Close</button>
                    </div>
                </div>
            : null}
        </div>
    );
}
