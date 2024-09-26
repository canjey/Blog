import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handlechange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password || formData.username ==''){
      return setErrorMessage("Please Fill out all the fields");
    }
    try {
      const res = await fetch ('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(formData)
      }
      );
      const data = await res.json();
    }
    catch (error) {

    }
  }
  console.log(formData)

  return (
    <div className="min-h-screen mt-10 flex">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="">
          <Link
            to="/"
            className="self-center whitespace-nowrap font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-4xl">
              Essence
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            {" "}
            This is Essence project. You can sign up with your email and
            password
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your username" />
              <TextInput
                type="text"
                placeholder="username"
                id="username"
                onChange={handlechange}
                
              />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="email@gmail.com"
                id="email"
                onChange={handlechange}
                
              />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handlechange}
                
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
