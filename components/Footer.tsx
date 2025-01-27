<section className="flexStart footer flex-wrap bg-gray-100 py-10">
    <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
            <Image src="/logo-purple.svg" width={116} height={38} alt="Flexibble logo in purple" />
            <p className="text-start text-sm font-normal mt-5 max-w-xs text-gray-700">
                Flexibble is the world's leading community for creatives to share, grow, and get hired.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {footerLinks.map(({ title, links }, index) => (
                <FooterColumn key={index} title={title} links={links} />
            ))}
        </div>
    </div>
</section>
