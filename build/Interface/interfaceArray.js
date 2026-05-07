"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let cadastroTecnologias = {
    id: "1",
    nome: ["TypeScript and PHP"],
    ondeAprendeu: ["Etec Uirapuru", "Guanabara", "Udemy"]
};
function cadastrarTecnologias(cursoAssistido) {
    console.log(`O id da tecnologia aprendida é ${cursoAssistido.id} , o nome da tecnologia aprendida é ${cursoAssistido.nome} e foi aprendida na ${cursoAssistido.ondeAprendeu}`);
}
cadastrarTecnologias({ id: "1", nome: ["MYSQL", "PostgreeSQL", "SQLSERVER"], ondeAprendeu: ["Udemy", "Etec Uirapuru", "Faculdade Impacta de Tecnologia"] });
