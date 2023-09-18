const products = [
    {
        name: "Gammaldags Nougat",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/triumf_gammaldags_nougat.png",
        description: "Krämig vaniljglass med knäck och gammaldags mandelnougat. En riktig höjdare för finsmakaren. Från Glassfabriken i Sävedalen.",   
        tag:
            "Skopglass",
    },
    {
        name: "Blåbär",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/triumf_blabar.png",
        description: "En härligt god blåbärsglass gjord på färsk svensk grädde från Skaraslätten med en frisk blåbärssylt. Från Glassfabriken i Sävedalen.",   
        tag:
            "Skopglass",
    },
    {
        name: "Apelsin",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/triumf_apelsin.png",
        description: "Len apelsinglass med en smak av solmogna medelhavsapelsin marmorerad med en smakrik apelsinsås. Gjord på färsk svensk grädde. Från Glassfabriken i Sävedalen.",   
        tag:
            "Skopglass",
    },

    {
        name: "Himmelsk Röra",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/triumf_himmelsk_rora.png",
        description: "En len smörkolaglass gjord på färsk svensk grädde med en himmelsk smak av ljubrun smörkola, smakrik chokladrippel och mini marshmallows. Från Glassfabriken i Sävedalen.",   
        tag:
            "Skopglass",
    },

    {
        name: "Salt Kolacrunch",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/triumf_salt_kola_crunch.png",
        description: "En riktigt underbart god kolaglass gjord på färsk svensk grädde med krispiga kolabitar och en salt karamellrippel. En av årets glassnyheter från Glassfabriken i Sävedalen.",   
        tag:
            "Skopglass",
    },

    {
        name: "Hallon Saltlakrits",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/triumf_hallonsaltlakrits.png",
        description: "En oslagbar smakkombination med en somrig hallonglass gjord på färsk svensk grädde kombinerat med lakritsälskarens favorit, en saltlakritssås. Från Glassfabriken i Sävedalen.",   
        tag:
            "Skopglass",
    },

    {
        name: "Päron Laktosfri",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/04/triumf_paron_laktosfri-1.png",
        description: "Krämigt god päronglass gjord på färsk svensk laktosfri grädde. Bäst av allt. Den är laktosfri. Från Glassfabriken i Sävedalen.",   
        tag:
            "Skopglass",
    },





    {
        name: "Nöt-Crème",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2023/03/notcreme_singel.jpg",
        description: "En härlig hasselnötsglass med Nöt-Crème-fyllning doppad i choklad med hasselnötskross. Från Glassfabriken i Sävedalen.",   
        tag:
            "Pinnglass",
    },
    
    {
        name: "Nick’s Strawberry White",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2022/02/nicks_white_chocolate.jpg",
        description: "Vaniljglass med jordgubbssås, doppad i lyxig vit choklad och frystorkade jordgubbar. Utan tillsatt socker.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Ananas Split",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/ananas_split.jpg",
        description: "En len vaniljglass överdragen med en läskande ananasisglass av fruktjuice och doppad i toppen med lite choklad. En glassklassiker sedan 1973 från Triumf Glass.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Sitting Bull",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/70028_sitting_bull_1230x1230.jpg",
        description: "En len vaniljglass blandas med somrig jordgubbsglass som doppas i ett färgsprakande strössel. En glassklassiker från Triumf Glass.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Salmiakki",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/salmiakki_1230x1230.png",
        description: "Salmiakki är en favorit hos många lakritsälskare. En len vaniljglass gjord på färsk grädde blandas med en klassisk salmiaksås och för att sedan doppas i ett salmiaköverdrag.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Smarties",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/31017320_smarties_1230x1230.jpg",
        description: "Många barns favoritglass. Vaniljglass blandad med hackade minismarties i en praktisk och färgglad popup. På toppen finns också extra minismarties.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Dolce",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2023/02/dolce_ver2.jpg",
        description: "En krämig vaniljglass med mycket kolasås, toppad med knäckbitar – den har alla rätt helt enkelt!",   
        tag:
            "Pinnglass",
    },

    {
        name: "Lion King Size",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2020/01/07517_lion_king_size.jpg",
        description: "Lion King Size är den största glassen på årets glasskarta. En strut med choklad- och karamellgräddglass tillsammans med en kärna av Lions karaktäristiska karamellsås doppad i mjölkchoklad och vetekrisp.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Dumle",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/01/dumleglass.jpg",
        description: "En glasstrut med Dumle är mångas favorit. En len kolaglass med kolasås med äkta Dumlekaraktär i en frasig våffla doppad i choklad.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Snickers White",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2023/02/snickers_white_singelpack.jpg",
        description: "Ännu en Snickers-favorit  i frusen tappning! Fylld med jordnötter, karamell, en krämig kärna och överdrag av vit choklad.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Sandwich",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/triumf_glass_jordgubbstopp_laktosfri.jpg",
        description: "Sandwich är en god vaniljglass gjord på färsk svensk grädde mellan två goda chokladkex. En glassklassiker sedan 1986 från Triumf Glass.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Mars",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/03/mars-1.jpg",
        description: "Klassisk chokladbar i glassig tappning. En krämig gräddglass med ett tjockt mjukt täcke kola och ett skal av choklad.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Snickers",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/03/snickers.jpg",
        description: "Snickersglass är en favorit hos många. En klassisk chokladbar i glassig tappning. Det är en krämig gräddglass med jordnötter och ett tjockt täcke med seg mjuk kolasås samt ett skal av choklad.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Kaninis",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2023/03/kaninis_stycksak.jpg",
        description: "Lisebergskaninerna har tillsammans med vår produktutvecklare tagit fram den godaste tuttifrutti-isglassen – med mindre socker! Från Glassfabriken i Sävedalen.",   
        tag:
            "Pinnglass",
    },


    {
        name: "Skruven",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/03/skruven.jpg",
        description: "En mycket populär isglass. Fyra goda tropiska smaker på naturlig fruktjuice. Mango, persika, passionsfrukt och ananas i frusen glädje blir allas favorit.",   
        tag:
            "Pinnglass",
    },


    {
        name: "Watermelon",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/watermelon_singel_produktbild.jpg",
        description: "En läskande isglass formad som en melonskiva med ett syrlig “skal” och kärnor av choklad. Favorit år efter år på Triumf Glass glasskarta.",   
        tag:
            "Pinnglass",
    },


    {
        name: "Farbror Arnes Nötkola",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2023/02/fa_notkola.jpg",
        description: "Läcker vaniljgräddglass med salt kolasås, doppad i krispig mjölkchoklad och rostade macadamianötter",   
        tag:
            "Pinnglass",
    },


    {
        name: "Farbror Arnes Brynt Smör",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2022/02/farbror_arnes_brynt_smor.jpg",
        description: "Läcker gräddglass med brynt smör, doppad i gyllene choklad och karamellcrumbs. En spännande trendig smak.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Farbror Arnes Saltlakrits",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2021/02/70030_farbror_arnes_saltlakrits.jpg",
        description: "En len vaniljglass gjord på färsk grädde med lakritsås, doppad i vit choklad och salta lakritscrumbs. En sötsalt smaksensation helt enkelt.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Farbror Arnes Kladdkaka",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2020/01/70023_farbror_arnes_kladdkaka.jpg",
        description: "En läcker chokladgräddglass med en kraftig kärna av Kladdkaka doppad i krispig mjölkchoklad.",   
        tag:
            "Pinnglass",
    },

    {
        name: "Farbror Arnes Gräddkola",
        imageUrl:
            "https://www.triumfglass.se/wp-content/uploads/2019/05/farbror_arnes_graddkola.jpg",
        description: "En krämig vaniljglass gjord på färsk grädde med virvlar av fyllig kolasås i glassen och är dubbeldoppad i len mjölkchoklad och gräddkola. Triumf Glass grundarens egen favorit.",   
        tag:
            "Pinnglass",
    }

];

module.exports = products;