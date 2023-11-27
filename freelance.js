const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "Gardener",
    "Programmer",
    "Teacher",
    "Developer"
  ];
  
//   const prices = [
//     25,
//     51,
//     43,
//     81,
//     43,
//     76, 
//     47, 
//     72, 
//   ];

  function randomFreelancer(){
    const nameFreelancer = Math.floor(Math.random() * names.length)
    const occFreelancer = Math.floor(Math.random() * occupations.length)
    // const priceFreelancer = Math.floor(Math.random() * prices.length)

    const freelancer = {
        name: names[nameFreelancer],
        occ: occupations[occFreelancer],
        price: Math.floor(Math.random() * 200)
    }

    return freelancer

  }



  const randomFreelancerOne = randomFreelancer()
  const randomFreelancerTwo = randomFreelancer()
  const freelancers = [randomFreelancerOne, randomFreelancerTwo]
  const container = document.querySelector(".container")

  function render () {
    const html = freelancers.map((freelancer) => {
        return `<li>${freelancer.name}, ${freelancer.occ}, $${freelancer.price}</li>`
    })
    container.innerHTML = html.join("")
    console.log(container)

    let total = 0
    freelancers.forEach ((freelancer) => {
        total += freelancer.price
    })

    const avgPrice = document.getElementById("averagePrice")
    const averagePriceNum = total / freelancers.length 
    const roundFig = averagePriceNum.toFixed(2)
    avgPrice.innerHTML = (`The average freelance price is $${roundFig}`)

}
render()

  const interval= setInterval(() => {
    const newPerson = randomFreelancer()
    freelancers.push(newPerson)
    render ()
    if(freelancers.length === 20){
        clearInterval(interval)
    }
  }, 3000)

