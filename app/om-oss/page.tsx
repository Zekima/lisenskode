import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="max-w-[650px]">
                <Link href="/">← Gå Tilbake</Link>
                <br /><br />
                <p>Velkommen til Lisenskode.no <br /> <br />
                    Vi tilbyr rimelige, lovlige lisenskoder for Windows og Office, i tråd med EØS-lovgivningen. Vår forretningsmodell støtter seg på EU-domstolens beslutning fra 2012 som tillater gjensalg av programvarelisenser, noe som muliggjør salg av brukte, lovlige lisenskoder.
                    Hvis du opplever problemer med aktivering av en produktkode kjøpt hos oss, kontakt vårt kundeservice team. Vi undersøker saken og bytter ut defekte koder uten ekstra kostnad. Kundetilfredshet er vår prioritet, og vi er her for å hjelpe med alle spørsmål eller teknisk støtte du måtte trenge.</p>
                <br />
                <p>Epost: kundeservice@lisenskode.no</p>
                <p>Tlf: 457 89 767</p>
                <br />
                <p>Plastfrihet Christian Alexander Ledaal</p>
                <p>Addresse: Austringen 21, 4365 Nærbø</p>
                <p>Org nr: 824 320 462</p>
            </div>
        </>
    )
}