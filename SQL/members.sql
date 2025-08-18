use kbdb;
show databases;
show tables;
-- 회원 테이블 생성문
create table if not exists members(
	id int primary key auto_increment, -- 회원번호 (PK) 
    name varchar(30) not null, -- 회원명 
    email varchar(50) not null unique, -- 이메일 (로그인시 id로 사용) 
    passwd varchar(100) not null, -- 비밀번호(암호화된 비번) 
    role varchar(30) not null default 'USER', -- 역할 (USER 또는 ADMIN)
    createdAt date default (current_date()), -- 가입일 
    refreshtoken varchar(512) default null -- 회원 인증시 사용 
); 

desc members;
-- devSource/SQL/members.sql
-- 새로운 데이터 삽입 : insert 문
-- insert into 테이블명 (컬럼1, 컬럼2, ...)
-- values ('값1', '값2',...)

insert into members(name, email, passwd)
values ('박진찬', 'park@naver.com', '1111');

commit;

-- 데이터 조회
-- select 컬럼명1, 컬럼명2,... from 테이블명;
-- select id, name, email, passwd, role, createdat, refreshtoken from members;
select * from members where id=1; 

insert into members(name, email, passwd, role)
values ('김관리', 'admin@master.com', '111', 'ADMIN');

select * from members;