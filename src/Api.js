class Api {
    constructor() {
        this.path = "https://api.petiteweb.dev/sber/mall";
      
    }
    getShops() {
        return fetch(`${this.path}`)
    }

    
    // delShop(id){
    //     return fetch(`${this.path}/${id}`),{
    //         method: "DELETE"
    //     }
    // }
  

}

export {Api};