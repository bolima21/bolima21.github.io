function getJSON(url) {
    var resposta;
    var xmlHttp;
    resposta  = '' ;
    xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null){
        xmlHttp.open( "GET", url, false );
        xmlHttp.send( null );
        resposta = xmlHttp.responseText;
    }
    return resposta;
}
export default getJSON;