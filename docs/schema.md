#Users
column               name	      data type	      details
id                   integer	  not null,       primary key
username	           string	    not null,       indexed, unique
email	               string	    not null,       indexed, unique
password_digest	     string	    not null
session_token	       string	    not null,       indexed, unique

#Posts
column               name	      data type	      details
id	                 integer	  not null,       primary key
title	               string	    not null
body	               text	      not null
author_id	           integer	  not null,       foreign key (references users), indexed
archived	           boolean	  not null,       default: false

#Comments
column               name	      data type	      details
id	                 integer	  not null,       primary key
title	               string	    not null
body	               text	      not null
author_id	           integer	  not null,       foreign key (references users), indexed
post_id 	           boolean	  not null,       default: false
