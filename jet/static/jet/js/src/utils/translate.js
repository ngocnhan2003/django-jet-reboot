module.exports = function(str) {
    if (window.django == undefined || django.gettext==undefined) {
        return str;
    }
    return django.gettext(str);
};
