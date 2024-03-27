document.addEventListener("DOMContentLoaded", function() {
  
  const homemenufunction = () => {
    const buttonDeployNonResponsive = () => {
      homemenu.classList.remove("responsive");
        if(homemenu.classList.contains("hidden")){
          homemenu.classList.remove("hidden");
          accountMenu.classList.remove("hidden");
        }
        else{
          homemenu.classList.add("hidden");
          accountMenu.classList.add("hidden");
        }
    }
    const buttonDeployResponsive = () => {
        if(homemenu.classList.contains("hidden-responsive")){
          homemenu.classList.remove("hidden-responsive");
          homemenu.classList.add("responsive");
          accountMenu.style.filter = 'blur(3px)';

        }
        else{
          homemenu.classList.add("hidden-responsive");
          homemenu.classList.remove("responsive");
          accountMenu.style.filter = '';
        }
    }
    const switchResponsive = () => {
      let maxWidth = window.matchMedia('(max-width: 530px)').matches;
        if(maxWidth){
          homemenu.classList.remove("hidden");
          accountMenu.classList.remove("hidden");
          homemenu.classList.add("hidden-responsive");
          accountMenu.style.left = "-10.2em";
        }
        else{
          accountMenu.style.left = '';
          accountMenu.style.filter = '';
          homemenu.classList.remove("hidden-responsive");
          homemenu.classList.remove("responsive");
        }
    }

    const homemenu = document.querySelector('.main__element');
    const accountMenu = document.querySelector('#principalMenu');
    const dropdownButton = document.querySelector('.aside-card_option__button button');
    switchResponsive();
    dropdownButton.addEventListener("click", () => {
      let maxWidth = window.matchMedia('(max-width: 500px)').matches;
      console.log(maxWidth);
      if(!maxWidth){
        buttonDeployNonResponsive();
      }
      else {
        buttonDeployResponsive();
      }
    });

    window.addEventListener('resize', () => {
        switchResponsive();
    });

  }

  const templatesChargue = async function() { 
  try {
    const responseHeader = await fetch('header.html');
    const htmlHeader = await responseHeader.text();
    document.querySelector('body').insertAdjacentHTML('beforebegin', htmlHeader);
  } catch (error) {
    console.error('Error al cargar el header:', error);
  }

  try {
    const responseFooter = await fetch('./footer.html');
    const htmlFooter = await responseFooter.text();
    document.querySelector('body').insertAdjacentHTML('beforeend', htmlFooter);
  } catch (error) {
    console.error('Error al cargar el footer:', error);
  }

  try {
    const responseMenu = await fetch('myhomemenu.html');
    const htmlMenu = await responseMenu.text();
    document.querySelector('main').insertAdjacentHTML('afterbegin', htmlMenu);
    homemenufunction();
  } catch (error) {
    console.error('Error al cargar el menu del home:', error);
  }
  };
  templatesChargue();

  document.addEventListener("DOMContentLoaded", function() {
      console
  });

});
