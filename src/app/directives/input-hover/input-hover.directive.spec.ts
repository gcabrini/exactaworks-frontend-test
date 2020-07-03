import { InputHoverDirective } from './input-hover.directive';
import { MockElementRef } from './../element-ref.mock';

describe('InputHoverDirective', () => {

  it('should create an instance', () => {
    const directive = new InputHoverDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
