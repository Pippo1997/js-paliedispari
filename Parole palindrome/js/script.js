function Palindromo(text)
{
    if(text === parolaPalindroma)
        return true;
    
    else
        return false;
        
}

let parola = prompt(`Inserisci una parola`)
    console.log(parola)

let parolaPalindroma = parola.split("").reverse().join("")
    console.log(parolaPalindroma)

if(parola === parolaPalindroma)
    console.log(`la parola è palindroma`)
else
    console.log(`la parola non è palindroma`)