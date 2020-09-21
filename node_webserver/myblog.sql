use myblog;
-- show tables;
insert into users (username,`password`,realname) values('zhangsan','123','张三');
insert into users (username,`password`,realname) values('lisi','123','李四');
select * from users;

select * from users where username='zhangsan';
select * from users where username='zhangsan' and `password` = '123';
select * from users where username like '%zhangsan%';

update users set realname='lisi2' where username='lisi';

set sql_safe_updates=0;

delete from users where username='lisi';

select * from users where state='1';
-- 不等于1
select * from users where state<>'1';

update users set state='0' where username='lisi';

insert into blogs(title,content,createtime,author)values('标题A','内部A',1586767145401,'zhangsan');
insert into blogs(title,content,createtime,author)values('标题B','内部B',1586767267284,'lisi');

select * from blogs where title like '%标题%' order by createtime desc;
