///<reference path="funcionario.ts" />
namespace medicina
{

    export class Medico extends Funcionario
    {

        private _crm:number;
        private _especialidade:number;

        public setCrm(crm:number)
        {
            this._crm = crm;
        }

        public getCrm()
        {
            return this._crm;
        }

        public setEspecialidade(especialidade:number)
        {
            this._especialidade = especialidade;
        }

        public getEspecialidade()
        {
            return this._especialidade;
        }

    }

}