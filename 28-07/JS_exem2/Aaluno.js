class Aluno {
    constructor(nome,curso,nota1,nota2,nota3)
    {
        this.nome = nome;
        this.curso = curso;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
     exibir() {
        return `Nome:${this.nome}<br>
        Curso:${this.curso}<br>
        Nota1:${this.nota1}
        Nota2:${this.nota2}
        Nota3:${this.nota3}
        `;
    }
    calcularMedia(){
        return (this.nota1+this.nota2+this.nota3)/3
    }
}