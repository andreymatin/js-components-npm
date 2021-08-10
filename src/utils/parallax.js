/**
 * Background Parallax
 */

const Parallax = (el, speed = 30, pos - 50) => {
  function effect(el) {
    let scrollPosition = window.pageYOffset
    const bgParallax = document.querySelector(el)

    if (bgParallax) {
      let limit = bgParallax.offsetTop + bgParallax.offsetHeight
      if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit) {
        bgParallax.style.backgroundPositionY =
          pos - (speed * scrollPosition) / limit + '%'
      } else {
        bgParallax.style.backgroundPositionY = pos + '%'
      }
    }
  }

  window.addEventListener('scroll', function () {
    effect(el)
  })

  effect(el)
}

export default Parallax
