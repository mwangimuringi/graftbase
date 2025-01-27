import Image from "next/image";

const FooterSocials = () => (
    <div className="footer-socials">
        <a href="https://www.linkedin.com/company/flexible-inc/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn logo" />
        </a>
        <a href="https://twitter.com/flexible_inc" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/twitter.svg" width={24} height={24} alt="Twitter logo" />
        </a>
        <a href="https://github.com/flexible-inc" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/github.svg" width={24} height={24} alt="GitHub logo" />
        </a>
        <a href="https://www.instagram.com/flexible_inc/" target="_blank" rel="noopener noreferrer">
            <Image src="/icons/instagram.svg" width={24} height={24} alt="Instagram logo" />
        </a>
    </div>
);

export default FooterSocials;
