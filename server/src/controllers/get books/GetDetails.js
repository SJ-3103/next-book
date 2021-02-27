import BestSelling from "../../model/Book Models/BestSelling";
import MostRated from "../../model/Book Models/MostRated";
import NewBooks from "../../model/Book Models/NewBooks";

async function GetDetails(req, res) {
  var { id, name } = req.query;

  try {
    if (name === "MostRated") {
      var data = await MostRated.findById(id);
    }

    if (name === "BestSelling") {
      var data = await BestSelling.findById(id);
    }

    if (name === "NewBooks") {
      var data = await NewBooks.findById(id);
    }
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
}

export default GetDetails;