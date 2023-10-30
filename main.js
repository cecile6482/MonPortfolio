function onload()
{

    $('.star1').addClass('rotate-center-reverse');
    $('.star2').addClass('rotate-center');

    $('.cover').addClass('fade-out');
    setInterval(() => {
        $('.cover').removeClass('fade-out').hide();
    }, 500);
}
function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Call setHeight() initially
setHeight();

// Listen for window resize events and adjust the value
window.addEventListener('resize', setHeight);


function moveToResume()
{
    window.open('Resume.pdf', '_blank');
}

function moveToEmail()
{
    window.location.href = '<a href="mailto:email@example.com">Send Email</a>';
}

function moveToUpStar()
{
    window.open("https://github.com/hpt155722/upStar", '_blank');
}

function moveToStrikeout()
{
    window.open("https://github.com/hpt155722/strikeout", '_blank');
}

function moveToWeatherApp()
{
    window.open("https://jinnhaweatherapp.netlify.app/", '_blank');
}
function moveToWeatherAppGit()
{
    window.open("https://github.com/hpt155722/weather-app", '_blank');
}


