// Tailwind configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                paper: '#FAF6EE',
                ink: '#26150D',        // matches the logo's "CIID" wordmark exactly
                pine: '#1F4A2E',       // darkened from the logo's green gradient (#32985B),
                // shifted for AA contrast on paper — same hue family,
                // legible at body-text size
                'pine-light': '#4A974F', // the logo's actual mid-gradient stop, used verbatim —
                // safe for large text, icons, dividers, not small copy
                gold: '#8A5A2B',       // lightened from the logo's brown (#5D3A1C) for AA
                // contrast as an accent/label color
                sage: '#EEF2EA',       // light green-tinted panel background (was neutral grey-green,
                // now tinted toward the brand green instead of arbitrary)
            },
        },
    },
};