

async function load_json_content(content_file, group) {

    

    remove_content();
    $('.sk-folding-cube').show();

    const response = await fetch('content/'+content_file);
    const data = await response.json();
    
    sleep(3500);
    var people = data.content;
    if(group !== "staff"){
        people.sort((a,b) => (a.name > b.name) ? 1 : -1);
    }
    var cards = [];
    people.forEach(function(person){
        
        var person_container = document.createElement("div");
        person_container.setAttribute("class", "card-container");
        
        var name = document.createElement("h2");
        var name_text= document.createTextNode(person.name);
        name.appendChild(name_text);
        person_container.appendChild(name);

        var title = document.createElement("p");
        title.setAttribute("class","title");
        var title_text = document.createTextNode(person.position);
        title.appendChild(title_text);
        person_container.appendChild(title)

        var bio = document.createElement("div");
        bio.setAttribute("class", "bio");

        var bio1 = document.createElement("p");
        bio1.setAttribute("class", "about col");
        var bio2 = document.createElement("p");
        bio2.setAttribute("class", "about col");
        var bio_text1 = document.createTextNode(person.bio1);
        var bio_text2 = document.createTextNode(person.bio2);
        bio1.appendChild(bio_text1);
        bio2.appendChild(bio_text2);

        bio.appendChild(bio1);
        bio.appendChild(bio2);

        person_container.appendChild(bio);

        var favourite = document.createElement("p");
        favourite.setAttribute("class", "favourite col");
        var favourite_text = document.createTextNode("Favorite Character: " + person.fav);
        favourite.appendChild(favourite_text);
        person_container.appendChild(favourite);
        

        var social = document.createElement("div");
        social.setAttribute("class", "h100 row align-items-center social");
        var social_links = person.social;
        social_links.sort((a,b) => (a.img > b.img) ? 1 : -1);
        social_links.forEach(function(social_link){
            var n = document.createElement("div");
            n.setAttribute("class", "col-lg-4 col-xs-12");

            var a = document.createElement("a");
            a.setAttribute("href", social_link.link);
            a.setAttribute("target", "_blank");

            var img = document.createElement("img");
            img.setAttribute("class", "img-thumbnail logo");
            img.setAttribute("src", "img/logos/" + social_link.img);
            a.appendChild(img);

            n.appendChild(a);

            social.appendChild(n);

        });

        var card = document.createElement("div");
        card.setAttribute("class", "card");

        var profile = document.createElement("img");
        profile.setAttribute("src", "img/" + group + "/" + person.profile);
        profile.setAttribute("alt", "profile image");
        profile.setAttribute("class", "img-fluid profile shadow center");
        card.appendChild(profile);
        card.appendChild(person_container);
        card.appendChild(social);

        var container = document.createElement("div");
        container.setAttribute("class", "col-lg-3 col-xs-12");
        container.appendChild(card);

        cards.push(container);

    });

    var content_container = document.getElementById("content-container");

    $('.sk-folding-cube').hide();

    cards.forEach(function(card){
        content_container.appendChild(card);
    });

    equalize_container();

}


function remove_content(){

    var content_div = document.getElementById("content-container");
    
    while(content_div.firstChild){
        content_div.removeChild(content_div.firstChild);
    }

}


function sleep( millisecondsToWait )
{
var now = new Date().getTime();
while ( new Date().getTime() < now + millisecondsToWait )
{
/* do nothing; this will exit once it reaches the time limit */
/* if you want you could do something and exit */
}
}


function equalize_container(){

    $('h2').each(function(){
        $(this).fitText(0.7);
    });

    var max1 = -1;
    $('.bio').each(function() {
        var h = $(this).height(); 
        max1 = h > max1 ? h : max1;
    });
    
    $('.bio').each(function() {
        $(this).css({'min-height': max1});
    });

    var max2 = -1;
    $('.card-container').each(function() {
        var h = $(this).height(); 
        max2 = h > max2 ? h : max2;
    });
    
    $('.card-container').each(function() {
        $(this).css({'min-height': max2});
    });

    var max3 = -1;
    $('.card').each(function() {
        var h = $(this).height(); 
        max3 = h > max3 ? h : max3;
    });
    
    $('.card').each(function() {
        $(this).css({'min-height': max3});
    });
    
}