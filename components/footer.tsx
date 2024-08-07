import React from "react";

import { Logo } from "./icons";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          className="flex justify-center items-center text-2xl font-semibold text-neutral-700 dark:text-white"
          href="/"
        >
          <Logo />
          Bhutan Wild Cordyceps
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a className="mr-4 hover:underline md:mr-6 " href="/">
              About
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="/">
              Premium
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6 " href="/">
              Campaigns
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="/">
              Blog
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="/">
              Affiliate Program
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="/">
              FAQs
            </a>
          </li>
          <li>
            <a className="mr-4 hover:underline md:mr-6" href="/">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a className="hover:underline" href="/">
            Bhutan Wild Cordyceps™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
