function Palindromo(text)
{
    let parolaPalindroma = text.split("").reverse().join("")
    console.log(parolaPalindroma)

    if(text === parolaPalindroma)
        console.log(`la parola è palindroma`)
    else
        console.log(`la parola non è palindroma`)
        
}

let parola = prompt(`Inserisci una parola`)
    console.log(parola)

Palindromo(parola)


