---
"@wso2is/admin.organizations.v1": patch
"@wso2is/admin.applications.v1": patch
"@wso2is/admin.connections.v1": patch
"@wso2is/admin.feature-gate.v1": patch
"@wso2is/admin.extensions.v1": patch
"@wso2is/access-control": patch
"@wso2is/console": patch
"@wso2is/i18n": patch
---

Gate the enable/disable toggles of applications, enterprise connections and organizations behind the new `toggleEnable` feature gate flags, surface a plan limit exceeded alert on the respective listing pages, and refresh the feature gate after deleting one of these resources so the gate clears without a page reload
