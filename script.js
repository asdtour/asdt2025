// --- DATA ---
const cityStripeLinks = {
    "Houston": [
        "https://buy.stripe.com/00w8wP6te2YgdsB8rR0oM09",
        "https://buy.stripe.com/8x214n2cY6as1JTgYn0oM0a",
        "https://buy.stripe.com/cNi28r7xi9mE2NXazZ0oM0b",
        "https://buy.stripe.com/9B69AT7xifL20FPcI70oM0c",
        "https://buy.stripe.com/00w14nbNy2Yg1JTbE30oM0d",
        "https://buy.stripe.com/eVq14nbNy2Yg1JTbE30oM0d",
        "https://buy.stripe.com/14A7sL2cYfL20FPcI70oM0c",
        "https://buy.stripe.com/eVq6oH9Fq7ew1JT23t0oM08",
        "https://buy.stripe.com/00w8wP6te2YgdsB8rR0oM09",
        "https://buy.stripe.com/8x214n2cY6as1JTgYn0oM0a",
        "https://buy.stripe.com/cNi28r7xi9mE2NXazZ0oM0b",
        "https://buy.stripe.com/9B69AT7xifL20FPcI70oM0c",
        "https://buy.stripe.com/00w14nbNy2Yg1JTbE30oM0d",
        "https://buy.stripe.com/eVq14nbNy2Yg1JTbE30oM0d",
        "https://buy.stripe.com/14A7sL2cYfL20FPcI70oM0c",
        "https://buy.stripe.com/eVq6oH9Fq7ew1JT23t0oM08"
    ],
    "San Antonio": [
        "YOUR_LINK_FOR_San_Antonio_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_San_Antonio_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_San_Antonio_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_San_Antonio_Dance_&_Date_1", "YOUR_LINK_FOR_San_Antonio_Paint_&_Date_1", "YOUR_LINK_FOR_San_Antonio_Book_Lovers_Date_1", "YOUR_LINK_FOR_San_Antonio_Black_Tie_Event_1", "YOUR_LINK_FOR_San_Antonio_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_San_Antonio_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_San_Antonio_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_San_Antonio_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_San_Antonio_Dance_&_Date_2", "YOUR_LINK_FOR_San_Antonio_Paint_&_Date_2", "YOUR_LINK_FOR_San_Antonio_Book_Lovers_Date_2", "YOUR_LINK_FOR_San_Antonio_Black_Tie_Event_2", "YOUR_LINK_FOR_San_Antonio_Hiking_Speed_Date_2",
    ],
    "Dallas": [
        "YOUR_LINK_FOR_Dallas_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Dallas_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Dallas_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Dallas_Dance_&_Date_1", "YOUR_LINK_FOR_Dallas_Paint_&_Date_1", "YOUR_LINK_FOR_Dallas_Book_Lovers_Date_1", "YOUR_LINK_FOR_Dallas_Black_Tie_Event_1", "YOUR_LINK_FOR_Dallas_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Dallas_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Dallas_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Dallas_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Dallas_Dance_&_Date_2", "YOUR_LINK_FOR_Dallas_Paint_&_Date_2", "YOUR_LINK_FOR_Dallas_Book_Lovers_Date_2", "YOUR_LINK_FOR_Dallas_Black_Tie_Event_2", "YOUR_LINK_FOR_Dallas_Hiking_Speed_Date_2",
    ],
    "Fort Worth": [
        "YOUR_LINK_FOR_Fort_Worth_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Fort_Worth_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Fort_Worth_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Fort_Worth_Dance_&_Date_1", "YOUR_LINK_FOR_Fort_Worth_Paint_&_Date_1", "YOUR_LINK_FOR_Fort_Worth_Book_Lovers_Date_1", "YOUR_LINK_FOR_Fort_Worth_Black_Tie_Event_1", "YOUR_LINK_FOR_Fort_Worth_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Fort_Worth_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Fort_Worth_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Fort_Worth_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Fort_Worth_Dance_&_Date_2", "YOUR_LINK_FOR_Fort_Worth_Paint_&_Date_2", "YOUR_LINK_FOR_Fort_Worth_Book_Lovers_Date_2", "YOUR_LINK_FOR_Fort_Worth_Black_Tie_Event_2", "YOUR_LINK_FOR_Fort_Worth_Hiking_Speed_Date_2",
    ],
    "Austin": [
        "YOUR_LINK_FOR_Austin_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Austin_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Austin_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Austin_Dance_&_Date_1", "YOUR_LINK_FOR_Austin_Paint_&_Date_1", "YOUR_LINK_FOR_Austin_Book_Lovers_Date_1", "YOUR_LINK_FOR_Austin_Black_Tie_Event_1", "YOUR_LINK_FOR_Austin_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Austin_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Austin_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Austin_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Austin_Dance_&_Date_2", "YOUR_LINK_FOR_Austin_Paint_&_Date_2", "YOUR_LINK_FOR_Austin_Book_Lovers_Date_2", "YOUR_LINK_FOR_Austin_Black_Tie_Event_2", "YOUR_LINK_FOR_Austin_Hiking_Speed_Date_2",
    ],
    "El Paso": [
        "YOUR_LINK_FOR_El_Paso_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_El_Paso_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_El_Paso_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_El_Paso_Dance_&_Date_1", "YOUR_LINK_FOR_El_Paso_Paint_&_Date_1", "YOUR_LINK_FOR_El_Paso_Book_Lovers_Date_1", "YOUR_LINK_FOR_El_Paso_Black_Tie_Event_1", "YOUR_LINK_FOR_El_Paso_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_El_Paso_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_El_Paso_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_El_Paso_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_El_Paso_Dance_&_Date_2", "YOUR_LINK_FOR_El_Paso_Paint_&_Date_2", "YOUR_LINK_FOR_El_Paso_Book_Lovers_Date_2", "YOUR_LINK_FOR_El_Paso_Black_Tie_Event_2", "YOUR_LINK_FOR_El_Paso_Hiking_Speed_Date_2",
    ],
    "Los Angeles": [
        "YOUR_LINK_FOR_Los_Angeles_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Los_Angeles_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Los_Angeles_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Los_Angeles_Dance_&_Date_1", "YOUR_LINK_FOR_Los_Angeles_Paint_&_Date_1", "YOUR_LINK_FOR_Los_Angeles_Book_Lovers_Date_1", "YOUR_LINK_FOR_Los_Angeles_Black_Tie_Event_1", "YOUR_LINK_FOR_Los_Angeles_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Los_Angeles_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Los_Angeles_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Los_Angeles_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Los_Angeles_Dance_&_Date_2", "YOUR_LINK_FOR_Los_Angeles_Paint_&_Date_2", "YOUR_LINK_FOR_Los_Angeles_Book_Lovers_Date_2", "YOUR_LINK_FOR_Los_Angeles_Black_Tie_Event_2", "YOUR_LINK_FOR_Los_Angeles_Hiking_Speed_Date_2",
    ],
    "San Diego": [
        "YOUR_LINK_FOR_San_Diego_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_San_Diego_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_San_Diego_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_San_Diego_Dance_&_Date_1", "YOUR_LINK_FOR_San_Diego_Paint_&_Date_1", "YOUR_LINK_FOR_San_Diego_Book_Lovers_Date_1", "YOUR_LINK_FOR_San_Diego_Black_Tie_Event_1", "YOUR_LINK_FOR_San_Diego_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_San_Diego_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_San_Diego_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_San_Diego_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_San_Diego_Dance_&_Date_2", "YOUR_LINK_FOR_San_Diego_Paint_&_Date_2", "YOUR_LINK_FOR_San_Diego_Book_Lovers_Date_2", "YOUR_LINK_FOR_San_Diego_Black_Tie_Event_2", "YOUR_LINK_FOR_San_Diego_Hiking_Speed_Date_2",
    ],
    "San Francisco": [
        "YOUR_LINK_FOR_San_Francisco_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_San_Francisco_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_San_Francisco_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_San_Francisco_Dance_&_Date_1", "YOUR_LINK_FOR_San_Francisco_Paint_&_Date_1", "YOUR_LINK_FOR_San_Francisco_Book_Lovers_Date_1", "YOUR_LINK_FOR_San_Francisco_Black_Tie_Event_1", "YOUR_LINK_FOR_San_Francisco_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_San_Francisco_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_San_Francisco_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_San_Francisco_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_San_Francisco_Dance_&_Date_2", "YOUR_LINK_FOR_San_Francisco_Paint_&_Date_2", "YOUR_LINK_FOR_San_Francisco_Book_Lovers_Date_2", "YOUR_LINK_FOR_San_Francisco_Black_Tie_Event_2", "YOUR_LINK_FOR_San_Francisco_Hiking_Speed_Date_2",
    ],
    "Sacramento": [
        "YOUR_LINK_FOR_Sacramento_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Sacramento_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Sacramento_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Sacramento_Dance_&_Date_1", "YOUR_LINK_FOR_Sacramento_Paint_&_Date_1", "YOUR_LINK_FOR_Sacramento_Book_Lovers_Date_1", "YOUR_LINK_FOR_Sacramento_Black_Tie_Event_1", "YOUR_LINK_FOR_Sacramento_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Sacramento_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Sacramento_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Sacramento_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Sacramento_Dance_&_Date_2", "YOUR_LINK_FOR_Sacramento_Paint_&_Date_2", "YOUR_LINK_FOR_Sacramento_Book_Lovers_Date_2", "YOUR_LINK_FOR_Sacramento_Black_Tie_Event_2", "YOUR_LINK_FOR_Sacramento_Hiking_Speed_Date_2",
    ],
    "San Jose": [
        "YOUR_LINK_FOR_San_Jose_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_San_Jose_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_San_Jose_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_San_Jose_Dance_&_Date_1", "YOUR_LINK_FOR_San_Jose_Paint_&_Date_1", "YOUR_LINK_FOR_San_Jose_Book_Lovers_Date_1", "YOUR_LINK_FOR_San_Jose_Black_Tie_Event_1", "YOUR_LINK_FOR_San_Jose_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_San_Jose_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_San_Jose_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_San_Jose_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_San_Jose_Dance_&_Date_2", "YOUR_LINK_FOR_San_Jose_Paint_&_Date_2", "YOUR_LINK_FOR_San_Jose_Book_Lovers_Date_2", "YOUR_LINK_FOR_San_Jose_Black_Tie_Event_2", "YOUR_LINK_FOR_San_Jose_Hiking_Speed_Date_2",
    ],
    "New York City": [
        "YOUR_LINK_FOR_New_York_City_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_New_York_City_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_New_York_City_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_New_York_City_Dance_&_Date_1", "YOUR_LINK_FOR_New_York_City_Paint_&_Date_1", "YOUR_LINK_FOR_New_York_City_Book_Lovers_Date_1", "YOUR_LINK_FOR_New_York_City_Black_Tie_Event_1", "YOUR_LINK_FOR_New_York_City_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_New_York_City_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_New_York_City_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_New_York_City_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_New_York_City_Dance_&_Date_2", "YOUR_LINK_FOR_New_York_City_Paint_&_Date_2", "YOUR_LINK_FOR_New_York_City_Book_Lovers_Date_2", "YOUR_LINK_FOR_New_York_City_Black_Tie_Event_2", "YOUR_LINK_FOR_New_York_City_Hiking_Speed_Date_2",
    ],
    "Chicago": [
        "YOUR_LINK_FOR_Chicago_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Chicago_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Chicago_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Chicago_Dance_&_Date_1", "YOUR_LINK_FOR_Chicago_Paint_&_Date_1", "YOUR_LINK_FOR_Chicago_Book_Lovers_Date_1", "YOUR_LINK_FOR_Chicago_Black_Tie_Event_1", "YOUR_LINK_FOR_Chicago_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Chicago_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Chicago_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Chicago_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Chicago_Dance_&_Date_2", "YOUR_LINK_FOR_Chicago_Paint_&_Date_2", "YOUR_LINK_FOR_Chicago_Book_Lovers_Date_2", "YOUR_LINK_FOR_Chicago_Black_Tie_Event_2", "YOUR_LINK_FOR_Chicago_Hiking_Speed_Date_2",
    ],
    "Phoenix": [
        "YOUR_LINK_FOR_Phoenix_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Phoenix_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Phoenix_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Phoenix_Dance_&_Date_1", "YOUR_LINK_FOR_Phoenix_Paint_&_Date_1", "YOUR_LINK_FOR_Phoenix_Book_Lovers_Date_1", "YOUR_LINK_FOR_Phoenix_Black_Tie_Event_1", "YOUR_LINK_FOR_Phoenix_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Phoenix_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Phoenix_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Phoenix_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Phoenix_Dance_&_Date_2", "YOUR_LINK_FOR_Phoenix_Paint_&_Date_2", "YOUR_LINK_FOR_Phoenix_Book_Lovers_Date_2", "YOUR_LINK_FOR_Phoenix_Black_Tie_Event_2", "YOUR_LINK_FOR_Phoenix_Hiking_Speed_Date_2",
    ],
    "Philadelphia": [
        "YOUR_LINK_FOR_Philadelphia_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Philadelphia_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Philadelphia_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Philadelphia_Dance_&_Date_1", "YOUR_LINK_FOR_Philadelphia_Paint_&_Date_1", "YOUR_LINK_FOR_Philadelphia_Book_Lovers_Date_1", "YOUR_LINK_FOR_Philadelphia_Black_Tie_Event_1", "YOUR_LINK_FOR_Philadelphia_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Philadelphia_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Philadelphia_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Philadelphia_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Philadelphia_Dance_&_Date_2", "YOUR_LINK_FOR_Philadelphia_Paint_&_Date_2", "YOUR_LINK_FOR_Philadelphia_Book_Lovers_Date_2", "YOUR_LINK_FOR_Philadelphia_Black_Tie_Event_2", "YOUR_LINK_FOR_Philadelphia_Hiking_Speed_Date_2",
    ],
    "Miami": [
        "YOUR_LINK_FOR_Miami_Chill_&_Chat_Spa_Date_1", "YOUR_LINK_FOR_Miami_Luxury_Resort_Experience_1", "YOUR_LINK_FOR_Miami_Mini_Yoga_&_Mingle_1", "YOUR_LINK_FOR_Miami_Dance_&_Date_1", "YOUR_LINK_FOR_Miami_Paint_&_Date_1", "YOUR_LINK_FOR_Miami_Book_Lovers_Date_1", "YOUR_LINK_FOR_Miami_Black_Tie_Event_1", "YOUR_LINK_FOR_Miami_Hiking_Speed_Date_1",
        "YOUR_LINK_FOR_Miami_Chill_&_Chat_Spa_Date_2", "YOUR_LINK_FOR_Miami_Luxury_Resort_Experience_2", "YOUR_LINK_FOR_Miami_Mini_Yoga_&_Mingle_2", "YOUR_LINK_FOR_Miami_Dance_&_Date_2", "YOUR_LINK_FOR_Miami_Paint_&_Date_2", "YOUR_LINK_FOR_Miami_Book_Lovers_Date_2", "YOUR_LINK_FOR_Miami_Black_Tie_Event_2", "YOUR_LINK_FOR_Miami_Hiking_Speed_Date_2",
    ],
    "Henderson": [
        "YOUR_LINK_FOR_Henderson_Chill_&_Chat_Spa_Date_1",
        "YOUR_LINK_FOR_Henderson_Luxury_Resort_Experience_1",
        "YOUR_LINK_FOR_Henderson_Mini_Yoga_&_Mingle_1",
        "YOUR_LINK_FOR_Henderson_Dance_&_Date_1",
        "YOUR_LINK_FOR_Henderson_Paint_&_Date_1",
        "YOUR_LINK_FOR_Henderson_Book_Lovers_Date_1",
        "YOUR_LINK_FOR_Henderson_Black_Tie_Event_1",
        "YOUR_LINK_FOR_Henderson_Hiking_Speed_Date_1",
        "https://buy.stripe.com/9B628r04UfL2bkt23t0oP0F",
        "https://buy.stripe.com/aFa3cv3h21UcfAJ23t0oP0G",
        "https://buy.stripe.com/aFa8wPg3O42kcoxfUj0oP0H",
        "https://buy.stripe.com/3cI00j2cY42k9cl23t0oP0M",
        "https://buy.stripe.com/7sY14n8BmdCUdsB6jJ0oP0L",
        "https://buy.stripe.com/4gM5kD9Fq6asbkt0Zp0oP0K",
        "https://buy.stripe.com/5kQdR9aJubuMgENazZ0oP0J",
        "https://buy.stripe.com/bJe6oH4l6fL2fAJazZ0oP0I"
    ]
};

