import MostRated from "../../model/Book Models/MostRated";
import BestSelling from "../../model/Book Models/BestSelling";
import NewBooks from "../../model/Book Models/NewBooks";

async function SendBooks(req, res) {
  var { name } = req.query;
  if (name === "MostRated") {
    try {
      var data = await MostRated.find(
        {},
        {
          title: 1,
          cover_url: 1,
          author: 1,
          goodreads_rating: 1,
        }
      );
      res.status(200).json({ data: data });
    } catch (err) {
      console.log(err);
    }
  } else if (name === "BestSelling") {
    try {
      var data = await BestSelling.find(
        {},
        {
          title: 1,
          cover_url: 1,
          author: 1,
          goodreads_rating: 1,
        }
      );
      res.status(200).json({ data: data });
    } catch (err) {
      console.log(err);
    }
  } else if (name === "NewBooks") {
    try {
      var data = await NewBooks.find(
        {},
        {
          title: 1,
          cover_url: 1,
          author: 1,
          goodreads_rating: 1,
        }
      );
      res.status(200).json({ data: data });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.status(400).json({ msg: "Collection Name incorrect" });
  }
}
export default SendBooks;