// --- Supabase Client Initialization ---
const supabaseUrl = 'https://cqnkvymjarfjhccykkun.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbmt2eW1qYXJmamhjY3lra3VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTEwOTcsImV4cCI6MjA2ODg4NzA5N30.2m476xkQp7cuN-2_R_f_hJeE4nqCA2hfsYUiyOL1Hrs';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Data needed for the signup page city dropdown
const cityData = [
    { state: 'Texas', city: 'Houston' }, { state: 'Texas', city: 'San Antonio' },
    { state: 'Texas', city: 'Dallas' }, { state: 'Texas', city: 'Fort Worth' },
    { state: 'Texas', city: 'Austin' }, { state: 'Texas', city: 'El Paso' },
    { state: 'California', city: 'Los Angeles' }, { state: 'California', city: 'San Diego' },
    { state: 'California', city: 'San Francisco' }, { state: 'California', city: 'Sacramento' },
    { state: 'California', city: 'San Jose' }, { state: 'New York', city: 'New York City' },
    { state: 'Illinois', city: 'Chicago' }, { state: 'Arizona', city: 'Phoenix' },
    { state: 'Pennsylvania', city: 'Philadelphia' }, { state: 'Florida', city: 'Miami' },
    { state: 'Florida', city: 'Orlando' }, { state: 'Florida', city: 'Tampa' },
    { state: 'Florida', city: 'Jacksonville' }, { state: 'Kentucky', city: 'Louisville' },
    { state: 'Kentucky', city: 'Lexington-Fayette' }, { state: 'Minnesota', city: 'Minneapolis' },
    { state: 'Oregon', city: 'Portland' }, { state: 'Indiana', city: 'Indianapolis' },
    { state: 'North Carolina', city: 'Charlotte' }, { state: 'Washington', city: 'Seattle' },
    { state: 'Colorado', city: 'Denver' }, { state: 'Oklahoma', city: 'Oklahoma City' },
    { state: 'Tennessee', city: 'Nashville' }, { state: 'D.C.', city: 'Washington' },
    { state: 'New Jersey', city: 'Newark' }, { state: 'New Jersey', city: 'Jersey City' },
    { state: 'New Jersey', city: 'Paterson' }, { state: 'Georgia', city: 'Atlanta' },
    { state: 'Ohio', city: 'Columbus' }, { state: 'Massachusetts', city: 'Boston' },
    { state: 'Massachusetts', city: 'Worcester' }, { state: 'Virginia', city: 'Virginia Beach' },
    { state: 'Virginia', city: 'Arlington' }, { state: 'Michigan', city: 'Detroit' },
    { state: 'Michigan', city: 'Warren' }, { state: 'Nevada', city: 'Las Vegas' },
    { state: 'Nevada', city: 'Henderson' }, { state: 'Nebraska', city: 'Omaha' },
    { state: 'Connecticut', city: 'Bridgeport' }, { state: 'Connecticut', city: 'Bristol' },
    { state: 'Mississippi', city: 'Jackson' }, { state: 'Missouri', city: 'Kansas City' },
    { state: 'Wisconsin', city: 'Milwaukee' }, { state: 'Arkansas', city: 'Little Rock' },
    { state: 'Louisiana', city: 'New Orleans' }, { state: 'Idaho', city: 'Boise City' },
    { state: 'Maryland', city: 'Baltimore' },
];


