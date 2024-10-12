function validatePasswords(passwords) {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;
  
    return passwords.filter(password => regex.test(password));
  }
  

  const passwords = [
    "ramPass1@", "koribilliramudu", "Ramudu@1234", "Koribilliramudu@123"
  ];
  console.log(validatePasswords(passwords));



  function divideNumbers(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      return a / b;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  
  console.log(divideNumbers(10, 2)); 
  console.log(divideNumbers(10, 0));  


  function parseJSON(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Invalid JSON format:", error.message);
      return {}; 
    }
  }
  

  const validJson = '{"name": "Ramudu", "age": 23}';
  const invalidJson = '{"name": "Koribilli", "age": 20'; 
  
  console.log(parseJSON(validJson)); 
  console.log(parseJSON(invalidJson));
  
  