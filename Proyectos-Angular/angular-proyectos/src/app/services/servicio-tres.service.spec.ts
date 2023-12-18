import { TestBed } from '@angular/core/testing';

import { ServicioTresService } from './servicio-tres.service';

describe('ServicioTresService', () => {
  let service: ServicioTresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
