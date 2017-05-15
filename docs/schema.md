#Users
column name	         data type	details
id                   integer	  not null, primary key
username	           string	    not null, indexed, unique
email	               string	    not null, indexed, unique
password_digest	     string	    not null
session_token	       string	    not null, indexed, unique

#Locations
column name	         data type	details
id	                 integer	  not null, primary key
title	               string	    not null
body	               text	      not null
owner_id	           integer	  not null, foreign key (references users), indexed
archived	           boolean	  not null, default: false

#Bookings
column name	         data type	details
id                   integer    not null, primary key
user_id              integer    not null, foreign key (users)
location_id          integer    not null, foreign key (location)

#Reviews
column name	         data type	details
id	                 integer	  not null, primary key
title	               string	    not null
body	               text	      not null
author_id	           integer	  not null, foreign key (references users), indexed
location_id 	       boolean	  not null, default: false
