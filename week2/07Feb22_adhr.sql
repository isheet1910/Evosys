--########################################################################
-- Display the employee details (empno,ename,dname,job,sal,location).
--	emp (empno,ename,job,sal)
--	dept(dname)
--	branch(location)
--########################################################################
SELECT
    e.empno,e.ename,e.job,e.sal,d.dname,b.location
FROM
    emp e join dept d 
    on
        e.deptno=d.deptno
    join branch b
        on b.branchno=d.branchno
    Order by d.deptno;
    
 
--########################################################################
-- View
--########################################################################
CREATE VIEW vw_empdetails 
AS 
    SELECT
        e.empno,e.ename,e.job,e.sal,d.dname,b.location
    FROM
        emp e join dept d 
        on
            e.deptno=d.deptno
        join branch b
            on b.branchno=d.branchno
        Order by d.deptno;    

SELECT     *     FROM        vw_empdetails;
SELECT     *     FROM        vw_empdetails where dname='ACCOUNTING';
SELECT empno,ename,dname from vw_empdetails;
SELECT empno,ename,dname from vw_empdetails where dname='ACCOUNTING';

--display employee name and manager name for all departments

SELECT e.ename,m.mgr
FROM emp e JOIN emp m
on e.mgr = m.empno;

CREATE VIEW vw_mgrdetails(ename,mgrname,deptno)
AS 
SELECT e.ename,m.mgr,e.deptno
FROM emp e JOIN emp m
on e.mgr = m.empno;

SELECT * FROM vw_mgrdetails;

--########################################################################
-- VIEW IS CREATED ON SINGLE TABLE 
-- WE CAN USE DML OPERATION ON IT SUCH AS INSERT/UPDAE/DELETE
-- INCASE OF INSERT MUST HANDLE THE NULL/NOT NULL VALUES
--########################################################################
-- DISPLAY EMPNO,ENAME,JOB,SAL,COMM,DEPTNO FOR AN EMPLOYEE
-- DEPARTMENT WISE EMPLOYEE COMPLETE DETAILS RELATED TO JOB,SAL COMM ALONG WITH 
-- EMPNO AND ENAME
SELECT 
    DEPTNO,EMPNO,ENAME,JOB,SAL,COMM
    FROM
        EMP
    ORDER BY DEPTNO,EMPNO;
    
CREATE VIEW vw_dept_wise_emp_details
(DEPTNO,EMPNO,ENAME,JOB,SAL,COMM)
AS
SELECT 
    DEPTNO,EMPNO,ENAME,JOB,SAL,COMM
    FROM
        EMP
    ORDER BY DEPTNO,EMPNO;

SELECT * FROM VW_DEPT_WISE_EMP_DETAILS;
SELECT * FROM VW_DEPT_WISE_EMP_DETAILS WHERE DEPTNO=30;
SELECT * FROM VW_DEPT_WISE_EMP_DETAILS WHERE DEPTNO=10;
UPDATE vw_dept_wise_emp_details
    SET COMM=0
    WHERE DEPTNO=10;

SELECT * FROM VW_DEPT_WISE_EMP_DETAILS WHERE DEPTNO=10;

INSERT INTO VW_DEPT_WISE_EMP_DETAILS VALUES(10,2345,'JASMIN','CLERK',1300,0);
 
CREATE VIEW vw_temp(deptno,empno,ename,sal,comm,toalsal)
AS
SELECT
deptno,empno,ename,sal,nvl(comm,0),nvl(sal,0)+nvl(comm,0)as totalsal
FROM
emp
WHERE
deptno=30 AND sal>(SELECT min(sal) FROM emp);
