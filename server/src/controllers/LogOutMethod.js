import CookieData from '../model/CookieData'

async function LogOutMethod(req, res) {
    if (req.headers.cookie) {
        let cookie_from_client = req.headers.cookie.slice(4)
        await CookieData.findOneAndDelete({ cookie_value: cookie_from_client })
    }
    res.cookie('jwt', "", { httpOnly: true })
    res.send('Logout Method calling')

}
export default LogOutMethod