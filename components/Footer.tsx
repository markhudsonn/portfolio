import { FaGithub} from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";

function Footer() {
    return (
      <footer className="flex justify-center items-center h-16 text-primary">
        <GoRepoForked className="w-5 h-5" />
        <p>Portfolio forked from <a className="underline" href="https://b-r.io/">Brian Ruiz</a></p>
      </footer>
    );
  }
  
  export default Footer;