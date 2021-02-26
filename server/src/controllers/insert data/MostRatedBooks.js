import MostRated from '../../model/Book Models/MostRated'
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

export default MostRatedBooks