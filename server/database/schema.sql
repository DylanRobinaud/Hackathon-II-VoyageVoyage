CREATE TABLE continents (
    continent_id INT AUTO_INCREMENT PRIMARY KEY,
    continent_name VARCHAR(100) NOT NULL
);

-- Table des pays
CREATE TABLE countries (
    country_id INT AUTO_INCREMENT PRIMARY KEY,
    country_name VARCHAR(100) NOT NULL,
    continent_id INT,
    FOREIGN KEY (continent_id) REFERENCES continents(continent_id)
);

-- Table des climats
CREATE TABLE climate (
    climate_id INT AUTO_INCREMENT PRIMARY KEY,
    climate_type VARCHAR(50) NOT NULL
);

-- Table des villes avec références à continent et pays
CREATE TABLE cities (
    city_id INT AUTO_INCREMENT PRIMARY KEY,
    city_name VARCHAR(100) NOT NULL,
    country_id INT,
    continent_id INT,
    climate_id INT,
    description TEXT,
    image_url VARCHAR(255),
    FOREIGN KEY (country_id) REFERENCES countries(country_id),
    FOREIGN KEY (continent_id) REFERENCES continents(continent_id),
    FOREIGN KEY (climate_id) REFERENCES climate(climate_id)
);

-- Table des activités
CREATE TABLE activities (
    activity_id INT AUTO_INCREMENT PRIMARY KEY,
    activity_name VARCHAR(100) NOT NULL,
    city_id INT,
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

INSERT INTO continents (continent_name) VALUES
("Europe"),
("Amérique du Nord"),
("Asie"),
("Amérique du Sud"),
("Océanie");

INSERT INTO countries (country_name, continent_id) VALUES
("France", 1),
("États-Unis", 2),
("Japon", 3),
("Brésil", 4),
("Australie", 5);

INSERT INTO climate (climate_type) VALUES
("Chaud"),
("Froid"),
("Modéré");

INSERT INTO cities (city_name, country_id, climate_id, description, image_url) VALUES
("Paris", 1, 3, "Capitale de la France, connue pour ses monuments historiques.", "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg"),
("New York", 2, 3, "Ville emblématique des États-Unis, célèbre pour ses gratte-ciels.", "https://images.ctfassets.net/bth3mlrehms2/3iFoOTp2EdMqu16ppNCwFp/d79574da12489e1e81131b97d735abf9/USA__New_York__Skyline.jpg?w=3865&h=2576&fl=progressive&q=50&fm=jpg"),
("Tokyo", 3, 3, "Capitale moderne du Japon, un mélange de tradition et d'innovation.", "https://a.eu.mktgcdn.com/f/100004519/5y1rccQEtZvLCa6Jj2O56is_Qrn1ItZ3nxsNpdsvYlM.jpg"),
("Rio de Janeiro", 4, 1, "Ville festive du Brésil, célèbre pour le carnaval et ses plages.", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/800px-Cidade_Maravilhosa.jpg"),
("Sydney", 5, 1, "Ville australienne avec l'Opéra iconique et de belles plages.", "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/28/1c.jpg");

INSERT INTO activities (activity_name, city_id) VALUES
("Visite de la Tour Eiffel", 1),
("Croisière sur la Seine", 1),
("Musée du Louvre", 1),
("Balade dans le Quartier Latin", 1),
("Shopping aux Champs-Élysées", 1),
("Visite de la Statue de la Liberté", 2),
("Balade à Central Park", 2),
("Spectacle à Broadway", 2),
("Tour de l'Empire State Building", 2),
("Visite du Metropolitan Museum of Art", 2),
("Visite du Temple Sensō-ji", 3),
("Découverte de Shibuya Crossing", 3),
("Exploration d'Akihabara", 3),
("Excursion au Mont Fuji", 3),
("Visite du Palais Impérial", 3),
("Plage de Copacabana", 4),
("Visite du Christ Rédempteur", 4),
("Carnaval de Rio", 4),
("Montée au Pain de Sucre", 4),
("Exploration du Jardin botanique", 4),
("Visite de l'Opéra de Sydney", 5),
("Plongée à la Grande Barrière de Corail", 5),
("Promenade à Bondi Beach", 5),
("Exploration du Sydney Harbour Bridge", 5),
("Randonnée dans les Blue Mountains", 5);
