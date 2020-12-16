import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostgresService } from '../../services/postgres.service';
import { sectores, areas, otrasAreas } from '../../../assets/constants';
import { Background } from '../../models/bakcground';
import { CovidSurvey } from '../../models/survey';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  surveyForm: FormGroup;
  sectors = sectores;
  areas = areas;
  otrasAreas = otrasAreas;

  constructor(
    private fb: FormBuilder,
    private postgresSvc: PostgresService
  ) { }

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      cardiovascular: [null, [Validators.required]],
      diabetes: [null, [Validators.required]],
      enfermedadesPulmoraner: [null, [Validators.required]],
      enfermedadesRenales: [null, [Validators.required]],
      enfermedadesAutoinmunes: [null, [Validators.required]],
      malnutricion: [null, [Validators.required]],
      tabaquismo: [null, [Validators.required]],
      embarazo: [null, [Validators.required]],
      mayoresEnCasa: [null, [Validators.required]],
      tratamientos: [null, [Validators.required]],
      tos: [null, [Validators.required]],
      garganta: [null, [Validators.required]],
      fiebre: [null, [Validators.required]],
      secrecion: [null, [Validators.required]],
      malestar: [null, [Validators.required]],
      olores: [null, [Validators.required]],
      dificultadRespiratoria: [null, [Validators.required]],
      diarrea: [null, [Validators.required]],
      contactoPositivo: [null, [Validators.required]],
      contactoSintomas: [null, [Validators.required]],
      sector: [null, [Validators.required]],
      trabajo: [null, [Validators.required]],
      trabajoEspecifico: [null, [Validators.required]],
      pruebaNariz: [null, [Validators.required]],
      pruebaSangre: [null, [Validators.required]],
      aislamiento: [null, [Validators.required]],
      incapacidad: [null, [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log('validations');
    const covidSurvey = new CovidSurvey(this.surveyForm);
    const background = new Background(this.surveyForm);

    const finalObj = {
      covidSurvey,
      background
    };

    this.postgresSvc.submit(finalObj).subscribe(() => {

    });
  }

  show() {
    console.log(this.surveyForm);
  }

  get cardiovascular(): AbstractControl { return this.surveyForm.get('cardiovascular'); }
  get diabetes(): AbstractControl { return this.surveyForm.get('diabetes'); }
  get enfermedadesPulmoraner(): AbstractControl { return this.surveyForm.get('enfermedadesPulmoraner'); }
  get enfermedadesRenales(): AbstractControl { return this.surveyForm.get('enfermedadesRenales'); }
  get enfermedadesAutoinmunes(): AbstractControl { return this.surveyForm.get('enfermedadesAutoinmunes'); }
  get malnutricion(): AbstractControl { return this.surveyForm.get('malnutricion'); }
  get tabaquismo(): AbstractControl { return this.surveyForm.get('tabaquismo'); }
  get embarazo(): AbstractControl { return this.surveyForm.get('embarazo'); }
  get mayoresEnCasa(): AbstractControl { return this.surveyForm.get('mayoresEnCasa'); }
  get tratamientos(): AbstractControl { return this.surveyForm.get('tratamientos'); }
  get tos(): AbstractControl { return this.surveyForm.get('tos'); }
  get garganta(): AbstractControl { return this.surveyForm.get('garganta'); }
  get fiebre(): AbstractControl { return this.surveyForm.get('fiebre'); }
  get secrecion(): AbstractControl { return this.surveyForm.get('secrecion'); }
  get malestar(): AbstractControl { return this.surveyForm.get('malestar'); }
  get olores(): AbstractControl { return this.surveyForm.get('olores'); }
  get dificultadRespiratoria(): AbstractControl { return this.surveyForm.get('dificultadRespiratoria'); }
  get diarrea(): AbstractControl { return this.surveyForm.get('diarrea'); }
  get contactoPositivo(): AbstractControl { return this.surveyForm.get('contactoPositivo'); }
  get contactoSintomas(): AbstractControl { return this.surveyForm.get('contactoSintomas'); }
  get sector(): AbstractControl { return this.surveyForm.get('sector'); }
  get trabajo(): AbstractControl { return this.surveyForm.get('trabajo'); }
  get trabajoEspecifico(): AbstractControl { return this.surveyForm.get('trabajoEspecifico'); }
  get pruebaNariz(): AbstractControl { return this.surveyForm.get('pruebaNariz'); }
  get pruebaSangre(): AbstractControl { return this.surveyForm.get('pruebaSangre'); }
  get aislamiento(): AbstractControl { return this.surveyForm.get('aislamiento'); }
  get incapacidad(): AbstractControl { return this.surveyForm.get('incapacidad'); }

}
