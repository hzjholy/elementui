// Import JSDOM at the beginning of your test file
const { JSDOM } = require('jsdom');
const { shallowMount } = require('@vue/test-utils');
import Row from "@element/row";
 // Replace with the correct path to your Row component

// Set up JSDOM
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost' });
const { window } = jsdom;

// Make window and document available globally
global.window = window;
global.document = window.document;

// Your test
describe('Row.vue', () => {
  it('create', () => {
    const wrapper = shallowMount(Row);
    const rowEle = wrapper.vm.$el;
    expect(rowEle.classList).toContain('el-row');
  });
});
