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
    window.open('CV_CDA.pdf', '_blank');
}

function moveToVintageStore()
{
    window.open("https://github.com/cecile6482/M2i_CDA/tree/main/07.%20CSS/Exercices/exo_objets_a_vendre/rendu", '_blank');
}

function moveToAnsafCreationGH()
{
    window.open("https://github.com/cecile6482/base-apparel-coming-soon-master", '_blank');
}

function moveToAnsafCreation()
{
    window.open("https://cecile6482.github.io/base-apparel-coming-soon-master/", '_blank');
}

function moveToRMGH()
{
    window.open("https://github.com/cecile6482/rick-et-morty", '_blank');
}

function moveToRM()
{
    window.open("https://cecile6482.github.io/rick-et-morty/", '_blank');
}

function moveToWeatherAppGH()
{
    window.open("https://github.com/cecile6482/weather_project", '_blank');
}

// function moveToWeatherApp()
// {
//     window.open("https://cecile6482.github.io/rick-et-morty/", '_blank');
// }

