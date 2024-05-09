$(document).ready(function (){
    $('#main-logo').click(function(){
        $('#main-logo-text').text(`It's not magic, it's jQuery`)
        setTimeout(function() {$('#main-logo-text').text(`My Programming Portfolio, including School assingments, Personal Assignments, a Gallery and a blog. How exciting!`)}, 1000) 

    })
    $('#card1').click(function(){
        localStorage.setItem("num", 1)
        $("html").load("Articles/Article Template.html")

    })
    $('#card2').click(function(){
        localStorage.setItem("num", 2)
        $("html").load("Articles/Article Template.html")
    })
    
    $('#pic').on({
        'click': function(){
            switch (Math.round(randomNumber(1, 4))){
                case 1:
                    $('#pic').attr('src', '../images/Outside House.jpg')
                    break;
                case 2:
                    $('#pic').attr('src', '../images/Near Prom.jpg')
                    break;
                case 3:
                    $('#pic').attr('src', '../images/Suit Sitting.jpg')
                    break;
            }
        }
    });
        
    randolph(localStorage.getItem("num"))
})
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
 
function randolph(num){
    $('#title2').text(articleList["Article" + num]["title"]);
    $('#title').text(articleList["Article" + num]["title"]);
    $('#date').text(articleList["Article" + num]["date"]);
    $('#text').text(articleList["Article" + num]["text"]);
    $('#imgg').html('<img ' + articleList["Article" + num]["img"] + ' height="360em" width="360em" class="img rounded-3 image align-items-center justify-content-center d-flex"></img>');
    $('#imgcap').text(articleList["Article" + num]["imgcap"]);
}

let articleList = {
    Article1: {
        title: "waltuh",
        date: "March 5th, 2024",
        text: "A dog’s olfactory prowess is nothing short of miraculous. Their noses, equipped with millions of scent receptors, unravel mysteries hidden to our human senses. They follow trails, detect illnesses, and even predict earthquakes. Their wet noses are like magic wands, touching the invisible threads that bind us all. Dogs teach us about love—the kind that forgives muddy paws on clean floors, the kind that waits patiently by the door, and the kind that never wavers. They don’t care about our flaws; they see our souls. Their eyes say, “You are my world,” and their tails affirm it. From the tiniest Chihuahua to the grandest Great Dane, dogs remind us to live in the present. They chase tennis balls, roll in grass, and savor belly rubs. Their lives are a symphony of joy, and we’re lucky to be part of the chorus. So here’s to dogs—the tail-wagging poets, the midnight cuddlers, and the guardians of our hearts. May their paw prints forever grace our lives. 🐶❤️",
        img: 'src="../../images/Waltuh.webp"',
        imgcap: "waltuh white in his prime"
    }, 
    Article2: {
        title: "The Big floppa",
        date: "March 4th, 2024",
        text: "The Caracal (Caracal caracal) is a medium-sized wild cat native to Africa, the Middle East, Central Asia, and arid regions of Pakistan and northwestern India. Its robust build, long legs, short face, tufted ears, and long canine teeth define its appearance. The coat is uniformly reddish tan or sandy, with lighter ventral parts adorned by small reddish markings. Standing nearly 40–50 cm (16–20 in) at the shoulder and weighing 8–19 kg (18–42 lb), the caracal is a sleek, moderately sized feline. Big Floppa, or simply Floppa, emerged as an ironic meme based on photographs of a caracal named Gregory. Originally shared among Instagram’s ironic meme accounts in late December 2019, the meme gained broader online popularity starting in May 2020. Gregory, the caracal, became synonymous with internet culture, captivating audiences with his floppy ears and soft appearance. The meme’s origin traces back to an Instagram post on December 23rd, 2019, featuring Gregory and another cat lounging on a window sill. A collective of ironic meme accounts, including users like big_sahnr and dogie.official, began posting memes based on this image. The caracal was initially referred to as “sahnr” and “big sahnr.” Later, an inactive user named young.taxi coined the name “Floppa” or “Big Floppa,” which gained traction across accounts. The meme’s spread intensified between February and April 2020. Ironic Instagram pages like tfosing, big_sahnr, and pantothepizza posted “floppa” memes, using the term for both the caracal and other medium-sized cats like lynxes and servals. The meme’s appeal lay in its softness and humor, often emphasizing how “soft” Gregory appeared. Memes featuring clips of Gregory being pet and captions like “HOW THE F–K IS IT SO SOFT” contributed to its popularity. Tragically, Lil Floppa, Big Floppa’s son, met an unfortunate end. On November 9th, 2020, Lil Floppa was shot in a home invasion, cutting short his career as a rapper. Some speculate that he may still be alive, but it remains unlikely. Despite Lil Floppa’s fate, the legacy of Big Floppa lives on as one of the internet’s beloved giant cats. 🐾",
        img: 'src="../../images/BigFloppa.webp"',
        imgcap: "me when i uhhhh consume you..."
    }
}
