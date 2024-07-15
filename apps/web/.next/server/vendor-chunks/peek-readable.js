"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/peek-readable";
exports.ids = ["vendor-chunks/peek-readable"];
exports.modules = {

/***/ "(action-browser)/../../node_modules/peek-readable/lib/AbstractStreamReader.js":
/*!********************************************************************!*\
  !*** ../../node_modules/peek-readable/lib/AbstractStreamReader.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AbstractStreamReader: () => (/* binding */ AbstractStreamReader)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"(action-browser)/../../node_modules/peek-readable/lib/index.js\");\n\nclass AbstractStreamReader {\n    constructor() {\n        /**\n         * Maximum request length on read-stream operation\n         */\n        this.maxStreamReadSize = 1 * 1024 * 1024;\n        this.endOfStream = false;\n        /**\n         * Store peeked data\n         * @type {Array}\n         */\n        this.peekQueue = [];\n    }\n    /**\n     * Read ahead (peek) from stream. Subsequent read or peeks will return the same data\n     * @param uint8Array - Uint8Array (or Buffer) to store data read from stream in\n     * @param offset - Offset target\n     * @param length - Number of bytes to read\n     * @returns Number of bytes peeked\n     */\n    async peek(uint8Array, offset, length) {\n        const bytesRead = await this.read(uint8Array, offset, length);\n        this.peekQueue.push(uint8Array.subarray(offset, offset + bytesRead)); // Put read data back to peek buffer\n        return bytesRead;\n    }\n    async read(buffer, offset, length) {\n        if (length === 0) {\n            return 0;\n        }\n        let bytesRead = this.readFromPeekBuffer(buffer, offset, length);\n        bytesRead += await this.readRemainderFromStream(buffer, offset + bytesRead, length - bytesRead, () => false);\n        if (bytesRead === 0) {\n            throw new _index_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        }\n        return bytesRead;\n    }\n    /**\n     * Read chunk from stream\n     * @param buffer - Target Uint8Array (or Buffer) to store data read from stream in\n     * @param offset - Offset target\n     * @param length - Number of bytes to read\n     * @returns Number of bytes read\n     */\n    readFromPeekBuffer(buffer, offset, length) {\n        let remaining = length;\n        let bytesRead = 0;\n        // consume peeked data first\n        while (this.peekQueue.length > 0 && remaining > 0) {\n            const peekData = this.peekQueue.pop(); // Front of queue\n            if (!peekData)\n                throw new Error('peekData should be defined');\n            const lenCopy = Math.min(peekData.length, remaining);\n            buffer.set(peekData.subarray(0, lenCopy), offset + bytesRead);\n            bytesRead += lenCopy;\n            remaining -= lenCopy;\n            if (lenCopy < peekData.length) {\n                // remainder back to queue\n                this.peekQueue.push(peekData.subarray(lenCopy));\n            }\n        }\n        return bytesRead;\n    }\n    async readRemainderFromStream(buffer, offset, remaining, isEndOfStream) {\n        let bytesRead = 0;\n        // Continue reading from stream if required\n        while (remaining > 0 && !isEndOfStream()) {\n            const reqLen = Math.min(remaining, this.maxStreamReadSize);\n            const chunkLen = await this.readFromStream(buffer, offset + bytesRead, reqLen);\n            bytesRead += chunkLen;\n            if (chunkLen < reqLen)\n                break;\n            remaining -= chunkLen;\n        }\n        return bytesRead;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvQWJzdHJhY3RTdHJlYW1SZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFDdkM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzL3BlZWstcmVhZGFibGUvbGliL0Fic3RyYWN0U3RyZWFtUmVhZGVyLmpzPzk5ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5kT2ZTdHJlYW1FcnJvciB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5leHBvcnQgY2xhc3MgQWJzdHJhY3RTdHJlYW1SZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogTWF4aW11bSByZXF1ZXN0IGxlbmd0aCBvbiByZWFkLXN0cmVhbSBvcGVyYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWF4U3RyZWFtUmVhZFNpemUgPSAxICogMTAyNCAqIDEwMjQ7XG4gICAgICAgIHRoaXMuZW5kT2ZTdHJlYW0gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlIHBlZWtlZCBkYXRhXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVla1F1ZXVlID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWQgYWhlYWQgKHBlZWspIGZyb20gc3RyZWFtLiBTdWJzZXF1ZW50IHJlYWQgb3IgcGVla3Mgd2lsbCByZXR1cm4gdGhlIHNhbWUgZGF0YVxuICAgICAqIEBwYXJhbSB1aW50OEFycmF5IC0gVWludDhBcnJheSAob3IgQnVmZmVyKSB0byBzdG9yZSBkYXRhIHJlYWQgZnJvbSBzdHJlYW0gaW5cbiAgICAgKiBAcGFyYW0gb2Zmc2V0IC0gT2Zmc2V0IHRhcmdldFxuICAgICAqIEBwYXJhbSBsZW5ndGggLSBOdW1iZXIgb2YgYnl0ZXMgdG8gcmVhZFxuICAgICAqIEByZXR1cm5zIE51bWJlciBvZiBieXRlcyBwZWVrZWRcbiAgICAgKi9cbiAgICBhc3luYyBwZWVrKHVpbnQ4QXJyYXksIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzUmVhZCA9IGF3YWl0IHRoaXMucmVhZCh1aW50OEFycmF5LCBvZmZzZXQsIGxlbmd0aCk7XG4gICAgICAgIHRoaXMucGVla1F1ZXVlLnB1c2godWludDhBcnJheS5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIGJ5dGVzUmVhZCkpOyAvLyBQdXQgcmVhZCBkYXRhIGJhY2sgdG8gcGVlayBidWZmZXJcbiAgICAgICAgcmV0dXJuIGJ5dGVzUmVhZDtcbiAgICB9XG4gICAgYXN5bmMgcmVhZChidWZmZXIsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGxldCBieXRlc1JlYWQgPSB0aGlzLnJlYWRGcm9tUGVla0J1ZmZlcihidWZmZXIsIG9mZnNldCwgbGVuZ3RoKTtcbiAgICAgICAgYnl0ZXNSZWFkICs9IGF3YWl0IHRoaXMucmVhZFJlbWFpbmRlckZyb21TdHJlYW0oYnVmZmVyLCBvZmZzZXQgKyBieXRlc1JlYWQsIGxlbmd0aCAtIGJ5dGVzUmVhZCwgKCkgPT4gZmFsc2UpO1xuICAgICAgICBpZiAoYnl0ZXNSZWFkID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRW5kT2ZTdHJlYW1FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBieXRlc1JlYWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWQgY2h1bmsgZnJvbSBzdHJlYW1cbiAgICAgKiBAcGFyYW0gYnVmZmVyIC0gVGFyZ2V0IFVpbnQ4QXJyYXkgKG9yIEJ1ZmZlcikgdG8gc3RvcmUgZGF0YSByZWFkIGZyb20gc3RyZWFtIGluXG4gICAgICogQHBhcmFtIG9mZnNldCAtIE9mZnNldCB0YXJnZXRcbiAgICAgKiBAcGFyYW0gbGVuZ3RoIC0gTnVtYmVyIG9mIGJ5dGVzIHRvIHJlYWRcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgYnl0ZXMgcmVhZFxuICAgICAqL1xuICAgIHJlYWRGcm9tUGVla0J1ZmZlcihidWZmZXIsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCByZW1haW5pbmcgPSBsZW5ndGg7XG4gICAgICAgIGxldCBieXRlc1JlYWQgPSAwO1xuICAgICAgICAvLyBjb25zdW1lIHBlZWtlZCBkYXRhIGZpcnN0XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWtRdWV1ZS5sZW5ndGggPiAwICYmIHJlbWFpbmluZyA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHBlZWtEYXRhID0gdGhpcy5wZWVrUXVldWUucG9wKCk7IC8vIEZyb250IG9mIHF1ZXVlXG4gICAgICAgICAgICBpZiAoIXBlZWtEYXRhKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncGVla0RhdGEgc2hvdWxkIGJlIGRlZmluZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbkNvcHkgPSBNYXRoLm1pbihwZWVrRGF0YS5sZW5ndGgsIHJlbWFpbmluZyk7XG4gICAgICAgICAgICBidWZmZXIuc2V0KHBlZWtEYXRhLnN1YmFycmF5KDAsIGxlbkNvcHkpLCBvZmZzZXQgKyBieXRlc1JlYWQpO1xuICAgICAgICAgICAgYnl0ZXNSZWFkICs9IGxlbkNvcHk7XG4gICAgICAgICAgICByZW1haW5pbmcgLT0gbGVuQ29weTtcbiAgICAgICAgICAgIGlmIChsZW5Db3B5IDwgcGVla0RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtYWluZGVyIGJhY2sgdG8gcXVldWVcbiAgICAgICAgICAgICAgICB0aGlzLnBlZWtRdWV1ZS5wdXNoKHBlZWtEYXRhLnN1YmFycmF5KGxlbkNvcHkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnl0ZXNSZWFkO1xuICAgIH1cbiAgICBhc3luYyByZWFkUmVtYWluZGVyRnJvbVN0cmVhbShidWZmZXIsIG9mZnNldCwgcmVtYWluaW5nLCBpc0VuZE9mU3RyZWFtKSB7XG4gICAgICAgIGxldCBieXRlc1JlYWQgPSAwO1xuICAgICAgICAvLyBDb250aW51ZSByZWFkaW5nIGZyb20gc3RyZWFtIGlmIHJlcXVpcmVkXG4gICAgICAgIHdoaWxlIChyZW1haW5pbmcgPiAwICYmICFpc0VuZE9mU3RyZWFtKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcUxlbiA9IE1hdGgubWluKHJlbWFpbmluZywgdGhpcy5tYXhTdHJlYW1SZWFkU2l6ZSk7XG4gICAgICAgICAgICBjb25zdCBjaHVua0xlbiA9IGF3YWl0IHRoaXMucmVhZEZyb21TdHJlYW0oYnVmZmVyLCBvZmZzZXQgKyBieXRlc1JlYWQsIHJlcUxlbik7XG4gICAgICAgICAgICBieXRlc1JlYWQgKz0gY2h1bmtMZW47XG4gICAgICAgICAgICBpZiAoY2h1bmtMZW4gPCByZXFMZW4pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICByZW1haW5pbmcgLT0gY2h1bmtMZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ5dGVzUmVhZDtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/peek-readable/lib/AbstractStreamReader.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/peek-readable/lib/Deferred.js":
