function redirect() {
    var nameinput = document.getElementById('codeeinput').value
    var input = document.getElementById('codeinput').value.toLowerCase();
     switch(input) {
         case 'flapibird':
             window.location.replace('https://leadhorizon.netlify.app/result/view/868djJKjdjfdlöKIIJKJDJLA8834jJksd');
             break;
         default:
            window.location.replace('error.html');
             break;
     }
}