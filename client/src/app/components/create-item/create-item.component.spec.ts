import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateItemComponent } from './create-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateItemComponent', () => {
  let component: CreateItemComponent;
  let fixture: ComponentFixture<CreateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
      declarations: [ CreateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('testing valid length of description', () => {
    const testDescription = 'ww';
    expect(component.lengthValidationError(testDescription)).toBe(true);
  });
  it('testing valid length of description', () => {
    const testDescription = 'testing valid length of description testing valid length of description testing valid length of description testing valid length of description testing valid length of description testing valid length of description';
    expect(component.lengthValidationError(testDescription)).toBe(true);
  });

  it('testing invalid length of description', () => {
    const testDescription = 'valid description length';
    expect(component.lengthValidationError(testDescription)).toBe(false);
  });

  it('testing valid description due to url injection', () => {
    const testDescription = 'valid test description';
    expect(component.urlValidationError(testDescription)).toBe(false);
  });

  it('testing invalid description due to url injection', () => {
    const testDescription = 'www.test.com';
    expect(component.urlValidationError(testDescription)).toBe(true);
  });

  it('testing valid description due to url injection', () => {
    const testDescription = 'valid test description';
    expect(component.urlValidationError(testDescription)).toBe(false);
  });

  it('testing invalid description due to XSS injection', () => {
    const testDescription = '<div';
    expect(component.codeValidationError(testDescription)).toBe(true);
  });

  it('testing valid description due to XSS injection', () => {
    const testDescription = 'valid test description';
    expect(component.codeValidationError(testDescription)).toBe(false);
  });
});
