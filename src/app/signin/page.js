import Head from 'next/head';
// import { Container, Input, Button } from 'nextui';
import {Input} from "@nextui-org/input";
import Image from 'next/image';
import {Checkbox, Button} from "@nextui-org/react";
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans_Semi_Bold({subsets: ['latin']})

export default function Signin() {
  return (
    <div className={open_sans.className}>

      <div center className='signinContainer flex'>
        <div className='bannerContainer hidden md:block'>

        </div>
        <div className='formSection text-center'>
          <div className='logoContainer '>

            <Image 
              src='/wappCloudMobile.svg'
              width={200}
              height={100}
            />
          </div>
            
          <div>
            <title>Sign In to your Acccount</title>
          </div>
          <h1 className="text-3xl font-semibold mb-4 mt-8 signinTitle">Sign In to your Account</h1>

          <form className="space-y-4 text-left form-container">
            <Input label="UserName" placeholder="Enter your UserName" />
            <Input label="Password" type="password" placeholder="Enter password" />
            <div className='forgotWrapper flex justify-between'>
              <Checkbox radius="none">None</Checkbox>
              <a href='#' > forgot passsword </a>
            </div>
            <Button color="success">
              Signin
            </Button>
          </form>
          <div>divider</div>
          <div className='socialContainer flex justify-space-around'>

            <Image 
              src='/googleLogo.svg'
              width={200}
              height={100}
            />
            <Image 
              src='/googleLogo.svg'
              width={200}
              height={100}
            />

          </div>
          <div>No Account Yet Signup</div>

        </div>
      </div>
    </div>
  );
}