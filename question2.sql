insert into ORDERS values (10100, '2003-01-06', 'placed',363)
insert into ORDERS values (10101, '2003-01-06', 'placed',128)
insert into ORDERS values (10102, '2003-01-06', 'in transit',181)
insert into ORDERS values (10103, '2003-01-06', 'delivered',121)
insert into ORDERS values (10104, '2003-01-07', 'delivered',114)
insert into ORDERS values (10106, '2003-01-07', 'in transit',278)
insert into ORDERS values (10120, '2003-01-07', 'placed',114)
insert into ORDERS values (10122, '2003-05-05', 'in transit',350)
insert into ORDERS values (10123, '2003-05-05', 'delivered',103)

select top 5 * from ORDERS where status != 'delivered' order by order_date, id asc 