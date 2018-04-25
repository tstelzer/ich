module.exports = {
    transform: {"^.+\\.ts$": "ts-jest"},
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
    moduleFileExtensions: ["ts", "js"],
    globals: {
        "ts-jest": {
            skipBabel: true,
        }
    }
}
