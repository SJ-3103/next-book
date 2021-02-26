import BestSelling from '../../model/Book Models/BestSelling'
import MostRated from '../../model/Book Models/MostRated'
import NewBooks from '../../model/Book Models/NewBooks'

async function GetDetails(req, res) {
    var { name, title } = req.body

    if (name === "MostRated") {
        try {
            var data = await MostRated.findOne({ title: title })
            res.status(200).json({ data: data })
        } catch (err) {
            console.log(err)
        }
    } else if (name === "BestSelling") {
        try {
            var data = await BestSelling.findOne({ title: title })
            res.status(200).json({ data: data })
        } catch (err) {
            console.log(err)
        }
    } else if (name === "NewBooks") {
        try {
            var data = await NewBooks.findOne({ title: title })
            res.status(200).json({ data: data })
        } catch (err) {
            console.log(err)
        }
    } else {
        res.status(400).json({ msg: "The Collection name is incorrect" })
    }
}

export default GetDetails