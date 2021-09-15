window.addEventListener('load', (event) => {

  const button = document.querySelector('.button');
  const selector = document.querySelectorAll('.javascript')

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
    await activeOrInactive(funcCompEnc);
    await activeOrInactive(funcCompress);
    await activeOrInactive(funcDelay);
    await activeOrInactive(funcEncrypt);
    await activeOrInactive(funcDelay);
    await activeOrInactive(runScript);
    await delay(1000);
    return;
    }

    runProgram().then((result) => {
      selector.forEach(element => {
        element.classList.remove('blurred')
        element.classList.remove('sharp')
      })
      console.log(result);
    })

    async function activeOrInactive(nodelist){
      await delay(1000);
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

  })


});