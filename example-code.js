window.addEventListener('load', () => {

  const button = document.querySelector('.button');
  const selector = document.querySelectorAll('.javascript')
  const result = document.querySelector('.result');

  button.addEventListener("click", () =>{
    const funcDelay = document.querySelectorAll('.func-delay');
    const funcCompress = document.querySelectorAll('.func-compress');
    const funcEncrypt = document.querySelectorAll('.func-encrypt');
    const funcCompEnc = document.querySelectorAll('.func-compEnc');
    const runScript = document.querySelectorAll('.run-script');


    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    /* ORDER OF OPERATION ON WEBPAGE
    1 runScript
    2 funcCompEnc
    3 funcCompress
    4 funcDelay
    5 funcEncrypt
    6 funcDelay
    7 runScript
    */
    
    // set all to blurred
    selector.forEach(element => {
      element.classList.add('blurred');
    });

    async function runProgram(){
    await activeOrInactive(runScript);
    await activeOrInactive(funcCompEnc, 3000);
    await activeOrInactive(funcCompress);
    await activeOrInactive(funcDelay);
    await activeOrInactive(funcCompEnc);
    await activeOrInactive(funcDelay);
    await activeOrInactive(funcEncrypt, 2000);
    await activeOrInactive(funcDelay);
    await activeOrInactive(runScript);
    await delay(3000);
    return;
    }
    
    async function activeOrInactive(nodelist, ms=0){
      await delay(ms + 4000);
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

    runProgram().then(() => {
      selector.forEach(element => {
        element.classList.remove('blurred')
        element.classList.remove('sharp')
      })
      alert('console.log(result) => eht');
    })


  })


});