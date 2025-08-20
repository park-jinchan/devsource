use kbdb;

select * from members order by id desc;
-- %Y     : 년도 4자리
-- %y   : 년도 2자리
-- %m   : 월 2자리
-- %d   : 일 2자리
-- %H   : 시간 (24시간 기준)
-- %i   : 분
-- %s   : 초
select id, name, email, role, date_format(createdAt,'%Y-%m-%d %H:%i:%s') as createdAt
from members order by id desc;

select id,name,email,role,
date_format(createdAt,'%Y-%m-%d') createdAt
from members
where id=3;

-- ADMIN인 회원 정보만 가져와 출력하세요
select * from members
where role='ADMIN';

-- 로그인
-- email, passwd 일치 여부
-- hong@naver.com  123
select * from members
where email='hong@naver.com';
-- and, or 연산자
select * from members
where email='hong@naver.com' and passwd='111';

-- 날짜가 8월20일 이전에 가입한 회원들만 보여주세요
select name,createdAt from members
where createdAt < '2025-08-20'
order by createdAt desc;
-- WGHO 순서로 기술
-- Where > Group by > Having > Order by  순서로 기술

-- 회원번호가 1, 3, 5번인 회원의 번호,이름,이메일을 가져와 출력하세요
-- 단 이름 가나다 순으로 정렬하고, 동일한 이름이 있을 경우에는 회원번호 내림차순으로 정렬하세요
-- IN (목록값) / NOT IN (목록)
select id,name,email
from members
-- where id=1 or id=3 or id=5
where id in (1,3,5)
order by name asc, id desc;

-- 검색 
-- 이름 중에 '길동' 을 가지고 있는 회원들만 보여주세요
select * from members
where name like '%길동%'; 
-- '김'으로 시작하는 회원정보
-- where name ='길동';

-- '=' : 값이 같은지 비교. 정확하게 같아야 함
-- Like '%길동%'

select * from members;

-- refreshtoken이 null값을 갖는 회원정보를 보여주세요
-- null값 여부를 비교할 때는 등가 연산자 '='를 사용하면 안된다
-- is null / is not null
select * from members 
where refreshtoken is null;
-- where refreshtoken = null;
-- ------------------------------------------
/* delete문
- delete from 테이블명 where 조건절 ==> 조건에 맞는 데이터를 삭제함
- delete from 테이블명;  ==> 모든 데이터를 삭제함
*/
select @@autocommit;
-- @@autocommit 값이 1 => auto commit으로 설정

-- 수동 커밋으로 변경=>0으로 수정하면 수동 커밋
set @@autocommit =0;
delete from members where id=1;

select * from members;
rollback; -- TCL (commit/rollback)

delete from members where name='박준호';
select * from members;
commit; -- DB에 dml 실행결과를 영구히 반영한다
use kbdb;

delete from members;
rollback;
commit;

show table status like 'members';
-- ----------------------------------------
/*
UPDATE문
- UPDATE 테이블명 SET 컬럼명1='값1', 컬럼명2=값2, ... WHERE 조건절 ==> 조건에 부합하는 데이터를 수정 처리
- UPDATE 테이블명 SET 컬럼명1='값1', 컬럼명2=값2, ... ==> 모든 데이터를 수정 처리함
*/

UPDATE MEMBERS SET NAME='홍길영', 
PASSWD='222', ROLE='GUEST', CREATEDAT=(CURRENT_DATE());
-- WHERE ID=1;
SELECT * FROM MEMBERS;
ROLLBACK;

set @@autocommit=1;  -- 자동으로 auto commit



