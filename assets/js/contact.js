(() => {
    const form     = document.getElementById('contact-form');
    const btn      = document.getElementById('submit-btn');
    const btnText  = document.getElementById('btn-text');
    const status   = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic client-side validation
        const name    = form.name.value.trim();
        const email   = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            setStatus('Please fill in all fields.', 'error');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('Please enter a valid email address.', 'error');
            return;
        }

        // Submit via Formspree
        btn.disabled = true;
        btnText.textContent = 'Sending…';
        setStatus('', '');

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: new FormData(form)
            });

            if (res.ok) {
                setStatus('Message sent! I\'ll get back to you soon.', 'success');
                form.reset();
            } else {
                const data = await res.json();
                const msg = data?.errors?.map(e => e.message).join(', ')
                    || 'Something went wrong. Please try again.';
                setStatus(msg, 'error');
            }
        } catch {
            setStatus('Network error. Please check your connection and try again.', 'error');
        } finally {
            btn.disabled = false;
            btnText.textContent = 'Send Message';
        }
    });

    function setStatus(text, type) {
        status.textContent = text;
        status.className = type;
    }
})();
