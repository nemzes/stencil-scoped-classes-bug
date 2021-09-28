import { newSpecPage } from '@stencil/core/testing';
import { MyOtherComponent } from './my-other-component';

describe('my-other-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyOtherComponent],
      html: '<my-other-component></my-other-component>',
    });
    expect(root).toEqualHtml(`
      <my-other-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-other-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyOtherComponent],
      html: `<my-other-component first="Stencil" last="'Don't call me a framework' JS"></my-other-component>`,
    });
    expect(root).toEqualHtml(`
      <my-other-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-other-component>
    `);
  });
});
