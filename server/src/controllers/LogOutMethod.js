async function LogOutMethod(req, res) {
    res.send('Logout Method calling')
    console.log(await req.headers.cookie)
}
export default LogOutMethod