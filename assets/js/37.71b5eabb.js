(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{489:function(e,t,a){"use strict";a.r(t);var s=a(51),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"builders-domain-scheduling-resource-renewability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builders-domain-scheduling-resource-renewability"}},[e._v("#")]),e._v(" builders.domain.scheduling.resource_renewability")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#mixedrenewable"}},[e._v("MixedRenewable")])]),a("li",[a("a",{attrs:{href:"#renewableonly"}},[e._v("RenewableOnly")])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("skdecide-summary")],1),e._v(" "),a("h2",{attrs:{id:"mixedrenewable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixedrenewable"}},[e._v("#")]),e._v(" MixedRenewable")]),e._v(" "),a("p",[e._v("A domain must inherit this class if the resource available are non-renewable and renewable.")]),e._v(" "),a("h3",{attrs:{id:"all-tasks-possible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-tasks-possible"}},[e._v("#")]),e._v(" all_tasks_possible "),a("Badge",{attrs:{text:"MixedRenewable",type:"tip"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"all_tasks_possible",sig:{params:[{name:"self"},{name:"state",annotation:"State"}],return:"bool"}}}),e._v(" "),a("p",[e._v("Return a True is for each task there is at least one mode in which the task can be executed, given the\nresource configuration in the state provided as argument. Returns False otherwise.\nIf this function returns False, the scheduling problem is unsolvable from this state.\nThis is to cope with the use of non-renable resources that may lead to state from which a\ntask will not be possible anymore.")]),e._v(" "),a("h3",{attrs:{id:"get-resource-renewability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-resource-renewability"}},[e._v("#")]),e._v(" get_resource_renewability "),a("Badge",{attrs:{text:"MixedRenewable",type:"tip"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"get_resource_renewability",sig:{params:[{name:"self"}],return:"Dict[str, bool]"}}}),e._v(" "),a("p",[e._v("Return a dictionary where the key is a resource name (string)\nand the value whether this resource is renewable (True) or not (False).")]),e._v(" "),a("h3",{attrs:{id:"get-resource-renewability-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-resource-renewability-2"}},[e._v("#")]),e._v(" _get_resource_renewability "),a("Badge",{attrs:{text:"MixedRenewable",type:"tip"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_get_resource_renewability",sig:{params:[{name:"self"}],return:"Dict[str, bool]"}}}),e._v(" "),a("p",[e._v("Return a dictionary where the key is a resource name (string)\nand the value whether this resource is renewable (True) or not (False).")]),e._v(" "),a("h2",{attrs:{id:"renewableonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#renewableonly"}},[e._v("#")]),e._v(" RenewableOnly")]),e._v(" "),a("p",[e._v("A domain must inherit this class if the resource available are ALL renewable.")]),e._v(" "),a("h3",{attrs:{id:"all-tasks-possible-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-tasks-possible-2"}},[e._v("#")]),e._v(" all_tasks_possible "),a("Badge",{attrs:{text:"MixedRenewable",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"all_tasks_possible",sig:{params:[{name:"self"},{name:"state",annotation:"State"}],return:"bool"}}}),e._v(" "),a("p",[e._v("Return a True is for each task there is at least one mode in which the task can be executed, given the\nresource configuration in the state provided as argument. Returns False otherwise.\nIf this function returns False, the scheduling problem is unsolvable from this state.\nThis is to cope with the use of non-renable resources that may lead to state from which a\ntask will not be possible anymore.")]),e._v(" "),a("h3",{attrs:{id:"get-resource-renewability-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-resource-renewability-3"}},[e._v("#")]),e._v(" get_resource_renewability "),a("Badge",{attrs:{text:"MixedRenewable",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"get_resource_renewability",sig:{params:[{name:"self"}],return:"Dict[str, bool]"}}}),e._v(" "),a("p",[e._v("Return a dictionary where the key is a resource name (string)\nand the value whether this resource is renewable (True) or not (False).")]),e._v(" "),a("h3",{attrs:{id:"get-resource-renewability-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-resource-renewability-4"}},[e._v("#")]),e._v(" _get_resource_renewability "),a("Badge",{attrs:{text:"MixedRenewable",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_get_resource_renewability",sig:{params:[{name:"self"}],return:"Dict[str, bool]"}}}),e._v(" "),a("p",[e._v("Return a dictionary where the key is a resource name (string)\nand the value whether this resource is renewable (True) or not (False).")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);