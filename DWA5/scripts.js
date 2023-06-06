// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (dividend === '' || divider === '') {
        result.innerText = "Division not performed. Both values are required in inputs. Try again";
        return;
    }

    if (dividend < 0 || divider < 0) {
        result.innerText = "Division not performed. Invalid number provided. Try again";
        throw new Error("Invalid number provided. Try again.");
    }


try{
    if (isNaN(dividend) || isNaN(divider) ) {

        result.innerText = "Something critical went wrong. Please reload the page";
        document.body.innerHTML = result.outerHTML
        throw new Error("Something critical went wrong");
    }
}catch(error){
    console.log(error);
}
   
    result.innerText = Math.floor(dividend / divider);
});