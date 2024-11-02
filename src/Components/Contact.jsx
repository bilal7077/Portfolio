import React, { useState } from "react";
import { database, ref , set } from "./firebaseConfig"; // Import firebaseConfig
import { v4 as uuidv4 } from "uuid";
import contact from "./Images/Contact (2).png"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a unique ID for each message
      const newMessageId = uuidv4();
      
      // Save the form data to Firebase
      await set(ref(database, 'messages/' + newMessageId), formData);
      alert("Message submitted successfully!");
      
      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting message: ", error);
      alert("Failed to submit the message. Please try again.");
    }
  };

  return (
    


    <div id='contact' className='p-24'>       <h1 className="text-4xl   text-white text-center  font-bold ">Contact Me</h1>
    <p className="text-sm   text-white text-center   mb-8 p-3 ">Hi! Reach out to me for any quries and for hiring.</p>
    
    <div className="flex flex-col md:flex-row justify-center items-center p-10 gap-10 border bg-slate-200 rounded-[40px] border-white py-[10px]">
        
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full max-w-md   ">
        <img  className='h-[80px]  '
           src={contact}
          alt="Contact Us" 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full max-w-md">
        <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input 
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input 
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              required 
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
