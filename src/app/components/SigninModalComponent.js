import Head from "next/head";
// import { Container, Input, Button } from 'nextui';
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { Checkbox, Button } from "@nextui-org/react";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

export default function SigninModalComponent({ children }) {
  return (
    <>
      <div center className="signinContainer flex">
        <div className="bannerContainer hidden md:block">
          <div className="bannerTextContainer">
            <h1 className="BusinessHeader"> Business Texting is easy now</h1>
            <p className="BusinessHeaderSubText">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div className="imageContainer">
            <Image src="/signinGroupImage.svg" width={530} height={450} />
          </div>
        </div>
        <div className="signInSectionWrapper text-center">
          <div className="formSection">
            <div className="logoContainer ">
              <Image src="/wappCloudMobile.svg" width={200} height={100} />
            </div>
            <>{children}</>
          </div>
        </div>
      </div>
    </>
  );
}
