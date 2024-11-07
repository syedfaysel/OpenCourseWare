import React from "react";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="bg-base-200">
      <footer className="footer text-base-content p-10 max-w-screen-xl mx-auto">
        <aside>
          <h1 className="text-4xl font-signature text-primary font-bold flex-inline">
            <Link className="flex" href="/" rel="noreferrer">
              <span className="text-accent">
                <BsArrowUpRightCircleFill className="inline" /> ocw
              </span>
              X
            </Link>
          </h1>
          <p>
            ocwX | Opencourseware
            <br />
            Making education accessible to everyone
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Links</h6>
          <a className="link link-hover">Platform</a>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Github</a>
        </nav>
        <nav>
          <h6 className="footer-title">More</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Contribution</a>
          <a className="link link-hover">Credits</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;