const eventTimes = {
    "Hiking Speed Date": ["8:00 AM - 10:30 AM", "12:00 PM - 2:00 PM"],
    "Mini Yoga & Mingle": ["8:45 AM - 10:30 AM", "4:30 PM - 6:30 PM"],
    "Paint & Date": ["2:00 PM - 4:30 PM", "5:00 PM - 6:30 PM"],
    "Book Lovers Date": ["6:00 PM - 8:30 PM"],
    "Dance & Date": ["7:30 PM - 10:00 PM"],
    "Chill & Chat Spa Date": ["1:00 PM - 3:30 PM", "4:00 PM - 6:30 PM"],
    "Luxury Resort Experience": ["7:00 PM - 9:30 PM"],
    "Black Tie Event": ["8:00 PM - 10:30 PM"]
};

const themedEventDetails = {
    "Chill & Chat Spa Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//spadate.webp",
        description: `
            <p class="mb-6">Escape the hustle and bustle with our Chill & Chat Spa Date, an event designed for ultimate relaxation and genuine connection. This isn't your typical speed dating event; it's a unique opportunity to meet sophisticated singles in a serene, low-pressure spa setting where the focus is on good vibes and great company.</p>
            <h3 class="text-2xl font-bold mb-3">What to Expect:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li><strong>Matched Mini-Dates:</strong> You'll be matched with and go on approximately 8 curated mini-dates throughout the event.</li>
                <li><strong>Relaxing Atmosphere:</strong> Connect with others while enjoying calming music, light refreshments, and the serene spa environment. You get a manicures & pedicures, facials and hand massages all on us .</li>
                <li><strong>Post-Event Connections:</strong> We provide a personal touch to your dating experience. After the event, our team will finalize the results, and a dedicated representative will reach out to you personally via email and phone to share your matches contact information.</li>
            </ul>
            <p class="mt-6 italic">The specific venue details will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Luxury Resort Experience": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//resort.webp",
        description: `
            <p class="mb-6">Elevate your dating life with the American Speed Dating Tour's Luxury Resort Experience. This exclusive event is designed for those who appreciate the finer things in life and provides the perfect backdrop for making a memorable connection in a high-class atmosphere.</p>
             <p class="mb-6">You will mingle with sophisticated singles over craft cocktails by the poolside or in an elegant lounge at one of the city's most exclusive and beautiful resorts.</p>
            <h3 class="text-2xl font-bold mb-3">What to Expect:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>An evening of curated introductions in a stunning, high-class resort setting.</li>
                <li>A series of approximately 8 matched mini-dates with other sophisticated singles.</li>
                <li>The ability to message your mutual matches after the event</li>
            </ul>
            <p class="mt-6 italic">To maintain the exclusive atmosphere of the evening, the specific resort venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Mini Yoga & Mingle": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//yogadate.webp",
        description: `
            <p class="mb-6">Find your center and maybe your center-mate with our Mini Yoga & Mingle event. This event is designed to help you connect with like-minded individuals in a relaxed and positive atmosphere.</p>
            <p class="mb-6">The evening begins with a light, beginner-friendly yoga session led by a professional instructor, which serves as a perfect icebreaker to get everyone feeling refreshed. Absolutely no yoga experience is necessary to attend and enjoy the session.</p>
            <h3 class="text-2xl font-bold mb-3">What's Included:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A professionally-led, beginner-friendly yoga class to start the event.</li>
                <li>Healthy smoothies and snacks while you mingle after the yoga session.</li>
                <li>A series of approximately 8 curated dates with your matches.</li>
                <li>The ability to message your mutual matches the following day.</li>
            </ul>
            <p class="mt-6 italic">The specific venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Dance & Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//dance%20lover.webp",
        description: `
            <p class="mb-6">Let the rhythm guide you to your next romance with our Dance & Date night! This high-energy, interactive experience is a fun and natural way to meet new people.</p>
            <p class="mb-6">The event features a group dance lesson where you'll learn fun moves like salsa or swing from a professional instructor. You will rotate partners throughout the lesson, making it easy to meet everyone in the room. After the lesson, the floor is open for more dancing and mingling.</p>
            <h3 class="text-2xl font-bold mb-3">What Your Ticket Includes:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A professionally-led group dance lesson.</li>
                <li>Open-floor dancing and mingling after the lesson.</li>
                <li>A series of approximately 8 curated dates with matched singles.</li>
                <li>The opportunity to connect with your mutual matches through our platform after the event</li>
            </ul>
            <p class="mt-6 italic">The specific venue will be disclosed to ticket holders after the purchase is complete.</p>
        `
    },
    "Paint & Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//paint.webp",
        description: `
            <p class="mb-6">Unleash your inner artist and spark a new connection at our Paint & Date event. It's a perfect way to break the ice and see a different side of someone as you share a fun, creative activity.</p>
            <p class="mb-6">You'll be guided step-by-step by a local artist to create your own masterpiece. As you paint, you'll be seated with your dates, making for a unique and interactive experience. No artistic talent is required!</p>
            <h3 class="text-2xl font-bold mb-3">What Your Ticket Includes:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A professionally-led painting session.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to connect with your mutual matches through our platform after the event</li>
            </ul>
            <p class="mt-6 italic">To maintain a private experience, the specific venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Book Lovers Date": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//booklovers.webp",
        description: `
            <p class="mb-6">For those who believe a great story is the best icebreaker, our Book Lovers Date is the perfect chapter. This event brings together literary-minded singles in a quiet, intimate setting designed for deep and meaningful conversations.</p>
            <p class="mb-6">Held in a cozy bookstore or quiet cafe, this event is your chance to discuss your favorite genres, debate classic characters, and maybe even find someone to start a new story with.</p>
            <h3 class="text-2xl font-bold mb-3">What's Included:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>An intimate event in a cozy bookstore or quiet cafe setting.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to message your mutual matches after the event</li>
            </ul>
            <p class="mt-6 italic">The specific venue will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Black Tie Event": { 
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//black%20tie.webp",
        description: `
            <p class="mb-6">Join us for our most exclusive and sophisticated event. The Black Tie night is an evening of elegance, class, and high-quality connections, held at one of the city's premier, upscale venues. This is more than just speed dating; it's a night to remember.</p>
            <p class="mb-6">This event calls for your finest attire. You can expect champagne, hors d'oeuvres, and curated introductions with some of the city's most eligible singles.</p>
            <h3 class="text-2xl font-bold mb-3">What Your Ticket Includes:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>An evening of elegance at a premier, upscale venue.</li>
                <li>Champagne and hors d'oeuvres.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to connect with your mutual matches through our platform after the event</li>
            </ul>
            <p class="mt-6 italic">To maintain the exclusive nature of the event, the specific venue location will be disclosed to ticket holders after purchase.</p>
        `
    },
    "Hiking Speed Date": {
        image: "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//hiking%20date.webp",
        description: `
            <p class="mb-6">Take a walk on the wild side with our Hiking Speed Date! This event is perfect for adventurous singles who love the outdoors and are looking for a healthy, fun, and unique way to meet someone new.</p>
            <p class="mb-6">We will take you on a scenic, guided hike where you'll have plenty of opportunities to chat with your matches while enjoying breathtaking views.</p>
            <h3 class="text-2xl font-bold mb-3">What's Included:</h3>
            <ul class="list-disc list-inside space-y-2">
                <li>A scenic, guided hike with other adventurous singles.</li>
                <li>A series of approximately 8 curated dates with people you have been matched to.</li>
                <li>The opportunity to message your mutual matches after the event</li>
            </ul>
            <p class="mt-6 italic">The specific trail name and meeting point will be disclosed to ticket holders after purchase.</p>
        `
    }
};

const cityImageUrls = {
    // Texas
    "Houston": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//houston%20(1).webp?width=400",
    "San Antonio": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//San%20Antonio.jpg?width=400",
    "Dallas": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//dallas.jpg?width=400",
    "Fort Worth": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Fort%20Worth.jpg?width=400",
    "Austin": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Austin.webp?width=400",
    "El Paso": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//El%20paso.jpg?width=400",

    // California
    "Los Angeles": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Los%20angeles.jpg?width=400",
    "San Diego": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//san%20diego.jpg?width=400",
    "San Francisco": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//San%20Francisco.jpg?width=400",
    "Sacramento": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//sacramento.jpg?width=400",
    "San Jose": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//san%20jose.jpg?width=400",

    // Other Major Cities
    "New York City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//new%20york.jpg?width=400",
    "Chicago": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//chicago.jpg?width=400",
    "Phoenix": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//pheonix.jpg?width=400",
    "Philadelphia": "https://wsrv.nl/?url=https://images.pexels.com/photos/2362030/pexels-photo-2362030.jpeg&w=400&h=400&fit=cover&q=80&output=webp",
    
    // Florida
    "Miami": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//miami.jpg?width=400",
    "Orlando": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//orlando.jpg?width=400",
    "Tampa": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//tampa.jpg?width=400",
    "Jacksonville": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//tampa.jpg?width=400",
    
    // Kentucky
    "Louisville": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Louisville.jpg?width=400",
    "Lexington-Fayette": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Lexington-Fayette.jpg?width=400",
    
    // Midwest
    "Minneapolis": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Minneapolis.jpg?width=400",
    "Indianapolis": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Indianapolis.jpg?width=400",
    "Columbus": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Columbus.jpg?width=400",
    "Detroit": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Detroit.webp?width=400",
    "Warren": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Warren.png?width=400",
    "Omaha": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Omaha-%20Spa%20and%20Chill.jpg?width=400",
    "Kansas City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Kansas%20City.jpg?width=400",
    "Milwaukee": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Milwaukee.jpg?width=400",

    // West
    "Portland": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//portland.jpg?width=400",
    "Seattle": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Seattle.jpg?width=400",
    "Denver": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Las%20Vegas%20(1).webp?width=400",
    "Henderson": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//henderson.webp?width=400",
    "Boise City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Boise%20City.jpg?width=400",

    // South
    "Charlotte": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Charlotte.jpg?width=400",
    "Oklahoma City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Oklahoma%20City-.jpg?width=400",
    "Nashville": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Nashville.jpeg?width=400",
    "Atlanta": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Atlanta.jpg?width=400",
    "Jackson": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Jackson.jpg?width=400",
    "Little Rock": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Little%20Rock.jpg?width=400",
    "New Orleans": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//New%20Orleans.jpg?width=400",
     "Las Vegas": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media/Las%20Vegas%20(1).webp?width=400",

    // East Coast
    "Washington": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Washington.jpg?width=400",
    "Newark": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Newark.jpg?width=400",
    "Jersey City": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Jersey%20City-.jpg?width=400",
    "Paterson": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Paterson%20City.jpg?width=400",
    "Boston": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Boston.jpg?width=400",
    "Worcester": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Worcester.jpg?width=400",
    "Virginia Beach": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Virginia%20Beach.jpg?width=400",
    "Arlington": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Arlington%20city.jpg?width=400",
    "Bridgeport": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Bridgeport.jpg?width=400",
    "Bristol": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Bristol.jpg?width=400",
    "Baltimore": "https://cqnkvymjarfjhccykkun.supabase.co/storage/v1/object/public/media//Baltimore.jpg?width=400"
};


// NOTE: The cityData constant has been removed from this file.
// It is now only defined in auth.js, which is loaded first.


const themeKeys = Object.keys(themedEventDetails);
let eventIdCounter = 1;
const allEvents = [];
const cityLinkCounters = {};

const firstEventDates = [17, 18, 19]; 
const secondEventDates = [24, 25, 26]; 
const eventYear = 2025;
const eventMonth = 9; 

// This check ensures cityData exists before trying to use it.
if (typeof cityData !== 'undefined' && cityData) {
    cityData.forEach(cityInfo => {
        const cityName = cityInfo.city;
        cityLinkCounters[cityName] = 0;

        const dateGroups = [firstEventDates, secondEventDates];

        dateGroups.forEach((dateGroup, weekIndex) => {
            themeKeys.forEach((theme, themeIndex) => {
                const eventId = eventIdCounter++;
                let stripeLink = `https://buy.stripe.com/test_placeholder_for_event_${eventId}`;

                if (cityStripeLinks[cityName]) {
                    const linkIndex = cityLinkCounters[cityName];
                    stripeLink = cityStripeLinks[cityName][linkIndex] || stripeLink;
                    cityLinkCounters[cityName]++;
                }

                const eventDay = dateGroup[themeIndex % dateGroup.length];
                const date = new Date(eventYear, eventMonth, eventDay);
                const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

                const availableTimes = eventTimes[theme] || ["Time TBD"];
                const timeSlot = weekIndex === 1 && availableTimes.length > 1 
                               ? availableTimes[1] 
                               : availableTimes[0];

                allEvents.push({
                    id: eventId,
                    state: cityInfo.state,
                    city: cityInfo.city,
                    date: `${formattedDate} (${timeSlot})`, 
                    venue: 'To be disclosed after purchase',
                    image: themedEventDetails[theme].image,
                    title: theme,
                    price: 60.00,
                    stripeLink: stripeLink
                });
            });
        });
    });
} else {
    console.error("cityData is not defined. Make sure auth.js is loaded correctly before script.js.");
}


