"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/token-types";
exports.ids = ["vendor-chunks/token-types"];
exports.modules = {

/***/ "(action-browser)/../../node_modules/token-types/lib/index.js":
/*!***************************************************!*\
  !*** ../../node_modules/token-types/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnsiStringType: () => (/* binding */ AnsiStringType),\n/* harmony export */   BufferType: () => (/* binding */ BufferType),\n/* harmony export */   Float16_BE: () => (/* binding */ Float16_BE),\n/* harmony export */   Float16_LE: () => (/* binding */ Float16_LE),\n/* harmony export */   Float32_BE: () => (/* binding */ Float32_BE),\n/* harmony export */   Float32_LE: () => (/* binding */ Float32_LE),\n/* harmony export */   Float64_BE: () => (/* binding */ Float64_BE),\n/* harmony export */   Float64_LE: () => (/* binding */ Float64_LE),\n/* harmony export */   Float80_BE: () => (/* binding */ Float80_BE),\n/* harmony export */   Float80_LE: () => (/* binding */ Float80_LE),\n/* harmony export */   INT16_BE: () => (/* binding */ INT16_BE),\n/* harmony export */   INT16_LE: () => (/* binding */ INT16_LE),\n/* harmony export */   INT24_BE: () => (/* binding */ INT24_BE),\n/* harmony export */   INT24_LE: () => (/* binding */ INT24_LE),\n/* harmony export */   INT32_BE: () => (/* binding */ INT32_BE),\n/* harmony export */   INT32_LE: () => (/* binding */ INT32_LE),\n/* harmony export */   INT64_BE: () => (/* binding */ INT64_BE),\n/* harmony export */   INT64_LE: () => (/* binding */ INT64_LE),\n/* harmony export */   INT8: () => (/* binding */ INT8),\n/* harmony export */   IgnoreType: () => (/* binding */ IgnoreType),\n/* harmony export */   StringType: () => (/* binding */ StringType),\n/* harmony export */   UINT16_BE: () => (/* binding */ UINT16_BE),\n/* harmony export */   UINT16_LE: () => (/* binding */ UINT16_LE),\n/* harmony export */   UINT24_BE: () => (/* binding */ UINT24_BE),\n/* harmony export */   UINT24_LE: () => (/* binding */ UINT24_LE),\n/* harmony export */   UINT32_BE: () => (/* binding */ UINT32_BE),\n/* harmony export */   UINT32_LE: () => (/* binding */ UINT32_LE),\n/* harmony export */   UINT64_BE: () => (/* binding */ UINT64_BE),\n/* harmony export */   UINT64_LE: () => (/* binding */ UINT64_LE),\n/* harmony export */   UINT8: () => (/* binding */ UINT8),\n/* harmony export */   Uint8ArrayType: () => (/* binding */ Uint8ArrayType)\n/* harmony export */ });\n/* harmony import */ var ieee754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ieee754 */ \"(action-browser)/../../node_modules/ieee754/index.js\");\n/* harmony import */ var node_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node:buffer */ \"node:buffer\");\n\n\n// Primitive types\nfunction dv(array) {\n    return new DataView(array.buffer, array.byteOffset);\n}\n/**\n * 8-bit unsigned integer\n */\nconst UINT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getUint8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit unsigned integer, Little Endian byte order\n */\nconst UINT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit unsigned integer, Big Endian byte order\n */\nconst UINT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit unsigned integer, Little Endian byte order\n */\nconst UINT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit unsigned integer, Big Endian byte order\n */\nconst UINT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit unsigned integer, Little Endian byte order\n */\nconst UINT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit unsigned integer, Big Endian byte order\n */\nconst UINT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 8-bit signed integer\n */\nconst INT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getInt8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit signed integer, Big Endian byte order\n */\nconst INT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit signed integer, Little Endian byte order\n */\nconst INT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit signed integer, Little Endian byte order\n */\nconst INT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_LE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit signed integer, Big Endian byte order\n */\nconst INT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_BE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 64-bit unsigned integer, Little Endian byte order\n */\nconst UINT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Little Endian byte order\n */\nconst INT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit unsigned integer, Big Endian byte order\n */\nconst UINT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Big Endian byte order\n */\nconst INT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, big endian\n */\nconst Float16_BE = {\n    len: 2,\n    get(dataView, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(dataView, offset, false, 10, this.len);\n    },\n    put(dataView, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(dataView, value, offset, false, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, little endian\n */\nconst Float16_LE = {\n    len: 2,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 10, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, big endian\n */\nconst Float32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, little endian\n */\nconst Float32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, big endian\n */\nconst Float64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, little endian\n */\nconst Float64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, big endian\n */\nconst Float80_BE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, false, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, false, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, little endian\n */\nconst Float80_LE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * Ignore a given number of bytes\n */\nclass IgnoreType {\n    /**\n     * @param len number of bytes to ignore\n     */\n    constructor(len) {\n        this.len = len;\n    }\n    // ToDo: don't read, but skip data\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    get(array, off) {\n    }\n}\nclass Uint8ArrayType {\n    constructor(len) {\n        this.len = len;\n    }\n    get(array, offset) {\n        return array.subarray(offset, offset + this.len);\n    }\n}\nclass BufferType {\n    constructor(len) {\n        this.len = len;\n    }\n    get(uint8Array, off) {\n        return node_buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(uint8Array.subarray(off, off + this.len));\n    }\n}\n/**\n * Consume a fixed number of bytes from the stream and return a string with a specified encoding.\n */\nclass StringType {\n    constructor(len, encoding) {\n        this.len = len;\n        this.encoding = encoding;\n    }\n    get(uint8Array, offset) {\n        return node_buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(uint8Array).toString(this.encoding, offset, offset + this.len);\n    }\n}\n/**\n * ANSI Latin 1 String\n * Using windows-1252 / ISO 8859-1 decoding\n */\nclass AnsiStringType {\n    constructor(len) {\n        this.len = len;\n    }\n    static decode(buffer, offset, until) {\n        let str = '';\n        for (let i = offset; i < until; ++i) {\n            str += AnsiStringType.codePointToString(AnsiStringType.singleByteDecoder(buffer[i]));\n        }\n        return str;\n    }\n    static inRange(a, min, max) {\n        return min <= a && a <= max;\n    }\n    static codePointToString(cp) {\n        if (cp <= 0xFFFF) {\n            return String.fromCharCode(cp);\n        }\n        else {\n            cp -= 0x10000;\n            return String.fromCharCode((cp >> 10) + 0xD800, (cp & 0x3FF) + 0xDC00);\n        }\n    }\n    static singleByteDecoder(bite) {\n        if (AnsiStringType.inRange(bite, 0x00, 0x7F)) {\n            return bite;\n        }\n        const codePoint = AnsiStringType.windows1252[bite - 0x80];\n        if (codePoint === null) {\n            throw Error('invaliding encoding');\n        }\n        return codePoint;\n    }\n    get(buffer, offset = 0) {\n        return AnsiStringType.decode(buffer, offset, offset + this.len);\n    }\n}\nAnsiStringType.windows1252 = [8364, 129, 8218, 402, 8222, 8230, 8224, 8225, 710, 8240, 352,\n    8249, 338, 141, 381, 143, 144, 8216, 8217, 8220, 8221, 8226, 8211, 8212, 732,\n    8482, 353, 8250, 339, 157, 382, 376, 160, 161, 162, 163, 164, 165, 166, 167, 168,\n    169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,\n    185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,\n    201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216,\n    217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232,\n    233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247,\n    248, 249, 250, 251, 252, 253, 254, 255];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uLi8uLi9ub2RlX21vZHVsZXMvdG9rZW4tdHlwZXMvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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aWIvaW5kZXguanM/OWM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpZWVlNzU0IGZyb20gJ2llZWU3NTQnO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnbm9kZTpidWZmZXInO1xuLy8gUHJpbWl0aXZlIHR5cGVzXG5mdW5jdGlvbiBkdihhcnJheSkge1xuICAgIHJldHVybiBuZXcgRGF0YVZpZXcoYXJyYXkuYnVmZmVyLCBhcnJheS5ieXRlT2Zmc2V0KTtcbn1cbi8qKlxuICogOC1iaXQgdW5zaWduZWQgaW50ZWdlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDggPSB7XG4gICAgbGVuOiAxLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0VWludDgob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0VWludDgob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAxO1xuICAgIH1cbn07XG4vKipcbiAqIDE2LWJpdCB1bnNpZ25lZCBpbnRlZ2VyLCBMaXR0bGUgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFVJTlQxNl9MRSA9IHtcbiAgICBsZW46IDIsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRVaW50MTYob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0VWludDE2KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMjtcbiAgICB9XG59O1xuLyoqXG4gKiAxNi1iaXQgdW5zaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UMTZfQkUgPSB7XG4gICAgbGVuOiAyLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0VWludDE2KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldFVpbnQxNihvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDI7XG4gICAgfVxufTtcbi8qKlxuICogMjQtYml0IHVuc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDI0X0xFID0ge1xuICAgIGxlbjogMyxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IGR2KGFycmF5KTtcbiAgICAgICAgcmV0dXJuIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgKyAoZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCArIDEsIHRydWUpIDw8IDgpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50OChvZmZzZXQsIHZhbHVlICYgMHhmZik7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihvZmZzZXQgKyAxLCB2YWx1ZSA+PiA4LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDM7XG4gICAgfVxufTtcbi8qKlxuICogMjQtYml0IHVuc2lnbmVkIGludGVnZXIsIEJpZyBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDI0X0JFID0ge1xuICAgIGxlbjogMyxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IGR2KGFycmF5KTtcbiAgICAgICAgcmV0dXJuIChkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0KSA8PCA4KSArIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDIpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50MTYob2Zmc2V0LCB2YWx1ZSA+PiA4KTtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDgob2Zmc2V0ICsgMiwgdmFsdWUgJiAweGZmKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDM7XG4gICAgfVxufTtcbi8qKlxuICogMzItYml0IHVuc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDMyX0xFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldFVpbnQzMihvZmZzZXQsIHRydWUpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRVaW50MzIob2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA0O1xuICAgIH1cbn07XG4vKipcbiAqIDMyLWJpdCB1bnNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFVJTlQzMl9CRSA9IHtcbiAgICBsZW46IDQsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRVaW50MzIob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0VWludDMyKG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiA4LWJpdCBzaWduZWQgaW50ZWdlclxuICovXG5leHBvcnQgY29uc3QgSU5UOCA9IHtcbiAgICBsZW46IDEsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRJbnQ4KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDgob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAxO1xuICAgIH1cbn07XG4vKipcbiAqIDE2LWJpdCBzaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBJTlQxNl9CRSA9IHtcbiAgICBsZW46IDIsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRJbnQxNihvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRJbnQxNihvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDI7XG4gICAgfVxufTtcbi8qKlxuICogMTYtYml0IHNpZ25lZCBpbnRlZ2VyLCBMaXR0bGUgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDE2X0xFID0ge1xuICAgIGxlbjogMixcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEludDE2KG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDE2KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMjtcbiAgICB9XG59O1xuLyoqXG4gKiAyNC1iaXQgc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgSU5UMjRfTEUgPSB7XG4gICAgbGVuOiAzLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHVuc2lnbmVkID0gVUlOVDI0X0xFLmdldChhcnJheSwgb2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHVuc2lnbmVkID4gMHg3ZmZmZmYgPyB1bnNpZ25lZCAtIDB4MTAwMDAwMCA6IHVuc2lnbmVkO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50OChvZmZzZXQsIHZhbHVlICYgMHhmZik7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihvZmZzZXQgKyAxLCB2YWx1ZSA+PiA4LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDM7XG4gICAgfVxufTtcbi8qKlxuICogMjQtYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDI0X0JFID0ge1xuICAgIGxlbjogMyxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICBjb25zdCB1bnNpZ25lZCA9IFVJTlQyNF9CRS5nZXQoYXJyYXksIG9mZnNldCk7XG4gICAgICAgIHJldHVybiB1bnNpZ25lZCA+IDB4N2ZmZmZmID8gdW5zaWduZWQgLSAweDEwMDAwMDAgOiB1bnNpZ25lZDtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IGR2KGFycmF5KTtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KG9mZnNldCwgdmFsdWUgPj4gOCk7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQ4KG9mZnNldCArIDIsIHZhbHVlICYgMHhmZik7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAzO1xuICAgIH1cbn07XG4vKipcbiAqIDMyLWJpdCBzaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBJTlQzMl9CRSA9IHtcbiAgICBsZW46IDQsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRJbnQzMihvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRJbnQzMihvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XG4gICAgfVxufTtcbi8qKlxuICogMzItYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDMyX0xFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEludDMyKG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDMyKG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiA2NC1iaXQgdW5zaWduZWQgaW50ZWdlciwgTGl0dGxlIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UNjRfTEUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0QmlnVWludDY0KG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ1VpbnQ2NChvZmZzZXQsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDg7XG4gICAgfVxufTtcbi8qKlxuICogNjQtYml0IHNpZ25lZCBpbnRlZ2VyLCBMaXR0bGUgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDY0X0xFID0ge1xuICAgIGxlbjogOCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEJpZ0ludDY0KG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ0ludDY0KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiA2NC1iaXQgdW5zaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UNjRfQkUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0QmlnVWludDY0KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ1VpbnQ2NChvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDg7XG4gICAgfVxufTtcbi8qKlxuICogNjQtYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDY0X0JFID0ge1xuICAgIGxlbjogOCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEJpZ0ludDY0KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ0ludDY0KG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCAxNi1iaXQgKGhhbGYgcHJlY2lzaW9uKSBmbG9hdCwgYmlnIGVuZGlhblxuICovXG5leHBvcnQgY29uc3QgRmxvYXQxNl9CRSA9IHtcbiAgICBsZW46IDIsXG4gICAgZ2V0KGRhdGFWaWV3LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGllZWU3NTQucmVhZChkYXRhVmlldywgb2Zmc2V0LCBmYWxzZSwgMTAsIHRoaXMubGVuKTtcbiAgICB9LFxuICAgIHB1dChkYXRhVmlldywgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBpZWVlNzU0LndyaXRlKGRhdGFWaWV3LCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgMTAsIHRoaXMubGVuKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIHRoaXMubGVuO1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDE2LWJpdCAoaGFsZiBwcmVjaXNpb24pIGZsb2F0LCBsaXR0bGUgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDE2X0xFID0ge1xuICAgIGxlbjogMixcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaWVlZTc1NC5yZWFkKGFycmF5LCBvZmZzZXQsIHRydWUsIDEwLCB0aGlzLmxlbik7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgaWVlZTc1NC53cml0ZShhcnJheSwgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgMTAsIHRoaXMubGVuKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIHRoaXMubGVuO1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDMyLWJpdCAoc2luZ2xlIHByZWNpc2lvbikgZmxvYXQsIGJpZyBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0MzJfQkUgPSB7XG4gICAgbGVuOiA0LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0RmxvYXQzMihvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRGbG9hdDMyKG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCAzMi1iaXQgKHNpbmdsZSBwcmVjaXNpb24pIGZsb2F0LCBsaXR0bGUgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDMyX0xFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEZsb2F0MzIob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0RmxvYXQzMihvZmZzZXQsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XG4gICAgfVxufTtcbi8qKlxuICogSUVFRSA3NTQgNjQtYml0IChkb3VibGUgcHJlY2lzaW9uKSBmbG9hdCwgYmlnIGVuZGlhblxuICovXG5leHBvcnQgY29uc3QgRmxvYXQ2NF9CRSA9IHtcbiAgICBsZW46IDgsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRGbG9hdDY0KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEZsb2F0NjQob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA4O1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDY0LWJpdCAoZG91YmxlIHByZWNpc2lvbikgZmxvYXQsIGxpdHRsZSBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0NjRfTEUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0RmxvYXQ2NChvZmZzZXQsIHRydWUpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRGbG9hdDY0KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCA4MC1iaXQgKGV4dGVuZGVkIHByZWNpc2lvbikgZmxvYXQsIGJpZyBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0ODBfQkUgPSB7XG4gICAgbGVuOiAxMCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaWVlZTc1NC5yZWFkKGFycmF5LCBvZmZzZXQsIGZhbHNlLCA2MywgdGhpcy5sZW4pO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGllZWU3NTQud3JpdGUoYXJyYXksIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCA2MywgdGhpcy5sZW4pO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgdGhpcy5sZW47XG4gICAgfVxufTtcbi8qKlxuICogSUVFRSA3NTQgODAtYml0IChleHRlbmRlZCBwcmVjaXNpb24pIGZsb2F0LCBsaXR0bGUgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDgwX0xFID0ge1xuICAgIGxlbjogMTAsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGllZWU3NTQucmVhZChhcnJheSwgb2Zmc2V0LCB0cnVlLCA2MywgdGhpcy5sZW4pO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGllZWU3NTQud3JpdGUoYXJyYXksIHZhbHVlLCBvZmZzZXQsIHRydWUsIDYzLCB0aGlzLmxlbik7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyB0aGlzLmxlbjtcbiAgICB9XG59O1xuLyoqXG4gKiBJZ25vcmUgYSBnaXZlbiBudW1iZXIgb2YgYnl0ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIElnbm9yZVR5cGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsZW4gbnVtYmVyIG9mIGJ5dGVzIHRvIGlnbm9yZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxlbikge1xuICAgICAgICB0aGlzLmxlbiA9IGxlbjtcbiAgICB9XG4gICAgLy8gVG9EbzogZG9uJ3QgcmVhZCwgYnV0IHNraXAgZGF0YVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICBnZXQoYXJyYXksIG9mZikge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBVaW50OEFycmF5VHlwZSB7XG4gICAgY29uc3RydWN0b3IobGVuKSB7XG4gICAgICAgIHRoaXMubGVuID0gbGVuO1xuICAgIH1cbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gYXJyYXkuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyB0aGlzLmxlbik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJ1ZmZlclR5cGUge1xuICAgIGNvbnN0cnVjdG9yKGxlbikge1xuICAgICAgICB0aGlzLmxlbiA9IGxlbjtcbiAgICB9XG4gICAgZ2V0KHVpbnQ4QXJyYXksIG9mZikge1xuICAgICAgICByZXR1cm4gQnVmZmVyLmZyb20odWludDhBcnJheS5zdWJhcnJheShvZmYsIG9mZiArIHRoaXMubGVuKSk7XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lIGEgZml4ZWQgbnVtYmVyIG9mIGJ5dGVzIGZyb20gdGhlIHN0cmVhbSBhbmQgcmV0dXJuIGEgc3RyaW5nIHdpdGggYSBzcGVjaWZpZWQgZW5jb2RpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcihsZW4sIGVuY29kaW5nKSB7XG4gICAgICAgIHRoaXMubGVuID0gbGVuO1xuICAgICAgICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgfVxuICAgIGdldCh1aW50OEFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHVpbnQ4QXJyYXkpLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIG9mZnNldCwgb2Zmc2V0ICsgdGhpcy5sZW4pO1xuICAgIH1cbn1cbi8qKlxuICogQU5TSSBMYXRpbiAxIFN0cmluZ1xuICogVXNpbmcgd2luZG93cy0xMjUyIC8gSVNPIDg4NTktMSBkZWNvZGluZ1xuICovXG5leHBvcnQgY2xhc3MgQW5zaVN0cmluZ1R5cGUge1xuICAgIGNvbnN0cnVjdG9yKGxlbikge1xuICAgICAgICB0aGlzLmxlbiA9IGxlbjtcbiAgICB9XG4gICAgc3RhdGljIGRlY29kZShidWZmZXIsIG9mZnNldCwgdW50aWwpIHtcbiAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDwgdW50aWw7ICsraSkge1xuICAgICAgICAgICAgc3RyICs9IEFuc2lTdHJpbmdUeXBlLmNvZGVQb2ludFRvU3RyaW5nKEFuc2lTdHJpbmdUeXBlLnNpbmdsZUJ5dGVEZWNvZGVyKGJ1ZmZlcltpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHN0YXRpYyBpblJhbmdlKGEsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW4gPD0gYSAmJiBhIDw9IG1heDtcbiAgICB9XG4gICAgc3RhdGljIGNvZGVQb2ludFRvU3RyaW5nKGNwKSB7XG4gICAgICAgIGlmIChjcCA8PSAweEZGRkYpIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNwIC09IDB4MTAwMDA7XG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgoY3AgPj4gMTApICsgMHhEODAwLCAoY3AgJiAweDNGRikgKyAweERDMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBzaW5nbGVCeXRlRGVjb2RlcihiaXRlKSB7XG4gICAgICAgIGlmIChBbnNpU3RyaW5nVHlwZS5pblJhbmdlKGJpdGUsIDB4MDAsIDB4N0YpKSB7XG4gICAgICAgICAgICByZXR1cm4gYml0ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2RlUG9pbnQgPSBBbnNpU3RyaW5nVHlwZS53aW5kb3dzMTI1MltiaXRlIC0gMHg4MF07XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdpbnZhbGlkaW5nIGVuY29kaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvZGVQb2ludDtcbiAgICB9XG4gICAgZ2V0KGJ1ZmZlciwgb2Zmc2V0ID0gMCkge1xuICAgICAgICByZXR1cm4gQW5zaVN0cmluZ1R5cGUuZGVjb2RlKGJ1ZmZlciwgb2Zmc2V0LCBvZmZzZXQgKyB0aGlzLmxlbik7XG4gICAgfVxufVxuQW5zaVN0cmluZ1R5cGUud2luZG93czEyNTIgPSBbODM2NCwgMTI5LCA4MjE4LCA0MDIsIDgyMjIsIDgyMzAsIDgyMjQsIDgyMjUsIDcxMCwgODI0MCwgMzUyLFxuICAgIDgyNDksIDMzOCwgMTQxLCAzODEsIDE0MywgMTQ0LCA4MjE2LCA4MjE3LCA4MjIwLCA4MjIxLCA4MjI2LCA4MjExLCA4MjEyLCA3MzIsXG4gICAgODQ4MiwgMzUzLCA4MjUwLCAzMzksIDE1NywgMzgyLCAzNzYsIDE2MCwgMTYxLCAxNjIsIDE2MywgMTY0LCAxNjUsIDE2NiwgMTY3LCAxNjgsXG4gICAgMTY5LCAxNzAsIDE3MSwgMTcyLCAxNzMsIDE3NCwgMTc1LCAxNzYsIDE3NywgMTc4LCAxNzksIDE4MCwgMTgxLCAxODIsIDE4MywgMTg0LFxuICAgIDE4NSwgMTg2LCAxODcsIDE4OCwgMTg5LCAxOTAsIDE5MSwgMTkyLCAxOTMsIDE5NCwgMTk1LCAxOTYsIDE5NywgMTk4LCAxOTksIDIwMCxcbiAgICAyMDEsIDIwMiwgMjAzLCAyMDQsIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTAsIDIxMSwgMjEyLCAyMTMsIDIxNCwgMjE1LCAyMTYsXG4gICAgMjE3LCAyMTgsIDIxOSwgMjIwLCAyMjEsIDIyMiwgMjIzLCAyMjQsIDIyNSwgMjI2LCAyMjcsIDIyOCwgMjI5LCAyMzAsIDIzMSwgMjMyLFxuICAgIDIzMywgMjM0LCAyMzUsIDIzNiwgMjM3LCAyMzgsIDIzOSwgMjQwLCAyNDEsIDI0MiwgMjQzLCAyNDQsIDI0NSwgMjQ2LCAyNDcsXG4gICAgMjQ4LCAyNDksIDI1MCwgMjUxLCAyNTIsIDI1MywgMjU0LCAyNTVdO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/../../node_modules/token-types/lib/index.js\n");

/***/ })

};
;