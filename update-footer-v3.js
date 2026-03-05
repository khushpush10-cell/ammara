const fs = require('fs');
const path = require('path');

const files = [
    'index.html',
    'collections.html',
    'category.html',
    'gallery.html',
    'product.html',
    'quality.html',
    'contact.html'
];

const newFooterLogo = `<div class="footer-col">
                    <a href="index.html" class="logo" style="width: fit-content; margin-bottom: 1rem;">JUGNU<br><span>SEQUENCE</span></a>`;

const newContactList = `<h3>Contact Us</h3>
                    <ul class="footer-links" style="color: var(--text-secondary);">
                        <li style="margin-bottom: 1.2rem;">
                            <div style="color: var(--text-secondary); margin-bottom: 0.2rem;">Proprietor:</div>
                            <div style="color: #d3982a; font-weight: bold; font-size: 1.05rem;">Khurram Shahzad</div>
                        </li>
                        <li style="line-height: 1.5; margin-bottom: 1.2rem;">
                            <div style="color: var(--text-secondary); margin-bottom: 0.2rem;">Address:</div>
                            <div style="color: #fff;">Jugnu Sequence, Liberty Market, Opposite Jinnah Stadium, Sialkot Road, Gujranwala</div>
                        </li>
                        <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 0.8rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d3982a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span style="color: #fff;">0311-6644706</span>
                        </li>
                        <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d3982a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span style="color: #fff;">0302-6673328</span>
                        </li>
                        <li style="color: #fff; margin-bottom: 0.3rem;"><span style="color: #d3982a; font-weight: 500;">Timings:</span> 11:00 AM - 9:00 PM (Sat - Thur)</li>
                        <li style="color: #ff4444; font-weight: 500;">FRIDAY OFF</li>
                    </ul>`;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Replace footer logo
    content = content.replace(/<div class="footer-col">\s*<a href="index\.html" class="logo"[\s\S]*?<\/a>/g, newFooterLogo);

    // Replace Contact Us section
    content = content.replace(/<h3>Contact Us<\/h3>\s*<ul class="footer-links"[\s\S]*?<\/ul>/g, newContactList);

    fs.writeFileSync(file, content);
});

console.log("Updated footers successfully.");
