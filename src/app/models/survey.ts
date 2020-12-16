import { FormGroup } from '@angular/forms';

export class CovidSurvey {
    filledOut: string;
    symptom: any;
    contact: any;
    workSector: any;
    diagnosticTests: any;

    constructor(form: FormGroup) {
        this.filledOut = this.buildDate();
        this.symptom = {
            cough: form.get('tos').value,
            soreThroat: form.get('garganta').value,
            fever: form.get('fiebre').value,
            runnyNose: form.get('secrecion').value,
            generalDiscomfort: form.get('malestar').value,
            smellPerception: form.get('olores').value,
            respiratoryDistress: form.get('dificultadRespiratoria').value,
            diarrhea: form.get('diarrea').value
        };
        this.contact = {
            contactPeopleCovid: form.get('contactoPositivo').value,
            contactPeopleSymptoms: form.get('contactoSintomas').value
        };
        this.workSector = {
            workSector: form.get('sector').value,
            workedArea: form.get('trabajo').value,
            otherAreas: form.get('trabajoEspecifico').value
        };
        this.diagnosticTests = {
            noseTest: form.get('pruebaNariz').value,
            bloodTest: form.get('pruebaSangre').value,
            preventiveIsolation: form.get('aislamiento').value,
            temporaryDisability: form.get('incapacidad').value
        };
    }

    private buildDate(): string {
        const now = new Date();
        return `${now.getFullYear()}-${now.getMonth}-${now.getDay}`;
    }
}
