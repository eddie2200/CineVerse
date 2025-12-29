# CineVerse – Your Ultimate Movie Database
Welcome to CineVerse, a dynamic, modern and fun movie database app that lets you explore films, track favorites and discover cinematic gems from around the world! Whether you’re a casual movie-goer or a hardcore cinephile, CineVerse makes finding your next movie adventure easy, fast and entertaining.

## Introduction
Welcome to my capstone project for the ``ALX Software Engineering Front-End Development course!``

This project represents the culmination of everything I’ve learned throughout the ALX program. From mastering React and building responsive user interfaces to integrating external APIs and managing application state, CineVerse showcases my ability to design, develop and deploy a full-featured front-end application.

Completing this project is the final requirement to earn my ALX Front-End Development certificate, demonstrating my proficiency in building professional, dynamic and user-friendly web applications. Think of it as my ticket to being officially recognized as a competent front-end developer.

In CineVerse, users can:

- Search for movies, discover details, and explore plots and cast information.
- Save their favorite movies to a personalized list.
- Sort and filter movies by genre, year, or rating.

This project is more than just code—it’s a showcase of my skills, creativity, and readiness to join the world of professional front-end development.
see link to website at the bottom of the ReadMe.
## 📂Table of Contents

    - Project Overview
    - Features
    - Tech Stack
    - Installation & Setup
    - Usage
    - Project Structure
    - Wireframes
    - API Integration
    - Future Enhancements
    - Contributing
    - License
    
## Project Overview

- CineVerse is an interactive web application that aggregates movie information using the OMDb API, allowing users to:

- Search movies by title, genre, or year

- View detailed movie information, including plot, cast, ratings, and more

- Save favorite movies to a personalized list

- Filter and sort movies for quick discovery

“Movies bring us together, but CineVerse makes it easier to find the right one!” – CineVerse Team

## Features
| Feature             | Description                                           | Status         |
| ------------------- | ----------------------------------------------------- | -------------- |
| Search Movies       | Search for movies by title, year, or genre            | ✅ Implemented  |
| Movie Details       | See detailed info including ratings, plot, and actors | ✅ Implemented  |
| Favorites           | Add or remove movies from favorites list              | ✅ Implemented  |
| Sorting & Filtering | Filter by genre/year, sort by ratings or release date | ⚙️ In Progress |
| Responsive Design   | Works on mobile, tablet, and desktop                  | ✅ Implemented  |

## Tech Stack
| Layer            | Technology                 |
| ---------------- | -------------------------- |
| Frontend         | React.js                   |
| Styling          | Tailwind CSS               |
| API              | OMDb API                   |
| Routing          | React Router DOM           |
| State Management | React useState & useEffect |

## Installation & Setup
Follow these steps to run CineVerse locally:

- Clone the repository

``git clone git@github.com:your-username/cineverse.git
cd cineverse``


- Install dependencies

``npm install``


- Create .env file with your OMDb API key:

``REACT_APP_OMDB_API_KEY=your_api_key_here``


- Run the project

``npm start``


- Open your browser at ``http://localhost:3000`` 

## Usage
- Enter a movie title in the search bar
- Click a movie card to view details
- Add movies to your favorites list using the heart button
- Sort and filter movies using the options menu

  ## Wireframes
The wireframes were created using Figma to help visualize how the website would look upon completion and as a guide to me as the developer on what features to include and where each feature goes. Here id the link to view the wireframes:
  ``https://www.figma.com/design/SsI5CIJnE25zX9ogXZE2lS/cineverse-wireframes?node-id=0-1&t=WbTijeHZxs4xcaYK-1``
  ## API Integration
  CineVerse uses the OMDb API to fetch movie data in real-time.
  Endpoint Example:

``https://www.omdbapi.com/?apikey=[API_KEY]&s=Inception``


Response Example:

``{
  "Search": [
    {
      "Title": "Inception",
      "Year": "2010",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Poster": "https://example.com/poster.jpg"
    }
  ]
}``

## Future Enhancements

- User authentication & profiles
- Movie recommendations based on favorites
- Dark mode toggle
- Pagination for large datasets
- Advanced filtering by director, actors, and ratings

## Contributing

Contributions are welcome!

- Fork the repository
- Create a branch: git checkout -b feature/YourFeature
- Commit your changes: git commit -m 'Add new feature'
- Push to the branch: git push origin feature/YourFeature
- Create a Pull Request 

## License

This project is licensed under the MIT License