const getElements = () => ({
    mainHeader: document.getElementById('main-header'),
    hamburgerButton: document.getElementById('hamburger-button'),
    mobileMenu: document.getElementById('mobile-menu'),
    stateFilter: document.getElementById('state-filter'),
    eventGrid: document.getElementById('event-grid'),
    locationsList: document.getElementById('locations-list'),
    animatedButtons: document.querySelectorAll('.animated-button'),
    heroCarousel: document.getElementById('hero-carousel'),
    sponsorTrack: document.querySelector('.logo-carousel-track'),
    locationGrid: document.getElementById('location-grid'),
    locationSearch: document.getElementById('location-search'),
    faqAccordion: document.getElementById('faq-accordion'),
    cityPageTitle: document.getElementById('city-page-title'),
    cityEventGrid: document.getElementById('city-event-grid'),
    cityHeadings: document.querySelectorAll('.city-name'),
    profileContent: document.getElementById('profile-content'),
    eventDetailContent: document.getElementById('event-detail-content'),
    getIcebreakersBtn: document.getElementById('get-icebreakers-btn'),
    icebreakerModal: document.getElementById('icebreaker-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    icebreakerContent: document.getElementById('icebreaker-content'),
    regenerateIcebreakersBtn: document.getElementById('regenerate-icebreakers-btn'),
    dreamDateInput: document.getElementById('dream-date-input'),
    generateDreamDateBtn: document.getElementById('generate-dream-date-btn'),
    dreamDateResult: document.getElementById('dream-date-result'),
    eventsHeading: document.getElementById('events-heading'),
    eventsSubheading: document.getElementById('events-subheading'),
    loginLink: document.getElementById('login-link'),
    signupLink: document.getElementById('signup-link'),
    userNameDisplay: document.getElementById('user-name-display'),
    signOutButton: document.getElementById('sign-out-button'),
    mobileAuthLinks: document.getElementById('mobile-auth-links'),
    mobileUserInfo: document.getElementById('mobile-user-info'),
    mobileUserName: document.getElementById('mobile-user-name'),
    mobileSignOutButton: document.getElementById('mobile-sign-out-button'),
    eventThemeTitle: document.getElementById('event-theme-title'),
    eventThemeSearch: document.getElementById('event-theme-search'),
    eventThemeGrid: document.getElementById('event-theme-grid')
});

async function handleAuthState() {
    const { 
        loginLink, signupLink, userNameDisplay, signOutButton,
        mobileAuthLinks, mobileUserInfo, mobileUserName, mobileSignOutButton 
    } = getElements();

    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session && session.user) {
            const user = session.user;
            const { data, error } = await supabaseClient
                .from('users')
                .select('name, city')
                .eq('id', user.id)
                .single();

            const displayName = data?.name || 'User';

            userNameDisplay.textContent = `Welcome, ${displayName}`;
            loginLink.classList.add('hidden');
            signupLink.classList.add('hidden');
            userNameDisplay.classList.remove('hidden');
            signOutButton.classList.remove('hidden');
            signOutButton.addEventListener('click', signOut);

            mobileUserName.textContent = `Welcome, ${displayName}`;
            mobileAuthLinks.classList.add('hidden');
            mobileUserInfo.classList.remove('hidden');
            mobileSignOutButton.addEventListener('click', signOut);
            
        } else {
            loginLink.classList.remove('hidden');
            signupLink.classList.remove('hidden');
            userNameDisplay.classList.add('hidden');
            signOutButton.classList.add('hidden');

            mobileAuthLinks.classList.remove('hidden');
            mobileUserInfo.classList.add('hidden');
        }
    });
}

