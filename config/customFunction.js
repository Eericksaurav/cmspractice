/* here we see how we can show the categories on the edit page and update post */
module.exports = {
    selectOption : function (status,option) {
        return option.fn(this).replace(new RegExp('value=\"'+status+"\""),'&selected="selected"');
        
    }
}