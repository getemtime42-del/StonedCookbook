// Data Array for the Onboarding Script
const onboardingSteps = [
    {
        title: "Elevate Your Mind, Responsibly",
        body: "Welcome to your new culinary companion. Remember that true elevation comes from mindfulness. We emphasize the importance of modesty in consumption—start slow to find what feels best for your personal tolerance."
    },
    {
        title: "A Note on Comfort",
        body: "The body high from consuming THC is often described as relaxing. If you consume too much, please know that while it may feel unpleasant, you are not in physical danger. Hydrate, breathe, and the sensation will pass."
    },
    {
        title: "The Art of Infusion",
        body: "Precision is your best friend when crafting oils, butter, or honey. Follow instructions carefully for consistent outcomes. You can access deep-dive tutorials via the 'Base' button on your dashboard."
    },
    {
        title: "Terms of Service & Waiver",
        body: "Please read and acknowledge the waiver below to proceed to the kitchen."
    }
];

let currentStep = 0;

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const onboardingScreen = document.getElementById('onboarding-screen');
const dashboardScreen = document.getElementById('dashboard-screen');
const obTitle = document.getElementById('ob-title');
const obText = document.getElementById('ob-text');
const nextBtn = document.getElementById('next-btn');
const waiverSection = document.getElementById('waiver-section');
const waiverCheckbox = document.getElementById('waiver-checkbox');

// 1. Splash Screen Timer
window.addEventListener('DOMContentLoaded', () => {
    // Show splash for 2.5 seconds, then transition to Onboarding
    setTimeout(() => {
        splashScreen.classList.remove('active');
        onboardingScreen.classList.add('active');
        loadStep(0);
    }, 2500);
});

// 2. Load Content for the current step
function loadStep(stepIndex) {
    obTitle.innerText = onboardingSteps[stepIndex].title;
    obText.innerText = onboardingSteps[stepIndex].body;

    // If it's the final step (Waivers)
    if (stepIndex === 3) {
        waiverSection.classList.remove('hidden');
        nextBtn.innerText = "Accept & Proceed";
        nextBtn.disabled = true; // Disable until checked
    } else {
        waiverSection.classList.add('hidden');
        nextBtn.innerText = "Next";
        nextBtn.disabled = false;
    }
}

// 3. Handle Waiver Checkbox
waiverCheckbox.addEventListener('change', (e) => {
    if (currentStep === 3) {
        nextBtn.disabled = !e.target.checked;
    }
});

// 4. Handle "Next" Button Clicks
nextBtn.addEventListener('click', () => {
    if (currentStep < 2) {
        currentStep++;
        loadStep(currentStep);
    } 
    else if (currentStep === 2) {
        currentStep++;
        loadStep(currentStep); // Loads waiver
    } 
    else if (currentStep === 3) {
        // User accepted waiver, go to dashboard
        onboardingScreen.classList.remove('active');
        dashboardScreen.classList.add('active');
    }
});

// 5. Local Testing Placeholder for the Base Button
document.getElementById('base-btn').addEventListener('click', () => {
    alert("This is where the Oil, Butter, and Honey base instructions will open up!");
});