async function setupHomePageEvents() {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session && session.user) {
        const { data: profile, error } = await supabaseClient
            .from('users')
            .select('city')
            .eq('id', session.user.id)
            .single();
        if (profile && profile.city) {
            displayEventsForCity(profile.city);
        } else {
            displayEventsByLocation();
        }
    } else {
        displayEventsByLocation();
    }
}

function displayEventsForCity(cityName) {
    const { eventsHeading, eventsSubheading } = getElements();
    if (eventsHeading) {
        eventsHeading.textContent = `Events in Your City: ${cityName}`;
    }
    if (eventsSubheading) {
        eventsSubheading.textContent = `Showing events for your preferred city. Use the filter to see other states.`;
    }
    const cityEvents = allEvents.filter(event => event.city === cityName).slice(0, 6);
    renderEvents(cityEvents);
}

function renderEvents(eventsToRender, container) {
    const grid = container || getElements().eventGrid;
    if (!grid) return;
    grid.innerHTML = '';
    if (eventsToRender.length === 0) {
        grid.innerHTML = `<p class="text-slate-500 text-center col-span-full">No events found for this selection. Please check back soon!</p>`;
        return;
    }
    eventsToRender.forEach(event => {
        const card = document.createElement('a');
        card.href = event.stripeLink.startsWith('http') ? event.stripeLink : `purchase.html?eventId=${event.id}`;
        card.className = 'event-card bg-white rounded-xl shadow-lg overflow-hidden flex flex-col';
        card.innerHTML = `
            <img src="${event.image}" alt="Event in ${event.city}" class="w-full h-48 object-cover flex-shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found';">
            <div class="p-6 flex flex-col flex-grow">
                <div>
                    <p class="text-sm text-violet-600 font-semibold">${event.date}</p>
                    <h3 class="text-2xl font-bold mt-1 text-slate-900">${event.city}</h3>
                    <p class="text-slate-500">${event.state}</p>
                    <p class="mt-2 text-slate-600"><span class="font-semibold">Event Type:</span> ${event.title}</p>
                </div>
                <div class="mt-auto pt-4">
                     <div class="text-center bg-violet-600 text-white font-bold py-3 px-6 rounded-full w-full hover:bg-violet-700 transition-colors duration-300">Get Ticket</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function populateStateFilter() {
    const { stateFilter } = getElements();
    if (!stateFilter) return;
    const states = [...new Set(allEvents.map(e => e.state))];
    states.sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
    });
}

function filterAndRender() {
    const { stateFilter, eventGrid } = getElements();
    if (!eventGrid) return; 

    let eventsToShow = allEvents;

    if (stateFilter) {
        const selectedState = stateFilter.value;
        if (selectedState !== 'all') {
            eventsToShow = eventsToShow.filter(e => e.state === selectedState);
        }
    }
    
    const onHomePage = !!document.getElementById('hero-carousel');

    if (onHomePage && (!stateFilter || stateFilter.value === 'all')) {
         renderEvents(eventsToShow.slice(0, 6));
    } else {
         renderEvents(eventsToShow);
    }
}

function displayDefaultEvents() {
    const { eventsHeading, eventsSubheading } = getElements();
    if (!cityData || cityData.length === 0) {
        renderEvents([]);
        if (eventsHeading) eventsHeading.textContent = 'Upcoming Events';
        if (eventsSubheading) eventsSubheading.textContent = 'No events are scheduled. Please check back soon!';
        return;
    }
    const defaultCity = cityData[0].city;
    if (eventsHeading) {
        eventsHeading.textContent = `Upcoming Events in ${defaultCity}`;
    }
    if (eventsSubheading) {
        eventsSubheading.textContent = `Showing our featured events. Use the filter to see other states.`;
    }
    const defaultEvents = allEvents.filter(event => event.city === defaultCity).slice(0, 6);
    renderEvents(defaultEvents);
}

async function displayEventsByLocation() {
    const { eventsHeading, eventsSubheading } = getElements();

    if (eventsSubheading) {
        eventsSubheading.textContent = 'Attempting to find events near you...';
    }

    if (!navigator.geolocation) {
        if (eventsSubheading) eventsSubheading.textContent = "Geolocation is not supported by your browser. Showing our featured events.";
        displayDefaultEvents();
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
            if (!response.ok) throw new Error('Failed to fetch location data');
            const data = await response.json();
            const userCity = data.address.city || data.address.town;

            if (userCity && typeof cityData !== 'undefined' && cityData) {
                const matchedCity = cityData.find(c => c.city.toLowerCase() === userCity.toLowerCase());
                if (matchedCity) {
                    displayEventsForCity(matchedCity.city);
                } else {
                    if (eventsSubheading) eventsSubheading.textContent = `We don't have events in ${userCity} yet. Showing events for our featured city.`;
                    displayDefaultEvents();
                }
            } else {
                displayDefaultEvents();
            }
        } catch (error) {
            console.error("Error with reverse geocoding:", error);
            displayDefaultEvents();
        }
    }, () => {
        if (eventsSubheading) eventsSubheading.textContent = "You've disabled location services. Showing our featured events.";
        displayDefaultEvents();
    });
}


