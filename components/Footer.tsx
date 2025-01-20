import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <ul className="footer-links">
    {links.map((link) => (
        <Link href="/" key={link}>{link}</Link>
    ))}
</ul>
    <ul className="flex flex-col gap-2 font-normal">
    {links.map((link, index) => (
        <Link href="/" key={`${link}-${index}`}>{link}</Link>
    ))}
</ul>
  </div>
);

const Footer = () => (
  <section className="flexStart footer">
    <div className="flex flex-col gap-12 w-full">
      <div className="flex items-start flex-col">
        <Image
          src="/logo-purple.svg"
          width={116}
          height={38}
          alt="Flexibble logo in purple"
        />

        <p className="text-start text-sm font-normal mt-5 max-w-xs">
          Flexibble is the world&apos;s leading community for creatives to
          share, grow, and get hired.
        </p>
      </div>
      const Footer = () => {
    const description = "Flexibble is the world's leading community for creatives to share, grow, and get hired.";
    const copyright = "@ 2023 Flexibble. All rights reserved";
    const projectsSubmitted = "projects submitted";

    return (
        <section className="flexStart footer">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image src="/logo-purple.svg" width={116} height={38} alt="Flexibble logo in purple" />
                    <p className="text-start text-sm font-normal mt-5 max-w-xs">
                        {description}
                    </p>
                </div>
                <!-- Other content -->
            </div>
            <div className="flexBetween footer_copyright">
                <p>{copyright}</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">10,214</span> {projectsSubmitted}
                </p>
            </div>
        </section>
    );
};


    <div className="flexBetween footer_copyright">
      <p>@ 2023 Flexibble. All rights reserved</p>
      <p className="text-gray">
        <span className="text-black font-semibold">10,214</span> projects
        submitted
      </p>
    </div>
  </section>
);

export default Footer;
