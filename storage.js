class Storage{
    //Local Storage film ekleme
    static addFilmToStorage(newFilm){
        let films=this.getFilmsFormStorage();
        films.push(newFilm);
       
        localStorage.setItem("films",JSON.stringify(films));
   }
   //Local Storage films kontrol
   static getFilmsFormStorage(){
       let films;
       if(localStorage.getItem("films")===null){
           films=[];
       }else{
           films=JSON.parse(localStorage.getItem("films"));
       }
       return films;
   }
   //Local Storage' den Film Silme
   static deleteFilmFromStorage(filmTitle){
   let films=this.getFilmsFormStorage();
   films.forEach(function(film,index){
       if(film.title===filmTitle){
           films.splice(index,1);
       }
   });
   localStorage.setItem("films",JSON.stringify(films));
   ui.displayMessage("Silme İşlemi Başarılı...","success");
   }
   //Tüm Local Storage' i Temizleme
   static clearAllFilmsFromStorage(){
       localStorage.removeItem("films");
   }

   //Local Storage'de eklemeye çalıştığımız filmin olup olmadığını kontrol eder.
   static hasFilmStorage(filmTitle){
       let value=false;
       let films=this.getFilmsFormStorage();
       films.forEach(function(film){
        if(film.title===filmTitle){
            value=true;
        }
       });
       return value;
   }
}