/*!********************************************************!*\
  !*** ../../node_modules/peek-readable/lib/Deferred.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Deferred: () => (/* binding */ Deferred)\n/* harmony export */ });\nclass Deferred {\n    constructor() {\n        this.resolve = () => null;\n        this.reject = () => null;\n        this.promise = new Promise((resolve, reject) => {\n            this.reject = reject;\n            this.resolve = resolve;\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvRGVmZXJyZWQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi4vLi4vbm9kZV9tb2R1bGVzL3BlZWstcmVhZGFibGUvbGliL0RlZmVycmVkLmpzP2M5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERlZmVycmVkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlID0gKCkgPT4gbnVsbDtcbiAgICAgICAgdGhpcy5yZWplY3QgPSAoKSA9PiBudWxsO1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/peek-readable/lib/Deferred.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/peek-readable/lib/EndOfFileStream.js":
/*!***************************************************************!*\
  !*** ../../node_modules/peek-readable/lib/EndOfFileStream.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndOfStreamError: () => (/* binding */ EndOfStreamError),\n/* harmony export */   defaultMessages: () => (/* binding */ defaultMessages)\n/* harmony export */ });\nconst defaultMessages = 'End-Of-Stream';\n/**\n * Thrown on read operation of the end of file or stream has been reached\n */\nclass EndOfStreamError extends Error {\n    constructor() {\n        super(defaultMessages);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvRW5kT2ZGaWxlU3RyZWFtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy9wZWVrLXJlYWRhYmxlL2xpYi9FbmRPZkZpbGVTdHJlYW0uanM/OGRhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGVmYXVsdE1lc3NhZ2VzID0gJ0VuZC1PZi1TdHJlYW0nO1xuLyoqXG4gKiBUaHJvd24gb24gcmVhZCBvcGVyYXRpb24gb2YgdGhlIGVuZCBvZiBmaWxlIG9yIHN0cmVhbSBoYXMgYmVlbiByZWFjaGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBFbmRPZlN0cmVhbUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihkZWZhdWx0TWVzc2FnZXMpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/peek-readable/lib/EndOfFileStream.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/peek-readable/lib/StreamReader.js":
/*!************************************************************!*\
  !*** ../../node_modules/peek-readable/lib/StreamReader.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndOfStreamError: () => (/* reexport safe */ _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError),\n/* harmony export */   StreamReader: () => (/* binding */ StreamReader)\n/* harmony export */ });\n/* harmony import */ var _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndOfFileStream.js */ \"(action-browser)/../../node_modules/peek-readable/lib/EndOfFileStream.js\");\n/* harmony import */ var _Deferred_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Deferred.js */ \"(action-browser)/../../node_modules/peek-readable/lib/Deferred.js\");\n/* harmony import */ var _AbstractStreamReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractStreamReader.js */ \"(action-browser)/../../node_modules/peek-readable/lib/AbstractStreamReader.js\");\n\n\n\n\n/**\n * Node.js Readable Stream Reader\n * Ref: https://nodejs.org/api/stream.html#readable-streams\n */\nclass StreamReader extends _AbstractStreamReader_js__WEBPACK_IMPORTED_MODULE_2__.AbstractStreamReader {\n    constructor(s) {\n        super();\n        this.s = s;\n        /**\n         * Deferred used for postponed read request (as not data is yet available to read)\n         */\n        this.deferred = null;\n        if (!s.read || !s.once) {\n            throw new Error('Expected an instance of stream.Readable');\n        }\n        this.s.once('end', () => this.reject(new _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError()));\n        this.s.once('error', err => this.reject(err));\n        this.s.once('close', () => this.reject(new Error('Stream closed')));\n    }\n    /**\n     * Read chunk from stream\n     * @param buffer Target Uint8Array (or Buffer) to store data read from stream in\n     * @param offset Offset target\n     * @param length Number of bytes to read\n     * @returns Number of bytes read\n     */\n    async readFromStream(buffer, offset, length) {\n        if (this.endOfStream) {\n            return 0;\n        }\n        const readBuffer = this.s.read(length);\n        if (readBuffer) {\n            buffer.set(readBuffer, offset);\n            return readBuffer.length;\n        }\n        else {\n            const request = {\n                buffer,\n                offset,\n                length,\n                deferred: new _Deferred_js__WEBPACK_IMPORTED_MODULE_1__.Deferred()\n            };\n            this.deferred = request.deferred;\n            this.s.once('readable', () => {\n                this.readDeferred(request);\n            });\n            return request.deferred.promise;\n        }\n    }\n    /**\n     * Process deferred read request\n     * @param request Deferred read request\n     */\n    readDeferred(request) {\n        const readBuffer = this.s.read(request.length);\n        if (readBuffer) {\n            request.buffer.set(readBuffer, request.offset);\n            request.deferred.resolve(readBuffer.length);\n            this.deferred = null;\n        }\n        else {\n            this.s.once('readable', () => {\n                this.readDeferred(request);\n            });\n        }\n    }\n    reject(err) {\n        this.endOfStream = true;\n        if (this.deferred) {\n            this.deferred.reject(err);\n            this.deferred = null;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvU3RyZWFtUmVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ2Y7QUFDd0I7QUFDVDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNPLDJCQUEyQiwwRUFBb0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUVBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrREFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4uLy4uL25vZGVfbW9kdWxlcy9wZWVrLXJlYWRhYmxlL2xpYi9TdHJlYW1SZWFkZXIuanM/ZjMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmRPZlN0cmVhbUVycm9yIH0gZnJvbSAnLi9FbmRPZkZpbGVTdHJlYW0uanMnO1xuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICcuL0RlZmVycmVkLmpzJztcbmltcG9ydCB7IEFic3RyYWN0U3RyZWFtUmVhZGVyIH0gZnJvbSBcIi4vQWJzdHJhY3RTdHJlYW1SZWFkZXIuanNcIjtcbmV4cG9ydCB7IEVuZE9mU3RyZWFtRXJyb3IgfSBmcm9tICcuL0VuZE9mRmlsZVN0cmVhbS5qcyc7XG4vKipcbiAqIE5vZGUuanMgUmVhZGFibGUgU3RyZWFtIFJlYWRlclxuICogUmVmOiBodHRwczovL25vZGVqcy5vcmcvYXBpL3N0cmVhbS5odG1sI3JlYWRhYmxlLXN0cmVhbXNcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmVhbVJlYWRlciBleHRlbmRzIEFic3RyYWN0U3RyZWFtUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucyA9IHM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZlcnJlZCB1c2VkIGZvciBwb3N0cG9uZWQgcmVhZCByZXF1ZXN0IChhcyBub3QgZGF0YSBpcyB5ZXQgYXZhaWxhYmxlIHRvIHJlYWQpXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRlZmVycmVkID0gbnVsbDtcbiAgICAgICAgaWYgKCFzLnJlYWQgfHwgIXMub25jZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBzdHJlYW0uUmVhZGFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnMub25jZSgnZW5kJywgKCkgPT4gdGhpcy5yZWplY3QobmV3IEVuZE9mU3RyZWFtRXJyb3IoKSkpO1xuICAgICAgICB0aGlzLnMub25jZSgnZXJyb3InLCBlcnIgPT4gdGhpcy5yZWplY3QoZXJyKSk7XG4gICAgICAgIHRoaXMucy5vbmNlKCdjbG9zZScsICgpID0+IHRoaXMucmVqZWN0KG5ldyBFcnJvcignU3RyZWFtIGNsb3NlZCcpKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlYWQgY2h1bmsgZnJvbSBzdHJlYW1cbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRhcmdldCBVaW50OEFycmF5IChvciBCdWZmZXIpIHRvIHN0b3JlIGRhdGEgcmVhZCBmcm9tIHN0cmVhbSBpblxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IHRhcmdldFxuICAgICAqIEBwYXJhbSBsZW5ndGggTnVtYmVyIG9mIGJ5dGVzIHRvIHJlYWRcbiAgICAgKiBAcmV0dXJucyBOdW1iZXIgb2YgYnl0ZXMgcmVhZFxuICAgICAqL1xuICAgIGFzeW5jIHJlYWRGcm9tU3RyZWFtKGJ1ZmZlciwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kT2ZTdHJlYW0pIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWRCdWZmZXIgPSB0aGlzLnMucmVhZChsZW5ndGgpO1xuICAgICAgICBpZiAocmVhZEJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZmVyLnNldChyZWFkQnVmZmVyLCBvZmZzZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWRCdWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgICAgICBkZWZlcnJlZDogbmV3IERlZmVycmVkKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkID0gcmVxdWVzdC5kZWZlcnJlZDtcbiAgICAgICAgICAgIHRoaXMucy5vbmNlKCdyZWFkYWJsZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWREZWZlcnJlZChyZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QuZGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzIGRlZmVycmVkIHJlYWQgcmVxdWVzdFxuICAgICAqIEBwYXJhbSByZXF1ZXN0IERlZmVycmVkIHJlYWQgcmVxdWVzdFxuICAgICAqL1xuICAgIHJlYWREZWZlcnJlZChyZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHJlYWRCdWZmZXIgPSB0aGlzLnMucmVhZChyZXF1ZXN0Lmxlbmd0aCk7XG4gICAgICAgIGlmIChyZWFkQnVmZmVyKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmJ1ZmZlci5zZXQocmVhZEJ1ZmZlciwgcmVxdWVzdC5vZmZzZXQpO1xuICAgICAgICAgICAgcmVxdWVzdC5kZWZlcnJlZC5yZXNvbHZlKHJlYWRCdWZmZXIubGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuZGVmZXJyZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zLm9uY2UoJ3JlYWRhYmxlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZERlZmVycmVkKHJlcXVlc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVqZWN0KGVycikge1xuICAgICAgICB0aGlzLmVuZE9mU3RyZWFtID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGVmZXJyZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgICAgICAgICB0aGlzLmRlZmVycmVkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/peek-readable/lib/StreamReader.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/peek-readable/lib/WebStreamReader.js":
