// Templates
const templImg = document.getElementById("template-img");
const templContent = document.getElementById("template-content");
const templTitle = document.getElementById("template-title");
const templTxt = document.getElementById("template-txt");

const firstDiv = document.getElementById("first");

const content = {
    "brzoza": {
        "title": "Biała Pani i Głos Duszy",
        "image_url": "./brzoza.jpg",
        "content": [
            {"text": "Brzoza w tradycji słowiańskiej i staropolskiej była drzewem pośredniczącym między światami - miała moc chronienia żywych oraz kojenia tych którzy już odeszli. Wierzono, że jej unikatowa wśród drzew, biała kora odbija światło dusz, a wiotkie gałęzie stanowią dla tych delikatnych bytów schronienie, zaś szum liści jest ich głosem. Ponadto wykorzystywano brzozę w codziennym życiu - z jej właściwości leczniczych i poprawiających urodę. Odwar z liści lub kory był stosowany odtruwająco i wzmacniająco, a także do wybielania piegów. Ponadto pito pozyskiwany wiosną sok brzozowy, który jest świetnym izotonikiem. Brzoza była uważana za drzewo święte, nie tylko z uwagi na swą wyjątkową urodę ale również za siłę życia i zdolność przetrwania w najtrudniejszych warunkach.", "tags": [] },
            {"text": "Usiądź na kłodzie i wsłuchaj się w odgłosy natury - to tu zaduma spotyka się z codziennością. Jeśli usłyszysz szelest jej liści to znak, że duchy opiekuńcze tego miejsca Cię witają.", "tags": [] }
        ]
    },
    "film": {
        "title": "",
        "image_url": "",
        "content": [
            {"text": "\"Musimy być chciwi na życie. Mówią, że chciwość jest wadą, ale to przestarzałe. Chciwość jest cnotą, zwłaszcza chciwość na cieszenie się życiem.\" – Pisarz (spotkany przez Watanabe)", "tags": ["citation"]},
            {"text": "Film Ikiru (Piętno Śmierci) z 1952 roku w reżyserii Akiry Kurosawy to głęboka medytacja nad życiem, śmiercią i sensem istnienia.  To wzruszający dramat o umierającym urzędniku, który po otrzymanej diagnozie choroby nowotworowej postanawia nadać sens swojemu pustomu dotąd życiu. Kanji Watanabe - główny bohater -  po latach pracy w biurze, uświadamia sobie samotność i jałowość swojego dotychczasowego życia i postanawia w jego końcówce nadać mu prawdziwy sens. Decyduje się wybudować plac zabaw dla dzieci, walcząc z biurokracją i biernością urzędników.", "tags": []},
            {"text": "Film jest egzystencjalnym rozważaniem o sensie życia i śmierci, samotności w tłumie oraz moralnym obowiązku działania.  To jeden z najwybitniejszych filmów Kurosawy (tzw. gendai-geki, czyli dramat współczesny), który w leniwy, lecz głęboki sposób pokazuje przemianę wewnętrzną człowieka. Uznawany jest za jeden ze 100 najlepszych filmów światowego kina.", "tags": []}
        ]
    }
};

function LoadContent()
{
    const contentID = new URL(window.location.href).searchParams.get("a");

    const toLoad = content[contentID];

    console.log(toLoad);

    if(!toLoad)
    {
        firstDiv.innerHTML = "<p style=\"color: red; font-weight: bold;\">Błąd przy ładowaniu strony</p>";
        return;
    }

    if(toLoad["image_url"] && toLoad["image_url"].length > 0)
    {
        let cl = document.importNode(templImg.content, true);
        cl.querySelector("img").src = toLoad["image_url"];
        firstDiv.appendChild(cl);
    }

    const cl = document.importNode(templContent.content, true);
    const contentDiv = cl.querySelector("div");

    if(toLoad["title"] && toLoad["title"].length > 0)
    {
        let cl = document.importNode(templTitle.content, true);
        cl.querySelector("div").textContent = toLoad["title"];
        contentDiv.appendChild(cl);
    }

    for(const c of toLoad["content"])
    {
        let cl = document.importNode(templTxt.content, true);
        const d = cl.querySelector("div");
        d.textContent = c["text"];

        for(const t of c["tags"])
        {
            d.classList.add(t);
        }

        contentDiv.appendChild(cl);
    }

    firstDiv.appendChild(cl);
}

document.onload += LoadContent();