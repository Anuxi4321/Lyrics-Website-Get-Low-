document.addEventListener("DOMContentLoaded", function() {
    var lyricsContainer = document.getElementById("lyrics");
    var audio = document.getElementById("audio");
    var spacebarPressed = false;

    var lyricsData = [
        { text: "GET LOW", duration: 5000 },
        { text: "    ", duration: 2000 },
        { text: "Ayy, yo, BRGR on the beat, bish", duration: 3000 },
        { text: "Ako'y young stunna, 'di malabong maging king", duration: 2500 },
        { text: "Walang naging katulad kasi lahat wanna be, uh-huh", duration: 2500 },
        { text: "Upo ka muna 'pag 'yung `O` na dumating", duration: 2000 },
        { text: "Panoorin mo 'yung movie ta's kuhaan mo 'kong pic", duration: 2500 },
        { text: "Okay, slide sa gig, bente ka-tao bumaba", duration: 2500 },
        { text: "Lahat fly panis 'yung gagago kasi swag ko natural", duration: 3000 },
        { text: "Kinuha lang 'yung pera pero 'di na nagtagal", duration: 2500 },
        { text: "Kinubra ko makapal, 'sang taon mo 'yung total", duration: 2500 },
        { text: "Pag ini-slide ko ‘yung right foot sasabay ka", duration: 2300 },
        { text: "Pag inangat ko ‘yung height, tanong kung sasakay ka", duration: 2300 },
        { text: "Iba lipad, sobrang fly, ‘di na ‘ko maasinta", duration: 2200 },
        { text: "Kumikinang sa mata nila ko kakaiba", duration: 2200 },
        { text: "Yo, naka-bling nag-cc-walk, sa bulsa ko libu-libo", duration: 2800 },
        { text: "Kung piring mo ‘ko, ‘di mo pa rin ako mabibilog", duration: 2900 },
        { text: "OSM, ‘di na biro, mga gwapong binatilyo", duration: 2400 },
        { text: "Iba dating malamig ‘to kahit check mo sa resibo", duration: 2400 },
        { text: "Okay, get low, tapos tutok mo mata mo sa’kin", duration: 2400 },
        { text: "Wag le-let go hangga’t hindi ko pa sinasabi", duration: 2400 },
        { text: "From the get go, alam ko lahat ‘tong mangyayari", duration: 2400 },
        { text: "Aking set cold, laging reckless lahat walang tali", duration: 2500 },
        { text: "Money dancin’ lang sa haters like ooh", duration: 2800 },
        { text: "Inis silang lahat ‘si ‘yung swag tinimes two", duration: 2400 },
        { text: "Pera hanggang damit, alam mong laging brand new", duration: 2150 },
        { text: "Matikas kami umasta, baby, what you gon’ do?", duration: 2150 },
        { text: "Baby, what you gon’ do? Ooh", duration: 2430 },
        { text: "Baby, what you gon’ do? Ooh", duration: 2430 },
        { text: "Tell me, what you gon’ do? Ooh", duration: 2400 },
        { text: "Baby, what you gon’?", duration: 1950 },
        { text: "Tell me, what you gon’ do? Huh?", duration: 2250 },
        { text: "Ako’y go getta at kukunin ko lahat at ‘yun ay no limit", duration: 2800 },
        { text: "Sinagad ko sapagkat ito’y aking hilig", duration: 2300 },
        { text: "Tignan mo ‘ko umangat kahit ‘di nabirit", duration: 2300 },
        { text: "Rinig nila akong lahat", duration: 2000 },
        { text: "Mula sa O, napa-woah sila nung pumull-up", duration: 2370 },
        { text: "Yung mga O’s getting dough, dating mga hood rat", duration: 2470 },
        { text: "Yeah, kada show laging sold out, ang daming mulla", duration: 2470 },
        { text: "Nagmatikas sa’kin broke, yabang inuuna", duration: 2280 },
        { text: "Ssob, pera na naman!", duration: 2700 },
        { text: "Okay, Boss Radz, kunin mo ‘yung mga pera niyan", duration: 2550 },
        { text: "Pare, on go lahat, kami ballin’ literal", duration: 2350 },
        { text: "Suot kong porma, ‘di magaya ‘si ‘di regular", duration: 2350 },
        { text: "Galawang OMA pero tingin sa tropa ko’y pantay", duration: 2450 },
        { text: "Hindi na basic ‘yung drip, kumakain sa mamahalin", duration: 2450 },
        { text: "Batang galing ng street, ‘di ko rin sukat akalain", duration: 2550 },
        { text: "Na makakatawid sa buhay na laging nakamig", duration: 2450 },
        { text: "At nakakasabik kung ano pa ang mangyayari sa’min", duration: 2550 },
        { text: "Money dancin’ lang sa haters like ooh", duration: 2800 },
        { text: "Inis silang lahat ‘si ‘yung swag tinimes two", duration: 2400 },
        { text: "Pera hanggang damit, alam mong laging brand new", duration: 2150 },
        { text: "Matikas kami umasta, baby, what you gon’ do?", duration: 2150 },
        { text: "Baby, what you gon’ do? Ooh", duration: 2430 },
        { text: "Baby, what you gon’ do? Ooh", duration: 2430 },
        { text: "Tell me, what you gon’ do? Ooh", duration: 2400 },
        { text: "Baby, what you gon’?", duration: 1950 },
        { text: "Tell me, what you gon’ do? ", duration: 2380 },
        { text: "Baby, what you gon’ do? Ooh", duration: 2350 },
        { text: "Baby, what you gon’ do? Ooh", duration: 2350 },
        { text: "Tell me, what you gon’ do? Ooh", duration: 2200 },
        { text: "Baby, what you gon’?", duration: 1950 },
        { text: "Tell me, what you gon’ do? Huh?", duration: 3000 },
    ];

    var currentIndex = 0;
    var timeRemaining = 0;
    var timer;

    function displayLyrics(index) {
        if (index < lyricsData.length) {
            // Display the current set of lyrics
            lyricsContainer.innerHTML = lyricsData[index].text;

            // Set the time remaining for the current lyrics
            timeRemaining = lyricsData[index].duration;

            // Set a timeout for the duration of the current lyrics
            timer = setTimeout(function() {
                // Move to the next set of lyrics recursively
                displayLyrics(index + 1);
            }, timeRemaining);
        } else {
            // Clear the lyrics after all sets have been displayed
            lyricsContainer.innerHTML = "";
            spacebarPressed = false;
        }
    }

    // Start displaying lyrics with the first set
    displayLyrics(0);

    // Hide default audio controls
    audio.play();

    // Add an event listener to the document for spacebar press
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            if (spacebarPressed) {
                // If already pressed, resume playback
                spacebarPressed = false;
                audio.play();

                // Resume the text timer with the remaining time
                timer = setTimeout(function() {
                    displayLyrics(currentIndex + 1);
                }, timeRemaining);
            } else {
                // If not pressed, pause playback
                spacebarPressed = true;
                clearTimeout(timer); // Clear the timeout to stop lyrics progression
                audio.pause();

                // Update the time remaining for the current lyrics
                timeRemaining -= audio.currentTime * 1000; // Convert seconds to milliseconds
            }
        }
    });
});