// Add your code here
function submitData (name, email) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }
    return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function(data) {
      const p = document.createElement("p");
      p.textContent = data.id;
      p.id = data.id;
      document.body.append(p);
    })
    .catch(function(error){
        const p = document.createElement("p")
        p.textContent = error.message
        document.body.append(p)
    })  
  
}
submitData();