function populateLocationsDropdown() {
    const { locationsList } = getElements();
    if (!locationsList) return;

    const states = [...new Set(allEvents.map(e => e.state))];
    states.sort();

    locationsList.innerHTML = '<li><a href="locations.html" class="dropdown-link">See All</a></li>';

    states.forEach(state => {
        locationsList.innerHTML += `<li><a href="locations.html" class="dropdown-link location-link" data-state="${state}">${state}</a></li>`;
    });
}

function startHeroCarousel() {
    const { heroCarousel } = getElements();
    if (!heroCarousel) return;

    const images = heroCarousel.querySelectorAll('.carousel-image');
    if (images.length === 0) return;
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 4000); 
}

function setupSponsorCarousel() {
    const { sponsorTrack } = getElements();
    if (!sponsorTrack) return;

    const logos = Array.from(sponsorTrack.children);
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        sponsorTrack.appendChild(clone);
    });
}

function setupLocationsPage() {
    const { locationGrid, locationSearch } = getElements();
    if (!locationGrid || !locationSearch) return;

    const uniqueCities = [...new Map(allEvents.map(event => [event.city, event])).values()];

    const renderLocations = (locations) => {
        locationGrid.innerHTML = '';
        if (locations.length === 0) {
            locationGrid.innerHTML = `<p class="text-slate-500 col-span-full text-center">No locations found.</p>`;
            return;
        }
        locations.forEach(loc => {
            const card = document.createElement('a');
            card.href = `city-events.html?city=${encodeURIComponent(loc.city)}`;
            card.className = 'location-card';
            
            const imageUrl = cityImageUrls[loc.city] || `https://placehold.co/400x400/555/fff?text=${encodeURIComponent(loc.city)}`;
            card.style.backgroundImage = `url('${imageUrl}')`;

            card.innerHTML = `
                <div class="location-card-content">
                    <h3>${loc.city}</h3>
                    <p>${loc.state}</p>
                </div>
            `;
            locationGrid.appendChild(card);
        });
    };

    locationSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredLocations = uniqueCities.filter(loc => 
            loc.city.toLowerCase().includes(searchTerm) || 
            loc.state.toLowerCase().includes(searchTerm)
        );
        renderLocations(filteredLocations);
    });

    renderLocations(uniqueCities);
}

