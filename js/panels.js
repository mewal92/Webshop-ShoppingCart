/*
Skriver ut panelen högst upp samt footern längst ned
 */

function panel() {
    const header = document.querySelector("#panel");
    const path = window.location.pathname;
  
    if (path === "/") {
      window.location.pathname = "/index.html";
    }
  
    header.innerHTML = `
      <nav class="nav">
        <ul>
        <li class="header ${path.includes("/index.html") ? "active" : ""}">
        <a href="index.html">Startpage</a>
      </li>
          <li class="header ${path.includes("/products.html") ? "active" : ""}">
            <a href="products.html">Products</a>
          </li>
          <li class="header ${path.includes("/contact.html") ? "active" : ""}">
          <a href="contact.html">Contact us</a>
        </li>
         
        </ul>
      </nav>
    `;
}

  function footer(){
    const footer = document.querySelector("#footer");
    footer.innerHTML = `
    <b>Copyright &copy; 2023 - Melinda Walter, Oscar Jidåker, Kevin Dybeck, Gustav Henriksson</b>
    `
}

footer();
  
panel();