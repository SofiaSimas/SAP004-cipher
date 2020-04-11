const cipher = {
    decode: function(offset, text) {
        if (typeof offset !== "number") {
            throw new Error("Offset deve ser número");
        }
        if (typeof text !== "string") {
            throw new Error("Teste deve ser string");
        }

        let result = "";
        const alphabetSize = 26;
        //for (inicio; teste; incremento)//
        for (let i = 0; i < text.length; i++) {
            let current = text.charCodeAt(i);
            let code = 0;

            if (current >= 65 && current <= 90) {
                const codeFirstLetter = 65;
                code = (current - codeFirstLetter - (offset % alphabetSize) + alphabetSize) % alphabetSize + codeFirstLetter;
            } else if (current >= 97 && current <= 122) {
                const codeFirstLetter = 97;
                code = (current - codeFirstLetter - (offset % alphabetSize) + alphabetSize) % alphabetSize + codeFirstLetter;
            } else {
                code = current;
            }
            result += String.fromCharCode(code);
        }
        return result;
    },
    encode: function(offset, text) {
        if (typeof offset !== "number") {
            throw new Error("Offset deve ser número");
        }
        if (typeof text !== "string") {
            throw new Error("Teste deve ser string");
        }

        let result = "";
        const alphabetSize = 26;
        for (let i = 0; i < text.length; i++) {
            let current = text.charCodeAt(i);
            let code = 0;

            if (current >= 65 && current <= 90) {
                const codeFirstLetter = 65;
                code = (current - codeFirstLetter + offset) % alphabetSize + codeFirstLetter;

            } else if (current >= 97 && current <= 122) {
                const codeFirstLetter = 97;
                code = (current - codeFirstLetter + offset) % alphabetSize + codeFirstLetter;
            } else {
                code = current;
            }
            result += String.fromCharCode(code);
        }
        return result;
    }
};

export default cipher;