function setupCityEventsPage() {
    const { cityPageTitle, cityEventGrid, cityHeadings } = getElements();
    if (!cityPageTitle) return;

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');

    if (!city) {
        cityPageTitle.textContent = "City Not Found";
        return;
    }
    
    document.title = `Events in ${city} - American Speed Dating Tour`;
    cityPageTitle.textContent = `Events in ${city}`;
    cityHeadings.forEach(h => h.textContent = city);

    const cityEvents = allEvents.filter(event => event.city === city);
    renderEvents(cityEvents, cityEventGrid);
}

function setupEventThemePage() {
    const { eventThemeTitle, eventThemeSearch, eventThemeGrid } = getElements();
    if (!eventThemeTitle) return;

    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');

    if (!theme) {
        eventThemeTitle.textContent = "Theme Not Found";
        return;
    }
    
    document.title = `${theme} Events - American Speed Dating Tour`;
    eventThemeTitle.textContent = `${theme} Events`;

    const themeEvents = allEvents.filter(event => event.title === theme);
    renderEvents(themeEvents, eventThemeGrid);
    
    eventThemeSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredEvents = themeEvents.filter(event => 
            event.city.toLowerCase().includes(searchTerm) || 
            event.state.toLowerCase().includes(searchTerm)
        );
        renderEvents(filteredEvents, eventThemeGrid);
    });
}


