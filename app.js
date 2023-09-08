const titles = document.querySelectorAll(".title");


const titleSs = document.querySelectorAll(".titleS");
const details = document.querySelectorAll(".detail");
const Finals = document.querySelectorAll(".Final");
const links = document.querySelectorAll(".link");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    rootMargin: "-10px",
})


const observerS = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 1,
})



const observerDetail = new IntersectionObserver(entries => {
    entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold:1,
    rootMargin: "-100px",
    
})




/*
const observerS = new IntersectionObserver(
    entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showS');
            }
            else {
                entry.target.classList.remove('showS');
            }

        })
    }
)
*/

/*
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const hiddenElementsS = document.querySelectorAll('.hiddenS');
hiddenElementsS.forEach((el) => observerS.observe(el));
*/


titles.forEach(title => {
    observer.observe(title)
})


titleSs.forEach(titleS => {
    observer.observe(titleS)
})



details.forEach(detail => {
    observerDetail.observe(detail)
})

Finals.forEach(Final => {
    observer.observe(Final)
})

links.forEach(link => {
    observer.observe(link)
})

