export default function initTypewriter() {
    const typingElement = document.querySelector('[data-typewriter]');

    if (typingElement) {
        const text = typingElement.innerHTML;
        typingElement.innerHTML = '';

        let i = 0;
        const speed = 75; // Typing speed in ms

        function typeWriter() {
            if (i < text.length) {
                // If it's a <br> tag, append it entirely at once
                if (text.substring(i, i + 4) === '<br>') {
                    typingElement.innerHTML += '<br>';
                    i += 4;
                } else {
                    typingElement.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(typeWriter, speed);
            } else {
                // Remove cursor blinking effect after typing is done (optional)
                typingElement.classList.remove('typing-cursor');
            }
        }

        // Add class for cursor effect
        typingElement.classList.add('typing-cursor');
        typeWriter();
    }
}
