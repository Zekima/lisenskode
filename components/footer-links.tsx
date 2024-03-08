import Link from 'next/link';
import React from 'react';

const FooterLinks = () => {
    return (
        <div className="flex text-sm text-gray-400 py-6 gap-3">
            <Link href="/privacy-policy">Personvern</Link>
            <Link href="/terms-and-conditions">Kundeservice</Link>
            <Link href="/om-oss">Om Oss</Link>
        </div>
    );
};

export default FooterLinks;
