import Head from "next/head";
// import { Container, Input, Button } from 'nextui';
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import { Open_Sans } from "next/font/google";
import { Checkbox } from "@nextui-org/checkbox";
const open_sans = Open_Sans({ subsets: ["latin"] });
import Divider from "../components/Divider";

export default function RegisterContent() {
  return (
    <div className="signInTotalContent register">
      <h1 className="text-3xl font-semibold mb-4 mt-8 signinTitle">
        Create your Account
      </h1>

      <form className="text-left form-container">
        <Input
          label="Full Name"
          placeholder="Enter your Full Name"
          className="formInput"
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          className="formInput"
          type="email"
        />
        <Input
          label="Phone"
          placeholder="+91 000-000-0000"
          className="formInput"
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          className="formInput"
        />
        <div className="forgotWrapper flex justify-between">
          <Checkbox
            className="remember"
            defaultSelected
            size="sm"
            radius="sm"
            color="primary"
          >
            Remember me
          </Checkbox>
          <Link href="#" className="forgotLinkText">
            {" "}
            forgot passsword{" "}
          </Link>
        </div>
        <Button color="success" className="signInButton">
          Create
        </Button>
        <p>
          {" "}
          By Submit you are accepting the{" "}
          <Link href="#" className="signUp">
            Term & Condition
          </Link>
        </p>
      </form>

      <Divider>or</Divider>
      <div className="socialContainer flex justify-space-around">
        <Image src="/googleLogo.svg" width={200} height={100} />
        <Image src="/googleLogo.svg" width={200} height={100} />
      </div>
      <div className="redirectLinkText">
        Already have an Account?{" "}
        <Link href="#" className="signUp">
          Sign in
        </Link>{" "}
      </div>
    </div>
  );
}
