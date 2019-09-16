namespace medicina
{

    export abstract class Pessoa
    {

        private _nome:string;
        private _cpf:string;

        public setNome(nome:string)
        {
            this._nome = nome;
        }

        public getNome()
        {
            return this._nome;
        }

        public setCpf(cpf:string)
        {
            this._cpf = cpf;
        }

        public getCpf()
        {
            return this._cpf;
        }

    }

}