function changeMode() {
  const body = document.body;
  const ImageMode = document.getElementById("ImageMode");
  const githubIcon = document.getElementById("githubIcon");
  const instagramIcon = document.getElementById("InstagramIcon");
  const youtubeIcon = document.getElementById("youtubeIcon");
  const linkedinIcon = document.getElementById("linkedinIcon");
  
    if(body.classList == "Dark") {
        body.classList.remove("Dark");
        body.classList.add("Light");
        ImageMode.src = "/src/images/LightMode/handle.png";
        ImageMode.classList.add("animationLight")
        ImageMode.classList.remove("animationDark")

        githubIcon.src = "./src/images/Redes_Sociais/GitHub-black.png"
        instagramIcon.src = "./src/images/Redes_Sociais/Instagram-black.png"
        youtubeIcon.src = "./src/images/Redes_Sociais/YouTube-black.png"
        linkedinIcon.src = "./src/images/Redes_Sociais/LinkedIn-black.png"
    } else if(body.classList == "Light") {
        body.classList.remove('Light');
        body.classList.add("Dark");
        ImageMode.src = "/src/images/LightMode/handleNight.png";
        ImageMode.classList.add("animationDark")
        ImageMode.classList.remove("animationLight")
        githubIcon.src = "./src/images/Redes_Sociais/GitHub.png"
        instagramIcon.src = "./src/images/Redes_Sociais/Instagram.png"
        youtubeIcon.src = "./src/images/Redes_Sociais/YouTube.png"
        linkedinIcon.src = "./src/images/Redes_Sociais/LinkedIn.png"

    }


}   