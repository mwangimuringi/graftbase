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
                    <a href="/" rel="noopener noreferrer">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterColumn;
