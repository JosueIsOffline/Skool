const API = 'http://10.0.0.6:3001'

export const login = async (user) => {
    const res = await fetch('http://10.0.0.6:3001/auth/login', {
        method: "POST",
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({
            correo: user.correo, 
            clave: user.clave
        })
    })
    return await res.json();
}

// export const login = async (user) => {
//   return await postLogin(user)
// }

export const getUser = async () => {
    const res = await fetch(`${API}/home`)
    return await res.json()
    
}
