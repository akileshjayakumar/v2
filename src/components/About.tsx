import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { PiMicrosoftOutlookLogoDuotone } from "react-icons/pi";
import { GrDocumentPdf } from "react-icons/gr";

// Define the SocialLink component
interface SocialLinkProps {
  href: string;
  icon: React.ComponentType;
  className?: string;
  download?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  className,
  download,
}) => {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? "_self" : "_blank"}
      rel={href.startsWith("mailto:") ? "" : "noopener noreferrer"}
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:scale-110 transition-transform ${className}`}
      download={download}
    >
      <Icon />
    </a>
  );
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-10 font-['VT323',monospace] tracking-wider">
        ABOUT
      </h2>
      <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl text-center">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 leading-relaxed tracking-wider text-white-400">
          Hello! I am a Computer Science student at the University of
          Wollongong, specializing in Big Data and Cyber Security. With a strong
          passion for software development, I am always eager to learn new
          technologies and frameworks.
        </p>
        <motion.div
          className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            <SocialLink
              href="https://www.linkedin.com/in/akileshjayakumar/"
              icon={FaLinkedin}
              className="text-blue-600"
            />
            <SocialLink
              href="https://github.com/akileshjayakumar"
              icon={FaGithub}
              className="text-gray-800"
            />
            <SocialLink
              href="https://x.com/StrangeDoctorGo"
              icon={RiTwitterXLine}
              className="text-orange-600"
            />
            <SocialLink
              href="mailto:jayakuma006@mymail.sim.edu.sg"
              icon={PiMicrosoftOutlookLogoDuotone}
              className="text-blue-400"
            />
            <SocialLink
              href="/pdf/AkileshJayakumarResume.pdf"
              icon={GrDocumentPdf}
              className="text-red-600"
              download="AkileshJayakumarResume.pdf"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