// =================================================================================================
// === SIGNUP PAGE LOGIC ===========================================================================
// =================================================================================================
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    const formMessage = document.getElementById('form-message');
    const submitButton = document.getElementById('submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonSpinner = submitButton.querySelector('.button-spinner');

    // --- Populate Age Dropdowns ---
    const ageMinSelect = document.getElementById('age-min-interest');
    const ageMaxSelect = document.getElementById('age-max-interest');
    const minAge = 22;
    const maxAge = 55;

    for (let i = minAge; i <= maxAge; i++) {
        const minOption = document.createElement('option');
        minOption.value = i;
        minOption.textContent = i;
        ageMinSelect.appendChild(minOption);

        const maxOption = document.createElement('option');
        maxOption.value = i;
        maxOption.textContent = i;
        ageMaxSelect.appendChild(maxOption);
    }
    ageMaxSelect.value = maxAge;

    // --- NEW: Populate City Dropdown ---
    const citySelect = document.getElementById('city-select');
    if (citySelect) {
        cityData.forEach(cityInfo => {
            const option = document.createElement('option');
            option.value = cityInfo.city;
            option.textContent = `${cityInfo.city}, ${cityInfo.state}`;
            citySelect.appendChild(option);
        });
    }

    const showMessage = (message, isError = false) => {
        formMessage.textContent = message;
        formMessage.classList.remove('hidden', 'bg-red-500', 'bg-green-500', 'text-white');
        formMessage.classList.add(isError ? 'bg-red-500' : 'bg-green-500', 'text-white');
    };
    
    const setLoading = (isLoading) => {
        submitButton.disabled = isLoading;
        buttonText.classList.toggle('hidden', isLoading);
        buttonSpinner.classList.toggle('hidden', !isLoading);
    };

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        setLoading(true);
        formMessage.classList.add('hidden');

        const name = document.getElementById('name').value;
        const email = document.getElementById('email-address').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const pronouns = document.getElementById('pronouns').value;
        const gender = document.getElementById('gender').value;
        const seeking = document.getElementById('seeking').value;
        const age = document.getElementById('age').value;
        const ageMinInterest = document.getElementById('age-min-interest').value;
        const ageMaxInterest = document.getElementById('age-max-interest').value;
        const city = document.getElementById('city-select').value; // Get selected city

        if (password !== confirmPassword) {
            showMessage('Passwords do not match. Please try again.', true);
            setLoading(false);
            return;
        }
        if (parseInt(ageMinInterest) > parseInt(ageMaxInterest)) {
            showMessage('The minimum age of interest cannot be greater than the maximum age.', true);
            setLoading(false);
            return;
        }
        if (!city) {
            showMessage('Please select your city.', true);
            setLoading(false);
            return;
        }
        
        const { data: authData, error: authError } = await supabaseClient.auth.signUp({
            email: email,
            password: password,
        });

        if (authError) {
            showMessage('Error signing up: ' + authError.message, true);
            setLoading(false);
            return;
        }
        
        if (authData.user && authData.user.identities && authData.user.identities.length === 0) {
            showMessage('This email is already registered. Please log in.', true);
            setLoading(false);
            return;
        }

        if (authData.user) {
            const { error: profileError } = await supabaseClient.from('users').insert([{
                id: authData.user.id,
                name: name,
                pronouns: pronouns,
                gender: gender,
                seeking: seeking,
                age: parseInt(age),
                age_range_min: parseInt(ageMinInterest),
                age_range_max: parseInt(ageMaxInterest),
                city: city, // Save the city
                updated_at: new Date()
            }]);
                
            if (profileError) {
                 showMessage('Error saving profile: ' + profileError.message, true);
                 setLoading(false);
            } else {
                 showMessage('Signup successful! Please check your email to verify your account.');
                 signupForm.reset();
                 setTimeout(() => { window.location.href = 'login.html'; }, 3000);
            }
        }
    });
}

// =================================================================================================
// === LOGIN PAGE LOGIC ============================================================================
// =================================================================================================
const loginForm = document.getElementById('login-form');

if (loginForm) {
    const formMessage = document.getElementById('form-message');
    const submitButton = document.getElementById('submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonSpinner = submitButton.querySelector('.button-spinner');

    const showMessage = (message, isError = false) => {
        formMessage.textContent = message;
        formMessage.classList.remove('hidden', 'bg-red-500', 'bg-green-500', 'text-white');
        formMessage.classList.add(isError ? 'bg-red-500' : 'bg-green-500', 'text-white');
    };
    
    const setLoading = (isLoading) => {
        submitButton.disabled = isLoading;
        buttonText.classList.toggle('hidden', isLoading);
        buttonSpinner.classList.toggle('hidden', !isLoading);
    };

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        setLoading(true);
        formMessage.classList.add('hidden');

        const email = document.getElementById('email-address').value;
        const password = document.getElementById('password').value;

        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            showMessage('Invalid login credentials. Please try again.', true);
            setLoading(false);
            return;
        }

        if (data.user) {
            showMessage('Login successful! Redirecting...');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    });
}

// =================================================================================================
// === SIGN OUT LOGIC ==============================================================================
// =================================================================================================
async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
        console.error('Error signing out:', error);
    } else {
        window.location.href = 'index.html';
    }
}

// =================================================================================================
// === UI MANAGEMENT (Handles header on ALL pages) =================================================
// =================================================================================================
supabaseClient.auth.onAuthStateChange(async (event, session) => {
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');
    const userNameDisplay = document.getElementById('user-name-display');
    const signOutButton = document.getElementById('sign-out-button');
    const mobileAuthLinks = document.getElementById('mobile-auth-links');
    const mobileUserInfo = document.getElementById('mobile-user-info');
    const mobileUserName = document.getElementById('mobile-user-name');
    const mobileSignOutButton = document.getElementById('mobile-sign-out-button');

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
