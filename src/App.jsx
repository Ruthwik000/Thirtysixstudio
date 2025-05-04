import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Circ, Expo } from "gsap/all";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">thirtysixstudios</div>
            <div className="links flex gap-10">
              {[
                "What we do",
                "Who we are",
                "How we give back",
                "Talk to us",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[17rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen  mt-32 px-10">
        {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} key={`section2-canvas-${index}`} />)}
        <h1 className="text-8xl tracking-tighter relative z-10">about the brand</h1>
        <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light relative z-10">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>

        <img
          className="w-[80%] mt-10 relative z-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />

        {/* Content from thirtysixstudio.com */}
        <div className="mt-20 mb-20 relative">
          {showCanvas &&
            data[2].map((canvasdets, index) => <Canvas details={canvasdets} key={`section3-canvas-${index}`} />)}
          <h2 className="text-6xl tracking-tighter mb-10 relative z-10">What We Do</h2>
          <p className="text-3xl leading-[1.6] w-[80%] font-light mb-12">
            We aim to elevate digital production in the advertising space, bringing your ideas to life.
            As a contemporary studio, we use cutting-edge design practices and the latest technologies
            to deliver current digital work.
          </p>
          <p className="text-2xl leading-[1.6] w-[80%] font-light mb-16">
            Our commitment to innovation and simplicity, paired with our agile approach, ensures your
            journey with us is smooth and enjoyable from start to finish.
          </p>

          <h3 className="text-4xl tracking-tighter mb-8">Our Services</h3>
          <p className="text-2xl leading-[1.6] w-[80%] font-light mb-12">
            We provide you with captivating design, interactive animations, reliable code, and immaculate
            project coordination. Whether you need a campaign built from scratch or assistance at a specific
            phase, we've got you covered.
          </p>

          <div className="grid grid-cols-3 gap-10 w-[80%]">
            <div className="service-column">
              <h4 className="text-2xl mb-4 font-medium">Creative</h4>
              <ul className="space-y-2 text-lg">
                <li>Art direction</li>
                <li>Creative direction</li>
              </ul>
            </div>
            <div className="service-column">
              <h4 className="text-2xl mb-4 font-medium">Design</h4>
              <ul className="space-y-2 text-lg">
                <li>Digital Design</li>
                <li>UX/UI Design</li>
                <li>Web Design</li>
                <li>Graphic Design</li>
                <li>3D Design</li>
                <li>Interactive Design</li>
                <li>Illustration Design</li>
                <li>Brand Design</li>
              </ul>
            </div>
            <div className="service-column">
              <h4 className="text-2xl mb-4 font-medium">Animation</h4>
              <ul className="space-y-2 text-lg">
                <li>2D Animation</li>
                <li>3D Animation</li>
                <li>Motion Graphics</li>
                <li>Experimental Animation</li>
                <li>Typography Animation</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 w-[80%] mt-10">
            <div className="service-column">
              <h4 className="text-2xl mb-4 font-medium">Technology</h4>
              <ul className="space-y-2 text-lg">
                <li>Development</li>
                <li>Implementation</li>
                <li>Creative Coding</li>
                <li>Prototyping</li>
                <li>Quality Assurance</li>
                <li>Testing</li>
              </ul>
            </div>
            <div className="service-column">
              <h4 className="text-2xl mb-4 font-medium">Project Delivery</h4>
              <ul className="space-y-2 text-lg">
                <li>Production Strategy</li>
                <li>Project Management</li>
                <li>Team Direction</li>
              </ul>
            </div>
            <div className="service-column">
              <h4 className="text-2xl mb-4 font-medium">Example Products</h4>
              <ul className="space-y-2 text-lg">
                <li>Social Ads</li>
                <li>Websites</li>
                <li>AR Filters and Experiences</li>
                <li>Display Ads</li>
                <li>Digital Out of Home</li>
                <li>Static and Animated Assets</li>
                <li>Digital Installations</li>
                <li>Design Toolkits</li>
              </ul>
            </div>
          </div>

          <div className="mt-20 w-[80%] bg-[#fd2c2a] text-black p-12 rounded-lg">
            <h3 className="text-4xl tracking-tighter mb-6">Got a project in mind?</h3>
            <p className="text-2xl leading-[1.6] font-light mb-8">
              Drop us a line at <a href="mailto:hello@thirtysixstudio.com" className="underline">hello@thirtysixstudio.com</a> or use the form below.
              Not sure what you need? We're here to help you define the undefined. Let's explore all creative
              and technical possibilities together.
            </p>
            <button className="bg-black text-white py-3 px-8 rounded-full text-xl hover:bg-opacity-80 transition-all">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
