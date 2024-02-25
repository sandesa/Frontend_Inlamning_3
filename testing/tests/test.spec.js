const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://127.0.0.1:5500/");
});

test("Add a task, confirm it is displayed on the page", async ({ page }) => {
  await page.fill("#input-text", "Test task");
  await page.press("#input-text", "Enter");

  const addedTask = page.locator(".task");
  await expect(addedTask).toContainText("Test task");
});

test('Add a task, confirm "1 item left" is shown, then check it and confirm "0 items left"', async ({
  page,
}) => {
  await page.fill("#input-text", "Test task");
  await page.press("#input-text", "Enter");

  const itemsLeftText = page.locator("#items-left");
  await expect(itemsLeftText).toContainText("1 item left");

  await page.click(".box");

  const itemsLeftTextAfterCheck = page.locator("#items-left");
  await expect(itemsLeftTextAfterCheck).toContainText("0 items left");
});

test('Add 3 tasks, check one of them and confirm "2 items left"', async ({
  page,
}) => {
  await page.fill("#input-text", "Task 1");
  await page.press("#input-text", "Enter");
  await page.fill("#input-text", "Task 2");
  await page.press("#input-text", "Enter");
  await page.fill("#input-text", "Task 3");
  await page.press("#input-text", "Enter");

  await page.click(":nth-match(.box, 3)");

  const itemsLeftText = page.locator("#items-left");
  await expect(itemsLeftText).toContainText("2 items left");
});
