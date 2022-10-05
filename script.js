const ratings = document.querySelectorAll('.rating')
const btn = document.querySelector('.btn')
const ratingContainer = document.querySelector('.rating-section')
const thankContainer = document.querySelector('.thank-you-section')
const showScore = document.querySelector('.btn-black');


ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        hideButtons()
        rating.classList.add('clicked')

        const score = rating.innerText;
        showScore.innerText = `You selected ${score} out of 5`
    })
})

btn.addEventListener('click', () => {
    ratingContainer.classList.remove('show')
    thankContainer.classList.add('show')
})

function hideButtons() {
    ratings.forEach(btn => {
        btn.classList.remove('clicked')
    })
}