import Button from "@element/button";
import { shallowMount } from "@vue/test-utils";

describe("Button.vue", () => {
  it("create", () => {
    const wrapper = shallowMount(Button);
    const buttonEle = wrapper.vm.$el;

    expect(buttonEle.classList).toContain("el-button");
  });
});
