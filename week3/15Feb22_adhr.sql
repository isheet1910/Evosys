==============================================================================
REFCURSOR :SYS_REFCURSOR
SET SERVEROUTPUT ON;
CREATE OR REPLACE FUNCTION get_emp_by_deptno(p_deptno emp.deptno%type)
RETURN SYS_REFCURSOR
AS  
    EMP_REF_CURSOR SYS_REFCURSOR; -- DECLARATION OF SYS_REFCURSOR VARIABLE
BEGIN
    OPEN EMP_REF_CURSOR FOR  SELECT EMPNO,ENAME,JOB,SAL,COMM  FROM emp    WHERE deptno=p_deptno;
    RETURN EMP_REF_CURSOR;
END;


DECLARE 
    EMP_REF_CURSOR SYS_REFCURSOR;
    v_EMPNO emp.empno%type;
    v_ENAME emp.ename%type;
    v_JOB   emp.job%type;
    v_SAL   emp.sal%type;
    v_COMM  emp.comm%type;
    v_deptno emp.deptno%type:=&deptno;
BEGIN
    --   call the function
    EMP_REF_CURSOR:=get_emp_by_deptno(v_deptno);
    --   READ THE RECORDS FROM THE REF CURSOR    
        LOOP
            FETCH EMP_REF_CURSOR INTO v_EMPNO, v_ENAME,v_JOB,v_SAL,v_COMM;
            EXIT WHEN EMP_REF_CURSOR%NOTFOUND;
                DBMS_OUTPUT.PUT_LINE(
                v_EMPNO ||', '||
                v_ENAME ||', '||
                v_JOB   ||', '||
                v_SAL   ||', '||
                v_COMM 
                );
        END LOOP;  
END;
        
===================== cREATE A FUNCTION RETURNING A  NUMERI C VALUE
CREATE OR REPLACE FUNCTION TOTAL_SAL(SAL emp.sal%type,COMM emp.comm%type)
RETURN  emp.sal%type
AS
    v_total_sal emp.sal%type;
BEGIN
        IF COMM IS NULL THEN v_total_sal:=SAL+0;
        ELSE
            v_total_sal:=SAL+COMM;
        END IF;
        RETURN v_total_sal;
END;
-- CALLING USER DEFINED FUNCTION ON SELECT QUERY
SELECT ENAME,SAL,COMM, TOTAL_SAL(SAL,COMM) TOTAL_SAL FROM EMP;


--######################################################################
-- Use procedure to display all details of employee using empno-> single record
--######################################################################




--######################################################################
-- Use procedure to display all details of employee using deptno-> mutliple record *cursor + for loop
--######################################################################