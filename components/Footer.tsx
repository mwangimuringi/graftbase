import { footerLinks } from "@/constants";

const Footer = () => {
    return (
        <section className="flexStart footer flex-wrap">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex items-start flex-col">
                    <div className="brand-placeholder" />
                    <p className="text-start text-sm font-normal mt-5 max-w-xs">
                        Footer description goes here.
                    </p>
                </div>
                <div className="flex flex-wrap gap-12">
                    {footerLinks.map(({ title, links }, index) => (
                        <FooterColumn key={index} title={title} links={links} />
                    ))}
                </div>
            </div>
        </section>
    );
};
