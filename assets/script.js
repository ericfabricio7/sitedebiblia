var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#two",
        start: "0% 95%",
        end: '70% 50%',
        scrub: true,
        markers: true,
    }
});

tl.to(
    '#bibliaprincipal',{
        width: '20%',
        top: '150%',
        left: '21%',
    },
    'biblia'
)

tl.to(
    '#jesusdesenho',{
        width: '20%',
        top: '170%',
        left: '90%',
    },
    'biblia'
)

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#three",
        start: "0% 95%",
        end: '45% 70%',
        scrub: true,
        markers: true,
    }
});

tl2.to(
    '#bibliaprincipal',
    {
        width: '13%',
        left: '50%',
        top: '273%',
    },
    'ca'
)

tl2.to(
    '#jesusdesenho',
    {
        width: '13%',
        left: '65.4%',
        top: '226%',
    },
    'ca'
)