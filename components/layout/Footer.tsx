import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { FooterProps } from "@/app/types/footerProps";


export default function Footer({ className = "" }: FooterProps) {

  return (
    <footer className={`text-xs sm:text-sm text-gray-500 ${className} `}>
      <div className="flex gap-4 mb-3">
        <a
          href="https://github.com/celio-mozes-rocha"
          className="hover:text-white"
          target="_blank"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/c%C3%A9lio-mozes-rocha-827480333"
          className="hover:text-white"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:contact@celio-mozes.fr"
          className="hover:text-white"
          target="_blank"
        >
          <HiOutlineMail size={30} />
        </a>
      </div>
      <hr />
      <br />
      <p>© {new Date().getFullYear()} Célio MOZES ROCHA</p>
      <p className="text-xs text-gray-500 mt-2">
        Deploy: {process.env.NEXT_PUBLIC_BUILD_DATE}
        {" | "}
        Commit: {process.env.NEXT_PUBLIC_GIT_COMMIT}
      </p>
      <p className="text-xs text-gray-500 mt-2">
        Built with <span className="text-sky-400">Next.js</span> • Deployed on my <span className="text-sky-400">VPS</span>
      </p>
    </footer>
  )
}