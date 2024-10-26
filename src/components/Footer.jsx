import React from "react";

function Footer() {
  return (
    <div className="text-black px-10 py-5 w-full h-fit bg-slate-600 bg-opacity-10">
      <div className=" flex flex-row justify-between">
        <p>Phone: +91-93334063996</p>
        <div>
          <a href="mailto:shrivastavan422@gmail.com" target="blank">
            Gmail: shrivastavan422@gmail.com
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nikhil-kumar-528704165/"
            target="blank"
          >
            Linkedin: nikhil-kumar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
