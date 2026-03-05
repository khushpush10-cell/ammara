import os, glob, re

standard_footer = """    <!-- Footer -->
    <footer class="footer" {INDEX_STYLES}>
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <a href="index.html" class="logo" style="display: inline-block; margin-bottom: 1rem;">JUGNU<br><span>SEQUENCE</span></a>
                    <p style="color: var(--text-secondary); margin-bottom: 1rem;">Wholesale & Retail Supplier for Factories.</p>
                    <div class="social-links" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                        <a href="#" style="color: #d3982a; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.8 11.8 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.8 11.8 0 0 0-3.48-8.413Z"></path></svg></a>
                        <a href="#" style="color: #d3982a; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.975-9.658a1.44 1.44 0 100-2.88 1.44 1.44 0 000 2.88z"/></svg></a>
                        <a href="#" style="color: #d3982a; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                        <a href="#" style="color: #d3982a; transition: color 0.3s ease;"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.61-.41 3.24-1.29 4.59-1.27 1.95-3.5 3.19-5.91 3.32-2.3.12-4.63-.61-6.19-2.31-1.55-1.68-2.22-4-1.84-6.26.39-2.28 1.84-4.25 3.84-5.26 1.93-.97 4.27-1.07 6.27-.14v4.45c-.34-.14-.7-.25-1.07-.33-.67-.14-1.39-.14-2.02.13-.86.37-1.48 1.13-1.68 2.05-.2 1.01-.01 2.11.58 2.92.57.78 1.48 1.25 2.45 1.35 1.17.11 2.42-.25 3.23-1.1.72-.75 1.1-1.78 1.1-2.83V0l.43.02z"/></svg></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Collections</h3>
                    <ul class="footer-links">
                        <li><a href="category.html?type=sequins">Sequins</a></li>
                        <li><a href="category.html?type=tilla">Tilla</a></li>
                        <li><a href="category.html?type=threads">Threads</a></li>
                        <li><a href="category.html?type=accessories">Accessories</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Company</h3>
                    <ul class="footer-links">
                        <li><a href="gallery.html">Lookbook</a></li>
                        <li><a href="quality.html">Quality & Supply</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <ul class="footer-links" style="color: var(--text-secondary);">
                        <li style="color: var(--accent-gold); font-weight: 600; margin-bottom: 0.5rem;">Proprietor: Khurram Shahzad</li>
                        <li style="line-height: 1.5; margin-bottom: 0.8rem;">Jugnu Sequence, Liberty Market, Opposite Jinnah Stadium, Sialkot Road, Gujranwala</li>
                        <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 0.5rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d3982a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            0311-6644706
                        </li>
                        <li style="display: flex; align-items: center; gap: 8px; margin-bottom: 1.2rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d3982a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            0302-6673328
                        </li>
                        <li style="margin-top: 1rem; color: #fff;">Timings: 11:00 AM - 9:00 PM (Sat - Thur)</li>
                        <li style="color: #ff4444; font-weight: 500;">FRIDAY OFF</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 JUGNU SEQUENCE. All rights reserved. Wholesale & Retail Supplier for Factories.
            </div>
        </div>
    </footer>"""

for file in glob.glob("*.html"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    style = ""
    if file == "index.html":
        style = 'style="margin-top: 0; border-top: none; padding-top: 60px; box-shadow: 0 -10px 20px rgba(0,0,0,0.5); position: relative; z-index: 10;"'
    elif file == "contact.html":
        style = 'style="padding-top: 4rem; border-top: 1px solid var(--border-color);"'
    
    my_footer = standard_footer.replace("{INDEX_STYLES}", style)
    
    new_content = re.sub(r'<!-- Footer -->.*?</footer>', my_footer, content, flags=re.DOTALL)
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(new_content)
