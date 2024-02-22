import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [formData,setFormData]=useState({})
  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({...formData,[e.target.id]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json()
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='min-h-[80vh] mt-20'>
      <div className='flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5'>
        {/* left side */}
        <div className='flex-1'>
          <Link to='/' className='text-4xl font-bold '>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 rounded-lg  text-white'>
              Tech
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            eligendi maxime temporibus saepe impedit laboriosam placeat, veniam
            molestiae officiis
          </p>
        </div>

        {/* right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className=''>
              <Label
                className=' text-white dark:text-black'
                value='Your username'
              />
              <TextInput
                type='text'
                placeholder='username'
                id='username'
                className=''
                onChange={handleChange}
              />
            </div>
            <div className=''>
              <Label
                className=' text-white dark:text-black'
                value='Your Email'
              />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                className=''
                onChange={handleChange}
              />
            </div>
            <div className=''>
              <Label
                className=' text-white dark:text-black'
                value='Your Password'
              />
              <TextInput
                type='password'
                placeholder='password'
                id='password'
                className=''
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up{" "}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
