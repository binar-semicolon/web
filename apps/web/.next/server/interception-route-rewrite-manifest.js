self.__INTERCEPTION_ROUTE_REWRITE_MANIFEST="[{\"source\":\"/:username/post/:id/photo/:num\",\"destination\":\"/(.):username/post/:id/photo/:num\",\"has\":[{\"type\":\"header\",\"key\":\"Next-Url\",\"value\":\"(?:\\\\/(.*))?[\\\\/#\\\\?]?\"}]}]"