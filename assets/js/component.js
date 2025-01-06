function loadComponent(id, file, callback){
    fetch(file)
    .then((resp) => {
        if(!resp.ok){
            throw new Error(`Failed to load ${file}: ${response.statusText}`);
        }
        return resp.text();
    })
    .then((html) => {
        document.getElementById(id).innerHTML = html;
        if(callback) callback();
    })
    .catch((error) => {
        console.error(error);
    });
}