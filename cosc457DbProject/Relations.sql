USE bullets_ink;
CREATE TABLE SHOP_HAS
	( Equip_id INT NOT NULL,
      Shop_id INT NOT NULL,
      Equip_count INT NOT NULL,
      PRIMARY KEY(Equip_id, Shop_id),
      FOREIGN KEY(Equip_id) REFERENCES INVENTORY(Equip_id),
      FOREIGN KEY(Shop_id) REFERENCES LOCATION(Shop_id));