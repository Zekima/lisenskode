import Link from 'next/link';
import React from 'react';

const FooterLinks = () => {
    return (
        <div className="flex text-sm text-gray-400 py-6 gap-3">
            <Link href="/personvern">Personvern</Link>
            <a href="mailto:kundeservice@lisenskode.no">Kundeservice</a>
            <Link href="/om-oss">Om Oss</Link>
        </div>
    );
};

export default FooterLinks;
