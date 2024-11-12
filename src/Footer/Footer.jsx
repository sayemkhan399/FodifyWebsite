import { FaFacebookF,FaInstagram ,FaFacebookMessenger } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="mx-24">
<footer className="footer bg-white text-black p-10">
  <div>
    <h1 className="text-4xl font-bold"><span className="text-red-600">Fodi</span>fy</h1>
    <p className="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <div className="flex justify-between items-center gap-6">
    <FaFacebookF className="text-xl rounded-full bg-red-600 text-white" />
    <FaInstagram className="text-xl rounded-full bg-red-600 text-white"/>
    <FaFacebookMessenger className="text-xl rounded-full bg-red-600 text-white"/>
    </div>
  </div>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}
