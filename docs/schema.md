#Users
column name	         data type	details
id                   integer	  not null, primary key
username	           string	    not null, indexed, unique
first_name           string	    not null
last_name            string	    not null
phone                string
email	               string     not null
password_digest	     string	    not null
session_token	       string	    not null, indexed, unique

#Locations
column name	         data type	details
id	                 integer	  not null, primary key
title	               string	    not null
street_address1      string     not null
street_address2      string     not null
city                 string     not null
zip                  string     not null
state                string     not null
lng                  float      
lat                  float      
minimum_stay         integer
description          text       not null
accepted_pets        string
beds                 integer
amenities            string
yard                 boolean
provides_food        boolean
owner_id	           integer	  not null, foreign key (references users), indexed
archived	           boolean	  not null, default: false

#Bookings
column name	         data type	details
id                   integer    not null, primary key
user_id              integer    not null, foreign key (users)
location_id          integer    not null, foreign key (location)
check_in             date       not null
check_out            date       not null

#Reviews
column name	         data type	details
id	                 integer	  not null, primary key
title	               string	    not null
body	               text	      not null
author_id	           integer	  not null, foreign key (references users), indexed
location_id 	       boolean	  not null, default: false