function setupFaqAccordion() {
    const { faqAccordion } = getElements();
    if (!faqAccordion) return;

    const faqData = [
        { q: "How do ASD Tour Events Work?", a: "Simply purchase a ticket, show up at the event venue, and check-in using your ASD Tour account on your smartphone. You'll then go on around 8 dates with people who you have been matched to. After the event, you will be able to message your matches!" },
        { q: "How is it different to other speed dating?", a: "It's matched and mobile! Events are in great bars, not stuffy back rooms. Our algorithm matches you based on your profile and feedback, so you're not just dating everyone who shows up." },
        { q: "How does the matching work?", a: "Our algorithm uses your entire profile (age, education, interests, etc.) and your feedback from past dates to match you with compatible people live at the event. The more you use it, the smarter it gets!" },
        { q: "Are there ID or minimum age requirements?", a: "Yes. Please ensure you are within the stated age limits for the event. ID may be requested by our hosts as proof of age." },
        { q: "Do I have to bring a printed ticket?", a: "There's no need for a physical copy. You can access the event simply by presenting the ticket from your email inbox." },
        { q: "What is the refund policy?", a: "No refunds. We do allow transfers to another event if you let us know 7 days in advance. See our Terms & Conditions for more details." }
    ];

    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.className = 'border-b border-slate-200 py-4';
        faqItem.innerHTML = `
            <button class="w-full text-left flex justify-between items-center focus:outline-none">
                <span class="text-lg font-medium text-slate-900">${item.q}</span>
                <svg class="w-6 h-6 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="mt-2 text-slate-600 max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p class="p-2">${item.a}</p>
            </div>
        `;
        faqAccordion.appendChild(faqItem);
    });

    faqAccordion.addEventListener('click', (e) => {
        const button = e.target.closest('button');
        if (!button) return;
        
        const content = button.nextElementSibling;
        const icon = button.querySelector('svg');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = 'rotate(180deg)';
        }
    });
}

function setupPurchasePage() {
    const eventContent = document.getElementById('event-landing-content');
    const notFoundMessage = document.getElementById('event-not-found');

    if (!eventContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('eventId'));
    const event = allEvents.find(e => e.id === eventId);

    if (event) {
        const eventThemeData = themedEventDetails[event.title];

        document.title = `${event.title} in ${event.city} - ASD Tour`;
        
        const heroImage = document.getElementById('event-hero-image');
        const title = document.getElementById('event-title');
        const description = document.getElementById('event-description');
        const heroButton = document.getElementById('get-ticket-btn-hero');
        const subtitle = document.getElementById('event-subtitle');
        const footerButton = document.getElementById('get-ticket-btn-footer');
        const ctaSubtitle = document.getElementById('event-cta-subtitle');

        heroImage.style.backgroundImage = `url('${event.image}')`;
        title.innerHTML = `${event.title}<span class="block text-2xl font-normal text-slate-200 mt-2">${event.city} - ${event.date}</span>`;
        subtitle.textContent = `Get your ticket for this exclusive event.`;
        description.innerHTML = eventThemeData.description;
        
        heroButton.href = event.stripeLink || '#'; 
        footerButton.href = event.stripeLink || '#';
        
        ctaSubtitle.textContent = `Spots for ${event.title} in ${event.city} are limited. Secure your ticket now and get ready to meet someone amazing.`;

    } else {
        eventContent.classList.add('hidden');
        notFoundMessage.classList.remove('hidden');
    }
}

