import MostRated from '../model/MostRated'
import BestSelling from '../model/BestSelling'
import NewBooks from '../model/NewBooks'

async function SendBooks(req, res) {

    var { collectionName } = req.body

    var value = collectionName


    if (value === "MostRated") {
        try {
            var data = await MostRated.find()
            res.status(200).json({ msg: data })
        } catch (err) {
            console.log(err)
        }
    }

    else if (value === "BestSelling") {
        try {
            var data = await BestSelling.find()
            res.status(200).json({ msg: data })
        } catch (err) {
            console.log(err)
        }
    }
    else if (value === "NewBooks") {
        try {
            var data = await NewBooks.find()
            res.status(200).json({ msg: data })
        } catch (err) {
            console.log(err)
        }
    }
    else {
        res.status(400).json({ msg: "Collection Name incorrect" })
    }
}
export default SendBooks