import NewBooks from '../model/NewBooks'

async function InsertNewBooks(req, res) {
    var new_books = [
        {
            title: "Twilight",
            small_title: "The Twilight Saga #1",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443l/41865.jpg",
            author: "Stephenie Meyer",
            author_works: "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults, ' an Amazon.com 'Best Book of the Decade So Far, ' and a Publishers Weekly Best Book of the Year.Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons",
            summary: "It is a 2005 young adult vampire-romance novel by author Stephenie Meyer. It is the first book in the Twilight series, and introduces seventeen-year-old Isabella 'Bella' Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 108-year-old vampire frozen in his 17-year-old body.",
            goodreads_rating: 3.60,
            total_ratings: 5155717,
            publication_year: 2005
        },
        {
            title: "New Moon",
            small_title: "The Twilight Saga #2",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039440l/49041.jpg",
            author: "Stephenie Meyer",
            author_works: "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults, ' an Amazon.com 'Best Book of the Decade So Far, ' and a Publishers Weekly Best Book of the Year.Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons",
            summary: "New Moon is a 2006 romantic fantasy novel by author Stephenie Meyer, and is the second novel in the Twilight series. The novel continues the story of Bella Swan and vampire Edward Cullen's relationship. When Edward leaves Bella after his brother attacks her, she is left heartbroken and depressed for months until Jacob Black becomes her best friend and helps her fight her pain. However, her life twists once more when Jacob's nature reveals itself and Edward's sister decides to visit.",
            goodreads_rating: 3.54,
            total_ratings: 1524801,
            publication_year: 2006
        },
        {
            title: "Eclipse",
            small_title: "The Twilight Saga #3",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361038355l/428263.jpg",
            author: "Stephenie Meyer",
            author_works: "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults, ' an Amazon.com 'Best Book of the Decade So Far, ' and a Publishers Weekly Best Book of the Year.Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons",
            summary: "Eclipse is the third novel in the Twilight Saga by Stephenie Meyer. It continues the story of Bella Swan and her vampire love, Edward Cullen. The novel explores Bella's compromise between her love for Edward and her friendship with shape-shifter Jacob Black, along with her dilemma of leaving her mortality behind in a terrorized atmosphere, a result of mysterious vampire attacks in Seattle.",
            goodreads_rating: 3.69,
            total_ratings: 1479169,
            publication_year: 2007
        },
        {
            title: "Breaking Dawn",
            small_title: "The Twilight Saga #4",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039438l/1162543._SY475_.jpg",
            author: "Stephenie Meyer",
            author_works: "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults, ' an Amazon.com 'Best Book of the Decade So Far, ' and a Publishers Weekly Best Book of the Year.Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons",
            summary: "Breaking Dawn is the 2008 fourth and final novel in The Twilight Saga by American author Stephenie Meyer. Divided into three parts, the first and third sections are written from Bella Swan's perspective and the second is written from the perspective of Jacob Black. The novel directly follows the events of the previous novel, Eclipse, as Bella and Edward Cullen get married, leaving behind a heartbroken Jacob. When Bella faces unexpected and life-threatening situations, she willingly risks her human life and possible vampire immortality.",
            goodreads_rating: 3.74,
            total_ratings: 1374995,
            publication_year: 2008
        },
        {
            title: "Midnight Sun",
            small_title: "The Twilight Saga #5",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588597375l/53287484.jpg",
            author: "Stephenie Meyer",
            author_works: "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults, ' an Amazon.com 'Best Book of the Decade So Far, ' and a Publishers Weekly Best Book of the Year.Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons",
            summary: "This unforgettable tale as told through Edward's eyes takes on a new and decidedly dark twist. Meeting Bella is both the most unnerving and intriguing event he has experienced in all his years as a vampire. As we learn more fascinating details about Edward's past and the complexity of his inner thoughts, we understand why this is the defining struggle of his life. How can he justify following his heart if it means leading Bella into danger",
            goodreads_rating: 3.75,
            total_ratings: 107950,
            publication_year: 2020
        },
        {
            title: "Angels & Demons",
            small_title: "Robert Langdon #1",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558711679l/960.jpg",
            author: "Dan Brown",
            author_works: "Dan Brown is the author of numerous #1 bestselling novels, including The Da Vinci Code, which has become one of the best selling novels of all time as well as the subject of intellectual debate among readers and scholars. Brown’s novels are published in 52 languages around the world with 200 million copies in print.The son of a mathematics teacher and a church organist, Brown was raised on a prep school campus where he developed a fascination with the paradoxical interplay between science and religion. These themes eventually formed the backdrop for his books. He is a graduate of Amherst College and Phillips Exeter Academy, where he later returned to teach English before focusing his attention full time to writing.",
            summary: "World-renowned Harvard symbologist Robert Langdon is summoned to a Swiss research facility to analyze a cryptic symbol seared into the chest of a murdered physicist. What he discovers is unimaginable: a deadly vendetta against the Catholic Church by a centuries-old underground organization -- the Illuminati. In a desperate race to save the Vatican from a powerful time bomb, Langdon joins forces in Rome with the beautiful and mysterious scientist Vittoria Vetra. Together they embark on a frantic hunt through sealed crypts, dangerous catacombs, and deserted cathedrals, and into the depths of the most secretive vault on earth...the long-forgotten Illuminati lair.",
            goodreads_rating: 3.91,
            total_ratings: 2758526,
            publication_year: 2000
        },
        {
            title: "The Fault in Our Stars",
            small_title: "The Fault in Our Stars",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360206420l/11870085.jpg",
            author: "John Green",
            author_works: "John Green's first novel, Looking for Alaska, won the 2006 Michael L. Printz Award presented by the American Library Association. His second novel, An Abundance of Katherines, was a 2007 Michael L. Printz Award Honor Book and a finalist for the Los Angeles Times Book Prize. His next novel, Paper Towns, is a New York Times bestseller and won the Edgar Allen Poe Award for Best YA Mystery. In January 2012, his most recent novel, The Fault in Our Stars, was met with wide critical acclaim, unprecedented in Green's career. The praise included rave reviews in Time Magazine and The New York Times, on NPR, and from award-winning author Markus Zusak. The book also topped the New York Times Children's Paperback Bestseller list for several weeks. Green has also coauthored a book with David Levithan called Will Grayson, Will Grayson, published in 2010. The film rights for all his books, with the exception of Will Grayson Will Grayson, have been optioned to major Hollywood Studios.",
            summary: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.Insightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green's most ambitious and heartbreaking work yet, brilliantly exploring the funny, thrilling, and tragic business of being alive and in love.",
            goodreads_rating: 4.20,
            total_ratings: 3727707,
            publication_year: 2012
        },
        {
            title: "To Kill a Mockingbird",
            small_title: "To Kill a Mockingbird",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
            author: "Harper Lee",
            author_works: "Harper Lee, known as Nelle, was born in the Alabama town of Monroeville, the youngest of four children of Amasa Coleman Lee and Frances Cunningham Finch Lee. Her father, a former newspaper editor and proprietor, was a lawyer who served on the state legislature from 1926 to 1938. As a child, Lee was a tomboy and a precocious reader, and enjoyed the friendship of her schoolmate and neighbor, the young Truman Capote.",
            summary: " The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.Compassionate, dramatic, and deeply moving, 'To Kill A Mockingbird' takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
            goodreads_rating: 4.28,
            total_ratings: 4697793,
            publication_year: 2006
        },
        {
            title: "The Hunger Games ",
            small_title: "The Hunger Games #1",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg",
            author: "Suzanne Collins",
            author_works: "Since 1991, Suzanne Collins has been busy writing for children’s television. She has worked on the staffs of several Nickelodeon shows, including the Emmy-nominated hit Clarissa Explains it All and The Mystery Files of Shelby Woo. For preschool viewers, she penned multiple stories for the Emmy-nominated Little Bear and Oswald. She also co-wrote the critically acclaimed Rankin/Bass Christmas special, Santa, Baby! Most recently she was the Head Writer for Scholastic Entertainment’s Clifford’s Puppy Days.",
            summary: "Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love",
            goodreads_rating: 4.32,
            total_ratings: 6617886,
            publication_year: 2008
        },
        {
            title: "Words of Radiance (The Stormlight Archive, #2)",
            small_title: "The Stormlight Archive, #2",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507307927l/17332218.jpg",
            author: "Brandon Sanderson",
            author_works: "Brandon’s major books for the second half of 2016 are The Dark Talent, the final volume in Alcatraz Smedry’s autobiographical account of his battle against the Evil Librarians who secretly rule our world, and Arcanum Unbounded, the collection of short fiction in the Cosmere universe that includes the Mistborn series and the Stormlight Archive, among others. This collection features The Emperor’s Soul, Mistborn: Secret History, and a brand-new Stormlight Archive novella, Edgedancer.",
            summary: "Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status darkeyes. Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.The Assassin, Szeth, is active again, murdering rulers all over the world of Roshar, using his baffling powers to thwart every bodyguard and elude all pursuers. Among his prime targets is Highprince Dalinar, widely considered the power behind the Alethi throne. His leading role in the war would seem reason enough, but the Assassin's master has much deeper motives",
            goodreads_rating: 4.77,
            total_ratings: 223801,
            publication_year: 2014
        }
    ]

    try {
        for (let i = 0; i < new_books.length; i++) {
            await NewBooks.create({
                title: new_books[i].title,
                small_title: new_books[i].small_title,
                cover_url: new_books[i].cover_url,
                author: new_books[i].author,
                author_works: new_books[i].author_works,
                summary: new_books[i].summary,
                goodreads_rating: new_books[i].goodreads_rating,
                total_ratings: new_books[i].total_ratings,
                publication_year: new_books[i].publication_year
            })
        }
    } catch (err) {
        console.log(err)
    }
    res.status(200).json({ msg: new_books.length })
}

export default InsertNewBooks