import React from "react";
import Link from "next/link";
export default function PersornvernPage() {

    return (
        <>
            <Link href="/">← Gå Tilbake</Link>
            <br /><br />

            <div className="max-w-[650px] gap-3 flex flex-col">
                <h1 className="text-xl font-semibold">Personvernerklæring</h1>
                <h3 className="text-lg font-medium">Innledning</h3>
                <p>Plastfrihet Christian Alexander Ledaal er forpliktet til å beskytte og respektere ditt personvern. Denne personvernerklæringen forklarer
                    hvordan vi samler inn, bruker, beskytter, og på andre måter behandler dine personopplysninger
                    når du kjøper en lisenskode fra oss, i samsvar med General Data Protection Regulation (GDPR).
                </p>
                <h3 className="text-lg font-medium">Hvilke personopplysninger samler vi inn?</h3>
                <p>For å fullføre kjøpet av lisenskoden, vil vi samle inn følgende personopplysninger:</p>
                <li>E-postadresse</li>
                <h3 className="text-lg font-medium">Formålet med behandlingen</h3>
                <p>Din e-postadresse samles kun inn for å:</p>
                <li>Fullføre kjøpet ved å sende deg lisenskoden.</li>
                <li>Kommunisere med deg om ditt kjøp ved behov.</li>
                <h3 className="text-lg font-medium">Lovlig grunnlag for behandling</h3>
                <p>Behandlingen av din e-postadresse er nødvendig for å fullføre kontrakten du har med Plastfrihet Christian Alexander Ledaal ved kjøpet av lisenskoden.
                    Derfor er ikke samtykke nødvendig for denne spesifikke behandlingen av personopplysninger.</p>
                <h3 className="text-lg font-medium"> Hvordan beskytter vi dine personopplysninger?</h3>
                <p>Plastfrihet Christian Alexander Ledaal tar sikkerheten rundt dine personopplysninger alvorlig. Vi har implementert passende tekniske og organisatoriske tiltak for å beskytte dine personopplysninger mot uautorisert tilgang, bruk, endring, og ødeleggelse.</p>
                <h3 className="text-lg font-medium">Dine rettigheter</h3>
                <p>Under GDPR har du flere rettigheter, inkludert retten til å be om tilgang til, retting av, eller sletting av dine personopplysninger. Du har også rett til å motsette deg visse typer behandling, rett til dataportabilitet, og rett til å klage til en tilsynsmyndighet.
                    <br></br><br></br>For å utøve disse rettighetene, vennligst kontakt oss på:
                    <br></br>
                    kundeservice@lisenskode.no</p>

                <h3 className="text-lg font-medium">Endringer i personvernerklæringen</h3>
                <p>Vi kan oppdatere denne personvernerklæringen fra tid til annen. Den nyeste versjonen vil alltid være tilgjengelig på vår nettside. Vi oppfordrer deg til å regelmessig sjekke denne siden for eventuelle endringer.</p>
                <h3 className="text-lg font-medium">Kontakt Oss</h3>
                <p>Hvis du har spørsmål om denne personvernerklæringen eller vår behandling av dine personopplysninger, vennligst kontakt oss på:
                    <br></br><br></br>
                    kundeservice@lisenskode.no</p>

            </div>
        </>
    )
}