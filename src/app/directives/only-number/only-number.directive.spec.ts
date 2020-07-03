import { OnlyNumberDirective } from './only-number.directive';
import { MockElementRef } from './../element-ref.mock';

describe('OnlyNumberDirective', () => {
  it('should create an instance', () => {
    const directive = new OnlyNumberDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
