// this file can be parsed as JSON if the first 16 lines are truncated

// make string interpolation possible for i18n
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(/{([^{}]*)}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

var NSB = NSB || {};  // setup the NSB namespace, if needed
NSB._ = 
{
  "Sunday": "Sunday",
  "Monday": "Monday",
  "Tuesday": "Tuesday",
  "Wednesday": "Wednesday",
  "Thursday": "Thursday",
  "Friday": "Friday",
  "Saturday": "Saturday",
  "Jan": "Jan",
  "Feb": "Feb",
  "Mar": "Mar",
  "Apr": "Apr",
  "May": "May",
  "Jun": "Jun",
  "Jul": "Jul",
  "Aug": "Aug",
  "Sep": "Sep",
  "Oct": "Oct",
  "Nov": "Nov",
  "Dec": "Dec",
  "January": "January",
  "February": "February",
  "March": "March",
  "April": "April",
  "May": "May",
  "June": "June",
  "July": "July",
  "August": "August",
  "September": "September",
  "October": "October",
  "November": "November",
  "December": "December",
  "SQLite not supported.": "SQLite not supported.",
  "Database name required.": "Database name required.",
  "Invalid database version: {version}": "Invalid database version: {version}",
  "Unknown error: {error}": "Unknown error: {error}",
  "SQLite error: {errmsg} (Code {errcode}) {sql}": "SQLite error: {errmsg} (Code {errcode}) {sql}",
  "Updating - Please wait": "Updating - Please wait",
  "Update Complete - Restarting.": "Update Complete - Restarting.",
  "Error: Index out of range: {array}[{index}]": "Error: Index out of range: {array}[{index}]",
  "Error: Must be true or false: {array}[{index}] {value}": "Error: Must be true or false: {array}[{index}] {value}",
  "Overlay() requires Sencha initialization.": "Overlay() requires Sencha initialization.",
  "Var keyword commented out--cannot be used as a variable!": "Var keyword commented out--cannot be used as a variable!",
  "Cannot use Var keyword as a variable!": "Cannot use Var keyword as a variable!",
  "{keyword} statement commented out!": "{keyword} statement commented out!",
  "No overwrite - new database is same version as old.": "No overwrite - new database is same version as old.",
  "No database write - database already exists.": "No database write - database already exists.",
  "OK": "OK",
  "Cancel": "Cancel",
  "Retry": "Retry",
  "Yes": "Yes",
  "No": "No",
  "Abort": "Abort",
  "Ignore": "Ignore",
  "Accept": "Accept",
  "Decline": "Decline",
  "Landscape not supported. Please rotate back.": "Landscape not supported. Please rotate back.",
  "Portrait not supported. Please rotate back.": "Portrait not supported. Please rotate back."
}