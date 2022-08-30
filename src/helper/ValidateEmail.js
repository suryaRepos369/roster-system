/**
 * @param {string} email - user entered email address
 * @returns {boolean} true / false
 * @validations mySite.ourEarth.com [@ is not present]
 * @validations mySite@.com.my [ tld (Top Level domain) can not start with dot "." ]
 * @validations @you.me.net [ No character before @ ]
 * @validations mysite123@gmail.b [ ".b" is not a valid tld ]
 * @validations mySite@.org.org [ tld can not start with dot "." ]
 * @validations .mysite@mysite.org [ an email should not be start with "." ]
 * @validations mySite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
 * @validations mysite..1234@yahoo.com [double dots are not allowed]
 */

export function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}
