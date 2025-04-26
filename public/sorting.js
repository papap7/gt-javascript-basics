document.addEventListener("DOMContentLoaded", () => {
  // Default array of numbers
  const defaultNumbers = [42, 17, 8, 99, 56, 23, 71, 5, 33, 61]

  // Create a copy of the default array that we can modify
  let numbersArray = [...defaultNumbers]

  // Function to display the numbers in a single box
  function displayNumbers() {
    const resultsContainer = document.getElementById("results-container")
    if (!resultsContainer) return

    // Clear previous results
    resultsContainer.innerHTML = ""

    // Create a single box to contain all numbers
    const numbersBox = document.createElement("div")
    numbersBox.className = "numbers-box"

    // Add a title for the box
    const boxTitle = document.createElement("h3")
    boxTitle.textContent = "Numbers to Sort"
    boxTitle.style.width = "100%"
    boxTitle.style.textAlign = "center"
    boxTitle.style.marginBottom = "1rem"
    numbersBox.appendChild(boxTitle)

    // Add each number as an element in the box
    numbersArray.forEach((number) => {
      const numberItem = document.createElement("div")
      numberItem.className = "number-item"
      numberItem.textContent = number
      numbersBox.appendChild(numberItem)
    })

    // Add the box to the results container
    resultsContainer.appendChild(numbersBox)
  }

  // Add event listener for sorting
  const sortSelect = document.getElementById("sort-select")
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      sortNumbers(this.value)
    })
  }

  // Function to sort numbers
  function sortNumbers(sortType) {
    switch (sortType) {
      case "ascending":
        // Sort numbers in ascending order
        numbersArray.sort((a, b) => a - b)
        break

      case "descending":
        // Sort numbers in descending order
        numbersArray.sort((a, b) => b - a)
        break

      default: // default order - original order
        // Reset to default array
        numbersArray = [...defaultNumbers]
    }

    // Display the sorted numbers
    displayNumbers()
  }

  // Initial display of numbers
  displayNumbers()
})
