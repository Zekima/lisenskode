import React from "react";
import Link from "next/link";
export default function SalgsbetingelserPage() {

    return (
        <>
            <Link href="/">← Gå Tilbake</Link>
            <br /><br />

            <div className="max-w-[650px] gap-3 flex flex-col">
                <h1 className="text-xl font-semibold">Salgsbetingelser</h1>
                <h3 className="text-lg font-medium">Partene</h3>
                <p>Selger er Platfrihet Christian Alexander Ledaal, organisasjonsnummer 824 320 462, Austringen 21, 4365 Nærbø, e-post: kundeservice@lisenskode.no, telefon: 457 89 767.
                    <br /><br />
                    Kjøper er den personen som foretar bestillingen.
                </p>
                <h3 className="text-lg font-medium">Betaling</h3>
                <p>Betaling for lisenskoder kan gjøres via Vipps. Beløpet for varen trekkes når kjøpet bekreftes.</p>
                <h3 className="text-lg font-medium">Levering</h3>
                <p>Levering av lisenskoder skjer umiddelbart via e-post etter at kjøpet er bekreftet. Det er kjøpers ansvar å sikre at den oppgitte e-postadressen er korrekt. Vi tar ikke ansvar for forsinkelser eller tap som skyldes feilaktige opplysninger.</p>
                <h3 className="text-lg font-medium">Angrerett</h3>
                <p>Kjøperen aksepterer ved kjøp at levering av lisenskoden skjer umiddelbart etter kjøpet er gjennomført, og anerkjenner at angreretten ikke gjelder for dette kjøpet så snart lisenskoden er levert elektronisk. Dette skyldes den digitale naturen av produktet og umiddelbar tilgang til bruken av produktet. For feilaktige eller ikke-fungerende lisenskoder, vennligst se avsnittet om mangel ved varen for informasjon om hvordan slike situasjoner håndteres.</p>
                <h3 className="text-lg font-medium">Mangel ved varen</h3>
                <p>Kjøperen har rett til å reklamere på feilaktige eller ikke-fungerende lisenskoder innen 2 måneder fra feilen ble oppdaget. Reklamasjonen må sendes til kundeservice@lisenskode.no med beskrivelse av problemet og bevis for kjøp. Ved bekreftede feil vil kjøperen bli tilbudt en ny lisenskode uten ekstra kostnader.</p>
                <h3 className="text-lg font-medium">Konfliktløsning</h3>
                <p>Eventuelle tvister skal forsøkes løst i minnelighet mellom partene. Dersom dette ikke fører frem, kan kjøperen ta kontakt med Forbrukerrådet for mekling. Vi følger Forbrukertilsynets anbefalinger for konfliktløsning.</p>

            </div>
        </>
    )
}