window.addEventListener('load', () => {

  const button = document.querySelector('.button');
  const selector = document.querySelectorAll('.javascript')
  const console = document.querySelector('.console'); 

  button.addEventListener("click", () =>{
    button.disabled = true;

    const funcDelay = document.querySelectorAll('.func-delay');
    const funcCompress = document.querySelectorAll('.func-compress');
    const funcEncrypt = document.querySelectorAll('.func-encrypt');
    const funcRunProgram = document.querySelectorAll('.func-compEnc');
    const runProgram = document.querySelectorAll('.run-script');


    console.classList.add('console-show');
    console.classList.remove('console-hide');


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    /* ORDER OF OPERATION ON WEBPAGE
    1 runProgram
    2 funcRunProgram
    3 funcCompress
    4 funcDelay
    5 funcEncrypt
    6 funcDelay
    7 runProgram
    */
    
    // set all to blurred
    selector.forEach(element => {
      element.classList.add('blurred');
    });

    const standardDelay = 0;

    async function start(){
    await activeOrInactive(runProgram, -standardDelay);
    await activeOrInactive(funcRunProgram);
    console.innerHTML += '<p>1a) runProgram</p>';

    await activeOrInactive(funcCompress, 3000);
    console.innerHTML += '<p>2) compress</p>';

    await activeOrInactive(funcDelay);
    
    await activeOrInactive(funcRunProgram);
    console.innerHTML += '<p>1b) runProgram</p>';
    
    await activeOrInactive(funcDelay);
    
    await activeOrInactive(funcEncrypt, 2000);
    console.innerHTML += '<p>3) encrypt</p>';

    await activeOrInactive(funcDelay);
    
    await activeOrInactive(runProgram);
    console.innerHTML += '<p>1c) runProgram</p>';
    await delay(3000);
    return;
    }
    
    async function activeOrInactive(nodelist, ms=0){
      await delay(ms + standardDelay);
      selector.forEach(element => {
        element.classList.add('blurred');
        element.classList.remove('sharp');
      });
      nodelist.forEach(element => {
        element.classList.remove('blurred');
        element.classList.add('sharp');
      });
      return;
    }   

    start().then(() => {
      selector.forEach(element => {
        element.classList.remove('blurred')
        element.classList.remove('sharp')
      })
      console.innerHTML += 'eht';
      button.disabled = false;
    })


  })


});