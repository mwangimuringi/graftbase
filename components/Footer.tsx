import Image from "next/image";

const Footer = () => {
    const copyright = "@ 2023 Flexibble. All rights reserved";
    const projectsSubmitted = "projects submitted";

    return (
        <section className="flexStart footer flex-wrap">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <Image
                        src="/logo-purple.svg"
                        width={116}
                        height={38}
                        alt="Flexibble logo in purple"
                    />
                    <p className="text-start text-sm font-normal mt-5 max-w-xs">
                        Flexibble is the world's leading community for creatives to share, grow, and get hired.
                    </p>
                </div>
                <div className="flex flex-wrap gap-12">
                    {footerLinks.map(({ title, links }, index) => (
                        <FooterColumn key={index} title={title} links={links} />
                    ))}
                </div>
            </div>
            <div className="flexBetween footer_copyright">
                <p>{copyright}</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">10,214</span>{" "}
                    {projectsSubmitted}
                </p>
            </div>
        </section>
    );
};

export default Footer;
