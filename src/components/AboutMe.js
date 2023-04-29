import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import resume from "../pages/about/Helal_Resume_.pdf";
import ppr from "../pages/about/testApril.pdf";
import profile from "../images/profile.png";
const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Helal-Resume.pdf";
    link.onload = () => {
      link.remove();
      setDownloading(false);
    };
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="aboutContainer container" >
      <div style={{display: "flex", gap: "1rem", maxWidth: "90%", margin: '0 auto'}}>
        <div
          className="personalImage col-12 col-lg-4"
          ref={ref}
          initial={{ x: "-10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <img src={profile} alt={name} />
        </div>
        <div
          className="personalInfo col-12 col-lg-8"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="contentContainer">
            <h4>Nice to meet you</h4>
            <h5>Mern & Mean Stack Developer who creates amazing digital experiences!</h5>
            <div className="contentDescription">
              <p>{brand}</p>
            </div>
            <div className="infoContainer">
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Name:</span>
                  <p>Helal Abbas</p>
                </div>
                <div className="col-12 col-md-6 info" style={{marginLeft: "50px"}}>
                  <span>Email:</span>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 info">
                  <span>Location:</span>
                  <p>{location}</p>
                </div>
                <div className="col-12 col-md-6 info">
                  <span>Availability:</span>
                  <p>{availability}</p>
                </div>
              </div>
            </div>
            <div className="buttonContainer">
              <button className="btn downloadCV" onClick={handleDownload} disabled={downloading}>
                {downloading ? "Downloading..." : "Download Resume"}
              </button>{" "}
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="aboutContainer container" >
    //   <motion.div
    //     className="personalImage col-12 col-lg-4"
    //     ref={ref}
    //     initial={{ x: "-10vw", opacity: 0 }}
    //     animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
    //     transition={{ duration: 0.4, ease: "easeInOut" }}
    //     style={{display: "inline-block"}}
    //   >
    //     <img src={profile} alt={name} />
    //     </motion.div>
    //     <div >
    //       <div className="contentContainer" style={{display: "inline-block"}}>
    //         <h4>Nice to meet you</h4>
    //         <h5>Frontend Web Developer who creates amazing digital experiences!</h5>
    //         <div className="contentDescription">
    //         <p>{brand}</p>
    //         </div>
    //     </div>
    //     </div>
    // </div>
  );
};

export default AboutMe;