/*!***************************************************************!*\
  !*** ../../node_modules/peek-readable/lib/WebStreamReader.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndOfStreamError: () => (/* reexport safe */ _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError),\n/* harmony export */   WebStreamReader: () => (/* binding */ WebStreamReader)\n/* harmony export */ });\n/* harmony import */ var _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndOfFileStream.js */ \"(action-browser)/../../node_modules/peek-readable/lib/EndOfFileStream.js\");\n/* harmony import */ var _AbstractStreamReader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AbstractStreamReader.js */ \"(action-browser)/../../node_modules/peek-readable/lib/AbstractStreamReader.js\");\n\n\n\n/**\n * Read from a WebStream\n * Reference: https://nodejs.org/api/webstreams.html#class-readablestreambyobreader\n */\nclass WebStreamReader extends _AbstractStreamReader_js__WEBPACK_IMPORTED_MODULE_1__.AbstractStreamReader {\n    constructor(stream) {\n        super();\n        this.eofStream = false;\n        this.reader = stream.getReader({ mode: 'byob' });\n    }\n    async readFromStream(buffer, offset, length) {\n        if (this.eofStream) {\n            throw new _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError();\n        }\n        const result = await this.reader.read(new Uint8Array(length));\n        if (result.done) {\n            this.eofStream = result.done;\n        }\n        if (result.value) {\n            buffer.set(result.value, offset);\n            return result.value.byteLength;\n        }\n        return 0;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvV2ViU3RyZWFtUmVhZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDQTtBQUNTO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ08sOEJBQThCLDBFQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvV2ViU3RyZWFtUmVhZGVyLmpzPzc2MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW5kT2ZTdHJlYW1FcnJvciB9IGZyb20gJy4vRW5kT2ZGaWxlU3RyZWFtLmpzJztcbmV4cG9ydCB7IEVuZE9mU3RyZWFtRXJyb3IgfSBmcm9tICcuL0VuZE9mRmlsZVN0cmVhbS5qcyc7XG5pbXBvcnQgeyBBYnN0cmFjdFN0cmVhbVJlYWRlciB9IGZyb20gXCIuL0Fic3RyYWN0U3RyZWFtUmVhZGVyLmpzXCI7XG4vKipcbiAqIFJlYWQgZnJvbSBhIFdlYlN0cmVhbVxuICogUmVmZXJlbmNlOiBodHRwczovL25vZGVqcy5vcmcvYXBpL3dlYnN0cmVhbXMuaHRtbCNjbGFzcy1yZWFkYWJsZXN0cmVhbWJ5b2JyZWFkZXJcbiAqL1xuZXhwb3J0IGNsYXNzIFdlYlN0cmVhbVJlYWRlciBleHRlbmRzIEFic3RyYWN0U3RyZWFtUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJlYW0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lb2ZTdHJlYW0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKHsgbW9kZTogJ2J5b2InIH0pO1xuICAgIH1cbiAgICBhc3luYyByZWFkRnJvbVN0cmVhbShidWZmZXIsIG9mZnNldCwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLmVvZlN0cmVhbSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVuZE9mU3RyZWFtRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlYWRlci5yZWFkKG5ldyBVaW50OEFycmF5KGxlbmd0aCkpO1xuICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZW9mU3RyZWFtID0gcmVzdWx0LmRvbmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgYnVmZmVyLnNldChyZXN1bHQudmFsdWUsIG9mZnNldCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnZhbHVlLmJ5dGVMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/peek-readable/lib/WebStreamReader.js\n");

