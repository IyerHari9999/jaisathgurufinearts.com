document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");

    // Toggle the navList visibility when hamburger is clicked
    hamburger.addEventListener("click", function() {
        navList.classList.toggle("active");
    });

    // Close the navList when a link is clicked
    navList.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            navList.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner");

    function updateBanner() {
        if (window.innerWidth <= 600) {
            // Mobile viewport
            banner.src = "images/banner3.png";
        } else if (window.innerWidth <= 1200) {
            // Tablet viewport
            banner.src = "images/banner2.png";
        } else {
            // Desktop viewport
            banner.src = "images/banner1.png";
        }
    }

    updateBanner();

    window.addEventListener("resize", updateBanner);
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle "Show more" button click
    document.querySelectorAll('#show-more-1').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const parent = this.parentElement;

            const additionalContent = document.createElement('span');
            additionalContent.classList.add('para');
            additionalContent.innerHTML = "Three months ago, the Jai Sathguru Fine Arts sabha began in a small venue with a capacity of 30-40 people. It has hosted chamber concerts, LecDems, competitions, and practice sessions. Due to positive responses from the community, the sabha is now looking to expand its reach.<br><br>The first public concert took place at Sri Durga Lakshmi Saraswati Temple in Santhosh Nagar, Madanandapuram, Chennai. The event featured Smt. Gayathri Venkatragavan, a renowned musician, accompanied by Shri M. R. Gopinath on violin, Shri A. V. Manikantaan on mridangam, and Sri Sainath on ghatam. The local audience turned out in large numbers and enjoyed the concert thoroughly.";

            // Append the new content and hide the button
            parent.appendChild(additionalContent);
            this.style.display = 'none'; // Hide the "Show more" button
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle "Show more" button click
    document.querySelectorAll('#show-more-2').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const parent = this.parentElement;

            const additionalContent = document.createElement('span');
            additionalContent.classList.add('para');
            additionalContent.innerHTML = "As the founder of Jai Sathguru Sangeetha Vidyalaya, he teaches mridangam and konnakol to over 75 students, aiming to inspire the younger generation to explore the art of mridangam. He has also served as a guest faculty member for postgraduates at Dr. J. Jayalalithaa Tamil Nadu Music and Fine Arts University.<br><br>Manikantaan has received multiple accolades, including the Best Mridangist award from The Music Academy, Chennai, in 2006 and 2011, as well as the Best Accompaniment award at Sri Krishna Gana Sabha in 2002 and 2008. He was honored as the Best Percussionist in 2014 and received the 'Guru Kaaraikkudi Mani' award from Karthik Fine Arts, Chennai.<br><br>Throughout his career, Manikantaan has accompanied many esteemed musicians, including Sri O. S. Thiyagarajan, Smt. Sudha Ragunathan, and Sri Kunakudi Balamuralikrishna. He has also performed alongside legends like Padmasri Haridwaramangalam Sri K. Palanivel and ghatam maestro Sri Vikku Vinayakram. Currently, he collaborates with various star artists, including Sri Rajesh Vaidhya and Smt. Vasudha Ravi.<br><br>In the Namasankeerthanam field, he has accompanied numerous leading Bhagavathars, such as HH Sri Ramananda Saraswati Swamiji and Udayalur Sri Kalyanaraman Bhagavathar. Together with his brother, Chennai A. Srikanth Bhagavathar, they are making a significant impact in the genre.<br><br>A. V. Manikantaan is a regular performer on All India Radio, Chennai, and has performed extensively across South India as well as internationally in countries like Canada, the USA, UAE, Bahrain, Malaysia, and South Africa.";

            // Append the new content and hide the button
            parent.appendChild(additionalContent);
            this.style.display = 'none'; // Hide the "Show more" button
        });
    });
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}