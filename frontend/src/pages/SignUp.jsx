import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className='min-h-[80vh] mt-20'>
      <div className='flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5'>
        {/* left side */}
        <div className="flex-1">
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
          <form className='flex flex-col gap-4'>
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
              />
            </div>
            <div className=''>
              <Label
                className=' text-white dark:text-black'
                value='Your Email'
              />
              <TextInput
                type='text'
                placeholder='name@company.com'
                id='email'
                className=''
              />
            </div>
            <div className=''>
              <Label
                className=' text-white dark:text-black'
                value='Your Password'
              />
              <TextInput
                type='text'
                placeholder='password'
                id='password'
                className=''
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
           Sign Up </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
