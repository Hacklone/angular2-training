import { RobotsService } from './robots.service';
import { Subject } from 'rxjs/Subject';

describe('RobotsService', () => {
  let httpClientStubGetSubject;
  let httpClientStub;
  let robotsService: RobotsService;

  beforeEach(() => {
    httpClientStubGetSubject = new Subject<Object>();

    httpClientStub = {
      get: jasmine.createSpy('HttpClient.get').and.returnValue(httpClientStubGetSubject.asObservable())
    };

    robotsService = new RobotsService(httpClientStub);
  });

  describe('getNiceRobotsFromHttpAsync(id)', () => {
    it('should return the value from the Http call', async () => {
      const id: string = '20';
      const expectedResponse = 'apple';

      const response = await robotsService.getNiceRobotsFromHttpAsync(id);

      httpClientStubGetSubject.next(expectedResponse);

      expect(response).toEqual(expectedResponse);
    });
  });
});
