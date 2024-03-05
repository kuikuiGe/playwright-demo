import { test, expect } from '@playwright/test';

test.describe('【Playwright实践系列-初识】', () => {
  // @playwright/test 中的 test 是一个函数，它是 Playwright Test 测试框架提供的用于编写测试用例的主要函数之一。它类似于其他测试框架（例如 Mocha、Jest 等）中的 test 函数，用于定义单个测试用例。在 Playwright中，可以使用 test 函数来定义一个测试用例。每个测试用例都应该包含一系列测试步骤，用于模拟用户在浏览器中的交互，并验证某些行为或期望的结果。
  // 页面标题测试用例
  test('标题内容正确', async ({ page }) => {
    //使用 goto 方法导航到个人博客主页。这里的page 是一个表示浏览器页面的对象。这个对象提供了对页面进行各种操作和查询的方法。
    await page.goto('https://kuikuige.github.io/blog/');

    // 在 @playwright/test 中，expect 是 Playwright提供的断言库之一，它提供了一组用于验证测试结果的方法。这些方法可以检查条件是否为真，如果条件不满足，则会引发测试失败。常见的断言方法包括：toBe、toEqual等等。详见：https://playwright.dev/docs/api/class-genericassertions#generic-assertions-to-be。
    // 期望标题包含字符串“我是葛葵葵”
    await expect(page.getByRole('heading', { name: /我是葛葵葵/ })).toBeVisible();
  });

  // 点击文章测试用例
  test('点击文章', async ({ page }) => {
    //使用 goto 方法导航到个人博客主页
    await page.goto('https://kuikuige.github.io/blog/');

    // 点击文章链接。这里的 getByRole 用于根据元素的 "role" 属性来选择元素。具体的role介绍见：https://www.w3.org/TR/wai-aria-1.2/#roles
    await page.getByRole('link', { name: '笔记-如何创建动态变化的图标' }).click();

    // 期望页面标题是“笔记-如何创建动态变化的图标”。
    await expect(page.getByRole('heading', { name: '笔记-如何创建动态变化的图标' }).first()).toBeVisible();

    // 期望页面标题包含“主要代码”
    await expect(page.getByRole('heading', { name: '主要代码' })).toBeAttached();
  });
});
