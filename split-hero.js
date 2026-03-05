const fs = require('fs');

const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

// Find the line with the first button and inject the closing/opening tags before it
html = html.replace(/<a href="collections\.html" class="btn btn-outline">Explore Collections<\/a>/,
    `</div>
        <div class="hero-buttons-container">
            <a href="collections.html" class="btn btn-outline">Explore Collections</a>`);

fs.writeFileSync(path, html);
console.log('Split buttons into hero-buttons-container successfully.');
