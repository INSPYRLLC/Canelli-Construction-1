---

## FILE 3: `script.js`
Action: file_editor view /app/github-export/vanilla/script.js
Observation: [Showing lines 1-302 of 302 total] /app/github-export/vanilla/script.js:
1|/**
2| * CANELLI CONSTRUCTION - JAVASCRIPT
3| * Premium Construction Company Website
4| */
5|
6|document.addEventListener('DOMContentLoaded', function() {
7|    // Initialize Lucide Icons
8|    lucide.createIcons();
9|    
10|    // Set current year in footer
11|    const yearElement = document.getElementById('currentYear');
12|    if (yearElement) {
13|        yearElement.textContent = new Date().getFullYear();
14|    }
15|    
16|    // ========================================
17|    // HEADER SCROLL EFFECT
18|    // ========================================
19|    const header = document.getElementById('header');
20|    let lastScroll = 0;
21|    
22|    window.addEventListener('scroll', function() {
23|        const currentScroll = window.pageYOffset;
24|        
25|        if (currentScroll > 50) {
26|            header.classList.add('scrolled');
27|        } else {
28|            header.classList.remove('scrolled');
29|        }
30|        
31|        lastScroll = currentScroll;
32|    });
33|    
34|    // ========================================
35|    // MOBILE MENU TOGGLE
36|    // ========================================
37|    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
38|    const mobileMenu = document.getElementById('mobileMenu');
39|    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
40|    
41|    mobileMenuBtn.addEventListener('click', function() {
42|        this.classList.toggle('active');
43|        mobileMenu.classList.toggle('hidden');
44|        
45|        // Toggle icons
46|        const menuIcon = this.querySelector('.menu-icon');
47|        const closeIcon = this.querySelector('.close-icon');
48|        menuIcon.classList.toggle('hidden');
49|        closeIcon.classList.toggle('hidden');
50|    });
51|    
52|    // Close mobile menu when clicking a link
53|    mobileNavLinks.forEach(function(link) {
54|        link.addEventListener('click', function() {
55|            mobileMenuBtn.classList.remove('active');
56|            mobileMenu.classList.add('hidden');
57|            mobileMenuBtn.querySelector('.menu-icon').classList.remove('hidden');
58|            mobileMenuBtn.querySelector('.close-icon').classList.add('hidden');
59|        });
60|    });
61|    
62|    // ========================================
63|    // SMOOTH SCROLL FOR ANCHOR LINKS
64|    // ========================================
65|    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
66|        anchor.addEventListener('click', function(e) {
67|            e.preventDefault();
68|            const target = document.querySelector(this.getAttribute('href'));
69|            if (target) {
70|                const headerHeight = header.offsetHeight;
71|                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
72|                
73|                window.scrollTo({
74|                    top: targetPosition,
75|                    behavior: 'smooth'
76|                });
77|            }
78|        });
79|    });
80|    
81|    // ========================================
82|    // PORTFOLIO FILTER TABS
83|    // ========================================
84|    const tabBtns = document.querySelectorAll('.tab-btn');
85|    const portfolioCards = document.querySelectorAll('.portfolio-card');
86|    
87|    tabBtns.forEach(function(btn) {
88|        btn.addEventListener('click', function() {
89|            // Remove active class from all buttons
90|            tabBtns.forEach(function(b) {
91|                b.classList.remove('active');
92|            });
93|            
94|            // Add active class to clicked button
95|            this.classList.add('active');
96|            
97|            // Get filter value
98|            const filter = this.getAttribute('data-filter');
99|            
100|            // Filter portfolio cards
101|            portfolioCards.forEach(function(card) {
102|                const category = card.getAttribute('data-category');
103|                
104|                if (filter === 'all' || category === filter) {
105|                    card.classList.remove('hidden-card');
106|                    card.style.display = '';
107|                } else {
108|                    card.classList.add('hidden-card');
109|                    card.style.display = 'none';
110|                }
111|            });
112|        });
113|    });
114|    
115|    // ========================================
116|    // COST ESTIMATOR
117|    // ========================================
118|    const estimatorForm = document.getElementById('estimatorForm');
119|    const squareFeetInput = document.getElementById('squareFeet');
120|    const sqftValueDisplay = document.getElementById('sqftValue');
121|    const estimateResult = document.getElementById('estimateResult');
122|    const resultValue = document.getElementById('resultValue');
123|    
124|    // Price ranges per square foot
125|    const priceRanges = {
126|        custom_home: { standard: [200, 300], premium: [300, 450], luxury: [450, 700] },
127|        turnkey: { standard: [180, 250], premium: [250, 350], luxury: [350, 500] },
128|        remodel: { standard: [150, 250], premium: [250, 400], luxury: [400, 600] },
129|        adu: { standard: [200, 280], premium: [280, 380], luxury: [380, 500] },
130|        addition: { standard: [180, 280], premium: [280, 400], luxury: [400, 550] },
131|        commercial: { standard: [150, 250], premium: [250, 400], luxury: [400, 600] }
132|    };
133|    
134|    // Update square footage display
135|    squareFeetInput.addEventListener('input', function() {
136|        sqftValueDisplay.textContent = parseInt(this.value).toLocaleString() + ' sq ft';
137|    });
138|    
139|    // Calculate estimate
140|    estimatorForm.addEventListener('submit', function(e) {
141|        e.preventDefault();
142|        
143|        const projectType = document.getElementById('projectType').value;
144|        const squareFeet = parseInt(squareFeetInput.value);
145|        const finishLevel = document.getElementById('finishLevel').value;
146|        
147|        const range = priceRanges[projectType][finishLevel];
148|        const lowEstimate = squareFeet * range[0];
149|        const highEstimate = squareFeet * range[1];
150|        
151|        resultValue.textContent = '$' + lowEstimate.toLocaleString() + ' - $' + highEstimate.toLocaleString();
152|        estimateResult.classList.remove('hidden');
153|        
154|        // Scroll to result
155|        estimateResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
156|    });
157|    
158|    // ========================================
159|    // CONTACT FORM
160|    // ========================================
161|    const contactForm = document.getElementById('contactForm');
162|    const formSuccess = document.getElementById('formSuccess');
163|    
164|    contactForm.addEventListener('submit', function(e) {
165|        e.preventDefault();
166|        
167|        // Get form data
168|        const formData = new FormData(this);
169|        const data = {};
170|        formData.forEach(function(value, key) {
171|            data[key] = value;
172|        });
173|        
174|        // In production, you would send this to your backend
175|        console.log('Form submitted:', data);
176|        
177|        // Show success message
178|        contactForm.classList.add('hidden');
179|        formSuccess.classList.remove('hidden');
180|        
181|        // Re-initialize icons in success message
182|        lucide.createIcons();
183|        
184|        // Reset form after delay
185|        setTimeout(function() {
186|            contactForm.reset();
187|            contactForm.classList.remove('hidden');
188|            formSuccess.classList.add('hidden');
189|        }, 5000);
190|    });
191|    
192|    // ========================================
193|    // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
194|    // ========================================
195|    const observerOptions = {
196|        root: null,
197|        rootMargin: '0px',
198|        threshold: 0.1
199|    };
200|    
201|    const animateOnScroll = new IntersectionObserver(function(entries) {
202|        entries.forEach(function(entry) {
203|            if (entry.isIntersecting) {
204|                entry.target.classList.add('animate-fade-up');
205|                animateOnScroll.unobserve(entry.target);
206|            }
207|        });
208|    }, observerOptions);
209|    
210|    // Observe elements for animation
211|    document.querySelectorAll('.service-card, .portfolio-card, .testimonial-card, .process-step, .why-card').forEach(function(el) {
212|        el.style.opacity = '0';
213|        el.style.transform = 'translateY(20px)';
214|        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
215|        animateOnScroll.observe(el);
216|    });
217|    
218|    // Add visible styles
219|    const style = document.createElement('style');
220|    style.textContent = `
221|        .animate-fade-up {
222|            opacity: 1 !important;
223|            transform: translateY(0) !important;
224|        }
225|    `;
226|    document.head.appendChild(style);
227|});
228|
229|/**
230| * OPTIONAL: Backend Integration
231| * Uncomment and modify if connecting to a backend API
232| */
233|
234|/*
235|const API_URL = 'YOUR_API_URL';
236|
237|async function submitContactForm(formData) {
238|    try {
239|        const response = await fetch(`${API_URL}/api/contact`, {
240|            method: 'POST',
241|            headers: {
242|                'Content-Type': 'application/json',
243|            },
244|            body: JSON.stringify(formData),
245|        });
246|        
247|        if (!response.ok) {
248|            throw new Error('Failed to submit form');
249|        }
250|        
251|        return await response.json();
252|    } catch (error) {
253|        console.error('Error submitting form:', error);
254|        throw error;
255|    }
256|}
257|
258|async function getEstimate(projectType, squareFeet, finishLevel) {
259|    try {
260|        const response = await fetch(`${API_URL}/api/estimate`, {
261|            method: 'POST',
262|            headers: {
263|                'Content-Type': 'application/json',
264|            },
265|            body: JSON.stringify({
266|                project_type: projectType,
267|                square_feet: squareFeet,
268|                finish_level: finishLevel,
269|            }),
270|        });
271|        
272|        if (!response.ok) {
273|            throw new Error('Failed to get estimate');
274|        }
275|        
276|        return await response.json();
277|    } catch (error) {
278|        console.error('Error getting estimate:', error);
279|        throw error;
280|    }
281|}
282|
283|async function getProjects(category = 'all') {
284|    try {
285|        const url = category === 'all' 
286|            ? `${API_URL}/api/projects`
287|            : `${API_URL}/api/projects?category=${category}`;
288|            
289|        const response = await fetch(url);
290|        
291|        if (!response.ok) {
292|            throw new Error('Failed to fetch projects');
293|        }
294|        
295|        return await response.json();
296|    } catch (error) {
297|        console.error('Error fetching projects:', error);
298|        throw error;
299|    }
300|}
301|*/
302|
[End of file]
