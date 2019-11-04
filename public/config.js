(function configLoader(){
    const config = {
        api: "https://api.punkapi.com/v2"
    };
    localStorage.removeItem("config");
    localStorage.setItem("config", JSON.stringify(config));
})();