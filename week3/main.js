// Folder structure :D:\03.Training2022\03.AD\week3-WebTech\demos\ demo##
// how to open using cmd -> go to above path-> in address bar type cmd -> on cmd type code .
// ===================================================================================================
// WEB TECHNOLOGY
//WEB=> WWW -> www.mastek.com
//URL 	 ->https://notepad.pw/Internship_AD2022	
//	  https: http+ssl => http is transfer
//	  notepad.pw=>domain name =>DNS
//===================================================================================================
//CLIENT: BROWSER  
//SERVER: BUSINESS LOGIC WHICH SHARE RESPONSES TO REQUEST
//		1. PROGRAM running on a machine 24/7 and dedicated port to provide responses based on request
//		2. it will need a protocol to do communication
//		3. it need unique name/identifier which is IP Address or registered DNS / DOMAIN NAME
//===================================================================================================
//1. HTML -> STRUCTURE
//2. CSS  -> BEUTY FICATION OF YOUR STRUCTURE
//3. JavaScript -> Client Script and Server Side (node)
//4, jQuery    -> javasript libarary used instead of javascript
//5. Bootstrap libarary	
//6. AJAX-> Asynchronous calls to server for getting resources async mode
//7. nodejs -> server environment build in javascript
//8. express as middleware 		
//===================================================================================================
//JavaScript
//1. keywords
//2. Data types
//3. variable, constant variable, scoe of variable
//4. operators Arithmatic, comparison operator ,assignment operator
//5. conditional statement
//6. looping statement
//7. functions 
//8. OOP 
//===================================================================================================
//2. Data types
//   String : '',"",``
//   Numeric: 10, 10.00,10.11
//   Boolean: true false
//   null	  : no value 	
//   undefined: not declared 
//===================================================================================================
//3.  variable, constant variable, scoe of variable
//	a. var
//	b. let
//	c. const
//	*** Javascript is not a TypeSafe language 
//	*** we never declare variables with type
//	*** at runtime the JS Engine check the value in the variable and understand the type then does the operation.
//STEP 1 : CREATE DEMO01
//STEP 2: CREATE main.js
//STEP 3: UPDATE main.js as follows 
	// Understanding the Data types and Variables of Javascript

v1=10;
v2="10";
v3="10.0";
v4=10.0;
v5=(v1<v2);

console.log(v1+" type of "+typeof v1);
console.log(v2+" type of "+typeof v2);
console.log(v3+" type of "+typeof v3);
console.log(v4+" type of "+typeof v4);
console.log(v5+" type of "+typeof v5);

// STEP 4: node main.js 
//output should be 
//		week3-WebTech\demos\demo01>node main.js
//		10 type of number
//		10 type of string  
//		10.0 type of string
//10 type of number
//false type of boolean
