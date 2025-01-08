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

//document.addEventListener("DOMContentLoaded", function() {
    // Function to handle "Show more" button click
  //  document.querySelectorAll('#show-more-1').forEach(button => {
      //  button.addEventListener('click', function(e) {
    //        e.preventDefault(); // Prevent default link behavior
        //    const parent = this.parentElement;

          //  const additionalContent = document.createElement('span');
            //additionalContent.classList.add('para');
            //additionalContent.innerHTML = "<br><br>With the support of his students, well-wishers, and music enthusiasts, he took the next step and founded <strong>Jai Sathguru Fine Arts</strong> in the Madanandapuram locality of Porur. The sabha began modestly, operating from a small space with a capacity of 30–40 people. Despite its size, the sabha has hosted a variety of cultural activities, including chamber concerts, lec-dems (lectures and demonstrations), competitions, and practice sessions.<br><br>In just three months, the response to the sabha has been overwhelmingly positive. Encouraged by this, the sabha is now looking to expand its reach to the general public.<br><br>To mark its new phase, Jai Sathguru Fine Arts hosted its <strong>first public concert</strong> at the <strong>Sri Durga Lakshmi Saraswati Temple</strong> in Santhosh Nagar, Madanandapuram, Chennai. The concert featured the esteemed Smt. Gayathri Venkatragavan, a star musician, whose performance was met with great appreciation. She was accompanied by the legendary violinist M.R. Gopinath, with Shri A.V. Manikantaan himself playing the mridangam, and Sri Sainath supporting on the ghatam. <br><br>The concert was attended by a large number of local music lovers who stayed throughout the performance, further solidifying the sabha's role in nurturing and promoting the musical arts in the community. <br><br>Jai Sathguru Fine Arts Sabha is steadily growing, and with its commitment to cultural enrichment and music education, it aims to become a prominent institution in the local and global arts scene.";

            // Append the new content and hide the button
            //parent.appendChild(additionalContent);
            //this.style.display = 'none'; // Hide the "Show more" button
      //  });
    //});
//});
document.addEventListener('DOMContentLoaded', function () {
    var toggleLink = document.getElementById('toggleLink');
    toggleLink.addEventListener('click', toggleContent);
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle "Show more" button click
    document.querySelectorAll('#show-more-2').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            const parent = this.parentElement;

            const additionalContent = document.createElement('span');
            additionalContent.classList.add('para');
            additionalContent.innerHTML = "He is the founder of Jai Sathguru Sangeetha Vidyalaya, a music school where he teaches mridangam and Konnakol to over 75 students. His vision is to inspire and bring more young minds into the world of mridangam. Additionally, he has served as a guest faculty member, teaching Mridangam and Konnakol at the Post Graduate level at the Dr. J. Jayalalithaa Tamil Nadu Music and Fine Arts University.<br><br>A.V. Manikantaan has received numerous accolades, including the Best Mridangist Award from The Music Academy, Chennai in 2006 and 2011. He has also won the Best Accompaniment Award in 2002 and 2008 from Sri Krishna Gana Sabha, and the Best Percussionist Award in 2014. Notably, he was honored with the prestigious \"Guru Kaaraikkudi Mani\" Award by Karthik Fine Arts, Chennai.<br><br>Throughout his career, Manikantaan has accompanied several legendary artists across various genres, including Sri O.S. Thiyagarajan, Smt. Sudha Ragunathan, Sri Kunakudi Balamuralikrishna, Padmasri Haridwaramangalam Sri K. Palanivel, and Ghatam maestro Sri Vikku Vinayakram. He is also a frequent accompanist to numerous contemporary artists such as Sri Rajesh Vaidhya, U. Rajesh, Smt. Suchithra Balasubramanian, Sri R.P. Shravan, Smt. Vasudha Ravi, and many more.<br><br>In the field of Namasankeerthanam, Manikantaan has accompanied leading Bhagavathars such as HH Sri Ramananda Saraswati Swamiji, Udayalur Sri Kalyanaraman Bhagavathar, Sri O.S. Sundar Bhagavathar, and Sri Erode Rajamani Bhagavathar, to name a few.<br><br>Together with his brother, Chennai A. Srikanth Bhagavathar, he is currently making a significant impact in the world of Namasankeerthanam.<br><br>A regular performer on All India Radio, Chennai, A.V. Manikantaan has performed across South India and internationally in countries such as Canada, USA, UAE, Bahrain, Malaysia, South Africa, and more.<br><br>Through his dedication to the mridangam and commitment to nurturing future talents, A.V. Manikantaan continues to leave a profound mark on the world of music.";

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
function toggleContent(event) {
    var moreContent = document.getElementById('moreContent');
    var toggleLink = document.getElementById('toggleLink');

    // Prevent the default behavior of the <a> tag (page jump)
    event.preventDefault();

    // Check if the content is currently hidden or visible
    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block'; // Show the content
        toggleLink.textContent = 'Show Less'; // Change the link text to "Show Less"
        toggleLink.classList.remove('show-more');
        toggleLink.classList.add('show-less');
    } else {
        moreContent.style.display = 'none'; // Hide the content
        toggleLink.textContent = 'Show More'; // Change the link text back to "Show More"
        toggleLink.classList.remove('show-less');
        toggleLink.classList.add('show-more');
    }
}
