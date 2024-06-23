import Head from 'next/head';
// import { Container, Input, Button } from 'nextui';
import {Input} from "@nextui-org/input";
import Image from 'next/image';
import {Button, Link} from "@nextui-org/react";
import { Open_Sans, c } from 'next/font/google';
import {Checkbox} from "@nextui-org/checkbox";
import SigninModalComponent from '../components/SigninModalComponent';
// import ForgotPassword from './ForgotPassword';
import VerificationSuccess from './VerificationSuccessContent';

const open_sans = Open_Sans({subsets: ['latin']})

export default function Signin() {
  return (
    <div className={open_sans.className}>
      <SigninModalComponent>
        <VerificationSuccess></VerificationSuccess>
      </SigninModalComponent>
    </div>
  );
}