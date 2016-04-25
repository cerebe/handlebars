this["HH"] = this["HH"] || {};

this["HH"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " card--female";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "<div class=\"card"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isFemale : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\r\n    "
    + alias2(helpers.log.call(alias1,"Example ",(depth0 != null ? depth0.cardNum : depth0)," card",{"name":"log","hash":{},"data":data}))
    + "\r\n    <header class=\"card__header\">\r\n        <h2 class=\"card__title\">"
    + alias2(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "</h2>\r\n        "
    + alias2(helpers.log.call(alias1,"...company added",{"name":"log","hash":{},"data":data}))
    + "\r\n    </header>\r\n    <article class=\"card__content\">\r\n        <p>"
    + alias2(((helper = (helper = helpers.about || (depth0 != null ? depth0.about : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias1,{"name":"about","hash":{},"data":data}) : helper)))
    + "</p>\r\n        "
    + alias2(helpers.log.call(alias1,"...about added",{"name":"log","hash":{},"data":data}))
    + "\r\n    </article>\r\n</div>";
},"useData":true});