function setupPasswordToggles() {
    const togglePassword = document.getElementById('toggle-password');
    const password = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon-password');
    const eyeSlashIcon = document.getElementById('eye-slash-icon-password');
    
    const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
    const confirmPassword = document.getElementById('confirm-password');
    const eyeIconConfirm = document.getElementById('eye-icon-confirm');
    const eyeSlashIconConfirm = document.getElementById('eye-slash-icon-confirm');

    if (togglePassword) {
        togglePassword.addEventListener('click', function () {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            eyeIcon.classList.toggle('hidden');
            eyeSlashIcon.classList.toggle('hidden');
        });
    }
    
    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener('click', function () {
            const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPassword.setAttribute('type', type);
            eyeIconConfirm.classList.toggle('hidden');
            eyeSlashIconConfirm.classList.toggle('hidden');
        });
    }
}

function setupEventDetailsPage() {
    const { eventDetailContent } = getElements();
    if (!eventDetailContent) return;

    const urlParams = new URLSearchParams(window.location.search);
    const eventType = urlParams.get('event');
    const eventData = themedEventDetails[eventType];

    if (eventData) {
        document.title = `${eventData.title} - ASD Tour`;
        eventDetailContent.innerHTML = `
            <div class="py-24 bg-white">
                <div class="container mx-auto px-6 max-w-5xl">
                    <div class="text-center mb-16">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900">${eventData.title}</h1>
                    </div>
                    <div class="aspect-w-16 aspect-h-9 mb-16 rounded-lg overflow-hidden shadow-xl">
                        <img src="${eventData.image}" alt="${eventData.title}" class="w-full h-full object-cover">
                    </div>
                    <div class="prose lg:prose-xl max-w-none">
                        <p>${eventData.description}</p>
                    </div>
                    <div class="mt-16 text-center">
                        <a href="locations.html" class="cta-button bg-violet-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-violet-700">Find This Event Near You</a>
                    </div>
                </div>
            </div>
        `;
    } else {
        eventDetailContent.innerHTML = `<div class="py-24 text-center"><h1 class="text-4xl font-bold">Event not found.</h1></div>`;
    }
}

function setupProfilePage() {
    const { profileContent } = getElements();
    if (!profileContent) return;
    
    const authModule = import('./auth.js');
    authModule.then(({ auth, db, doc, getDoc, onAuthStateChanged }) => {
        onAuthStateChanged(auth, user => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                getDoc(userDocRef).then(docSnap => {
                    if (docSnap.exists()) {
                        const userData = docSnap.data();
                        profileContent.innerHTML = `
                            <div class="border-b border-slate-200 pb-4">
                                <h3 class="text-lg font-medium text-slate-500">Full Name</h3>
                                <p class="text-xl text-slate-900">${userData.name}</p>
                            </div>
                            <div class="border-b border-slate-200 pb-4">
                                <h3 class="text-lg font-medium text-slate-500">Email</h3>
                                <p class="text-xl text-slate-900">${userData.email}</p>
                            </div>
                            <div class="border-b border-slate-200 pb-4">
                                <h3 class="text-lg font-medium text-slate-500">Pronouns</h3>
                                <p class="text-xl text-slate-900">${userData.pronouns || 'Not specified'}</p>
                            </div>
                            <div class="border-b border-slate-200 pb-4">
                                <h3 class="text-lg font-medium text-slate-500">Gender</h3>
                                <p class="text-xl text-slate-900">${userData.gender}</p>
                            </div>
                            <div>
                                <h3 class="text-lg font-medium text-slate-500">Interested In</h3>
                                <p class="text-xl text-slate-900">${userData.seeking}</p>
                            </div>
                        `;
                    } else {
                        profileContent.innerHTML = `<p class="text-center">Could not find your profile data.</p>`;
                    }
                }).catch(error => {
                    console.error("Error fetching user data:", error);
                    profileContent.innerHTML = `<p class="text-center text-red-500">Error loading your profile.</p>`;
                });
            } else {
                profileContent.innerHTML = `<p class="text-center">Please <a href="login.html" class="text-violet-600 font-bold">log in</a> to view your profile.</p>`;
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = getElements();

    if (elements.mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                elements.mainHeader.classList.add('scrolled');
            } else {
                elements.mainHeader.classList.remove('scrolled');
            }
        });
    }

    if (elements.hamburgerButton && elements.mobileMenu) {
        elements.hamburgerButton.addEventListener('click', () => {
            elements.hamburgerButton.classList.toggle('open');
            elements.mobileMenu.classList.toggle('open');
        });
        elements.mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                elements.hamburgerButton.classList.remove('open');
                elements.mobileMenu.classList.remove('open');
            });
        });
    }

    if(elements.animatedButtons) {
        elements.animatedButtons.forEach(button => {
            button.addEventListener('click', () => {
                button.classList.add('focused');
                setTimeout(() => {
                    button.classList.remove('focused');
                }, 2000);
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    try {
        handleAuthState();
        populateLocationsDropdown();
        setupSponsorCarousel();

        if (document.getElementById('hero-carousel')) { 
            setupHomePageEvents();
            startHeroCarousel();
        }
        
        if (document.getElementById('location-grid')) {
            setupLocationsPage();
        }

        if (document.getElementById('city-event-grid')) {
            setupCityEventsPage();
        }

        if (document.getElementById('event-theme-grid')) {
            setupEventThemePage();
        }

        if (document.getElementById('faq-accordion')) {
            setupFaqAccordion();
        }
        
        if (document.getElementById('event-landing-content')) { 
            setupPurchasePage();
        }
        
        if (document.getElementById('signup-form') || document.getElementById('login-form')) {
            setupPasswordToggles();
        }
        
        if (document.getElementById('profile-content')) {
            setupProfilePage();
        }
    } catch (error) {
        console.error("An error occurred during the dynamic setup of the page:", error);
    }
});