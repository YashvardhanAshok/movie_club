-- Create the 'members' table
CREATE TABLE members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    movie1 VARCHAR(255),
    movie2 VARCHAR(255),
    movie3 VARCHAR(255),
    movie4 VARCHAR(255),
    movie5 VARCHAR(255),
    movie6 VARCHAR(255),
    email_send VARCHAR(255),
    pass VARCHAR(255),
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'new' table
CREATE TABLE new (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    movie1 VARCHAR(255),
    movie2 VARCHAR(255),
    movie3 VARCHAR(255),
    movie4 VARCHAR(255),
    movie5 VARCHAR(255),
    movie6 VARCHAR(255),
    email_send VARCHAR(255),
    pass VARCHAR(255),
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'old' table
CREATE TABLE old (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    movie1 VARCHAR(255),
    movie2 VARCHAR(255),
    movie3 VARCHAR(255),
    movie4 VARCHAR(255),
    movie5 VARCHAR(255),
    movie6 VARCHAR(255),
    email_send VARCHAR(255),
    pass VARCHAR(255),
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the 'pnew' table
CREATE TABLE pnew (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15),
    movie1 VARCHAR(255),
    movie2 VARCHAR(255),
    movie3 VARCHAR(255),
    movie4 VARCHAR(255),
    movie5 VARCHAR(255),
    movie6 VARCHAR(255),
    email_send VARCHAR(255),
    pass VARCHAR(255),
    entry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
