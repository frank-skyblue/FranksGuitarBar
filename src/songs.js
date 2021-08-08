// Songs catalog
const songs = [
  {
    id: 1,
    difficulty: "easy",
    genre: "pop",
  },
  {
    id: 2,
    difficulty: "intermediate",
    genre: "blues",
  },
  {
    id: 3,
    difficulty: "difficult",
    genre: "blues",
  },
];

// Get Difficulty
const difficultyEasy = document.getElementById("easy"),
  difficultyIntermediate = document.getElementById("intermediate"),
  difficultyDiffult = document.getElementById("diffult");

// Get Genre
const genreBlues = document.getElementById("easy"),
  genrePop = document.getElementById("intermediate"),
  genreOthers = document.getElementById("diffult");

// Difficulty select
document.querySelector(".difficulty-area").addEventListener("click", (e) => {
  if (e.target.type === "checkbox" && e.target.checked === true) {
    switch (e.target.id) {
      case "easy":
        displaySongs("easy");
        break;
      case "intermediate":
        displaySongs("intermediate");
        // code block
        break;
      case "difficult":
        displaySongs("difficult");
        // code block
        break;
      default:
      // code block
    }
  } else if (e.target.type === "checkbox" && e.target.checked === false) {
    switch (e.target.id) {
      case "easy":
        hideSongs("easy");
        break;
      case "intermediate":
        hideSongs("intermediate");
        // code block
        break;
      case "difficult":
        hideSongs("difficult");
        // code block
        break;
      default:
      // code block
    }
  }
});

// Genre select
document.querySelector(".genre-area").addEventListener("click", (e) => {
  if (e.target.type === "checkbox" && e.target.checked === true) {
    switch (e.target.id) {
      case "blues":
        displaySongs("blues");
        break;
      case "pop":
        displaySongs("pop");
        // code block
        break;
      case "others":
        displaySongs("others");
        // code block
        break;
      default:
      // code block
    }
  } else if (e.target.type === "checkbox" && e.target.checked === false) {
    switch (e.target.id) {
      case "blues":
        hideSongs("blues");
        break;
      case "pop":
        hideSongs("pop");
        // code block
        break;
      case "others":
        hideSongs("others");
        // code block
        break;
      default:
      // code block
    }
  }
});

function displaySongs(attribute) {
  songs.forEach((song) => {
    if (song.difficulty == attribute || song.genre == attribute) {
      document.getElementById(`${song.id}`).style.display = "block";
    }
  });
}

function hideSongs(attribute) {
  songs.forEach((song) => {
    if (song.difficulty == attribute || song.genre == attribute) {
      document.getElementById(`${song.id}`).style.display = "none";
    }
  });
}
