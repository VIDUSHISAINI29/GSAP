var initial_path = 'M 10 400 Q 480 400 990 400'
var final_path = 'M 10 400 Q 480 400 990 400'

let string = document.querySelector('.string')

string.addEventListener('mousemove', function(para) {
    initial_path = `M 10 400 Q 480 ${para.y} 990 400`
    gsap.to('svg path', {
        attr: {d:initial_path},
        ease: 'power3.out',
        duration: 0.2
    })
})
string.addEventListener('mouseleave', () =>{
    gsap.to('svg path',{
        attr:{d : final_path},
        duration: 1.3,
        ease: "elastic.out(1,0.3)"
    })
})