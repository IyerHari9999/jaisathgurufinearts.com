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
            additionalContent.innerHTML = "Founder of JAI SATHGURU SANGEETHA VIDYALAYA (Music School) and teaching Mridangam and Konnakol for more than 75 students. Having a vision to bring more number of younger generation into the Mridangam field.<br><br>Worked as a Guest Faculty (Mridangam & Konnakol) for Post Graduate Students in Dr. J Jayalalithaa Tamil Nadu Music and Fine Arts University.<br><br> He had won the Best Mridangist award from The Music Academy Chennai in 2006 and 2011, won the Best accompaniment award for the year 2002 and 2008 at Sri Krishna Gana Sabha, Best Percussionist Artist award in 2014 \"Guru Karaikudi Mani\" award from Karthik Fine Arts , Chennai.<br><br> In his musical journey, he is accompanying many stalwarts and great vidwans like Sri. O S Thiyagarajan, Smt .Sudha Ragunathan, Sri Kunakudi Balamuralikrishna and Special Performance with Legends like Padmasri HARIDWARAMANGALAM SRI K. PALANIVEL, Ghatam maestro SRI VIKKU VINAYAKRAM, his guru \"GURU KAARAIKKUDI MANI\" and he is presently giving mridangam accompaniment to various star-studded artist, few to name are Sri. Rajesh Vaidhya, Madolin Sri.U Rajesh, Smt.SuchithraBalasubramanian, Sri.R.P.Shravan, Smt.Vasudha Ravi, Smt.Vidya Kalyanaraman, Smt. Savitha Sriram, Hyderabad Sri.J S Sriram and so on and so on.<br><br> In Namasankeerthanam field he has accompanied, across generations, almost all the renowned and leading Bhagavathars like HH Sri RAMANANDA SRASWATI SWAMIJI, Udayalur Sri KALYANARAMAN Bhagavathar, Sri OS SUNDAR Bhagavathar, Sri Erode RAJAMANI Bhagavathar, Shri VIJAY and BALAJI Bhagavathar, Kadaiyanallur Sri RAJAGOPAL Bhagavathar, Shri Srikanth Koundinyan Bhagavathar Shri Gnanaeshwar Bhagavathar, New Jersey Shri Swaminathan Bhagavathar and so on. The Duo brothers Chennai A Srikanth Bhagavathar and A V Manikantaan are currently creating an impact in the field.<br><br> He is a regular performer in the ALL INDIA RADIO, Chennai. <br><br>A V Manikantaan has performed in almost all the regions in South India and travelled across the world and performed in CANADA, USA, UAE, BAHARIN, MALAYSIA, SOUTH AFRICA and so on.";

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
