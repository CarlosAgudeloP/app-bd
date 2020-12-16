import { FormGroup } from '@angular/forms';

export class Background {
    hypertension: boolean;
    diabetes: boolean;
    asthma: boolean;
    // tslint:disable-next-line: variable-name
    renal_or_liver: boolean;
    autoimmune: boolean;
    malnutrition: boolean;
    smoking: boolean;
    pregnancy: boolean;
    liveWithElders: boolean;
    medicalTreatment: boolean;

    constructor(form: FormGroup) {
        this.hypertension = form.get('cardiovascular').value;
        this.diabetes = form.get('diabetes').value;
        this.asthma = form.get('enfermedadesPulmoraner').value;
        this.renal_or_liver = form.get('enfermedadesRenales').value;
        this.autoimmune = form.get('enfermedadesAutoinmunes').value;
        this.malnutrition = form.get('malnutricion').value;
        this.smoking = form.get('tabaquismo').value;
        this.pregnancy = form.get('embarazo').value;
        this.liveWithElders = form.get('mayoresEnCasa').value;
        this.medicalTreatment = form.get('tratamientos').value;
    }
}
