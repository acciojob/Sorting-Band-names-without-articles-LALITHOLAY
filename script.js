//your code here
let bandNames = ["The Beatles", "Aerosmith", "The Rolling Stones", "AC/DC", "Anthrax"];

// Function to remove articles from band names
function removeArticles(name) {
  const articles = ["a", "an", "the"];
  const words = name.split(" ");

  // Check if the first word is an article, if so, remove it
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }

  return words.join(" ");
}

// Sort the band names in lexicographic order excluding articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Display the sorted band names in the HTML
const bandList = document.getElementById("band");

bandNames.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.textContent = name;
  bandList.appendChild(listItem);
});