/***/ }),

/***/ "(action-browser)/../../node_modules/peek-readable/lib/index.js":
/*!*****************************************************!*\
  !*** ../../node_modules/peek-readable/lib/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndOfStreamError: () => (/* reexport safe */ _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__.EndOfStreamError),\n/* harmony export */   StreamReader: () => (/* reexport safe */ _StreamReader_js__WEBPACK_IMPORTED_MODULE_1__.StreamReader),\n/* harmony export */   WebStreamReader: () => (/* reexport safe */ _WebStreamReader_js__WEBPACK_IMPORTED_MODULE_2__.WebStreamReader)\n/* harmony export */ });\n/* harmony import */ var _EndOfFileStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndOfFileStream.js */ \"(action-browser)/../../node_modules/peek-readable/lib/EndOfFileStream.js\");\n/* harmony import */ var _StreamReader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StreamReader.js */ \"(action-browser)/../../node_modules/peek-readable/lib/StreamReader.js\");\n/* harmony import */ var _WebStreamReader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WebStreamReader.js */ \"(action-browser)/../../node_modules/peek-readable/lib/WebStreamReader.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdEO0FBQ1A7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uLi8uLi9ub2RlX21vZHVsZXMvcGVlay1yZWFkYWJsZS9saWIvaW5kZXguanM/NjkwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBFbmRPZlN0cmVhbUVycm9yIH0gZnJvbSAnLi9FbmRPZkZpbGVTdHJlYW0uanMnO1xuZXhwb3J0IHsgU3RyZWFtUmVhZGVyIH0gZnJvbSAnLi9TdHJlYW1SZWFkZXIuanMnO1xuZXhwb3J0IHsgV2ViU3RyZWFtUmVhZGVyIH0gZnJvbSAnLi9XZWJTdHJlYW1SZWFkZXIuanMnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/peek-readable/lib/index.js\n");

/***/ })

};
;