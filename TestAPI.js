let TestAPI = function() {
    let current, xhttp;
    const API_ENDPOINT = "https://yowch72bn9.execute-api.ap-northeast-1.amazonaws.com/V1";
   
    function response() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {    
            let res = JSON.parse(xhttp.responseText);
            let contents;
            
                contents = res
                console.log(contents);
            document.getElementById("results").src = contents.message;
            document.getElementById("results").style.display = "block";
            
        }
        
    }
        
    function clickListener(e) {
        xhttp = new XMLHttpRequest();
        let urlString = API_ENDPOINT;        
   
            urlString += "/wadjennyapi";
        
        
        xhttp.onreadystatechange = function() { response();}
        xhttp.open("GET", urlString, true);
        xhttp.send();
    }


function initModule() {
    document.getElementById("cmdOther").addEventListener("click", clickListener);
}
    
    return {initModule: initModule}
}();