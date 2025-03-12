import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="footer-links">
            {links.map((link, index) => (
                <li key={`${link}-${index}`}>
                    <Link href="/" rel="noopener noreferrer">
                        <a>{link}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);
const [error, setError] = useState(null);

const getRandomProducts = async () => {
  try {
    const response = await fetch('/api/products/get-random');
    const result = await response.json();

    if (result) {
      setProducts(result);
      return;
    }

    setProducts([]);
  } catch (error) {
    console.error("Error fetching products:", error);
    setError("Failed to load products. Please try again later.");
  }
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="footer-links">
            {links.map((link, index) => (
                <li key={`${link}-${index}`}>
                    <Link href="/" rel="noopener noreferrer">
                        <a>{link}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    const description =
        "Flexibble is the world's leading community for creatives to share, grow, and get hired.";
    const copyright = "@ 2023 Flexibble. All rights reserved";
    const projectsSubmitted = "projects submitted";

    return (
        <section className="flexStart footer flex-wrap bg-gray-100 py-10">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image
                        src="/logo-purple.svg"
                        width={116}
                        height={38}
                        alt="Flexibble logo in purple"
                    />
                    <p className="text-start text-sm font-normal mt-5 max-w-xs text-gray-700">
                        {description}
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {footerLinks.map(({ title, links }, index) => (
                        <FooterColumn key={index} title={title} links={links} />
                    ))}
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>{copyright}</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">10,214</span> {projectsSubmitted}
                </p>
            </div>
            <div className="footer-socials flex gap-4 mt-6">
                <a
                    href="https://www.linkedin.com/company/flexible-inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/linkedin.svg"
                        width={24}
                        height={24}
                        alt="LinkedIn logo"
                    />
                </a>
                <a
                    href="https://twitter.com/flexible_inc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/twitter.svg"
                        width={24}
                        height={24}
                        alt="Twitter logo"
                    />
                </a>
                <a
                    href="https://github.com/flexible-inc"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/github.svg"
                        width={24}
                        height={24}
                        alt="GitHub logo"
                    />
                </a>
                <a
                    href="https://www.instagram.com/flexible_inc/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/icons/instagram.svg"
                        width={24}
                        height={24}
                        alt="Instagram logo"
                    />
                </a>
            </div>
        </section>
    );
};

export default Footer;
