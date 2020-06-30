CREATE DATABASE booking;

USE booking;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  listingName VARCHAR(80) NOT NULL,
  price INT NOT NULL,
  maximum INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bookings (
  id INT NOT NULL AUTO_INCREMENT,
  bookingName VARCHAR(40) NOT NULL,
  arrive VARCHAR(100) NOT NULL,
  depart VARCHAR(100) NOT NULL,
  groupsize INT NOT NULL,
  subtotal INT NOT NULL,
  listingID INT NOT NULL,
  PRIMARY KEY (id),
  INDEX (listingID),
  FOREIGN KEY (listingID)
    REFERENCES listings(id)
)

-- drop database booking;

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < db/schema.sql
 *  to create the database and the tables.*/