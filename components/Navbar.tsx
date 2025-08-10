"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io";
import LogoWithText from "./LogoWithText";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { CustomLink } from "./CustomLink";
const Navbar = () => {
  const navItems = [
    { id: 0, name: "Recent Work", link: "/#recent-work" },
    { id: 2, name: "Services", link: "/#services" },
    { id: 3, name: "Testimonials", link: "/#testimonial" },
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#5dd5ff" },
          dark: { "cal-brand": "#5dd5ff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="flex flex-row items-center justify-between py-8 max-w-[83rem] mx-auto">
      <LogoWithText
        textClassName="font-bold text-lg tracking-normal text-zinc-700"
        logoClassName="h-3 w-3 font-bold"
      />
      <div className="md:flex flex-row flex-1 hidden items-center  justify-center space-x-14 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        <DesktopNav navItems={navItems} />
      </div>
      <button
        className="hidden md:block relative px-0.5 py-1 text-zinc-600 text-sm rounded-full font-semibold bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md  hover:shadow-blue-500/30 transition duration-200"
        data-cal-namespace="30min"
        data-cal-link="michaelelliott/30min"
        data-cal-config='{"layout":"month_view","theme":"light"}'
      >
        <span className="w-24 h-10 flex items-center justify-center bg-zinc-100 rounded-full mx-0.5 ">
          Book a Call
        </span>
      </button>
      <div className="flex md:hidden">
        <MobileNav navItems={navItems} />
      </div>
    </div>
  );
};

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);
  const item = {
    exit: {
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.3, deplay: 0.9 },
    },
    show: {
      height: "100vh",
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.2 },
    },
    hidden: { opacity: 0, height: 0 },
  };

  const childItems = {
    hidden: { x: "-2vw", opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#5dd5ff" },
          dark: { "cal-brand": "#5dd5ff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      <IoIosMenu onClick={() => setOpen(!open)} />
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-10  text-xl font-bold text-zinc-600  hover:text-zinc-800 transition duration-200"
          >
            <IoIosCloseCircleOutline
              className="absolute right-8 top-8 h-5 w-5 "
              onClick={() => setOpen(!open)}
            />
            {navItems.map((navItem: any, idx: number) => (
              <CustomLink key={`link=${idx}`} href={navItem.link}>
                <motion.span variants={childItems} className="block">
                  {navItem.name}
                </motion.span>
              </CustomLink>
            ))}
            <motion.button
              variants={childItems}
              data-cal-namespace="30min"
              data-cal-link="michaelelliott/30min"
              data-cal-config='{"layout":"month_view","theme":"light"}'
              className="relative px-0.5 py-1 text-zinc-600 text-sm rounded-full font-semibold bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md  hover:shadow-blue-500/30"
            >
              <span className="w-24 h-10 flex items-center justify-center bg-zinc-100 rounded-full mx-0.5 ">
                Book a Call
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopNav = ({ navItems }: any) => {
  return (
    <>
      {navItems.map((navItem: any, idx: number) => (
        <CustomLink key={`link=${idx}`} href={navItem.link}>
          <span>{navItem.name}</span>
        </CustomLink>
      ))}
    </>
  );
};

export default Navbar;
