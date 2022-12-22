const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
  counter.innerHTML = "0"

  const updateCouunter = () => {

    const target = +counter.getAttribute("data-target")
    const c = +counter.innerText

    const increment = target / 200

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCouunter, 1)
    } else {
      counter.innerText = target
    }
  }
  updateCouunter()
})
