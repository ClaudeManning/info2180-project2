window.onload = function(){
    httpRequest = new XMLHttpRequest;
    httpRequest.open('GET', 'http://localhost/Info2180-project2/database/Exit.php');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200){
            window.location = 'Signin.html';
        }
    }
}