const fs = require('fs');

const file = 'contact.html';
let content = fs.readFileSync(file, 'utf8');

const target1 = `<div class="contact-info-item" style="margin-bottom: 1.5rem;">
                    <div class="contact-info-title"
                        style="color: var(--accent-gold); font-weight: bold; font-size: 1.2rem; margin-bottom: 0.5rem;">
                        Proprietor: Khurram Shahzad</div>
                    <div class="contact-info-text mb-1" style="color: var(--text-secondary); line-height: 1.6;">
                        Jugnu Sequence, Liberty Market, Opposite Jinnah Stadium, Sialkot Road, Gujranwala
                    </div>
                </div>`;

const rep1 = `<div class="contact-info-item" style="margin-bottom: 1.5rem;">
                    <div class="contact-info-title" style="color: var(--text-secondary); margin-bottom: 0.2rem;">Proprietor:</div>
                    <div class="contact-info-text" style="color: var(--accent-gold); font-weight: bold; font-size: 1.2rem; margin-bottom: 1.2rem;">Khurram Shahzad</div>
                    
                    <div class="contact-info-title" style="color: var(--text-secondary); margin-bottom: 0.2rem;">Address:</div>
                    <div class="contact-info-text mb-1" style="color: var(--text-secondary); line-height: 1.6;">
                        Jugnu Sequence, Liberty Market, Opposite Jinnah Stadium, Sialkot Road, Gujranwala
                    </div>
                </div>`;

const target2 = `<div class="contact-info-item">
                    <div class="contact-info-title" style="margin-bottom: 0.5rem;">Hours of Operation</div>
                    <div class="contact-info-text" style="color: var(--text-secondary);">
                        Timings: 11:00 AM - 9:00 PM (Sat - Thur)<br>
                        <span
                            style="color: #ff4444; font-weight: 600; margin-top: 0.3rem; display: inline-block;">FRIDAY
                            OFF</span>
                    </div>
                </div>`;

const rep2 = `<div class="contact-info-item">
                    <div class="contact-info-title" style="margin-bottom: 0.5rem;">Hours of Operation</div>
                    <div class="contact-info-text" style="color: var(--text-secondary);">
                        <span style="color: #d3982a; font-weight: 500;">Timings:</span> 11:00 AM - 9:00 PM (Sat - Thur)<br>
                        <span style="color: #ff4444; font-weight: 600; margin-top: 0.3rem; display: inline-block;">FRIDAY OFF</span>
                    </div>
                </div>`;

content = content.replace(target1, rep1);
content = content.replace(target2, rep2);

fs.writeFileSync(file, content);
console.log("Updated contact.html body successfully.");
