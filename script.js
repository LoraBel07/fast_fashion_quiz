const button = document.querySelector(".btn");
button.addEventListener("click", result);

const par = document.querySelector("#show");

function result(e) {
    e.preventDefault();
    let points = 0;

    if(document.querySelector("#answer1").checked) {
        points++;
    }
    if(document.querySelector("#answer2").checked) {
        points++;
    }
    if(document.querySelector("#answer3").checked) {
        points++;
    }
    if(document.querySelector("#answer4").checked) {
        points++;
    }
    if(document.querySelector("#answer5").checked) {
        points++;
    }
    if(document.querySelector("#answer6").checked) {
        points++;
    }
    if(document.querySelector("#answer7").checked) {
        points++;
    }
    par.textContent = "Your points: " + points;

}

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", answer1);
function answer1(e) {
    e.preventDefault();  
    Swal.fire({
        imageUrl: 'pic/1wool.jpg',
        imageWidth: 500,
        imageHeight: 280,
        imageAlt: 'Custom image',        
        text: 'Wool is a protein that grows from the skin of sheep, goats, and other similar animals. Because fleeces regrow every year after shearing, wool is a natural, renewable fiber source, making it one of the most sustainable sources of clothing.'
    })    
}

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", answer2);
function answer2(e) {
    e.preventDefault();  
    Swal.fire({
        imageUrl: 'pic/2waste.jfif',
        imageWidth: 500,
        imageHeight: 280,
        imageAlt: 'Custom image',        
        text: 'In Canada, the average person throws out 81 pounds of textiles annually, while North Americans send 10 million tonnes of clothing to the landfill every year — most of which could be reused or recycled, according to statistics compiled by Waste Reduction Week in Canada.'
    })    
}

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", answer3);
function answer3(e) {
    e.preventDefault();  
    Swal.fire({
        imageUrl: 'pic/3wardrobe.jpg',
        imageWidth: 370,
        imageHeight: 220,
        imageAlt: 'Custom image',
        text: 'German relocation company Movinga conducted a study among 18,000+ households in 20 countries analyzing the amount of waste in clothing, food, and household items. According to the company, 22% of items moved at each relocation won`t be used again. The poll didn`t analyze the number of items people own, only the percentage of what people have to what they use and how well they know about the difference between two.'
    })    
}

const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", answer4);
function answer4(e) {
    e.preventDefault();  
    Swal.fire({
        imageUrl: 'pic/4minks.jfif',
        imageWidth: 500,
        imageHeight: 280,
        imageAlt: 'Custom image',        
        text: 'To make one fur coat, it takes 150-300 chinchillas, 200-250 squirrels, 50-60 minks, 30-40 rabbits...'
    })    
}

const btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", answer5);
function answer5(e) {
    e.preventDefault();  
    Swal.fire({
        imageUrl: 'pic/5kids.jpg',
        imageWidth: 450,
        imageHeight: 280,
        imageAlt: 'Custom image',        
        text: 'Children make up 25% of this total and account for 10 million of all the slaves worldwide, according to the International Labour Organisation (ILO). (July 2020)'
    })    
}

const btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", answer6);
function answer6(e) {
    e.preventDefault();  
    Swal.fire({
        imageUrl: 'pic/6pollution.jfif',
        imageWidth: 500,
        imageHeight: 280,
        imageAlt: 'Custom image',        
        text: 'The fashion industry has a disastrous impact on the environment. In fact, it is the second largest polluter in the world, just after the oil industry. And the environmental damage is increasing as the industry grows.'
    })    
}

const btn7 = document.querySelector(".btn7");
btn7.addEventListener("click", answer7);
function answer7(e) {
    e.preventDefault();  
    Swal.fire({
        imageUrl: 'pic/7new.jfif',
        imageWidth: 500,
        imageHeight: 280,
        imageAlt: 'Custom image',        
        text: 'Currently, very few of the clothes that are sent to be recycled are actually turned into new clothing – a process known as “material to material” recycling. Old wool jumpers, for example, can be turned into carpets, cashmere can be recycled into suits. But as of 2015, less than 1% of used clothing was recycled in this way. Much of the problem comes down to what our clothes are made from. The fabrics are made from problematic blends of natural yarns, mand-made filaments, plastics and metals, that explains the difficulties of the recycling process. Around 85% of all textiles thrown away in the US – roughly 13 million tonnes in 2017 – are either dumped into landfill or burned.'
    })    
}