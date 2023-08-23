# v3tasktracker
inspo by https://jacobhilton.github.io/findmeatask/, notes at https://docs.google.com/document/d/1F2MYomDqBcdr3Uae_UWqR_dWy_eYcVgTd8vKwvk4GeU/edit

File structure
```
.
├── api
│   └── index.js
├── node_modules
│   ├── accepts
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── array-flatten
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── array-flatten.js
│   │   └── package.json
│   ├── asynckit
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── bench.js
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── abort.js
│   │   │   ├── async.js
│   │   │   ├── defer.js
│   │   │   ├── iterate.js
│   │   │   ├── readable_asynckit.js
│   │   │   ├── readable_parallel.js
│   │   │   ├── readable_serial.js
│   │   │   ├── readable_serial_ordered.js
│   │   │   ├── state.js
│   │   │   ├── streamify.js
│   │   │   └── terminator.js
│   │   ├── package.json
│   │   ├── parallel.js
│   │   ├── serial.js
│   │   ├── serialOrdered.js
│   │   └── stream.js
│   ├── axios
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── MIGRATION_GUIDE.md
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── dist
│   │   │   ├── axios.js
│   │   │   ├── axios.js.map
│   │   │   ├── axios.min.js
│   │   │   ├── axios.min.js.map
│   │   │   ├── browser
│   │   │   │   ├── axios.cjs
│   │   │   │   └── axios.cjs.map
│   │   │   ├── esm
│   │   │   │   ├── axios.js
│   │   │   │   ├── axios.js.map
│   │   │   │   ├── axios.min.js
│   │   │   │   └── axios.min.js.map
│   │   │   └── node
│   │   │       ├── axios.cjs
│   │   │       └── axios.cjs.map
│   │   ├── index.d.cts
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── adapters
│   │   │   │   ├── README.md
│   │   │   │   ├── adapters.js
│   │   │   │   ├── http.js
│   │   │   │   └── xhr.js
│   │   │   ├── axios.js
│   │   │   ├── cancel
│   │   │   │   ├── CancelToken.js
│   │   │   │   ├── CanceledError.js
│   │   │   │   └── isCancel.js
│   │   │   ├── core
│   │   │   │   ├── Axios.js
│   │   │   │   ├── AxiosError.js
│   │   │   │   ├── AxiosHeaders.js
│   │   │   │   ├── InterceptorManager.js
│   │   │   │   ├── README.md
│   │   │   │   ├── buildFullPath.js
│   │   │   │   ├── dispatchRequest.js
│   │   │   │   ├── mergeConfig.js
│   │   │   │   ├── settle.js
│   │   │   │   └── transformData.js
│   │   │   ├── defaults
│   │   │   │   ├── index.js
│   │   │   │   └── transitional.js
│   │   │   ├── env
│   │   │   │   ├── README.md
│   │   │   │   ├── classes
│   │   │   │   │   └── FormData.js
│   │   │   │   └── data.js
│   │   │   ├── helpers
│   │   │   │   ├── AxiosTransformStream.js
│   │   │   │   ├── AxiosURLSearchParams.js
│   │   │   │   ├── HttpStatusCode.js
│   │   │   │   ├── README.md
│   │   │   │   ├── ZlibHeaderTransformStream.js
│   │   │   │   ├── bind.js
│   │   │   │   ├── buildURL.js
│   │   │   │   ├── callbackify.js
│   │   │   │   ├── combineURLs.js
│   │   │   │   ├── cookies.js
│   │   │   │   ├── deprecatedMethod.js
│   │   │   │   ├── formDataToJSON.js
│   │   │   │   ├── formDataToStream.js
│   │   │   │   ├── fromDataURI.js
│   │   │   │   ├── isAbsoluteURL.js
│   │   │   │   ├── isAxiosError.js
│   │   │   │   ├── isURLSameOrigin.js
│   │   │   │   ├── null.js
│   │   │   │   ├── parseHeaders.js
│   │   │   │   ├── parseProtocol.js
│   │   │   │   ├── readBlob.js
│   │   │   │   ├── speedometer.js
│   │   │   │   ├── spread.js
│   │   │   │   ├── throttle.js
│   │   │   │   ├── toFormData.js
│   │   │   │   ├── toURLEncodedForm.js
│   │   │   │   └── validator.js
│   │   │   ├── platform
│   │   │   │   ├── browser
│   │   │   │   │   ├── classes
│   │   │   │   │   │   ├── Blob.js
│   │   │   │   │   │   ├── FormData.js
│   │   │   │   │   │   └── URLSearchParams.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── index.js
│   │   │   │   └── node
│   │   │   │       ├── classes
│   │   │   │       │   ├── FormData.js
│   │   │   │       │   └── URLSearchParams.js
│   │   │   │       └── index.js
│   │   │   └── utils.js
│   │   └── package.json
│   ├── body-parser
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── read.js
│   │   │   └── types
│   │   │       ├── json.js
│   │   │       ├── raw.js
│   │   │       ├── text.js
│   │   │       └── urlencoded.js
│   │   └── package.json
│   ├── bytes
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── call-bind
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── callBound.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       ├── callBound.js
│   │       └── index.js
│   ├── canvas-confetti
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── dist
│   │   │   ├── confetti.browser.js
│   │   │   └── confetti.module.mjs
│   │   ├── package.json
│   │   └── src
│   │       └── confetti.js
│   ├── combined-stream
│   │   ├── License
│   │   ├── Readme.md
│   │   ├── lib
│   │   │   └── combined_stream.js
│   │   ├── package.json
│   │   └── yarn.lock
│   ├── content-disposition
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── content-type
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── cookie
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.js
│   │   └── package.json
│   ├── cookie-signature
│   │   ├── History.md
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── cors
│   │   ├── CONTRIBUTING.md
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── lib
│   │   │   └── index.js
│   │   └── package.json
│   ├── debug
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── Makefile
│   │   ├── README.md
│   │   ├── component.json
│   │   ├── karma.conf.js
│   │   ├── node.js
│   │   ├── package.json
│   │   └── src
│   │       ├── browser.js
│   │       ├── debug.js
│   │       ├── index.js
│   │       ├── inspector-log.js
│   │       └── node.js
│   ├── delayed-stream
│   │   ├── License
│   │   ├── Makefile
│   │   ├── Readme.md
│   │   ├── lib
│   │   │   └── delayed_stream.js
│   │   └── package.json
│   ├── depd
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   └── browser
│   │   │       └── index.js
│   │   └── package.json
│   ├── destroy
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── dotenv
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README-es.md
│   │   ├── README.md
│   │   ├── config.d.ts
│   │   ├── config.js
│   │   ├── lib
│   │   │   ├── cli-options.js
│   │   │   ├── env-options.js
│   │   │   ├── main.d.ts
│   │   │   └── main.js
│   │   └── package.json
│   ├── ee-first
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── encodeurl
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── escape-html
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── etag
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── express
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── application.js
│   │   │   ├── express.js
│   │   │   ├── middleware
│   │   │   │   ├── init.js
│   │   │   │   └── query.js
│   │   │   ├── request.js
│   │   │   ├── response.js
│   │   │   ├── router
│   │   │   │   ├── index.js
│   │   │   │   ├── layer.js
│   │   │   │   └── route.js
│   │   │   ├── utils.js
│   │   │   └── view.js
│   │   └── package.json
│   ├── finalhandler
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.js
│   │   └── package.json
│   ├── follow-redirects
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── debug.js
│   │   ├── http.js
│   │   ├── https.js
│   │   ├── index.js
│   │   └── package.json
│   ├── form-data
│   │   ├── License
│   │   ├── README.md.bak
│   │   ├── Readme.md
│   │   ├── index.d.ts
│   │   ├── lib
│   │   │   ├── browser.js
│   │   │   ├── form_data.js
│   │   │   └── populate.js
│   │   └── package.json
│   ├── forwarded
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── fresh
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── fs
│   │   ├── README.md
│   │   └── package.json
│   ├── function-bind
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── implementation.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── get-intrinsic
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── GetIntrinsic.js
│   ├── has
│   │   ├── LICENSE-MIT
│   │   ├── README.md
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.js
│   │   └── test
│   │       └── index.js
│   ├── has-proto
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── has-symbols
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   ├── shams.js
│   │   └── test
│   │       ├── index.js
│   │       ├── shams
│   │       │   ├── core-js.js
│   │       │   └── get-own-property-symbols.js
│   │       └── tests.js
│   ├── http-errors
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── iconv-lite
│   │   ├── Changelog.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── encodings
│   │   │   ├── dbcs-codec.js
│   │   │   ├── dbcs-data.js
│   │   │   ├── index.js
│   │   │   ├── internal.js
│   │   │   ├── sbcs-codec.js
│   │   │   ├── sbcs-data-generated.js
│   │   │   ├── sbcs-data.js
│   │   │   ├── tables
│   │   │   │   ├── big5-added.json
│   │   │   │   ├── cp936.json
│   │   │   │   ├── cp949.json
│   │   │   │   ├── cp950.json
│   │   │   │   ├── eucjp.json
│   │   │   │   ├── gb18030-ranges.json
│   │   │   │   ├── gbk-added.json
│   │   │   │   └── shiftjis.json
│   │   │   ├── utf16.js
│   │   │   └── utf7.js
│   │   ├── lib
│   │   │   ├── bom-handling.js
│   │   │   ├── extend-node.js
│   │   │   ├── index.d.ts
│   │   │   ├── index.js
│   │   │   └── streams.js
│   │   └── package.json
│   ├── inherits
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── inherits.js
│   │   ├── inherits_browser.js
│   │   └── package.json
│   ├── ipaddr.js
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── ipaddr.min.js
│   │   ├── lib
│   │   │   ├── ipaddr.js
│   │   │   └── ipaddr.js.d.ts
│   │   └── package.json
│   ├── media-typer
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── merge-descriptors
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── methods
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── mime
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── cli.js
│   │   ├── mime.js
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── build.js
│   │   │   └── test.js
│   │   └── types.json
│   ├── mime-db
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── db.json
│   │   ├── index.js
│   │   └── package.json
│   ├── mime-types
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── ms
│   │   ├── index.js
│   │   ├── license.md
│   │   ├── package.json
│   │   └── readme.md
│   ├── negotiator
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── charset.js
│   │   │   ├── encoding.js
│   │   │   ├── language.js
│   │   │   └── mediaType.js
│   │   └── package.json
│   ├── object-assign
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── object-inspect
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── example
│   │   │   ├── all.js
│   │   │   ├── circular.js
│   │   │   ├── fn.js
│   │   │   └── inspect.js
│   │   ├── index.js
│   │   ├── package-support.json
│   │   ├── package.json
│   │   ├── readme.markdown
│   │   ├── test
│   │   │   ├── bigint.js
│   │   │   ├── browser
│   │   │   │   └── dom.js
│   │   │   ├── circular.js
│   │   │   ├── deep.js
│   │   │   ├── element.js
│   │   │   ├── err.js
│   │   │   ├── fakes.js
│   │   │   ├── fn.js
│   │   │   ├── has.js
│   │   │   ├── holes.js
│   │   │   ├── indent-option.js
│   │   │   ├── inspect.js
│   │   │   ├── lowbyte.js
│   │   │   ├── number.js
│   │   │   ├── quoteStyle.js
│   │   │   ├── toStringTag.js
│   │   │   ├── undef.js
│   │   │   └── values.js
│   │   ├── test-core-js.js
│   │   └── util.inspect.js
│   ├── on-finished
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── parseurl
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── path-to-regexp
│   │   ├── History.md
│   │   ├── LICENSE
│   │   ├── Readme.md
│   │   ├── index.js
│   │   └── package.json
│   ├── proxy-addr
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── proxy-from-env
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test.js
│   ├── qs
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE.md
│   │   ├── README.md
│   │   ├── dist
│   │   │   └── qs.js
│   │   ├── lib
│   │   │   ├── formats.js
│   │   │   ├── index.js
│   │   │   ├── parse.js
│   │   │   ├── stringify.js
│   │   │   └── utils.js
│   │   ├── package.json
│   │   └── test
│   │       ├── parse.js
│   │       ├── stringify.js
│   │       └── utils.js
│   ├── range-parser
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── raw-body
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── restler
│   │   ├── MIT-LICENSE
│   │   ├── README.md
│   │   ├── bin
│   │   │   └── restler
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── multipartform.js
│   │   │   └── restler.js
│   │   ├── package.json
│   │   └── test
│   │       ├── all.js
│   │       └── restler.js
│   ├── safe-buffer
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   └── package.json
│   ├── safer-buffer
│   │   ├── LICENSE
│   │   ├── Porting-Buffer.md
│   │   ├── Readme.md
│   │   ├── dangerous.js
│   │   ├── package.json
│   │   ├── safer.js
│   │   └── tests.js
│   ├── send
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── index.js
│   │   ├── node_modules
│   │   │   └── ms
│   │   │       ├── index.js
│   │   │       ├── license.md
│   │   │       ├── package.json
│   │   │       └── readme.md
│   │   └── package.json
│   ├── serve-static
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── setprototypeof
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── side-channel
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   ├── package.json
│   │   └── test
│   │       └── index.js
│   ├── statuses
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── codes.json
│   │   ├── index.js
│   │   └── package.json
│   ├── toidentifier
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── trello
│   │   ├── README.md
│   │   ├── main.js
│   │   ├── package.json
│   │   └── test
│   │       └── spec.js
│   ├── type-is
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── unpipe
│   │   ├── HISTORY.md
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   ├── utils-merge
│   │   ├── LICENSE
│   │   ├── README.md
│   │   ├── index.js
│   │   └── package.json
│   └── vary
│       ├── HISTORY.md
│       ├── LICENSE
│       ├── README.md
│       ├── index.js
│       └── package.json
├── package-lock.json
├── package.json
├── public
│   ├── fonts
│   │   ├── BerkeleyMonoTrial-Regular.otf
│   │   ├── BerkeleyMonoTrial-Regular.ttf
│   │   └── Graphik-Regular.ttf
│   ├── index.html
│   └── styles.css
├── take.js
└── vercel.json
```
