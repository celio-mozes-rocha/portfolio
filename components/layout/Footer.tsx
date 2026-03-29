import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {

  return (
    <footer className="text-xs sm:text-sm text-gray-500">
      <div className="flex gap-4 mb-3">
        <a
          href="https://github.com"
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
          href="mailto:celio.rocha@free.fr"
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
    </footer>
  )
}