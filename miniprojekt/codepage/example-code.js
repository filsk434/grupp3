window.addEventListener('load', (event) => {

  const button = document.querySelector('.button');
  const selector = document.querySelectorAll('.javascript')

  button.addEventListener("click", () =>{
    const funcDelay = document.querySelectorAll('.func-delay');
    const funcCompress = document.querySelectorAll('.func-compress');
    const funcEncrypt = document.querySelectorAll('.func-encrypt');
    const funcCompEnc = document.querySelectorAll('.func-compEnc');
    const runScript = document.querySelectorAll('.run-script');

    // 1) set the classList to in-active
    selector.forEach(element => {
      element.classList.add('in-active');
    });

    // 2) display the delay
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    activeOrInactive(funcDelay);

    // 3) display the runScrpt
    activeOrInactive(runScript)

    async function compress(input) {
      await delay(3000);
      console.log(1);
      return(input.slice(0, 3));
    }

    async function encrypt(input) {
      await delay(2000);
      console.log(2);
      return(input.split('').reverse().join(''));
    }

    async function compEnc(str){
      activeOrInactive(funcCompEnc) // 4) display the compEnc
      const a = await compress(str);
      activeOrInactive(funcCompress) // 5) display the compress
      const b = await encrypt(a);
  
      activeOrInactive(funcEncrypt); // 6) display the encrypt
      console.log(3);
      return b;
    }

    compEnc('the secret key is 123543').then((result) => {
      console.log(result);
    })

    function activeOrInactive(nodelist){
      nodelist.forEach(element => {
        element.classList.remove('in-active');
        element.classList.add('active');
      });
    }

   

  })


});