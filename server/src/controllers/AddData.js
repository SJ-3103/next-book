import BookData from '../model/BookData'

async function AddData(req, res) {
  var data = {
    id: 4,
    title: 'Breaking Dawn',
    small_title: 'The Twilight Saga #4',
    cover_url:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039438l/1162543._SY475_.jpg',
    author: 'Stephenie Meyer',
    author_works:
      "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults,' an Amazon.com 'Best Book of the Decade So Far,' and a Publishers Weekly Best Book of the Year.Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons",
    summary:
      "Breaking Dawn is the 2008 fourth and final novel in The Twilight Saga by American author Stephenie Meyer. Divided into three parts, the first and third sections are written from Bella Swan's perspective and the second is written from the perspective of Jacob Black. The novel directly follows the events of the previous novel, Eclipse, as Bella and Edward Cullen get married, leaving behind a heartbroken Jacob. When Bella faces unexpected and life-threatening situations, she willingly risks her human life and possible vampire immortality.",
    goodreads_rating: 3.74,
  }
  try {
    await BookData.create({
      id: data.id,
      title: data.title,
      small_title: data.small_title,
      cover_url: data.cover_url,
      author: data.author,
      author_works: data.author_works,
      summary: data.summary,
      goodreads_rating: data.goodreads_rating,
    })
    res.status(200).json({ message: true })
  } catch (err) {
    console.log(err)
  }
}
export default AddData
