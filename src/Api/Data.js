    export const getPosts = async ()=>{
    

    const response= await fetch('https://jsonplaceholder.typicode.com/posts', {method: "Get",

    });

    return await response.json();

};


export const getRandomUser = async() =>{
    const response =await fetch('https://randomuser.me/api/', {method:"Get"});  //randomuser api

    return await response.json();
};