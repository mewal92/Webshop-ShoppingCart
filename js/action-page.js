//Om en kund inte finns kommer användaren komma till index sidan
//Gör det itne möjligt att se sidan genom att skriva in den dirrekta URLen
if(!window.sessionStorage.getItem('customer')){
    window.location.replace("index.html");

//Annars skriver vi ut varan och beställer med bekräftelse att användaren har köp något
} else {
    const customer = JSON.parse(window.sessionStorage.getItem('customer'));
    const products = JSON.parse(window.localStorage.getItem('products'));
    let cost = 0;
    products.forEach(product => {
        cost += product.price * product.quantity;
    })

    document.querySelector("#address").innerHTML = `
        Leveransadress: ${customer.address} ${customer.zip} ${customer.county}
    `;
    document.querySelector("#email").innerHTML = `
        Orderbekräftelse skickas till: ${customer.email}
    `;
    document.querySelector("#name").innerHTML = `
         ${customer.name}
    `;
    document.querySelector("#phone").innerHTML = `
        Telefon: ${customer.phone}
    `;
    products.forEach(element => {
        document.querySelector("#title").innerHTML += `
        Produkter: <ul class="vara">
            ${element.title} x${element.quantity}
        </ul>
    `;
    });   
    document.querySelector("#price").innerHTML = `
        Att betala: ${cost.toFixed(2)}€
    `;
    window.localStorage.removeItem('products');
    window.sessionStorage.removeItem('customer');
}
