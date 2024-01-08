function telephoneCheck(str) {
    //5555555555
    const PhoneNumber1 = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/g
    let format1 = PhoneNumber1.test(str)
    console.log(format1)

    //555-555-5555
    const PhoneNumber2 = /^[1]? ?\d{3}-\d{3}-\d{4}$/
    let format2 = PhoneNumber2.test(str)
    console.log(format2)
    //(555)555-5555
    const PhoneNumber3 = /^[1]? ?\(\d{3}\)\d{3}-\d{4}$/
    let format3 = PhoneNumber3.test(str)
    console.log(format3)
     //(555) 555-5555
     const PhoneNumber4 = /^[1] ?\(\d{3}\) \d{3}-\d{4}$/
     let format4 = PhoneNumber4.test(str)
     console.log(format4)

     //555 555 5555
     const PhoneNumber5 = /^[1] ?[0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]$/g
     let format5 = PhoneNumber5.test(str)
     console.log(format5)

     //1 555 555 5555
     const PhoneNumber6 = /^[1] ?[0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9][0-9]$/g
     let format6 = PhoneNumber6.test(str)
     console.log(format6)
     
     if (format1) {
        console.log("Format is 5555555555");
        return true
    } else if (format2) {
        console.log("Format is 555-555-5555");
        return true
    } else if (format3) {
        console.log("Format is (555)555-5555");
        return true
    } else if (format4) {
        console.log("Format is (555) 555-5555");
        return true
    } else if (format5) {
        console.log("Format is 555 555 5555");
        return true
    } else if (format6) {
        console.log("Format is 1 555 555 5555");
        return true
    } else {
        console.log("Invalid format");
        return false
    }
    
  }
  
  telephoneCheck("1 777 777 7777");