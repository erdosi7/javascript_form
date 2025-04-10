//Az űrlap elérése, eseménykezelő hozzáadása, esemenyobjektum hozzáadása
document.getElementById('userForm').addEventListener('submit', (e) => {
    ///Űrlap viselkedés letiltása (csak adatforrás)
    e.preventDefault();
//Formdata objektum létrehozása, az űrlapesmény hozáadása    
    const myFormData = new FormData(e.target);
    //Az űrlap adatait tároló objektum létrehozása
    const userData = Object.fromEntries(myFormData.entries());
    console.log(userData);  

    const userJSON = JSON.stringify(userData, null, 2);
    localStorage.setItem('userDataKey', userJSON);
})