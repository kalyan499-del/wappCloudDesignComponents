import Head from "next/head";
// import { Container, Input, Button } from 'nextui';
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { Open_Sans } from "next/font/google";
import { Checkbox } from "@nextui-org/checkbox";
const open_sans = Open_Sans({ subsets: ["latin"] });
import Divider from "../components/Divider";

export default function VerificationSuccess() {
  return (
    <div className="signInTotalContent verificationSuccess">
      <h1 className="text-3xl font-semibold mb-4 mt-8 signinTitle">
        Thanks for creating WappCloud account!{" "}
      </h1>

      <form className="text-left form-container">
        <p className="infoText">
          {" "}
          We sent a verification email to you at{" "}
          <Link href="#" className="email" emailTo="Jones.m@gmail.com">
            ‘Jones.m@gmail.com’
          </Link>
          . Please check your inbox and click ‘Verify Email’ button to validate
          your email address.
        </p>
        <Button color="success" className="signInButton">
          Resend Verification Email
        </Button>
      </form>

      <div className="redirectLinkText">
        Already verified an account. Take me to{" "}
        <Link href="#" className="signUp">
          Sign in
        </Link>{" "}
      </div>
    </div>
  );
}
