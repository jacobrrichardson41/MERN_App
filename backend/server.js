//Mongoose- Allows us to set-up schemas for the data we store in our MongoDB database.We will also set up our database connection using Mongoose. 
const mongoose = require('mongoose');
//Express-framework for NodeJS. Handles our routing and connection info (ports, etc).
const express = require('express');
//Morgan- Handles logging stuff for database. 
const logger = require ('logger');
//Body-Parser- Makes sure the body of our requests is formatted correctly (in this case, we'll use JSON)
const bodyParser = require('body-parser');





