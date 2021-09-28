import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-other-component',
  styleUrl: 'my-other-component.css',
  scoped: true,
})
export class MyOtherComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div class="some:escapedClassName">Hello, World! I'm {this.getText()}</div>;
  }
}
