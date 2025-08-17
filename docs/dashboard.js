document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content-container');
    const navLinks = document.querySelectorAll('.dashboard-nav a');

    async function loadContent(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const bodyContent = doc.body.innerHTML;
            contentContainer.innerHTML = bodyContent;

            // Execute scripts from the loaded content
            const scripts = doc.body.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                if (script.src) {
                    newScript.src = script.src;
                } else {
                    newScript.innerHTML = script.innerHTML;
                }
                contentContainer.appendChild(newScript);
            });

        } catch (error) {
            contentContainer.innerHTML = `<p>Error loading content: ${error.message}</p>`;
        }
    }

    function handleNavigation() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            loadContent(hash);
        } else {
            // Load default content, e.g., the first page
            loadContent('demo_page.html');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = link.getAttribute('href').substring(1);
            window.location.hash = url;
        });
    });

    window.addEventListener('hashchange', handleNavigation);

    // Initial load
    handleNavigation();
});
