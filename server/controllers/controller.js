var {
    CookieData,
    UserData,
    BestSelling,
    MostRated,
    NewBooks
} = require('../model/model');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

async function Register(req, res) {
    var { firstName, lastName, emailId, password } = req.body
    try {
        var userdata = await UserData.create({
            firstName: firstName,
            lastName: lastName,
            email: emailId,
            password: password
        });
        var token = createCookie(userdata._id) //this value is jwt => token created
        res.cookie('jwt', token, { httpOnly: true }) // add same site

        try {
            var cookiedata = await CookieData.create({
                id: userdata._id,
                cookie_value: token
            })
            console.log("Cookie is stored successfully")
        } catch (err) {
            console.log(err)
        }

        res.status(201).send({ user: userdata._id })
    } catch (err) {
        var errors = handleError(err)
        res.status(401).send(errors)
    }
}

function handleError(err) {
    // console.log(err.message,err.code)
    var errors = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    // registerdata validation error
    if (err.message.includes("userdata validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'This user already exists'
    }

    return errors
}

var maxAge = 3 * 24 * 60 * 60
var createCookie = (id) => {
    return jwt.sign(
        { id },
        'THIS IS A SECRET',
        {
            expiresIn: maxAge // in sec
        }
    )
}

async function Login(req, res) {
    var { emailId, password } = req.body
    try {
        var user = await UserData.findOne({ email: emailId })
        if (user) {
            var check_password = await bcrypt.compare(password, user.password) // compares password
            if (check_password) {
                let cookie_db_obj = await CookieData.find({ id: user._id })
                let cookie_from_db = "jwt=" + cookie_db_obj.cookie_value
                if (req.headers.cookie === cookie_from_db) {
                    res.status(400).json({ msg: 'You are already logged in' })
                }
                else {
                    var token = createCookie(user._id)
                    res.cookie('jwt', token, { httpOnly: true }) //add same site
                    try {
                        var cookie_data = await CookieData.create({
                            id: user._id,
                            cookie_value: token
                        })
                    }
                    catch (err) {
                        console.log(`DB Error occured + ${err.message}`)
                    }
                    res.status(200).json({ user: user._id, msg: 'Login Successful' })
                }
            } else {
                throw Error('Password is incorrect')
            }
        } else {
            throw Error('User does not exist')
        }
    }
    catch (err) {
        console.log(err.message)
        res.status(400).json({ msg: "DB error" })
    }
}

async function LogOut(req, res) {
    if (req.headers.cookie) {
        let cookie_from_client = req.headers.cookie.slice(4)
        await CookieData.findOneAndDelete({ cookie_value: cookie_from_client })
    }
    res.cookie('jwt', "", { httpOnly: true })
    res.send('Logout Method calling')

}

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

async function MostRatedBooks(req, res) {

    var most_rated_books = [
        {
            title: "The Complete Calvin and Hobbes",
            small_title: "Calvin and Hobbes",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1354458173l/16205594.jpg",
            author: "Bill Watterson",
            author_works: "Bill Watterson (born William Boyd Watterson II) is an American cartoonist, and the author of the comic strip 'Calvin and Hobbes'. His career as a syndicated cartoonist ran from 1985 to 1995; he stopped drawing 'Calvin and Hobbes' at the end of 1995 with a short statement to newspaper editors and his fans that he felt he had achieved all he could in the comic strip medium. During the early years of his career he produced several drawings and additional contributions for 'Target: The Political Cartoon Quarterly'. Watterson is known for his views on licensing and comic syndication, as well as for his reclusive nature.",
            summary: "Calvin and Hobbes is unquestionably one of the most popular comic strips of all time. The imaginative world of a boy and his real-only-to-him tiger was first syndicated in 1985 and appeared in more than 2,400 newspapers when Bill Watterson retired on January 1, 1996. The entire body of Calvin and Hobbes cartoons published in a truly noteworthy tribute to this singular cartoon in The Complete Calvin and Hobbes. Composed of three hardcover, four-color volumes in a sturdy slipcase, this New York Times best-selling edition includes all Calvin and Hobbes cartoons that ever appeared in syndication. This is the treasure that all Calvin and Hobbes fans seek.",
            goodreads_rating: 4.82,
            total_ratings: 35975,
            publication_year: 2005
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
        },
        {
            title: "Harry Potter Boxed Set, Books 1-5 (Harry Potter, #1-5)",
            small_title: "Harry Potter, #1-5",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388185391l/8.jpg",
            author: "J.K. Rowling",
            author_works: "Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name. As she had no middle name, she chose K as the second initial of her pen name, from her paternal grandmother Kathleen Ada Bulgen Rowling. She calls herself Jo and has said, 'No one ever called me 'Joanne' when I was young, unless they were angry.' Following her marriage, she has sometimes used the name Joanne Murray when conducting personal business. During the Leveson Inquiry she gave evidence under the name of Joanne Kathleen Rowling. In a 2012 interview, Rowling noted that she no longer cared that people pronounced her name incorrectly.",
            summary: "Box Set containing Harry Potter and the Sorcerer's Stone, Harry Potter and the Chamber Of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet Of Fire, and Harry Potter and the Order of the Phoenix!",
            goodreads_rating: 4.77,
            total_ratings: 33220,
            publication_year: 2003
        },
        {
            title: "ESV Study Bible",
            small_title: "ESV Study Bible",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1410151002l/5031805.jpg",
            author: "Lane T.Dennis(Editor) and Wayne Grudem(Editor)",
            author_works: "Anonymous Author",
            summary: "The ESV Study Bible was designed to help you understand the Bible in a deeper way. Created by a diverse team of 95 leading Bible scholars and teachers--from 9 countries, nearly 20 denominations, and 50 seminaries, colleges, and universities--the ESV Study Bible features a wide array of study tools, making it a valuable resource for serious readers, students, and teachers of God's Word.",
            goodreads_rating: 4.76,
            total_ratings: 13205,
            publication_year: 2008
        },
        {
            title: "Mark of the Lion Trilogy",
            small_title: "Mark of the Lion #1-3",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349032180l/95602.jpg",
            author: "Francine Rivers",
            author_works: "New York Times bestselling author Francine Rivers continues to win both industry acclaim and reader loyalty around the globe. Her numerous bestsellers include Redeeming Love, A Voice in the Wind, and Bridge to Haven, and her work has been translated into more than thirty different languages. She is a member of Romance Writers of America's coveted Hall of Fame as well as a recipient of the Lifetime Achievement Award from American Christian Fiction Writers (ACFW).",
            summary: "#1 A Voice in the Wind: Torn by her love for a handsome aristocrat, a young slave girl clings to her faith in the living God for deliverance from the forces of decadent Rome.#2 An Echo in the Darkness: Turning away from the opulence of Rome, Marcus is led by a whispering voice from the past into a journey that could set him free from the darkness of his soul.#3 As Sure As the Dawn: Atretes. German warrior. Revered gladiator. He won his freedom through his fierceness . . . but his life is about to change forever",
            goodreads_rating: 4.76,
            total_ratings: 11570,
            publication_year: 1993
        },
        {
            title: "It's a Magical World: A Calvin and Hobbes Collection",
            small_title: "Calvin and Hobbes #11",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1448342124l/27888049._SX318_.jpg",
            author: "Bill Watterson",
            author_works: "Bill Watterson (born William Boyd Watterson II) is an American cartoonist, and the author of the comic strip 'Calvin and Hobbes'. His career as a syndicated cartoonist ran from 1985 to 1995; he stopped drawing 'Calvin and Hobbes' at the end of 1995 with a short statement to newspaper editors and his fans that he felt he had achieved all he could in the comic strip medium. During the early years of his career he produced several drawings and additional contributions for 'Target: The Political Cartoon Quarterly'. Watterson is known for his views on licensing and comic syndication, as well as for his reclusive nature.",
            summary: "When cartoonist Bill Watterson announced that his phenomenally popular cartoon strip would be discontinued, Calvin and Hobbes fans throughout the world went into mourning. Fans have learned to survive -- despite the absence of the boy and his tiger in the daily newspaper. It's a Magical World delivers all the satisfaction of visiting its characters once more. Calvin fans will be able to see their favorite mischief maker stir it up with his furry friend, long-suffering parents, classmate Susie Derkins, school teacher Miss Wormwood, and Rosalyn the baby-sitter. It's a Magical World includes full-color Sundays and has it all: Calvin-turned-firefly waking Hobbes with his flashlight glow; courageous Spaceman Spiff rocketing through alien galaxies as he battles Dad-turned-Bug-Being; and Calvin's always inspired snowman art. There's no better way for Watterson fans to savor again the special qualities of their favorite strip.",
            goodreads_rating: 4.74,
            total_ratings: 26537,
            publication_year: 1996
        },
        {
            title: "Harry Potter Boxset (Harry Potter, #1-7)",
            small_title: "Harry Potter, #1-7",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388185391l/8.jpg",
            author: "J.K. Rowling",
            author_works: "Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name. As she had no middle name, she chose K as the second initial of her pen name, from her paternal grandmother Kathleen Ada Bulgen Rowling. She calls herself Jo and has said, 'No one ever called me 'Joanne' when I was young, unless they were angry.' Following her marriage, she has sometimes used the name Joanne Murray when conducting personal business. During the Leveson Inquiry she gave evidence under the name of Joanne Kathleen Rowling. In a 2012 interview, Rowling noted that she no longer cared that people pronounced her name incorrectly.",
            summary: "Box Set containing Harry Potter and the Sorcerer's Stone, Harry Potter and the Chamber Of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet Of Fire, and Harry Potter and the Order of the Phoenix!",
            goodreads_rating: 4.74,
            total_ratings: 190050,
            publication_year: 2003
        },
        {
            title: "There's Treasure Everywhere: A Calvin and Hobbes Collection",
            small_title: "Calvin and Hobbes #10",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1448356080l/27895874._SX318_.jpg",
            author: "Bill Watterson",
            author_works: "Bill Watterson (born William Boyd Watterson II) is an American cartoonist, and the author of the comic strip 'Calvin and Hobbes'. His career as a syndicated cartoonist ran from 1985 to 1995; he stopped drawing 'Calvin and Hobbes' at the end of 1995 with a short statement to newspaper editors and his fans that he felt he had achieved all he could in the comic strip medium. During the early years of his career he produced several drawings and additional contributions for 'Target: The Political Cartoon Quarterly'. Watterson is known for his views on licensing and comic syndication, as well as for his reclusive nature.",
            summary: "In the world that Calvin and his tiger Hobbes share, treasures can be found in the most unlikely places, from the outer regions where Spaceman Spiff travels to the rocks in the backyard--this curious duo roams their world in search of fortunes (and misfortunes!) to be experienced. Whether Calvin and Hobbes are blasting off on another interplanetary adventure or approaching warp speed on a downhill wagon ride, their capers consistently charm and refresh their readers' days. On his own, Calvin is prey to the insidious killer bicycle, is the arbiter of the Dad poll, is the creator of a legion of snowmen who provide an incisive social commentary, and Hobbes is always there as the perfect companion. Watterson's talent is evidenced by the range of thought-provoking emotions the strip encompasses in addition to the laughs it induces: the loyalty and friendship between Calvin and Hobbes, the challenge of being a patient parent, and the sardonic viewpoint of a cynical six-year-old ('I'm a 21st-century kid trapped in a 19th-century family,' laments Calvin) combine to make this one of the best-loved strips in cartoon history.",
            goodreads_rating: 4.74,
            total_ratings: 20334,
            publication_year: 1996
        },
        {
            title: "Harry Potter Collection (Harry Potter, #1-6)",
            small_title: "Harry Potter, #1-6",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388185391l/8.jpg",
            author: "J.K. Rowling",
            author_works: "Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name. As she had no middle name, she chose K as the second initial of her pen name, from her paternal grandmother Kathleen Ada Bulgen Rowling. She calls herself Jo and has said, 'No one ever called me 'Joanne' when I was young, unless they were angry.' Following her marriage, she has sometimes used the name Joanne Murray when conducting personal business. During the Leveson Inquiry she gave evidence under the name of Joanne Kathleen Rowling. In a 2012 interview, Rowling noted that she no longer cared that people pronounced her name incorrectly.",
            summary: "Box Set containing Harry Potter and the Sorcerer's Stone, Harry Potter and the Chamber Of Secrets, Harry Potter and the Prisoner of Azkaban, Harry Potter and the Goblet Of Fire, and Harry Potter and the Order of the Phoenix!",
            goodreads_rating: 4.73,
            total_ratings: 190050,
            publication_year: 2003
        },
        {
            title: "The Authoritative Calvin and Hobbes: A Calvin and Hobbes Treasury",
            small_title: "Calvin and Hobbes",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391114055l/59715.jpg",
            author: "Bill Watterson",
            author_works: "Bill Watterson (born William Boyd Watterson II) is an American cartoonist, and the author of the comic strip 'Calvin and Hobbes'. His career as a syndicated cartoonist ran from 1985 to 1995; he stopped drawing 'Calvin and Hobbes' at the end of 1995 with a short statement to newspaper editors and his fans that he felt he had achieved all he could in the comic strip medium. During the early years of his career he produced several drawings and additional contributions for 'Target: The Political Cartoon Quarterly'. Watterson is known for his views on licensing and comic syndication, as well as for his reclusive nature.",
            summary: "In the world that Calvin and his tiger Hobbes share, treasures can be found in the most unlikely places, from the outer regions where Spaceman Spiff travels to the rocks in the backyard--this curious duo roams their world in search of fortunes (and misfortunes!) to be experienced. Whether Calvin and Hobbes are blasting off on another interplanetary adventure or approaching warp speed on a downhill wagon ride, their capers consistently charm and refresh their readers' days. On his own, Calvin is prey to the insidious killer bicycle, is the arbiter of the Dad poll, is the creator of a legion of snowmen who provide an incisive social commentary, and Hobbes is always there as the perfect companion. Watterson's talent is evidenced by the range of thought-provoking emotions the strip encompasses in addition to the laughs it induces: the loyalty and friendship between Calvin and Hobbes, the challenge of being a patient parent, and the sardonic viewpoint of a cynical six-year-old ('I'm a 21st-century kid trapped in a 19th-century family,' laments Calvin) combine to make this one of the best-loved strips in cartoon history.",
            goodreads_rating: 4.73,
            total_ratings: 20334,
            publication_year: 1996
        }
    ]
    try {
        for (let i = 0; i < most_rated_books.length; i++) {
            var data = await MostRated.create({
                title: most_rated_books[i].title,
                small_title: most_rated_books[i].small_title,
                cover_url: most_rated_books[i].cover_url,
                author: most_rated_books[i].author,
                author_works: most_rated_books[i].author_works,
                summary: most_rated_books[i].summary,
                goodreads_rating: most_rated_books[i].goodreads_rating,
                total_ratings: most_rated_books[i].total_ratings,
                publication_year: most_rated_books[i].publication_year
            })
        }
    } catch (err) {
        console.log(err)
    }
    res.status(200).json({ msg: most_rated_books.length })
}

async function InsertBestBooks(req, res) {
    var best_books = [
        {
            title: "The Hunger Games",
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
            title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
            small_title: "Harry Potter #1",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
            author: "J.K. Rowling",
            author_works: "Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name. As she had no middle name, she chose K as the second initial of her pen name, from her paternal grandmother Kathleen Ada Bulgen Rowling. She calls herself Jo and has said, 'No one ever called me 'Joanne' when I was young, unless they were angry.' Following her marriage, she has sometimes used the name Joanne Murray when conducting personal business. During the Leveson Inquiry she gave evidence under the name of Joanne Kathleen Rowling. In a 2012 interview, Rowling noted that she no longer cared that people pronounced her name incorrectly.",
            summary: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.<br>After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.<br>Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.",
            goodreads_rating: 4.48,
            total_ratings: 7404297,
            publication_year: 2003
        },
        {
            title: "Twilight (Twilight, #1)",
            small_title: "The Twilight Saga #1",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361039443l/41865.jpg",
            author: "Stephenie Meyer",
            author_works: "Stephenie Meyer is the author of the bestselling Twilight series, The Host, and The Chemist. Twilight was one of 2005's most talked about novels and within weeks of its release the book debuted at #5 on The New York Times bestseller list. Among its many accolades, Twilight was named an 'ALA Top Ten Books for Young Adults, ' an Amazon.com 'Best Book of the Decade So Far, ' and a Publishers Weekly Best Book of the Year.Meyer graduated from Brigham Young University with a degree in English Literature. She lives in Arizona with her husband and three sons",
            summary: "It is a 2005 young adult vampire-romance novel by author Stephenie Meyer. It is the first book in the Twilight series, and introduces seventeen-year-old Isabella 'Bella' Swan, who moves from Phoenix, Arizona to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 108-year-old vampire frozen in his 17-year-old body.",
            goodreads_rating: 3.61,
            total_ratings: 5155784,
            publication_year: 2005
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
            title: "The Great Gatsby",
            small_title: "The Great Gatsby",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
            author: "F. Scott Fitzgerald",
            author_works: "Francis Scott Key Fitzgerald was an American writer of novels and short stories, whose works have been seen as evocative of the Jazz Age, a term he himself allegedly coined. He is regarded as one of the greatest twentieth century writers. Fitzgerald was of the self-styled 'Lost Generation', Americans born in the 1890s who came of age during World War I. He finished four novels, left a fifth unfinished, and wrote dozens of short stories that treat themes of youth, despair, and age. He was married to Zelda Fitzgerald",
            summary: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession', it is an exquisitely crafted tale of America in the 1920s.",
            goodreads_rating: 3.93,
            total_ratings: 3932936,
            publication_year: 1925
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
            title: "The Hobbit, or There and Back Again",
            small_title: "The Hobbit",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg",
            author: "J.R.R. Tolkien",
            author_works: "John Ronald Reuel Tolkien, CBE was an English writer, poet, WWI veteran (a First Lieutenant in the Lancashire Fusiliers, British Army), philologist, and university professor, best known as the author of the high fantasy classic works The Hobbit and The Lord of the Rings .Tolkien was Rawlinson and Bosworth Professor of Anglo-Saxon at Oxford from 1925 to 1945, and Merton Professor of English language and literature from 1945 to 1959. He was a close friend of C.S. Lewis.",
            summary: "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent. The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics (1998), and includes a note on the text by Douglas A. Anderson (2001).",
            goodreads_rating: 4.28,
            total_ratings: 3013387,
            publication_year: 1937
        },
        {
            title: "The Catcher in the Rye",
            small_title: "The Catcher in the Rye",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
            author: "J.D. Salinger",
            author_works: "Jerome David Salinger was an American author, best known for his 1951 novel The Catcher in the Rye, as well as his reclusive nature. His last original published work was in 1965; he gave his last interview in 1980. Raised in Manhattan, Salinger began writing short stories while in secondary school, and published several stories in the early 1940s before serving in World War II. In 1948 he published the critically acclaimed story 'A Perfect Day for Bananafish' in The New Yorker magazine, which became home to much of his subsequent work. In 1951 Salinger released his novel The Catcher in the Rye, an immediate popular success. His depiction of adolescent alienation and loss of innocence in the protagonist Holden Caulfield was influential, especially among adolescent readers. The novel remains widely read and controversial, selling around 250,000 copies a year.",
            summary: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days. The boy himself is at once too simple and too complex for us to make any final comment about him or his story. Perhaps the safest thing we can say about Holden is that he was born in the world not just strongly attracted to beauty but, almost, hopelessly impaled on it. There are many voices in this novel: children's voices, adult voices, underground voices-but Holden's voice is the most eloquent of all. Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure. However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself. The pleasure he gives away, or sets aside, with all his heart. It is there for the reader who can handle it to keep.",
            goodreads_rating: 3.81,
            total_ratings: 2832128,
            publication_year: 1951
        },
        {
            title: "Pride and Prejudice",
            small_title: "Pride and Prejudice",
            cover_url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg",
            author: "Jane Austen",
            author_works: "Jane Austen was an English novelist whose works of romantic fiction, set among the landed gentry, earned her a place as one of the most widely read writers in English literature, her realism and biting social commentary cementing her historical importance among scholars and critics.Austen lived her entire life as part of a close-knit family located on the lower fringes of the English landed gentry. She was educated primarily by her father and older brothers as well as through her own reading. The steadfast support of her family was critical to her development as a professional writer. Her artistic apprenticeship lasted from her teenage years until she was about 35 years old.",
            summary: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work 'her own darling child' and its vivacious heroine, Elizabeth Bennet, 'as delightful a creature as ever appeared in print.' The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England",
            goodreads_rating: 4.27,
            total_ratings: 3143656,
            publication_year: 1813
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
        }
    ]

    try {
        for (let i = 0; i < best_books.length; i++) {
            await BestSelling.create({
                title: best_books[i].title,
                small_title: best_books[i].small_title,
                cover_url: best_books[i].cover_url,
                author: best_books[i].author,
                author_works: best_books[i].author_works,
                summary: best_books[i].summary,
                goodreads_rating: best_books[i].goodreads_rating,
                total_ratings: best_books[i].total_ratings,
                publication_year: best_books[i].publication_year
            })
        }
    } catch (err) {
        console.log(err)
    }
    res.status(200).json({ msg: best_books.length })
}

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
            title: "The Hunger Games",
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

async function CheckLogin(req, res) {
    if (req.headers.cookie) {

        let cookie_from_client = req.headers.cookie.slice(4)

        let cookie_from_database = await CookieData.find({ cookie_value: cookie_from_client })

        if (cookie_from_database.length > 0) {
            res.status(200).json({ msg: 'You are already logged in' })
            return
        }

    }

    res.cookie('jwt', "", { httpOnly: true })
    res.status(400).json({ msg: 'Please Login' })
    return
}
module.exports = {
    Register,
    Login,
    LogOut,
    GetDetails,
    SendBooks,
    MostRatedBooks,
    InsertNewBooks,
    InsertBestBooks,
    CheckLogin
}