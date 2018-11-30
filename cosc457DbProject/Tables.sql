USE bullets_ink;
CREATE TABLE LOCATION
	( Shop_id INT NOT NULL,
      State CHAR(2) NOT NULL,
      City VARCHAR(30) NOT NULL,
      Address VARCHAR(45) NOT NULL,
      Zip CHAR(5) NOT NULL,
      PRIMARY KEY(Shop_id));
CREATE TABLE INVENTORY
	( Equip_id INT NOT NULL,
      Equip_name VARCHAR(25),
      Equip_count INT NOT NULL,
      Equip_condition VARCHAR(15),
      Price FLOAT,
      PRIMARY KEY(Equip_id));
CREATE TABLE ARTIST
	( Artist_id	INT NOT NULL,
	  Fname VARCHAR(15) NOT NULL,
      Lname VARCHAR(15) NOT NULL,
      Shop_id INT NOT NULL,
      Artist_rating FLOAT,
      PRIMARY KEY(Artist_id),
      FOREIGN KEY(Shop_id) REFERENCES LOCATION(Shop_id));
CREATE TABLE CUSTOMER
	( Cust_id INT NOT NULL,
	  Fname VARCHAR(15) NOT NULL,
      Lname VARCHAR(15) NOT NULL,
      PRIMARY KEY(Cust_id));
CREATE TABLE CUSTOMER_ACCOUNT
	( Cust_id INT NOT NULL,
	  Uname VARCHAR(20) NOT NULL,
      Passwd VARCHAR(15) NOT NULL,
      Email VARCHAR(45) NOT NULL,
      Phone VARCHAR(11) NOT NULL,
      PRIMARY KEY(Cust_id),
      FOREIGN KEY(Cust_id) REFERENCES CUSTOMER(Cust_id));
CREATE TABLE MANAGER
	( Man_id INT NOT NULL,
      Fname VARCHAR(15) NOT NULL,
      Lname VARCHAR(15) NOT NULL,
      Shop_id INT NOT NULL,
      PRIMARY KEY(Man_id),
      FOREIGN KEY(Shop_id) REFERENCES LOCATION(Shop_id));
CREATE TABLE MANAGER_ACCOUNT
	( Man_id INT NOT NULL,
      Uname VARCHAR(20) NOT NULL,
      Passwd VARCHAR(15) NOT NULL,
      PRIMARY KEY(Man_id),
      FOREIGN KEY(Man_id) REFERENCES MANAGER(Man_id));
CREATE TABLE TATTOO
	( Tat_no INT NOT NULL,
      Cust_id INT NOT NULL,
      Color BOOLEAN,
      Size INT,
      Est_time INT,
      Shop_id INT NOT NULL,
      Equip_id INT NOT NULL,
      PRIMARY KEY(Tat_no),
      FOREIGN KEY(Cust_id) REFERENCES CUSTOMER(Cust_id),
      FOREIGN KEY(Shop_id) REFERENCES LOCATION(Shop_id),
      FOREIGN KEY(Equip_id) REFERENCES INVENTORY(Equip_id));
CREATE TABLE PIERCING
	( Pierce_no INT NOT NULL,
      Cust_id INT NOT NULL,
      Pierce_type VARCHAR (15) NOT NULL,
      Price FLOAT NOT NULL,
      Equip_id INT NOT NULL,
      PRIMARY KEY(Pierce_no),
      FOREIGN KEY(Cust_id) REFERENCES CUSTOMER(Cust_id),
      FOREIGN KEY(Equip_id) REFERENCES INVENTORY(Equip_id));
CREATE TABLE SHOP_OWNER
	( Own_id INT NOT NULL,
	  Fname VARCHAR(15) NOT NULL,
      Lname VARCHAR(15) NOT NULL,
      Shop_id INT NOT NULL,
      PRIMARY KEY(Own_id),
      FOREIGN KEY(Shop_id) REFERENCES LOCATION(Shop_id));
CREATE TABLE CANCELLATION_POLICY
	( Pol_id INT NOT NULL,
      Pol_signed BOOLEAN NOT NULL,
      Pol_date DATE NOT NULL,
      Cust_id INT NOT NULL,
      PRIMARY KEY(Pol_id),
      FOREIGN KEY(Cust_id) REFERENCES CUSTOMER(Cust_id));
CREATE TABLE WAIVER_POLICY
	( Pol_id INT NOT NULL,
      Pol_signed BOOLEAN NOT NULL,
      Pol_date DATE NOT NULL,
      Cust_id INT NOT NULL,
      PRIMARY KEY(Pol_id),
      FOREIGN KEY(Cust_id) REFERENCES CUSTOMER(Cust_id));
CREATE TABLE MERCHANDISE
	( Merch_id INT NOT NULL,
      Merch_type VARCHAR(20),
      Merch_name VARCHAR(35) NOT NULL,
      Merch_price FLOAT NOT NULL,
      Merch_count INT NOT NULL,
      PRIMARY KEY(Merch_id));
CREATE TABLE RESERVATION
	( Res_id INT NOT NULL,
      Shop_id INT NOT NULL,
      Cust_id INT NOT NULL,
      Artist_id INT NOT NULL,
      Res_type VARCHAR(10) NOT NULL,
      Res_date DATE NOT NULL,
      Start_time TIME NOT NULL,
      End_time TIME NOT NULL,
      PRIMARY KEY(Res_id),
      FOREIGN KEY(Shop_id) REFERENCES LOCATION(Shop_id),
      FOREIGN KEY(Cust_id) REFERENCES CUSTOMER(Cust_id),
      FOREIGN KEY(Artist_id) REFERENCES ARTIST(Artist_id));
CREATE TABLE RESULT
	( Result_id INT NOT NULL,
      Shop_id INT NOT NULL,
      Cust_id INT NOT NULL,
      Artist_id INT NOT NULL,
      Res_type VARCHAR(10) NOT NULL,
      Res_date DATE NOT NULL,
      Start_time TIME NOT NULL,
      End_time TIME NOT NULL,
      PRIMARY KEY(Result_id),
      FOREIGN KEY(Shop_id) REFERENCES LOCATION(Shop_id),
      FOREIGN KEY(Cust_id) REFERENCES CUSTOMER(Cust_id),
      FOREIGN KEY(Artist_id) REFERENCES ARTIST(Artist_id));
      
      
      
      
      
      
      
      
      
      
      
      
      
      